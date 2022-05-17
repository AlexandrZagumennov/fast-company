//import React from "react";
import React, {useState} from 'react';
import Users from './components/users';
import api from './api';


const App = () => {
	//const [users, setUsers] = useState(api.users.fetchAll());

	//const handleDelTr = (id) => {
	//	setUsers(prevState => prevState.filter(tr => tr !== id))
	//};

    return <Users/>;
};

export default App;