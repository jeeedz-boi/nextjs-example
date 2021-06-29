import { createStore, compose,  applyMiddleware } from 'redux'
import postReducer from '../redux/reducer/postReducer'
import thunk from 'redux-thunk';

const store = process.browser ? 
              createStore(postReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) 
              : createStore(postReducer, applyMiddleware(thunk))

export default store;