export const ADD_NOTE = "ADD_NOTE";

// Actions define WHAT changed, not HOW
export function ADD_NOTE(title, content) {
    return { type: ADD_NOTE, title: title, content: content };
}