// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux'

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
