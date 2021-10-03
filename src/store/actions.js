import { ADD_DRAWING_LIST, GENERATE_NAME_LISTS, DELETE_DRAWING_LIST, DELETE_ALL_DRAWING_LISTS } from './actionTypes';

export const addDrawingList = (name) => {
    return {
        type: ADD_DRAWING_LIST,
        payload: { name }
    }
}

export const generateNameLists = (nameLists) => {
    return {
        type: GENERATE_NAME_LISTS,
        payload: { nameLists  }
    }
}

export const deleteDrawingList = (lists) => {
    return {
        type: DELETE_DRAWING_LIST,
        payload: { lists }
    }
}

export const deleteAllDrawingLists = () => {
    return {
        type: DELETE_ALL_DRAWING_LISTS
    }
}