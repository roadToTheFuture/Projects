'use strict';
let countryName = {
	Minsk: {
		"id": 625140,
		"name": 'minsk',
	},

	Babruysk: {
		"id": 630468,
		"name": 'bobr',
	},

	Moscow: {
		"id": 524925,
		"name": 'mos',
	},

	USA: {
		"id": 6252001,
		"name": 'usa',
	},

	Bulgaria: {
		"id": 732800,
		"name": 'bolg',
	},

	Klaipeda: {
		"id": 864478,
		"name": 'kla',
	},

	Spain: {
		"id": 2510769,
		"name": "Spain"
	},

	Egypt: {
		"id": 5188351,
		"name": "Egypt",
	},

	France: {
		"id": 3017382,
		"name": "France"
	},

	Argentina: {
		"id": 3792743,
		"name": "Argentina"
	},

	Italy: {
		"id": 4700234,
		"name": "Italy"
	},

	Canada: {
		"id": 2741623,
		"name": "Canada"
	},

	Georgia: {
		"id": 614540,
		"name": "Georgia"
	},

	Iraq: {
		"id": 99237,
		"name": "Iraq"
	},

	Brazil: {
		"id": 3469034,
		"name": "Brazil"
	}

}

document.querySelector('.button').onclick = () => {
	let userInfo = document.querySelector('#user');
	let result = 0;
	let nameTrue = '';
	let nameId = 0;

	for (let key in countryName) {
		if (userInfo.value == countryName[key]['name']) {
			result = 1;
			nameTrue = countryName[key]['name'];
			nameId = countryName[key]['id'];
			countryName[key]['name'] = 0;
			break;
		}
	}

	if (result == 1) {
		fetch(`http://api.openweathermap.org/data/2.5/weather?id=${nameId}&appid=3ad171bfcd6b9ee4c80715883497af57`)
			.then(function (resp) { return resp.json() })
			.then(function (data) {

				let newBlock = document.createElement('div');
				newBlock.classList.add('weather-block__card');
				newBlock.classList.add(`${nameTrue}N1`);
				document.querySelector(`.weather-block__row`).appendChild(newBlock);
				newBlock.setAttribute('id', 'deleteBlock')

				let cardRow = document.createElement('div');
				cardRow.classList.add('card__row');
				cardRow.classList.add(`${nameTrue}N2`);
				document.querySelector(`.${nameTrue}N1`).appendChild(cardRow);


				let cardImg = document.createElement('div');
				cardImg.classList.add('img');
				cardImg.classList.add(`${nameTrue}I`);
				document.querySelector(`.${nameTrue}N2`).appendChild(cardImg);

				let cardWeather = document.createElement('p');
				cardWeather.classList.add('weather');
				cardWeather.classList.add(`${nameTrue}W`);
				document.querySelector(`.${nameTrue}N2`).appendChild(cardWeather);

				let cardHumidity = document.createElement('p');
				cardHumidity.classList.add('humidity');
				cardHumidity.classList.add(`${nameTrue}H`);
				document.querySelector(`.${nameTrue}N2`).appendChild(cardHumidity);

				let cardPressure = document.createElement('p');
				cardPressure.classList.add('pressure');
				cardPressure.classList.add(`${nameTrue}P`);
				document.querySelector(`.${nameTrue}N2`).appendChild(cardPressure);

				let cardTemp = document.createElement('p');
				cardTemp.classList.add('temp');
				cardTemp.classList.add(`${nameTrue}T`);
				document.querySelector(`.${nameTrue}N2`).appendChild(cardTemp);

				let cardCity = document.createElement('p');
				cardCity.classList.add('city');
				cardCity.classList.add(`${nameTrue}C`);
				document.querySelector(`.${nameTrue}N1`).appendChild(cardCity);

				let cardWind = document.createElement('p');
				cardWind.classList.add('wind');
				cardWind.classList.add(`${nameTrue}Wind`);
				document.querySelector(`.${nameTrue}N2`).appendChild(cardWind);

				let userDelete = document.createElement('button');
				userDelete.classList.add('deleteButton');
				userDelete.classList.add(`${nameTrue}Del`);
				document.querySelector(`.${nameTrue}N1`).appendChild(userDelete);
				userDelete.innerHTML = 'delete';
				userDelete.setAttribute('id', 'deletDiv');

				userDelete.onclick = () => {
					newBlock.remove();
				}


				document.querySelector(`.${nameTrue}C`).textContent = data.name;
				document.querySelector(`.${nameTrue}W`).innerHTML = data.weather[0]['description'];
				document.querySelector(`.${nameTrue}H`).innerHTML = `${data.main.humidity}&#37 <br><span>(влажность)</span>`;
				document.querySelector(`.${nameTrue}P`).innerHTML = `${data.main.pressure} <br><span>(давление)</span>`;
				document.querySelector(`.${nameTrue}T`).innerHTML = `${Math.round(data.main.temp - 273)}&deg <br><span>(температура)</span>`;
				document.querySelector(`.${nameTrue}I`).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png"> `;
				document.querySelector(`.${nameTrue}Wind`).innerHTML = `${data.wind['speed']} м/с <br><span>(скорость ветра)</span>`;

			})
			.catch(function () {

			});
	}
}


fetch(`http://api.openweathermap.org/data/2.5/weather?id=${625140}&appid=3ad171bfcd6b9ee4c80715883497af57`)
	.then(function (resp) { return resp.json() })
	.then(function (data) {
		console.log(data);
		document.querySelector('.city').textContent = data.name;
		document.querySelector('.weather').innerHTML = data.weather[0]['description'];
		document.querySelector('.humidity').innerHTML = `${data.main.humidity}&#37 <br><span>(влажность)</span>`;
		document.querySelector('.pressure').innerHTML = `${data.main.pressure} <br><span>(давление)</span>`;
		document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp - 273)}&deg <br><span>(температура)</span>`;
		document.querySelector('.img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png"> `;
		document.querySelector('.wind').innerHTML = `${data.wind['speed']} м/с <br><span>(скорость ветра)</span>`;
	})
	.catch(function () {

	});


