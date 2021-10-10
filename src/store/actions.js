import {
  ADD_DRAWING_LIST,
  GENERATE_NAME_LISTS,
  DELETE_DRAWING_LIST,
  DELETE_ALL_DRAWING_LISTS,
  NOTIFY_MESSAGE,
  CHANGE_STEP
} from "./actionTypes";

export const addDrawingList = (name) => {
  return {
    type: ADD_DRAWING_LIST,
    payload: { name },
  };
};

export const generateNameLists = (nameLists) => {
  return {
    type: GENERATE_NAME_LISTS,
    payload: { nameLists },
  };
};

export const deleteDrawingList = (lists) => {
  return {
    type: DELETE_DRAWING_LIST,
    payload: { lists },
  };
};

export const deleteAllDrawingLists = () => {
  return {
    type: DELETE_ALL_DRAWING_LISTS,
  };
};

export const notifyMessage = (notify) => {
  return {
    type: NOTIFY_MESSAGE,
    payload: { notify },
  };
};

export const changeStep = (step) => {
    console.log('step', step)
  return {
    type: CHANGE_STEP,
    payload: { step },
  };
};
