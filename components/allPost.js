import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
import { connect } from 'react-redux'
import Post from './Post'
import EditComponent from './EditComponent'

class allPost extends Component {
    render() {
        return (
            <div>
                <h1>All Post</h1>
                {console.log('all state: ', this.props.posts)}
                <div>
                    {this.props.posts.map((post)=> (
                        <div key={post.id}>
                            {post.editing ? <EditComponent post={post} key={post.id}></EditComponent> : <Post key={post.id} post={post}> </Post>}
                        </div>
                    ))} 
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (state) => {
    return {
        posts: state
    }
};

export default connect(mapDispatchToProps)(allPost)