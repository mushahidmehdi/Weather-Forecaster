import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Chart, Animation } from '.';
import { fetchData } from '../state/actions/api'
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
	const [cityName, setCityName] = useState('');
	const dispatch = useDispatch();
	const { data } = useSelector(state => state.data)
	console.log(data)
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(fetchData(cityName));
		setCityName('');
	}

	return (
		<>
		<div className="display">
			<div className="display__input">
				<form onSubmit={handleSubmit}>
				<input
				type="text"
				name="searchcity" 
				value={cityName}
				placeholder='Search City'
				onChange={e => setCityName(e.target.value)}/>
				<SearchIcon className="display__input__icon" />
				</form>
			</div>
			<div className="display__data">
				{ data && data !== null && data.length !== 0 ? < Chart props={data}/> : ( 
					(data === null) ?
					<div className="display__data__default">
					<Animation/> 
					<h1>No city is selected!</h1>
					<p>Type any city name to get weekly forecast data</p>
					</div> : 
					<div className="display__data__not_exits">
					<h2>City doesn’t exist!</h2>
					<p>Type a valid city name to get weekly forecast data</p>
					<Animation/> 
					</div>
					)
				 }
			</div>
		</div>
		</>
	)
}

export default Cart
