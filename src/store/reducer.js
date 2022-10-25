import * as actions from "./actionTypes";

const initialState = {
  tasks: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TASK_ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

      case action.TASK_REMOVE:
      return {
        ...state,
        tasks: [...state.tasks.splice(action.payload,1)],
      }

   
    
      
    
    default:
      return state;
  }
}
