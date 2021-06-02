import * as actionType from '../actions/actions' 

const postReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.ADD_POST : 
            return state.concat([action.data])
        case actionType.DELETE_POST: 
            return state.filter((post)=> post.id !== action.id)
        case actionType.EDIT_POST:
            return state.map((post)=> post.id === action.id ? {...post, editing: true} : post)
        case actionType.UPDATE_POST: 
            return state.map((post) => {
                if (post.id === action.id) {
                    console.log('state.data:',post)
                    console.log('action.data:',action.data)
                    return {
                        ...post,
                        title: action.data.newTitle,
                        msg: action.data.newMsg,
                        editing: !post.editing
                    }
                }
                else {
                    return post
                }
            })
        default:
            return state;
    }
}

export default postReducer

