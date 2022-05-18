import React from 'react';

const BookMark = (status) => {
	let buttonStyle = 'bookmark';

	if (status.status === true) {
		buttonStyle = 'bookmark-fill'
	} 

	return (
		<i className = {`bi bi-${buttonStyle}`}></i>
	)
};

export default BookMark;