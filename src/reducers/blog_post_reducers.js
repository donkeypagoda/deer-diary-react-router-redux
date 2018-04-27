import _ from "lodash"

import {  GET_SINGLE_POST,
          GET_ALL_POSTS,
          DELETE_POST,
          CREATE_POST } from "../actions/index.js"

const getAllPosts = (state, action) => {
  _.mapKeys(action.payload, 'id')
}

const getSinglePost = (state, action) => {
  const {id} = action.payload
  return {...state, [id]: action.payload}
}

const deletePost = (state, action) => {
  const {id} = action.payload
  return _.omit(state, id) 

}

const createPost = (state, action) => {
  const {id} = action.payload
  return {...state, [id]: action.payload}
}

export default {
  [GET_SINGLE_POST]: getSinglePost,
  [GET_ALL_POSTS]: getAllPosts,
  [DELETE_POST]: deletePost,
  [CREATE_POST]: createPost
}
