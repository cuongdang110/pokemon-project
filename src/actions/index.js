import { ADD_NEW_NOTE } from "../const/index";

export const actAddNote = (content) => {
    return { 
        type: ADD_NEW_NOTE,
        content,
    }
}