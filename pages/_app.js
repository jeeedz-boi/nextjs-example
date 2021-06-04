// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createStore, compose,  applyMiddleware } from 'redux'
import postReducer from '../redux/reducer/postReducer'
import thunk from 'redux-thunk';

const store = process.browser ? 
              createStore(postReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) 
              : createStore(postReducer, applyMiddleware(thunk))

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>   
      <Component {...pageProps}/>

      <style jsx global>{`
        body {
          background:  #f2f2f2;
        }
      `}</style>

    </Provider>
    )
}

export default MyApp
