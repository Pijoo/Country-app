import { createStore } from 'redux';
import reducers from '../reducers/index';
import { getCountries } from '../actions/actions-countries';

const store = createStore(reducers);

export default store;
store.dispatch(getCountries());