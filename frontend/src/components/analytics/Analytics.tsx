import React from 'react';
import { LineChart, PieChart, BarChart, ChartLabel } from './charts';
import { IContribution } from '../../interfaces';
import './Analytics.scss';

interface IAnalytics {
	filteredContributions: IContribution[];
}

const Analytics: React.FC<IAnalytics> = ({ filteredContributions }) => {
	const colors: string[] = ['#feb94b', '#ff8043', '#727171'];
	return (
		<div className="analytics-body">
			<div className="analytics-component">
				<div className="chart-container right-container">
					<ChartLabel label="Total currency contributions per contributor" />
					<LineChart contributions={filteredContributions} colors={colors} />
				</div>
				<div className="chart-container">
					<ChartLabel label="Total contributions per currency" />
					<PieChart contributions={filteredContributions} colors={colors} />
				</div>
			</div>
			<div className="analytics-component">
				<div className="chart-container">
					<ChartLabel label="Total currency counts per contributor" />
					<BarChart contributions={filteredContributions} colors={colors} />
				</div>
			</div>
		</div>
	);
};

export default Analytics;
