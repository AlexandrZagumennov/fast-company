import React from 'react';
import BookMark from './bookmark';

const User = ({ user, onDelete, onChangeBookmark}) => {
	return (
		<tr key = {user._id}>
			<td>{user.name}</td>
			<td>
				{user.qualities.map(i => (
					<span key = {i._id} className = {`badge bg-${i.color} m-1`} >
						{i.name}
					</span>
				))}
			</td>
			<td>{user.profession.name}</td>
			<td>{user.completedMeetings}</td>
			<td>{user.rate}/5</td>
			<td> 
				<button 
					className = "btn btn-light btn-sm btn-2"
					onClick = {() => onChangeBookmark(user._id)}
				>
					<BookMark status={user.bookmark}/>
				</button>
			</td>
			<td>
				<button 
					className = "btn btn-danger btn-sm btn-2"
					onClick = {() => onDelete(user._id)}
				>
					delete
				</button>
			</td>
		</tr>
	)
};

export default User;