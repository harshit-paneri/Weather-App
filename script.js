const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b0f1470eemsh8c96f7b584fb98fp1a6c55jsn140d6ef5d067',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));