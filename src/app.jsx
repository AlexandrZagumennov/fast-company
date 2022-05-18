import React, {useState} from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api';


const App = () => {
	const [users, setUsers] = useState(api.users.fetchAll());

	const handleDeleteUser = (id) => {
		setUsers((prevState) => prevState.filter((user) => user._id !== id))
	};

	const handlerToggleBookmark = (id) => {
		setUsers(
			users.map((user) => {
				if (user._id === id) {
					return { ...user, bookmark: !user.bookmark}
				}
				return user
			})
		)
	};

	return (
		<>
			<SearchStatus length={users.length}/>
			<Users users={users} onDelete={handleDeleteUser} onChangeBookmark={handlerToggleBookmark}/>
		</>
	)

};

export default App;