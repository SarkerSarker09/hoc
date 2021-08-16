import React from 'react';
import './App.css';

const  Customer = ({customer}) => {
	return (<div className="App" key={customer.id}>
		<p>{customer.id}</p>
		<p>{customer.title}</p>
	</div>);
}

export default Customer;

