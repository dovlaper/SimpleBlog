export function postsSelector(state) {
  return state.posts;
}

export function postByIdSelector(state) {
  return function(id) {
    return state.posts.find(post => post.id === parseInt(id, 10));
  };
}
