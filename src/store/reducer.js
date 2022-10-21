import * as actions from './actionTypes';

const initialState = {
    tasks: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.TASK_ADD:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };

        default:
            return state;
    }
}