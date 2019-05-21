import { SET_POSTS } from './actionTypes';
import postsService from '../../services/postsService';

const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts
});

export function getPosts() {
  return async function(dispatch) {
    const { data } = await postsService.fetchPosts();
    dispatch(setPosts(data));
  };
}
