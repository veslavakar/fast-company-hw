import React from "react"
import PropTypes from "prop-types"
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons"

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            })
        } else {
            onSort({ path: item, order: "asc" })
        }
    }

    const showSortIcons = (column) => {
        if (
            columns[column].path &&
            selectedSort.path === columns[column].path
        ) {
            return selectedSort.order === "asc" ? (
                <CaretUpFill />
            ) : (
                <CaretDownFill />
            )
        }
    }

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => {
                    return (
                        <th
                            key={column}
                            onClick={() =>
                                columns[column].path
                                    ? handleSort(columns[column].path)
                                    : undefined
                            }
                            {...{ role: columns[column].path && "button" }}
                            scope="col"
                        >
                            {columns[column].name}
                            {showSortIcons(column)}
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableHeader
