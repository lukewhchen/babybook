import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.login,
});

const mapDispatchToProps = dispatch => ({
  login: user => (dispatch(login(user))),
});

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }


  render () {
    return (
      <div className='login-form'>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input className="email-input" onChange={this.update('email')}
              type='text' value={this.state.email} />
          </label>

          <label>Password:
            <input className="password-input" onChange={this.update('password')}
              type='password' value={this.state.password} />
          </label>

          <button className="login-button" onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(SessionForm);
