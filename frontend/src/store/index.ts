import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState: any = {
	contributions: [],
	filteredContributions: []
};

const store = createStore(rootReducer, initialState);
export default store;
