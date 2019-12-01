export interface IContribution {
	address: string;
	currency: string;
	value: number;
	txid: string;
}

export interface IState {
	contributions: IContribution[];
	filteredContributions: IContribution[];
}

export interface IContributionsPayload {
	contributions: IContribution[];
}

const SET_CONTRIBUTIONS: string = 'SET_CONTRIBUTIONS';
const UPDATE_FILTERED_CONTRIBUTIONS: string = 'UPDATE_FILTERED_CONTRIBUTIONS';

export interface ISetContrributionAction {
	type: typeof SET_CONTRIBUTIONS;
	payload: IContributionsPayload;
}

export interface IUpdateFilteredContrributionAction {
	type: typeof UPDATE_FILTERED_CONTRIBUTIONS;
	payload: IContributionsPayload;
}

export interface IChart {
	contributions: IContribution[];
	colors: string[];
}

export interface IHeader {
	contributions: IContribution[];
	updateFilteredContributions: (contributions: IContribution[]) => void;
}

export interface IFilter {
	contributions: IContribution[];
	updateFilteredContributions: any;
	currency: string | null;
	value: number[] | null;
}

export interface ISlider {
	minMax: number[];
	value: number[];
	handleChange: (event: any, value: number | number[]) => void;
}
