// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import '../styles/globals.css'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import postReducer from '../redux/reducer/postReducer'

const store = process.browser ? createStore(postReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) : createStore(postReducer)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>   
      <Component {...pageProps} />
    </Provider>
    )
}

export default MyApp
