export const setContributions = (initialContributions: any) => ({
	type: 'SET_CONTRIBUTIONS',
	payload: {
		initialContributions
	}
});

export const updateFilteredContributions = (contributions: any) => ({
	type: 'UPDATE_FILTERED_CONTRIBUTIONS',
	payload: {
		contributions
	}
});
