import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class ASignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { first_name: "", last_name: "", email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createUserObject = this.createUserObject.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.createUserObject();
    this.props.processForm(user);
  }

  createUserObject(){
    const first_name = this.first_name.value;
    const last_name = this.last_name.value;
    const email = this.email.value;
    const password = this.password.value;
    return { first_name, last_name, email, password };
  }

  render(){
    return(
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

          <div>
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
    );
  }
}

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    fromType: 'signup',
    navLink: <Link to="/login">Log In Here</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(signup(user))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ASignupForm);
