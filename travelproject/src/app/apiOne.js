
const url = 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search?date_departure=2023-07-22&location_departure=MOW&location_arrival=NYC&class_type=ECO&sort_order=PRICE&itinerary_type=ONE_WAY&price_min=100&date_departure_return=2023-07-23&number_of_passengers=1&price_max=20000&duration_max=2051&number_of_stops=1';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '18bbe3800emsh8cba2f10454e21cp114355jsn8cb8a1152e58',
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
};



fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));