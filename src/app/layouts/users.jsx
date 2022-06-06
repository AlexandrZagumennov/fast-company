import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import EditUserPage from "../components/page/editUserPage/editUserPage";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;

        if (userId) {
          if (edit) {
            return <EditUserPage />;
          }
          return <UserPage userId={userId} />;
        }
        return <UsersListPage />;
};

export default Users;
