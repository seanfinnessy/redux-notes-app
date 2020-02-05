import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions';

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
        
        case REMOVE_NOTE:
            return {
                // returns a new array where the element ids do not match the index. aka the button you click
                // will return that element's id, so your new array WILL match that index, thus not inclded in new array
                notes: state.notes.filter((note, index) => index != action.id)
            };
    };
}

export default rootReducer;