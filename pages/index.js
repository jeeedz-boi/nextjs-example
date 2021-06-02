import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Component, createRef } from "react";
import FormPost from '../components/formPost'
import AllPost from '../components/allPost'

const Home = (props) => {
  return <ClassHome {...props}/>;
};

class ClassHome extends Component {
  constructor(props) {
    super(props)
  };
  render () {
    return (
      <div>
      <Head>
        <title>Jeeedz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <FormPost/>
      <AllPost/>
    
    </div>
    )
  }
}
export default Home
