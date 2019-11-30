import React from 'react';
import { LineChart } from './charts';

import { IContribution } from '../../interfaces';
import './Analytics.scss';

interface IAnalytics {
	filteredContributions: IContribution[];
}

const Analytics: React.FC<IAnalytics> = ({ filteredContributions }) => {
	const colors: string[] = ['#feb94b', '#e9e9e9', '#727171'];
	return (
		<div className="analytics-body">
			<div className="analytics-component">
				<div className="chart-container right-container">
					<LineChart contributions={filteredContributions} colors={colors} />
				</div>
				<div className="chart-container"></div>
			</div>
			<div className="analytics-component">
				<div className="chart-container"></div>
			</div>
		</div>
	);
};

export default Analytics;
