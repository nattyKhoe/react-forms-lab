import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleLogin =(event)=> {
    event.preventDefault();
    (this.state.username && this.state.password) ? (
    this.props.handleLogin(this.state.username, this.state.password)
    ) : null;
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
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputUserChange} required/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputPasswordChange} required/>
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
