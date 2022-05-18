import React from 'react';
import User from './user';

const Users = ({ users, onDelete, onChangeBookmark }) => {

	return (
		<div className="container">
			<table className = "w-100">
				<thead>
					<tr>
						<th scope="col">Имя</th>
						<th scope="col">Качества</th>
						<th scope="col">Профессия</th>
						<th scope="col">Встретился, раз</th>
						<th scope="col">Оценка</th>
						<th scope="col">Избранное</th>
						<th scope="col"></th>
					</tr>
				</thead>

				<tbody>
					{users.map((user) => (
						<User key={user._id} user={user} onDelete={onDelete} onChangeBookmark={onChangeBookmark}/>
					))}
				</tbody>
			</table>
		</div>
	)
};

export default Users;

