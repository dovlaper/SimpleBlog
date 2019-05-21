import { SET_USER } from './actionTypes';

const user = localStorage.getItem('user');
const initialState = user ? JSON.parse(user) : null;

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}
