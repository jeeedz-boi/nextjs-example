import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
import { connect } from 'react-redux'
import { ADD_POST }  from '../redux/actions/actionsConst' 
import { postAction } from '../redux/actions/actionPreform'

class form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value
        const msg = this.getMsg.value
        const data = {
            id: new Date(),
            title,
            msg,
            editing: false
        }
        // this.props.dispatch({
        //     type:ADD_POST,
        //     data
        // })
        this.props.postAction(ADD_POST, data)
        
        this.getTitle.value = ""
        this.getMsg.value = ""
    };
    render() {
        return (
            <div>
                <main className={styles.main}>
                    <div className="card text-center" style={{boxShadow:"2px 2px 5px gray"}}> 
                        <h1>Create Post</h1>
                        <br/>
                        <form> 
                        
                        <div className="card-body"> 
                            <div className="input-group mb-3"> 
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">Post Title</span>
                            </div>
                                
                                <input type="text" className="form-control" ref={ (input) => this.getTitle= input } placeholder="post title here"/>
                            </div>

                            <div className="input-group mb-3">
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">Post Message</span>
                            </div>
                                <textarea cols="23" className="form-control" ref={ (input)=> this.getMsg = input } rows="5" placeholder="post here"/>
                                <br/>
                            </div>

                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Add New</button>
                            </div>
                            </div>

            
                        </form>
                    </div>
                </main>
            
            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
        posts: state
    }
};

const mapDispatchToProps = {
    postAction
}

export default connect(mapStateToProps, mapDispatchToProps)(form)