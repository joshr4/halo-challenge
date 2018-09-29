import React from 'react';
import { Button } from 'react-bootstrap';
import UserForm from './UserForm.jsx'

export const UserControl = props => {
  const { login, user, logout, errorMessage, loginPageName, handleLoginName } = props;
  return (
    <div>
      <div className="nav-bar">
        <p className="logo">The Key-Value Getter-Setter Site</p>
        {!!user ? (
          <div className="nav-buttons">
            <p>Currently logged in as: {user.username}</p>
            <Button onClick={logout} bsStyle="primary">
              Log out
          </Button>
          </div>
        ) : (
            <div className="nav-buttons">
              <Button onClick={() => handleLoginName('login')} bsStyle="primary">
                Login
            </Button>
              <Button onClick={() => handleLoginName('signup')} bsStyle="primary">
                Signup
            </Button>
            </div>)}
      </div>
      {!!user ? null : (
          <UserForm login={login} errorMessage={errorMessage} loginPageName={loginPageName} />
        )}
    </div>
  );
};

export default UserControl;
