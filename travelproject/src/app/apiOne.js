
function getFlightInformation(){

    let axios = window.axios;
    let data;
    let results = [];
    let departureDate = document.getElementById("leave").value;
    let originAirportCode =  document.getElementById("origin").value;
    let destinationCode = document.getElementById("destination").value;

    const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
        params: {
            origin: originAirportCode,
            destination: destinationCode,
            date: departureDate,
            adults: '1',
            currency: 'USD',
            countryCode: 'US',
            market: 'en-US',

        },
        headers: {
            'X-RapidAPI-Key': '18bbe3800emsh8cba2f10454e21cp114355jsn8cb8a1152e58',
            'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(JSON.stringify(response.data));
        data = response.data;
        let counter = 0;
        let results = []; // Declare and initialize the results array


        Object.keys(data).forEach(key => {
            results.push(data[key]);
            counter++;

            if (counter === 10) {
                return; // Exit the loop after 5 iterations
            }
        });

        const container = document.getElementById('flightsHere');
        counter = 0;
        results.forEach(result => {
            const div = document.createElement('div');
            div.className = "card w-75";

            const divTwo = document.createElement('div');
            divTwo.className = "card-body";
            const h5 = document.createElement('h5');
            h5.className = "card-title";

            // Check if result.price exists and is an object before using its amount property
            if (result.price && typeof result.price === 'object' && result.price.amount) {
                h5.textContent = "Fly Now! Only " + result.price.amount + result.price.currencySymbol;
            } else {
                h5.textContent = "Price information not available.";
            }

            const p = document.createElement('p');
            p.className = 'card-text';

            // Check if result.legs exists and is an array before using it
            if (Array.isArray(result.legs)) {
                p.textContent = result.legs.map(leg => `${leg.origin.name} - ${leg.destination.name} Departing: ${leg.departure} Arriving: ${leg.arrival}`).join('\n');
            } else {
                p.textContent = "Flight information not available.";
            }

            divTwo.appendChild(h5);
            divTwo.appendChild(p);
            div.appendChild(divTwo);
            container.appendChild(div);
        });

    });
document.getElementById('flightsHere').style.display = 'inline-block';
}

function dateParser(date){
    const [month, day, year] = date.split('/');

    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}