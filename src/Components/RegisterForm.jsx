import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Name:', name, 'Email:', email, 'Password:', password);
  };

  return (
    <div className="content">
      <div className="text">Register Form</div>
      <form onSubmit={handleRegisterSubmit}>
        <div className="field">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="fas fa-user"></span>
          <label>Full Name</label>
        </div>
        <div className="field">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="fas fa-user"></span>
          <label>Email or Phone</label>
        </div>
        <div className="field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="fas fa-lock"></span>
          <label>Password</label>
        </div>
        <div className="field">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span className="fas fa-lock"></span>
          <label>Confirm Password</label>
        </div>
        <button type="submit">Register</button>
        <div className="sign-up">
          Already a member? <Link to="/">Login now</Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
