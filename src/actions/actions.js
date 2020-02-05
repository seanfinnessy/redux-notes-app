export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = 'REMOVE_NOTE';

// Actions define WHAT changed, not HOW
export function addNote(title, content) {
    return { type: ADD_NOTE, title: title, content: content };
}

export function removeNote(id) {
    return { type: REMOVE_NOTE, id: id};
}