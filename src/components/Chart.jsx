import { format, parseISO } from 'date-fns';
import React from 'react';
import { 
	ResponsiveContainer,
	Line,
	Legend,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip, 
	LineChart,
	} from 'recharts';

	var avg_temp

const Chart = ( { props } ) => {
	return (
		<div>
			<ResponsiveContainer width='100%' height={350}>
				<LineChart data={ props } onClick={e => e.props}>
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

					<Line dataKey='min_temp' stroke='#77B6EA' strokeWidth={2.5} strokeOpacity={0.8}
					/>

					<Line dataKey='max_temp' stroke='#e25822' strokeWidth={2.4}
					strokeOpacity={0.8}
					/>

					< XAxis dataKey='valid_date' axisLine={false} fontSize={12}
					/>

					< YAxis dataKey='temp' tickLine={false} domain={[-7, 25]}   interval={1} axisLine={false}  tickCount={12} fontSize={14}
					/>

					<Legend layout="horizontal" verticalAlign="top" align="right"/>

					<Tooltip content={<CustomTooltip />}/>

					<CartesianGrid opacity={0.8} vertical={false} strokeDasharray="3 3"/>
				</LineChart>
			</ResponsiveContainer>	
		</div>	
	)
}

function CustomTooltip({ active, payload, label}) {
	if (active) {
		avg_temp = (( payload[0].payload.max_temp +  payload[0].payload.min_temp)/2).toFixed(2) 
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
