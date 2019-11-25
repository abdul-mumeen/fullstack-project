import {
	IState,
	ISetContrributionAction,
	IUpdateFilteredContrributionAction
} from '../interfaces';

const initialState: IState = {
	contributions: [],
	filteredContributions: []
};

const rootReducer = (
	state: IState = initialState,
	action: ISetContrributionAction | IUpdateFilteredContrributionAction
) => {
	switch (action.type) {
		case 'SET_CONTRIBUTIONS':
			return {
				...state,
				contributions: action.payload.contributions,
				filteredContributions: action.payload.contributions
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
