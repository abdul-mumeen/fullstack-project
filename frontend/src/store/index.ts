import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState: any = {
	contributions: [],
	displayedContributions: []
};

const store = createStore(rootReducer, initialState);
export default store;
