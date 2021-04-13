import React, { Component } from "react";

export class LoginClass extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div>
        <h2>Login</h2>
        <button onClick={() => this.props.actions.signIn()}>Login</button>
      </div>
    );
  }
}

export default LoginClass;
