import { format, parseISO } from 'date-fns';
import Loader from "react-loader-spinner";

import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import moment from 'moment';
import React, { useState } from 'react';
import { 
		ResponsiveContainer,
		Line,
		Legend,
		CartesianGrid,
		XAxis,
		YAxis,
		Tooltip, 
		LineChart,
		Text
	} from 'recharts';


const CustomizedLabelTemp = () => {
		return (
			<Text
				stroke='#ccd6f6'
				strokeWidth= '0.8'
				verticalAnchor = 'middle'
				type='monotone'
				x={0}
				y={0}
				dx={-220}
				dy={8}
				transform="rotate(-90)">            
			Temprature in °C
			</Text>
		);
	}

const Chart = ( { props: { data, city_name} } ) => {
	const [avgTemp, setAvgTemp] = useState();
	const [cartdate, setCartdate] = useState();
	const [weatherDescription, setWeatherDescription] = useState('');

	if (!data){
		return( <Loader type="Circles" color="#545454" height={80} width={80}/>)
	} 
	const passingDatatoCard = e =>{
		if (e) {
			setAvgTemp((e.activePayload[0].payload.max_temp + e.activePayload[0].payload.min_temp / 2).toFixed(0))
			setCartdate(new Date(e.activePayload[0].payload.valid_date))
			setWeatherDescription(e.activePayload[0].payload.weather.description)
		}	
	}
	const newDate = moment(cartdate).format("MMM Do ")
	return (
		<>
		<div className="chart">
			<div className='chart__linechart'>
				<h3>Average Hight and Low Temprature of {city_name}</h3>
				<ResponsiveContainer width='100%' height={350}>
					<LineChart data={ data } onClick={passingDatatoCard}>
						{/*Area Gradient for area Chart */}

						{/* 
						<defs>
						<linearGradient id='faddingGradientred' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='0%' stopColor='#e25822' stopOpacity={0.4}/>
						<stop offset='75%' stopColor='#77B6EA' stopOpacity={0.05}/>
						</linearGradient>

						<linearGradient id='faddingGradientblue' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='0%' stopColor='#77B6EA' stopOpacity={0.4}/>
						<stop offset='75%' stopColor='#77B6EA' stopOpacity={0.05}/>
						</linearGradient>
						</defs>
						*/}

						<Line dataKey='min_temp' stroke='#77B6EA' strokeWidth={2.5} strokeOpacity={0.8}  />

						<Line dataKey='max_temp' stroke='#e25822' strokeWidth={2.4}
						strokeOpacity={0.8} 
						/>

						< XAxis dataKey='valid_date' axisLine={false} fontSize={12}
						/>
						

						< YAxis className='chart__linechart_y_axis' dataKey='temp' tickLine={false} domain={[-7, 25]}   interval={1} axisLine={false}  tickCount={12} fontSize={14} label={<CustomizedLabelTemp />}
						/>

						<Legend layout="horizontal" verticalAlign="top" align="right"/>

						<Tooltip content={<CustomTooltip />}/>

						<CartesianGrid opacity={0.8} vertical={false} strokeDasharray="3 3"/>
					</LineChart>
				</ResponsiveContainer>	
			</div>
			<div className='chart__cart'>
				<h1>{avgTemp}°C</h1>
				<h2>{city_name}</h2>
				<p>{newDate}</p>
				<div className="chart__cart__description">
				<FilterDramaOutlinedIcon />
				<p>{weatherDescription} </p>
				</div>
			</div>	
		</div>
	</>
	)
}

const CustomTooltip = ({ active, payload, label}) => {
	if (active) {
		const avg_temp = (( payload[0].payload.max_temp +  payload[0].payload.min_temp)/2).toFixed(2) 
		return (
		<div className='tooltip'>
			<h4>{format(parseISO(label), "eeee d MMM, yyyy")}</h4>
			<p>Average Temp: {avg_temp} °C</p>
		</div>
		);
	}
	return null
};

export default Chart
