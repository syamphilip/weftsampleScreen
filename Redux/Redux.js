import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import Reducer1 from './reducer'

const comRed = combineReducers({Reducer1})

const store = createStore(
  comRed,applyMiddleware(thunk)
);

export default store;
