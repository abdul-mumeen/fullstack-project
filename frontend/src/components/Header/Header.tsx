import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Dropdown, Slider } from '../common';
import { IContribution, IFilter, IHeader } from '../../interfaces';
import './Header.scss';

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
				contributions.currency === currency &&
				contributions.value >= value[0] &&
				contributions.value <= value[1]
		);
	} else if (!currency && value) {
		filteredContributions = contributions.filter(
			contributions =>
				contributions.value >= value[0] && contributions.value <= value[1]
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

const getMinAndMaxValues = (contributions: IContribution[]): number[] => {
	const values = contributions.map(contribution => contribution.value);
	const max = Math.max.apply(null, values);
	const min = Math.min.apply(null, values);
	return [min, max];
};
const getAvailableCurrencies = (contributions: IContribution[]): string[] => {
	const currencies: string[] = [];
	contributions.forEach(contribution => {
		if (!currencies.includes(contribution.currency)) {
			currencies.push(contribution.currency);
		}
	});
	return currencies;
};

const Header: React.FC<IHeader> = ({
	contributions,
	updateFilteredContributions
}) => {
	const minMax = getMinAndMaxValues(contributions);
	const currencies = getAvailableCurrencies(contributions);
	const [sliderRange, setSliderRange] = useState(minMax);
	const [currency, setCurrency] = useState('');

	const handleDropdownChange = (event: any) => {
		const value = event.target.value;
		setCurrency(value);
		filterContributions({
			contributions,
			updateFilteredContributions,
			currency: value,
			value: sliderRange
		});
	};

	const handleSliderChange = (event: any, newValue: number | number[]) => {
		const value = typeof newValue === 'number' ? [0, newValue] : newValue;
		setSliderRange(value);
		filterContributions({
			contributions,
			updateFilteredContributions,
			currency: currency,
			value: value
		});
	};

	return (
		<div className="header-container">
			<Typography>ICU Contributions Analysis</Typography>
			<div></div>
			<div className="filter-column">
				<Typography>Filter by currency</Typography>
				<Dropdown
					items={currencies}
					selectedItem={currency}
					handleChange={handleDropdownChange}
				/>
			</div>
			<div className="filter-column">
				<Typography>Filter by value</Typography>
				<Slider
					minMax={minMax}
					value={sliderRange}
					handleChange={handleSliderChange}
				/>
			</div>
		</div>
	);
};

export default Header;
