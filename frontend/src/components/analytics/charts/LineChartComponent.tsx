import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';

import { IContribution, IChart, IChartData } from '../../../interfaces';

const getLineChartData = (contributions: IContribution[]): IChartData => {
	let userCount: number = 0;
	const currencies: string[] = [];
	let allUsersData: {
		[key: string]: {
			[key: string]: number | string;
		};
	} = {};
	contributions.forEach(contribution => {
		if (allUsersData.hasOwnProperty(contribution.address)) {
			const currentUserData = allUsersData[contribution.address];
			if (currentUserData.hasOwnProperty(contribution.currency)) {
				currentUserData[contribution.currency] =
					parseInt(
						currentUserData[contribution.currency.toString()].toString()
					) + contribution.value;
			} else {
				currentUserData[contribution.currency] = contribution.value;
				!currencies.includes(contribution.currency) &&
					currencies.push(contribution.currency);
			}
		} else {
			userCount += 1;
			allUsersData[contribution.address] = {
				name: `Contributor ${userCount}`,
				address: contribution.address
			};
			allUsersData[contribution.address][contribution.currency] =
				contribution.value;
			!currencies.includes(contribution.currency) &&
				currencies.push(contribution.currency);
		}
	});

	return { data: Object.values(allUsersData), currencies };
};

const LineChartComponent: React.FC<IChart> = ({ contributions, colors }) => {
	const { data, currencies } = getLineChartData(contributions);

	return (
		<LineChart
			width={500}
			height={300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			{currencies.map((currency, index) => (
				<Line
					key={index}
					type="monotone"
					dataKey={currency}
					stroke={colors[index % colors.length]}
					activeDot={{ r: 4 + index * 2 }}
				/>
			))}
		</LineChart>
	);
};

export default LineChartComponent;
