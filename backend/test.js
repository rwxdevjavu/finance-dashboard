const url = 'https://google-finance8.p.rapidapi.com/ticker/?t=HDFCBANK%NSE&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3ebac939c0msh1215f41d90fda79p17a1efjsnb2c58f59f2e2',
		'x-rapidapi-host': 'google-finance8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}