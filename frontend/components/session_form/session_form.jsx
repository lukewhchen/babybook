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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(this.state);
  }

  handleErrors() {
    if (!this.props.errors.length > 0) return null;
      return (<h4 className='login-error'>{this.props.errors[0]}</h4>);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render () {
    return (
        <form className='login-form' onSubmit={this.handleSubmit}>
          {this.handleErrors()}

          <label>Email:
            <input onChange={this.update('email')}
              type='text' value={this.state.email} />
          </label>

          <label>Password:
            <input onChange={this.update('password')}
              type='password' value={this.state.password} />
          </label>

          <button className="login-button" onClick={this.handleSubmit}>Log In</button>
        </form>
    );
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(SessionForm);
