import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DELETE_POST, EDIT_POST }  from '../redux/actions/actionsConst' 
import { postAction } from '../redux/actions/actionPreform'
class Post extends Component {
    render() {
        return (
            <div className="col-auto">
                <br/><br/>
                <div className="card"> 
                    <div className="card-body"> 
                        <h1 className='card-text'>Post title:   {this.props.post.title}</h1>
                        <br/>
                        <h4 className='card-text'>Post message: {this.props.post.msg}</h4>
                    <div className='d-flex justify-content-end'> 
                        {/* <button className="btn btn-warning" onClick={()=> this.props.dispatch({type: EDIT_POST, id: this.props.post.id})}>Edit</button>
                        <button className="btn btn-danger" onClick={()=> this.props.dispatch({type: DELETE_POST, id: this.props.post.id})}>Delete</button> */}
                        <button className="btn btn-warning" onClick={ () => this.props.postAction(EDIT_POST, this.props.post.id) }>Edit</button>
                        <button className="btn btn-danger" onClick={ () => this.props.postAction(DELETE_POST, this.props.post.id) }>Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    postAction
}


export default connect(null, mapDispatchToProps)(Post)