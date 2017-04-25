import React from 'react';
import * as authActions from '../../actions/authAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OTPModal from './OTPModal';
import 'bootstrap-social/bootstrap-social.css';
import './styles.scss';
import {devBaseURI as baseURI}  from '../../constants/resources';
class Auth extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      lEmail : '',
      lPassword : '',
      sEmail : '',
      sPassword : '',
      sPhone  : '',
      sUserName : '',
      showOTPModal: false
    };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillReceiveProps ({auth}){
    if(auth._id){
      // user is logged in
      if (!auth.verified) {
        this.setState({
          showOTPModal: true
        });
      } else {
        this.context.router.goBack();
      }
    }
  }

  logIn(e){
    e.preventDefault();
    this.props.actions.localLogIn(this.state.lEmail, this.state.lPassword);
  }
  signUp(e){
    e.preventDefault();
    this.props.actions.localSignUp(
      this.state.sEmail,
      this.state.sUserName,
      this.state.sPassword
    );
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="box-auth">
        <div className="box-inner">
          <form  onSubmit={this.logIn} className="login">
            <input type="email"
                   value={this.state.lEmail}
                   placeholder="Email"
                   name="lEmail"
                   onChange={this.handleInputChange}
            />
            <input type="password"
                   value={this.state.lPassword}
                   placeholder="Password"
                   name="lPassword"
                   onChange={this.handleInputChange}
            />
            <button className="btn btn-block btn-danger" type="submit">Login</button>
            <div className="text-center text-muted">OR</div>
          </form>
          <a href={`${baseURI}/auth/auth/google`}>
            <button className="btn btn-block btn-danger">
              <i className="fa fa-google"/>
              Sign in with Google
            </button>
          </a>
          <a href={`${baseURI}/auth/auth/facebook`}>
            <button className="btn btn-block btn-primary">
              <i className="fa fa-facebook"/>
              Sign in with Facebook
            </button>
          </a>
          <form action="" onSubmit={this.signUp} className="box-register">
            <input type="email"
                   value={this.state.sEmail}
                   placeholder="Email"
                   name="sEmail"
                   onChange={this.handleInputChange}
            />
            <input type="text"
                   value={this.state.sUserName}
                   placeholder="Username"
                   name="sUserName"
                   onChange={this.handleInputChange}
            />
            <input type="password"
                   value={this.state.sPassword}
                   placeholder="Password"
                   name="sPassword"
                   onChange={this.handleInputChange}
            />
            {/*<input type="text"*/}
            {/*value={this.state.signUp.phoneNumber}*/}
            {/*placeholder="Phone Number"*/}
            {/*name="sPhone"*/}
            {/*onChange={this.handleInputChange}*/}
            {/*/>*/}
            <button
              className="btn btn-block btn-danger"
              type="submit"
              onClick={this.signUp}>Register</button>
          </form>

        </div>
        <OTPModal show={this.state.showOTPModal}/>
      </div>
    );
  }
}

Auth.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps (state){
  return {
    auth : state.auth
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
