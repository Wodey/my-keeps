import React, {useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import {useStore} from "../contextProvider";


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const {register} = useStore();
  const history = useHistory();

  const handleRegister = async (e) => {
    try {
    e.preventDefault();
    setError(null);
    await register(email, password);
    setEmail('');
    setPassword('');
    history.push('/');
  } catch (err) {
    setError(err.message)
  }
  }
  return (
    <div>
      <form className="form" onSubmit={handleRegister}>
        <span className="title">Register</span>
        <label className="label">
          Email
          <input className="input" onChange={e => setEmail(e.target.value)} value={email} type="email"/>
        </label>
        <label className="label">
          Password
          <input className="input" onChange={e => setPassword(e.target.value)} value={password} type="password"/>
        </label>
        <button className="submit">Register</button>
        {error && <span className="error">{error}</span>}
        <Link to="/login">
          <span className="option">
          Have account? Login
          </span>
        </Link>
      </form>
    </div>
  )
};
