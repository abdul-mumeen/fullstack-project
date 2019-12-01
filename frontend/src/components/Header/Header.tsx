import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Slider } from '../common';
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

const getMinAndMaxValues = (contributions: IContribution[]) => {
	const values = contributions.map(contribution => contribution.value);
	const max = Math.max.apply(null, values);
	const min = Math.min.apply(null, values);
	return [min, max];
};

const Header: React.FC<IHeader> = ({
	contributions,
	updateFilteredContributions
}) => {
	const minMax = getMinAndMaxValues(contributions);
	const [sliderRange, setSliderRange] = React.useState(minMax);

	const handleSliderChange = (event: any, newValue: number | number[]) => {
		const value = typeof newValue === 'number' ? [0, newValue] : newValue;
		setSliderRange(value);
		filterContributions({
			contributions,
			updateFilteredContributions,
			currency: null,
			value
		});
	};

	return (
		<div className="header-container">
			<Typography gutterBottom>Currency Value range</Typography>
			<Slider
				minMax={minMax}
				value={sliderRange}
				handleChange={handleSliderChange}
			/>
		</div>
	);
};

export default Header;
