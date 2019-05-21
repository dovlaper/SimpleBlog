export function userSelector(state) {
  return state.user;
}

export function userFullNameSelector(state) {
  return state.user
    ? state.user.firstName + ' ' + state.user.lastName
    : '';
}
