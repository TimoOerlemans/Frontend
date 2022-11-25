import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Components/Style.css';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
    <button className='button' onClick={() => loginWithRedirect()}>
      Log In
    </button>
    )
  )
}

export default LoginButton