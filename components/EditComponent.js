import React, { Component } from 'react'
import { connect } from 'react-redux';
import { UPDATE_POST }  from '../redux/actions/actions' 

class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value
        const newMsg = this.getMsg.value
        const data = {
            newTitle,
            newMsg
        }
        this.props.dispatch({
            type: UPDATE_POST,
            id: this.props.post.id,
            data: data
        })
    };

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">  
                    <div className="input-group mb-3"> 
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">Edit Title</span>
                    </div>
                        <input type="text" className="form-control" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="post title here" required/>
                    </div>
                   
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">Edit Message</span>
                    </div>
                    <textarea cols="23" className="form-control" ref={(input)=> this.getMsg = input} defaultValue={this.props.post.msg} rows="5" placeholder="post here" required/>
                    <br/>
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-primary" onClick={this.handleEdit}>Done</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(EditComponent)