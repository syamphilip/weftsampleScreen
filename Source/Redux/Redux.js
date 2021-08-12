import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import Reducer1 from './reducer';
import AddressReducer2 from './AddressReducer'

const comRed = combineReducers({AddressReducer2, Reducer1});

const store = createStore(comRed, applyMiddleware(thunk));

export default store;
