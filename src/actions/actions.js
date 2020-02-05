export const ADD_NOTE = "ADD_NOTE";

// Actions define WHAT changed, not HOW
export function addNote(title, content) {
    return { type: ADD_NOTE, title: title, content: content };
}