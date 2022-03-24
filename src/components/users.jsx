import React, {useState} from 'react';
import api from '../api';

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());

	const handleDelTr = (id) => {
		setUsers(prevState => prevState.filter(tr => tr !== id))
	};

	const getBadgeCLasses = () => {
		let classes = "badge m-2 p-2 ";

		if (users.length === 0) {
			classes = classes + "bg-danger";
		} else {
			classes = classes + "bg-primary";
		};

		return classes;
	};

	const changeTheWord = (n, text_forms) => {  
		n = Math.abs(n) % 100; 
		let n1 = n % 10;

		if (n > 10 && n < 20) {
			return text_forms[2]; 
		}
		if (n1 > 1 && n1 < 5) {
			return text_forms[1]; 
		}
		if (n1 == 1) {
			return text_forms[0]; 
		}

		return text_forms[2];
	};

	const renderPhrase = () => {
		let number = users.length;
		let phrase;

		if (number === 0) {
			phrase = "Никто с тобой не тусанёт";
		} else {
			phrase = `${number} ${changeTheWord(number, ['человек', 'человека' ,'человек'])} ${changeTheWord(number, ['тусанёт', 'тусанут' ,'тусанут'])} с тобой сегодня`;
		};

		return phrase;
	};

	const renderTableContent = () => {
		return  (
			users.map(user => (
			<tr key = {user._id}>
				<td>{user.name}</td>
				<td>{user.qualities.map(i => (
					<span key = {i._id}
						className = {`badge bg-${i.color} m-1`} 
					>
						{i.name}
					</span>
				))}</td>
				<td>{user.profession.name}</td>
				<td>{user.completedMeetings}</td>
				<td>{user.rate}/5</td>
				<td>
					<button 
						className = "btn btn-danger btn-sm btn-2"
						onClick = {() => handleDelTr(user)}
						>
						delete
					</button>
				</td>
			</tr>
		)))
	};

	const renderTable = () => {
		if (users.length > 0)
		return (
			<>
				<thead>
					<tr>
						<th scope="col">Имя</th>
						<th scope="col">Качества</th>
						<th scope="col">Профессия</th>
						<th scope="col">Встретился, раз</th>
						<th scope="col">Оценка</th>
						<th scope="col"></th>
					</tr>
				</thead>
			
				<tbody>
					{renderTableContent()}
				</tbody>
			</>
		)
	};

	return (
		<>
			<span className={getBadgeCLasses()}>{renderPhrase()}</span>
			<table className="table">
				{renderTable()}	
			</table>
		</>
	)
}

export default Users;



