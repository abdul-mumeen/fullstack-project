import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { IContribution, IChart } from '../../../interfaces';

const getPieChartData = (contributions: IContribution[]) => {
	let allCurrencyData: {
		[key: string]: {
			[key: string]: number | string;
		};
	} = {};
	contributions.forEach(contribution => {
		if (allCurrencyData.hasOwnProperty(contribution.currency)) {
			allCurrencyData[contribution.currency].value =
				parseInt(allCurrencyData[contribution.currency].value.toString()) +
				contribution.value;
		} else {
			allCurrencyData[contribution.currency] = {
				name: contribution.currency,
				value: contribution.value
			};
		}
	});

	return Object.values(allCurrencyData);
};

const PieChartComponent: React.FC<IChart> = ({ contributions, colors }) => {
	const data = getPieChartData(contributions);

	return (
		<PieChart width={300} height={300}>
			<Legend />
			<Tooltip />
			<Pie
				data={data}
				cx={140}
				cy={120}
				paddingAngle={5}
				outerRadius={100}
				innerRadius={60}
				fill="red"
				dataKey="value"
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
				))}
			</Pie>
		</PieChart>
	);
};

export default PieChartComponent;
