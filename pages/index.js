import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Component, createRef } from "react";
import FormPost from '../components/formPost'
import AllPost from '../components/allPost'
import {useRouter} from "next/router";
const Home = (props) => {
  const router = useRouter();
  return <ClassHome {...props} router={router}/>;
};

class ClassHome extends Component {
  constructor(props) {
    super(props)
  };
 
  navigateTo = (path) => () => {
    this.props.router.push(`/${path}`)
  }

  render () {
    return (
      <div>
      <Head>
        <title>Jeeedz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <button onClick={this.navigateTo('login')}>Login</button>
      <FormPost/>
      <AllPost/>
    
    </div>
    )
  }
}
export default Home
