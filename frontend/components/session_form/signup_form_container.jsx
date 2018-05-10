import React from 'react';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';

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

export default connect(
  mapStateToProps, mapDispatchToProps
)(SessionForm);

// original design connect with session form
// provide signup function
// but i created another_signup_form_container
// focus on signup function only
// so this file is useless now? 
