import React from 'react';
import { IContribution } from '../../interfaces';

interface IHeader {
	contributions: IContribution[];
	updateFilteredContributions: (contributions: IContribution[]) => void;
}

interface IFilter {
	contributions: IContribution[];
	updateFilteredContributions: any;
	currency: string | null;
	value: number | null;
}

const filterContributions = ({
	contributions,
	currency,
	value,
	updateFilteredContributions
}: IFilter): void => {
	let filteredContributions;
	if (currency && value) {
		filteredContributions = contributions.filter(
			contributions =>
				contributions.currency === currency && contributions.value > value
		);
	} else if (!currency && value) {
		filteredContributions = contributions.filter(
			contributions => contributions.value > value
		);
	} else if (currency && !value) {
		filteredContributions = contributions.filter(
			contributions => contributions.currency === currency
		);
	} else {
		filteredContributions = contributions;
	}
	updateFilteredContributions(filteredContributions);
};

const Header: React.FC<IHeader> = ({
	contributions,
	updateFilteredContributions
}) => {
	return (
		<div>
			<button
				onClick={() =>
					filterContributions({
						contributions,
						updateFilteredContributions,
						currency: 'BTC',
						value: 200000
					})
				}
			>
				Click Me!
			</button>
		</div>
	);
};

export default Header;
