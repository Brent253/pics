import axios from 'axios';

export default axios.create({
//create instance of axios client with custom properties
	baseURL: 'https://api.unsplash.com/',
	headers: {
				Authorization: 
				'Client-ID 364ee90489b2077543758ce12bc3680bb2dee127b5659ad256b23bf5b86b6251'
			}
});