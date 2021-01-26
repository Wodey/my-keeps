import React,{useState} from 'react';
import "../styles/auth.css";
import {Link, useHistory} from "react-router-dom";
import {useStore} from "../contextProvider";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login} = useStore();
  const history = useHistory();

  const handleLogin = async (e) => {
    try {
    e.preventDefault();
    setError(null);
    setEmail('');
    setPassword('');
    login(email, password);
    history.push('/');
  } catch (err) {
    setError(err.message);
  }
  }
  return (
    <div>
      <form className="form" onSubmit={handleLogin}>
        <span className="title">Login</span>
        <label className="label">
          Email
          <input className="input" onChange={e => setEmail(e.target.value)} value={email} type="email"/>
        </label>
        <label className="label">
          Password
          <input className="input" onChange={e => setPassword(e.target.value)} value={password} type="password"/>
        </label>
        <button className="submit">Login</button>
        {error && <span className="error">{error}</span>}
        <Link to="/register">
          <span className="option">
          Dont have account? Sign up
          </span>
        </Link>
      </form>
    </div>
  )
};
