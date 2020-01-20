import {
  ADD_TASK_IN_LIST,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK
} from "../Actions/ActionsTypes";
import { combineReducers } from "redux";

//const initailState = [];

export const listToDoReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_TASK_IN_LIST:
        return state.concat(action.payload);

      case DELETE_TASK:
        return state.filter(el => el.id !== action.payload);
        break;

      case EDIT_TASK:
        return state.map(el =>
          el.id == action.payload.id
            ? { ...el, task: action.payload.newTask }
            : el
        );
        break;

      case COMPLETE_TASK:
        return state.map(el =>
          el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
        );
    }
    return state;
  },
  reducers = combineReducers({
    tasks: listToDoReducer
  });

export default reducers;
