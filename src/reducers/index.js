import { combineReducers } from 'redux'
import blogPostReducers from "./blog_post_reducers"

const createReducer = (reducerFunctions, initialState) =>
  (state = initialState, action) =>
  reducerFunctions.hasOwnProperty(action.type) ? reducerFunctions[action.type](state, action) : state

export default combineReducers({
  blogPosts: createReducer(blogPostReducers, {})
})
