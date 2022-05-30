import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserItem = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });
    const handleClick = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <div>
                <h2> {user.name}</h2>
                <p>Профессия: {user.profession.name}</p>
                <QualitiesList qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <p>Rate: {user.rate}</p>
                <button className = "btn btn-secondary" onClick={handleClick}> Все Пользователи</button>
            </div>
        );
    } else {
        return <p>Loading</p>;
    }
};

UserItem.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserItem;
