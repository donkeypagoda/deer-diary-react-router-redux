import React, {Component} from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {getSinglePost, deletePost} from "../actions"

class SinglePost extends Component {
  constructor(){
    super()
    this.state = {
      post: {}
    }
  }

  componentDidMount(){
    this.props.getSinglePost(this.props.match.params.id)
  }

  deletePost(id){
    this.props.deletePost(id)
    .then(res =>{
      this.props.history.push('/')
    })

  }

  render(){
    if (this.state.post === undefined) return <div>Loading...</div>
    return(
      <div className="container">
        <div className="row lift">
          <div className="col-md-12">
            <div className='btn btn-secondary'>
              <Link to='/'>Return to Posts</Link>
            </div>
          </div>
        </div>
        <div className='list-group'>
          <div className="list-group-item flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                {this.state.post.title}
              </h5>
              <small>{moment(this.state.post.created_at).format("MMM Do YY")}</small>
            </div>
            <div className="mb-1">
              {this.state.post.content}
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => this.deletePost(this.state.post.id)}>Delete Post</button>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state, ownProps){
  return { blogPost: state.blogPosts[ownProps.match.params.id]}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getSinglePost, deletePost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps){blogPost}
