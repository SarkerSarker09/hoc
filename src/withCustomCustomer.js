import axios from 'axios'
import React,{useState, useEffect} from 'react'

const withCustomCustomer = Component => {
	const NewCustomer = props => {
		const [customer, setCustomer] = useState(null);
		
		useEffect(() => {
			const getData = async() => {
				axios.get(`https://jsonplaceholder.typicode.com/todos/${props.id}`)
				.then(res => {
					console.log(res.data)
					setCustomer(res.data);
				});
			}
			getData();
		}, []);


		if (!customer) return "Loading...";
		return (<Component {...props} customer={customer} />);
	}
	return NewCustomer;
}

export default withCustomCustomer;