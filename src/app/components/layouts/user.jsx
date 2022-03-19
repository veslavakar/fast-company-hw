import React from "react"
import PropTypes from "prop-types"
import QualitiesList from "../qualitiesList"
import { Link } from "react-router-dom"

const User = ({ id, data }) => {
    const [user] = data.filter((item) => item._id === id)

    if (user) {
        return (
            <>
                <h1 className="my-3">{user.name}</h1>
                <h2>{`Профессия: ${user.profession.name}`}</h2>
                <QualitiesList qualities={user.qualities} />
                <h2>{`Количество встреч: ${user.completedMeetings}`}</h2>
                <h2>{`Рейтинг: ${user.rate}`}</h2>
                <Link to="/users">
                    <button className="btn btn-outline-primary">
                        Все пользователи
                    </button>
                </Link>
            </>
        )
    } else {
        return "loading..."
    }
}

User.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default User
