import { ADD_NOTE } from '../actions/actions';

const initialState = {
    notes: []
}

// PARAM: Previous state, and the action being dispatched.
function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NOTE:
            return {
                notes: [
                    ...state.notes,
                    {
                        title: action.title,
                        content: action.content
                    }
                ]
            };

            default:
                return state;
    };
}

export default rootReducer;