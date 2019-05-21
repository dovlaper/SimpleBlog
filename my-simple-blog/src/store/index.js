import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer as usersReducer} from './users';
import { reducer as postsReducer} from './posts';


const reducer = combineReducers({
	user: usersReducer,
	posts: postsReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;