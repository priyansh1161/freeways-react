import React from 'react';
import ModalPrimary from '../../modules/ModalPrimary';
import axios from 'axios';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { devBaseURI as baseURI } from '../../constants/resources'
import * as authActions from '../../actions/authAction';

class OTPModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      otp : '',
      phone : '',
      toggleForms : false,
      msg :''
    };
    this.conditionalRender = this.conditionalRender.bind(this);
    this.phoneVerification = this.phoneVerification.bind(this);
    this.OTPVerification = this.OTPVerification.bind(this);
  }
  phoneVerification(e){
    e.preventDefault();
    axios.get(`${baseURI}/api/v1/otp/${this.state.phone}/${this.props.user._id}`)
      .then(({data}) => {
        if(data.success){
          this.setState({toggleForms:true, msg: 'Please Enter OTP'});
        }
        else {
          this.setState({msg : 'Something went wrong, please try again'});
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({msg : 'Something went wrong, please try again'});
      });
  }
  OTPVerification(e){
    e.preventDefault();
    axios.get(`${baseURI}/api/v1/checkotp/${this.state.otp}/${this.props.user._id}`)
      .then(({data}) => {
        if(data.success){
          this.setState({msg : data.message});
          this.props.actions.phoneVerification(true);
        }
        else
          this.setState({msg : data.message});
      })
      .catch(err => this.setState({msg :err.message}));

  }
  conditionalRender(){
    return this.state.toggleForms ? <form onSubmit={this.OTPVerification}>
      <input type="text"
             placeholder="OTP"
             value={this.state.otp}
             onChange={e => this.setState({otp : e.target.value})}
      />
      <input type="submit" value="Submit OTP" className="btn btn-danger"/>
    </form> : <form onSubmit={this.phoneVerification}>
      <input type="tel"
             placeholder="Phone Number"
             value={this.state.phone}
             onChange={e => this.setState({phone : e.target.value})}
      />
      <input type="submit" value="Send OTP" className="btn btn-danger"/>
    </form>;
  }
  render() {
    return (
      <ModalPrimary doesNotHaveButton={true} show={this.props.show}>
        {this.conditionalRender()}
        <strong style={{color : 'red'}}>{this.state.msg}</strong>
      </ModalPrimary>
    );
  }
}
function mapStateToProps(state){
  return {
    user : state.auth
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OTPModal);
