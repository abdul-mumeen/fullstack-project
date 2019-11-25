import { IContribution } from '../interfaces';

export const setContributions = (initialContributions: IContribution[]) => ({
	type: 'SET_CONTRIBUTIONS',
	payload: {
		contributions: initialContributions
	}
});

export const updateFilteredContributions = (
	contributions: IContribution[]
) => ({
	type: 'UPDATE_FILTERED_CONTRIBUTIONS',
	payload: {
		contributions
	}
});
