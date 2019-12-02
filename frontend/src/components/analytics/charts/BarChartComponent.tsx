import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';

import { IContribution, IChart, IChartData } from '../../../interfaces';

const getBarChartData = (contributions: IContribution[]): IChartData => {
	let userCount = 0;
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
					) + 1;
			} else {
				currentUserData[contribution.currency] = 1;
				!currencies.includes(contribution.currency) &&
					currencies.push(contribution.currency);
			}
		} else {
			userCount += 1;
			allUsersData[contribution.address] = {
				name: `Contributor ${userCount}`,
				address: contribution.address
			};
			allUsersData[contribution.address][contribution.currency] = 1;
			!currencies.includes(contribution.currency) &&
				currencies.push(contribution.currency);
		}
	});

	return { data: Object.values(allUsersData), currencies };
};

const BarChartComponent: React.FC<IChart> = ({ contributions, colors }) => {
	const { data, currencies } = getBarChartData(contributions);

	return (
		<BarChart
			width={800}
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
			{currencies.map((currency: string, index: number) => (
				<Bar
					key={`${currency} ${index}`}
					dataKey={currency}
					fill={colors[index % colors.length]}
				/>
			))}
		</BarChart>
	);
};

export default BarChartComponent;
