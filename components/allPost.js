import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
import { connect } from 'react-redux'
import Post from './Post'
import EditComponent from './EditComponent'

class allPost extends Component {
    render() {
        return (
            <div>
                <main className={styles.main} > 
                    <div className="card text-center" style={{boxShadow:"2px 2px 5px gray"}}> 
                        <h1>All Post</h1>
                        <form> 
                        <div>
                            {this.props.posts.map((post)=> (
                                <div key={post.id}>
                                    {post.editing ? <EditComponent post={post} key={post.id}></EditComponent> : <Post key={post.id} post={post}> </Post>}
                                </div>
                            ))} 
                        </div>
                        </form>
                    </div>
                </main>
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