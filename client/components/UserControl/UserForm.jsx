import React from 'react';
import { Button, Alert, FormControl, ControlLabel } from 'react-bootstrap';

const UserForm = props => {
  const { login, errorMessage, loginPageName } = props;
  return (
    <form className="login-form" onSubmit={login} name={loginPageName}>
      <div>
        <ControlLabel>Username</ControlLabel>
        <FormControl
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="username"
        />
      </div>
      <div>
        <ControlLabel>Password</ControlLabel>
        <FormControl
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="password"
        />
      </div>
      <div>
        <Button id="login-btn" type="submit" bsStyle="primary">
          {loginPageName}
        </Button>
      </div>
      {!!errorMessage ? (
        <Alert id="login-errorMessage" bsStyle="warning">{errorMessage}</Alert>
      ) : null}
    </form>
  );
};

export default UserForm;
