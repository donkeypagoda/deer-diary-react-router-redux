import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import ShortPost from './shortPost.js'

class ListPosts extends Component{

  render(){
    let shortList= []
    this.props.postList.map( post => {
      shortList.push(<ShortPost key={post.id} postContent={post.content} postId={post.id} postDate={post.created_at} postTitle={post.title}/>)
    })
    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
            <div>
              {shortList}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ListPosts

// <button type="button" className="btn btn-secondary" onClick={() => this.props.action(this.props.id)}>Delete Post</button>
