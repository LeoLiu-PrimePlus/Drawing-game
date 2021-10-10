import {
  ADD_DRAWING_LIST,
  GENERATE_NAME_LISTS,
  DELETE_DRAWING_LIST,
  DELETE_ALL_DRAWING_LISTS,
} from "../actionTypes";

const initialState = {
  drawingLists: [],
};

let listId = 0;

export default function drawingListsReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case ADD_DRAWING_LIST: {
      return {
        ...state,
        drawingLists: [
          {
            id: listId++,
            name: payload.name,
          },
          ...state.drawingLists,
        ],
      };
    }
    case GENERATE_NAME_LISTS: {
      return {
        drawingLists: payload.nameLists.map((list) => {
          return {
            id: listId++,
            name: list,
          };
        }),
      };
    }
    case DELETE_DRAWING_LIST: {
      return {
        ...state,
        drawingLists: state.drawingLists.filter(
          (list) => payload.lists.indexOf(list.id) === -1
        ),
      };
    }
    case DELETE_ALL_DRAWING_LISTS: {
      return {
        ...state,
        drawingLists: [],
      };
    }
    default: {
      return state;
    }
  }
}
