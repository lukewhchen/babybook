import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { first_name: "", last_name: "", email: "", password: "", gender: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createUserObject = this.createUserObject.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.clearErrors();
    const user = this.createUserObject();
    this.props.signup(user);
  }

  handleErrors() {
    if (!this.props.errors.length > 0) return null;
    return (<p className='signup-error'>{this.props.errors[0]}</p>);
  }

  createUserObject(){
    const first_name = this.first_name.value;
    const last_name = this.last_name.value;
    const email = this.email.value;
    const password = this.password.value;
    const gender = this.gender.value;
    return { first_name, last_name, email, password, gender };
  }

  render(){

    return(
      <form className="signup_form" onSubmit={this.handleSubmit}>
        <h2>Join Us</h2>
        <h4>It's joyful and always will be.</h4>
          <input type='text' placeholder='  First name'
                  ref={(input) => this.first_name = input}/>
          <input type='text' placeholder='  Last name'
                  ref={(input) => this.last_name = input}/>
          <input type='text' placeholder='  Email address'
                ref={(input) => this.email = input}/>
          <input type='password' placeholder='  Password'
                ref={(input) => this.password = input}/>
          <select defaultValue='gender' ref={(input) => this.gender = input}>
            <option disabled value='gender'>Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <button className='signup-button'>Sign Up</button>
          {this.handleErrors()}
      </form>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    errors: state.errors.signup
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
