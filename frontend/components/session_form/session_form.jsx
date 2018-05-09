import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map( (err, idx) => (
          <li key={idx}>{err}</li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>email:
            <input onChange={this.update('email')}
              type='text' value={this.state.email} />
          </label>
          <label>Password:
            <input onChange={this.update('password')}
              type='password' value={this.state.password} />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}


export default withRouter(SessionForm);
