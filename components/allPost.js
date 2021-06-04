import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
import { connect } from 'react-redux'
import Post from './Post'
import EditComponent from './EditComponent'

class allPost extends Component {
    render() {
        return (
            <div className="card">
                    <div className="card text-center" style={{ boxShadow:"2px 2px 5px gray" }}> 
                        <h1>All Post</h1>
                        <div className="card">
                            {this.props.posts.map((post)=> (
                                <div className="card-body" key={ post.id }>
                                    {post.editing ? <EditComponent post={post} key={post.id}></EditComponent> : <Post key={post.id} post={post}> </Post>}
                                </div>
                            ))}
                        </div>
                    </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
};

export default connect(mapStateToProps)(allPost)