import React from 'react';
import * as authActions from '../../actions/authAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-social/bootstrap-social.css';
import './styles.scss';

import 'animate.css/animate.css';
import 'toastr/build/toastr.css';

import ReactToastr from 'react-toastr';
const {ToastContainer} = ReactToastr;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

class Auth extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      lEmail : '',
      lPassword : '',
      sEmail : '',
      sPassword : '',
      sPhone  : '',
      sUserName : ''
      };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillReceiveProps ({auth}){
    if(auth._id){
      // user is logged in
      this.context.router.push('/');
    }
  }
  showErrorMessage(e, t) {
    this.refs.container.error(
      e, t, {
      timeOut: 30000,
      extendedTimeOut: 10000
    });
  }
  logIn(e){
    e.preventDefault();
    try {
      this.props.actions.localLogIn(this.state.lEmail, this.state.lPassword);
    }
    catch (e){
      this.showErrorMessage(e, "");
    }
    //todo add redirect
  }
  signUp(e){
    e.preventDefault();
    try {
      this.props.actions.localSignUp(
        this.state.sEmail,
        this.state.sUserName,
        this.state.sPassword);
    }
    catch (e){
      // todo toast
      this.showErrorMessage(e, "");
    }
    // todo add redirect
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
        <ToastContainer ref="container"
                        toastMessageFactory={ToastMessageFactory}
                        className="toast-top-right" />
        <div className="box-inner">
          <form  onSubmit={this.logIn}>
            <div className="login form-group">
              {/*<a className="btn btn-block btn-social btn-google">
               <span className="fa fa-google"></span>
               Sign in with Google
               </a>*/}
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
              <button className="btn btn-block btn-danger">
                <i className="fa fa-google"/>
                Sign in with Google
              </button>
            </div>
          </form>
          <form action="" onSubmit={this.signUp}>
            <div className="box-register">
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
              <button className="btn btn-block btn-danger" type="submit" onClick={this.signUp}>Register</button>
            </div>
          </form>

        </div>
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
