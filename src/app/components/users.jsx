import React from "react";
import { useParams } from "react-router-dom";
import UserItem from "./userItem";
import UsersList from "../components/usersList";
const Users = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            {userId ? <UserItem userId={userId} /> : <UsersList />}
        </>
        );
};

export default Users;
