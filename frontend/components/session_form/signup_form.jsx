import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { first_name: "", last_name: "", email: "", password: "", gender: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createUserObject = this.createUserObject.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.createUserObject();
    this.props.signup(user);
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
      <div id='right-side-login'>
        <div id="a_signup_form">
          <h2>Sign Up</h2>
          <h4>It's free and always will be.</h4>
          <form onSubmit={this.handleSubmit}>
            <span>
              <input type='text'
                    placeholder='First name'
                    ref={(input) => this.first_name = input}></input>
              <input type='text'
                    placeholder='Last name'
                    ref={(input) => this.last_name = input}></input>
            </span>

            <input type='text'
                  placeholder='Email address'
                  ref={(input) => this.email = input}></input>
            <input type='password'
                  placeholder='Password'
                  ref={(input) => this.password = input}></input>

                <div className="gender-selector">
              <select defaultValue='gender'
                      ref={(input) => this.gender = input}>
                <option disabled value='gender'>Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>

            <button id='signup-button'>Sign Up</button>
          </form>
        </div>
      </div>
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
    signup: (user) => dispatch(signup(user))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
