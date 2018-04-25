export const GET_SINGLE_POST = "GET_SINGLE_POST"
export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const DELETE_POST = "DELETE_POST"
export const CREATE_POST = "CREATE_POST"

export function getBlogPosts(){
  return async (dispatch) => {
    const res = await fetch('http://localhost:5000/blog_posts')
    const json = await res.json()

    dispatch({
      type: GET_ALL_POSTS,
      payload: json.blog_posts
    })
  }
}

export function getSinglePost(id){
  return async (dispatch) => {
    const res = await fetch(`http://localhost:5000/blog_posts${id}`)
    const json = await res.json()

    dispatch({
      type: GET_SINGLE_POST,
      payload: json.blog_post
    })
  }
}

export function deletePost(id){
  return async (dispatch) => {
    const res = await fetch('http://localhost:5000/blog_posts',
      {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
      })
    const json = res.json

    dispatch({
      type: DELETE_POST,
      payload: json.blog_post
    })
  }
}

export function createPost(newPost){
  return async (dispatch) => {
    const res = await fetch('http://localhost:5000/blog_posts',
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
    const json = res.json
    dispatch({
      type: CREATE_POST,
      payload: json.blog_post
    })
  }
}
