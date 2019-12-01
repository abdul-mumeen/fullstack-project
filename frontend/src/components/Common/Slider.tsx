import React from 'react';
import Slider from '@material-ui/core/Slider';
import { ISlider } from '../../interfaces';
import './index.scss';

const valuetext = (value: number): string => {
	return `${value}°C`;
};

const RangeSlider: React.FC<ISlider> = ({ minMax, handleChange, value }) => {
	return (
		<div className="slider">
			<Slider
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				aria-labelledby="range-slider"
				getAriaValueText={valuetext}
				min={minMax[0]}
				max={minMax[1]}
			/>
		</div>
	);
};

export default RangeSlider;
