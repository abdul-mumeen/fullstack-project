import {
	IContribution,
	IUpdateFilteredContrributionAction
} from '../interfaces';

export const setContributions = (
	initialContributions: IContribution[]
): IUpdateFilteredContrributionAction => ({
	type: 'SET_CONTRIBUTIONS',
	payload: {
		contributions: initialContributions
	}
});

export const updateFilteredContributions = (
	contributions: IContribution[]
): IUpdateFilteredContrributionAction => ({
	type: 'UPDATE_FILTERED_CONTRIBUTIONS',
	payload: {
		contributions
	}
});
