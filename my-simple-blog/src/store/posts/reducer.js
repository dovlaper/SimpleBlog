import { SET_POSTS } from './actionTypes';

const initialState = [];

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return action.payload;

    default:
      return state;
  }
}
