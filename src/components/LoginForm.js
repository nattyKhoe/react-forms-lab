import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.props.handleLogin.bind(this);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputUserChange = (event) => {
    this.setState ({
      username: event.target.value
    })
  };

  handleInputPasswordChange = (event) => {
    this.setState ({
      password: event.target.value
    })
  };

  render() {
    return (
      <form onSubmit={this.handleLogin(this.state.username, this.state.password)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleInputUserChange(event)} required/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handleInputPasswordChange(event)} required/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
