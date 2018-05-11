import React from 'react';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';

// don't need navLink to redirect...
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    fromType: 'login',
    navLink: <Link to="/signup">Sign Up instead</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(login(user))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(SessionForm);
