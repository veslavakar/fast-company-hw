import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

const GroupList = ({
    items,
    valueProp,
    contentProp,
    onItemSelect,
    selectedProf
}) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => {
                return (
                    <li
                        key={items[item][valueProp]}
                        className={
                            "list-group-item" +
                            (_.isEqual(items[item], selectedProf)
                                ? " active"
                                : "")
                        }
                        role="button"
                        onClick={() => {
                            onItemSelect(items[item])
                        }}
                    >
                        {items[item][contentProp]}
                    </li>
                )
            })}
        </ul>
    )
}

GroupList.defaultProps = {
    valueProp: "_id",
    contentProp: "name"
}

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProp: PropTypes.string.isRequired,
    contentProp: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedProf: PropTypes.object
}

export default GroupList
