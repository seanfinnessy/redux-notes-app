import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

// first arg is the root reducer of the app
export default createStore(rootReducer);