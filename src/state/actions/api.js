import axios from 'axios';
import { FETCH_DATA } from './types';

const API_KEY = '049ed183ea064116a8c8258d5152fefe';
const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/daily?city='

export const fetchData = (name) => {
	return async dispatch => {
		try {
			const response  = await axios(`${BASE_URL}${name}&key=${API_KEY}`)
			dispatch({
				type: FETCH_DATA,
				payload: response.data
			})
		} catch (error){
			console.error(error)
		}
	}
}