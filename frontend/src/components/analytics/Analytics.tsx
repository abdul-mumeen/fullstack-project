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

import { IContribution } from '../../interfaces';
import './Analytics.scss';

interface IAnalytics {
	filteredContributions: IContribution[];
}

const getLineChartData = (contributions: IContribution[]) => {
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
					) + contribution.value;
			} else {
				allUsersData[contribution.address][contribution.currency] =
					contribution.value;
				!currencies.includes(contribution.currency) &&
					currencies.push(contribution.currency);
			}
		} else {
			userCount += 1;
			allUsersData[contribution.address] = {
				name: `user ${userCount}`,
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

const Analytics: React.FC<IAnalytics> = ({ filteredContributions }) => {
	const { data, currencies } = getLineChartData(filteredContributions);

	return (
		<div className="analytics-body">
			<div className="analytics-component">
				<div className="right-chart-container">
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
								stroke={index % 2 === 0 ? '#ffb741' : '#82ca9d'}
								// activeDot={{ r: 8 }}
							/>
						))}
					</LineChart>
				</div>
				<div className="left-chart-container"></div>
			</div>
			<div className="analytics-component">
				<div className="bottom-chart-container"></div>
			</div>
		</div>
	);
};

export default Analytics;
