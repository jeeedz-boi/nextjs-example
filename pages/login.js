import styles from '../styles/Home.module.css'
import { Component } from 'react'
import { connect } from 'react-redux'
import { postAction } from '../redux/actions/actionPreform'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { GoogleLogin } from 'react-google-login';

import classNames from 'classnames';
import API from '../services/api' 
import { SET_ACCESS_TOKEN }  from '../redux/actions/actionsConst' 

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      user: null,
      accessToken: '',
      test: null,
    };
    console.log(this.props)
  }

  logout = () => {
    this.setState({
      isUserLoggedIn: false,
      user: null,
      accessToken: '',
    })
  };

  postActions = (actionState, data) => {
    this.props.postAction(actionState, data);
  };

  setAccessToekn = (data) => {
      this.postActions(SET_ACCESS_TOKEN, data);
  };

  socialResponse = (platform) => async (data) => {
    console.log('response',  data.accessToken)
    if (data.accessToken) {
      try {
        const response =  await API.post(`/login/${platform}/redirect`, {accessToken: data.accessToken})
        this.setAccessToekn(response.data.accessToken)
        this.setState({
          isUserLoggedIn: true,
        })
      }
      catch (err) {
          console.log(err)
      }
    }
  };

  onFailure = (error) => {
    console.log(error);
  }

  forFun = async () => {
    try {
      const response =  await API.post(`/test`)
    }
    catch (err) {
      console.log(err)
    }
}

  render() {
      console.log(this.state)
      let content = this.state.isUserLoggedIn ?
          (
              <div>
                  <p>Authenticated</p>
                  <div>
                  <h1>{this.props.posts.accessToken}</h1>
                  </div>
                  <div>
                    <button onClick={this.forFun}>For Fun</button>
                  </div>
                  <div>
                      <button onClick={this.logout} className="btn btn-primary">
                          Log out
                      </button>
                  </div>
                                  
              </div>
          ) :
          (
              <div className='d-flex flex-xl-row flex-column justify-content-center' style={{gap:'2rem'}}>
                  <FacebookLogin
                    appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                    fields="name,email,picture"
                    state={this.state.test}
                    callback={this.socialResponse('facebook')} 
                    disableMobileRedirect={true}
                    isMobile={false}
                    render={(renderProps) => (
                      <a className={classNames("btn mt-4", styles.buttonStyle)} style={{ background: '#1877F2' }} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <img className={styles.logo} src="/images/logo/fb_logo.png"></img>
                            <span className={styles.buttonText} style={{ color: '#fff' }}>
                                &nbsp; Login with Facebook
                            </span>
                      </a>
                    )}
                  />
                  <GoogleLogin
                    clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                    buttonText="Login with Google"
                    onSuccess={this.socialResponse('google')}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    render={(renderProps) => (
                      <a className={classNames("btn mt-4", styles.buttonStyle)} style={{ background: '#ffffff' }} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <img className={styles.logo} src="/images/logo/google_logo.png"></img>
                            <span className={styles.buttonText} style={{ color: '#000000', opacity: '54%' }}>
                                &nbsp; Login with Google
                            </span>
                      </a>
                    )}
                  />
              </div>
          );

      return (
          <div className="App">
              {content}
          </div>
      );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      posts: state
  }
};

const mapDispatchToProps = {
  postAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
