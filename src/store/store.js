import { createStore } from 'redux';
import reducers from '../reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

let initialState = {
    notes: [
        {title: 'You are cool.', content: 'I mean amazing!'},
        {title: 'Ooops.', content: 'I was talking to myself'}
    ],
    visibility: 'AWESOME_TAG'
};

// first arg is the root reducer of the app
const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;