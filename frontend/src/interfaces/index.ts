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
