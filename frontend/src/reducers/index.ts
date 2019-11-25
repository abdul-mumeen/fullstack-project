const rootReducer = (state = {}, action: any) => {
	switch (action.type) {
		case 'SET_CONTRIBUTIONS':
			return {
				...state,
				contributions: action.payload.initialContributions,
				filteredContributions: action.payload.initialContributions
			};
		case 'UPDATE_FILTERED_CONTRIBUTIONS':
			return {
				...state,
				filteredContributions: action.payload.contributions
			};
		default:
			return state;
	}
};

export default rootReducer;
