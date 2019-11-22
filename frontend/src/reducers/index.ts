const rootReducer = (state = {}, action: any) => {
	switch (action.type) {
		case 'SAMPLE_ACTION':
			return {
				result: action.payload
			};
		default:
			return state;
	}
};

export default rootReducer;
