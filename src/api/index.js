import axios from 'axios';

const API_KEY = '049ed183ea064116a8c8258d5152fefe'

const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${'Raleigh,NC'},NC&key=${API_KEY}`

export const fetchData = async () => {
	try {

		const { data: {city_name, data } }  = await axios(URL)
		return { city_name, data, }
		
	} catch (error){
		console.error(error)
	}

}