import React, { Component } from 'react';
import KeyControl from './KeyControl/KeyControl';
import UserControl from './UserControl/UserControl';
import axios from 'axios';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      errorMessage: null,
      loginPageName: 'login'
    };
  }

  componentDidMount() {}

  handleLoginName = loginPageName => {
    this.setState({ loginPageName: loginPageName, errorMessage: null });
  };

  login = evt => {
    evt.preventDefault();
    const { name, username, password } = evt.target;
    axios
      .post(`/${name}`, { username: username.value, password: password.value })
      .then(res =>
        this.setState({ user: res.data.user, errorMessage: res.data.message })
      )
      .catch(err => console.log(err));
  };

  logout = evt => {
    evt.preventDefault();
    axios
      .get('/logout')
      .then(res => this.setState({ user: null, errorMessage: null }))
      .catch(err => console.log(err));
  };

  render() {
    const { user, errorMessage, loginPageName } = this.state;
    const { login, logout, handleLoginName } = this;
    return (
      <div className="main-app">
        <UserControl
          user={user}
          errorMessage={errorMessage}
          loginPageName={loginPageName}
          login={login}
          logout={logout}
          handleLoginName={handleLoginName}
        />
        {!!user ? <KeyControl /> : null}
      </div>
    );
  }
}
export default App;
