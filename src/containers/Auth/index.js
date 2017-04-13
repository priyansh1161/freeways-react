import React from 'react';

class Auth extends React.Component {
  render() {
    return (
      <div className="box-auth">
        <div className="login">
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button className="btn btn-danger">Login</button>
        </div>
        <div className="register"></div>
      </div>
    );
  }
}

export default Auth;