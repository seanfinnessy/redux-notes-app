import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions';

// reducer to only handle notes
function notesReducer(notes = [], action) {
    switch(action.type) {
        case ADD_NOTE:
            return [
                ...notes,
                {
                    title: action.title,
                    content: action.content
                }
            ];
        
        case REMOVE_NOTE:
            return {
                // returns a new array where the element ids do not match the index. aka the button you click
                // will return that element's id, so your new array WILL match that index, thus not inclded in new array
                notes: notes.filter((note, index) => index != action.id)
            };
        
        default:
            return notes;
    };
}

export default notesReducer;