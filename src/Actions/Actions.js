import {
  ADD_TASK_IN_LIST,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK
} from "./ActionsTypes.js";

export const addNewTask = task => ({
  type: ADD_TASK_IN_LIST,
  payload: { task, isComplete: false, id: Date.now() }
});

export const testCompleted = id => ({
  type: COMPLETE_TASK,
  payload: id
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id
});

export const editTask = (id, newTask) => ({
  type: EDIT_TASK,
  payload: { id, newTask }
});
