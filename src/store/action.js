import * as actions from "./actionTypes";

export const addTask = (task) => ({
  type: actions.TASK_ADD,
  payload: task,
});

export const Delete = (index) => ({
  type: actions.TASK_REMOVE,
  payload: index,
});
