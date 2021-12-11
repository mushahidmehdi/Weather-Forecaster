import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Chart } from '.';


const Cart = ({ data: { city_name, data,} }) => {
	const [cityName, setCityName] = useState('');
	if (!city_name){
		return 'Loading.....!'
	} 

	return (
		<>
		<div className="display">
			<div className="display__input">
				<input type="text" name="searchcity" value={cityName} placeholder = 'Search City' onChange={e => setCityName(e.target.value)}/>
				<SearchIcon className="display__input__icon" />
			</div>
			<div className="display__data">
				<div className="display__data__chart">
					<h3>Average Hight and Low Temperatures of {city_name}</h3>
					< Chart props={data}/>
				</div>
				<div className="display__data__cart">
					
				</div>
			</div>
		</div>
			
		</>
	)
}

export default Cart
