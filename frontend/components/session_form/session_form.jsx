import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.login
});

const mapDispatchToProps = dispatch => ({
  login: user => (dispatch(login(user)))
});

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.checkErrors = this.checkErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      email: "luke@gmail.com",
      password: "123456"};
    this.props.login(demoUser);
  }

  handleErrors() {
    return (<p className='login-error'>{this.props.errors[0]}</p>);
  }

  checkErrors() {
    return (this.props.errors.length > 0);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render () {
    return (
        <form className='login-form' onSubmit={this.handleSubmit}>
          {this.checkErrors() ? this.handleErrors() : null}

          <label>Email:
            <input onChange={this.update('email')}
              type='text' value={this.state.email} />
          </label>

          <label>Password:
            <input onChange={this.update('password')}
              type='password' value={this.state.password} />
          </label>

          <button className="login-button" onClick={this.handleSubmit}>Log In</button>
          <button className="login-button" onClick={this.handleDemo}>Demo</button>
        </form>
    );
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(SessionForm);
