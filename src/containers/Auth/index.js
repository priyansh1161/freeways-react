import React from 'react';

import 'bootstrap-social/bootstrap-social.css';
import './styles.scss';

class Auth extends React.Component {
  render() {
    return (
      <div className="box-auth">
        <div className="box-inner">
          <div className="login form-group">
            {/*<a className="btn btn-block btn-social btn-google">
              <span className="fa fa-google"></span>
              Sign in with Google
            </a>*/}
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button className="btn btn-block btn-danger">Login</button>
            <div className="text-center text-muted">OR</div>
            <button className="btn btn-block btn-danger">
              <i className="fa fa-google"></i>
              Sign in with Google
            </button>
          </div>
          <div className="box-register">
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <input type="text" placeholder="Phone Number"/>
            <button className="btn btn-block btn-danger">Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;