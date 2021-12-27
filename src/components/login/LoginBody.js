import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../store/actions/auth';

import logo from '../../assets/images/logo1.svg';

const LoginBody = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isLoggedIn);
  // const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const setAuthHandler = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  // useEffect(() => {
  //   if (auth) history.push('/admin');
  // }, [auth]);

  return (
    <div className="LoginBody">
      <div className="form-signin">
        <img className="mb-4" src={logo} alt="" width="150" height="120" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="username" className="visually-hidden">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={credentials.userName}
            onChange={setAuthHandler}
            placeholder="Username"
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control mb-5"
            value={credentials.password}
            onChange={setAuthHandler}
            placeholder="Password"
            required
          />
          <button
            className="w-100 btn btn-lg "
            onClick={() => dispatch(Login(credentials))}
            style={{ background: '#FFAB00' }}
            type="submit">
            {' '}
            Sign in{' '}
          </button>
        </form>
        <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
      </div>
    </div>
  );
};

export default LoginBody;
