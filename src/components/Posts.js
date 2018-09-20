import React, { Component } from 'react'
import { connect } from 'react-redux'
 import PropTypes from 'prop-types';
import { fetchPosts } from '../action/postAction'
import store from '../store'

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts();
    // console.log(this.props)
    console.log(store.getState())
  }
  render() {
    console.log(this.props)
    const postitems = this.props.posts.map(posts =>(
      <div key = {posts.id}>
      <h3>{posts.title}</h3>
      <p>{posts.boy}</p>
      </div>
    ))
     return (
      <div>
        <h1>Posts</h1>
        {postitems}
      </div>
    )
  }
}
Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts : PropTypes.array.isRequiredisRequired
}
const mapStateToProps = state => ({
  posts: state.posts.items
})
export default connect(mapStateToProps,{ fetchPosts })(Posts)   