import { Link } from 'react-router-dom';
import '../App.css';

function LoginForm() {
  return (
    <div className="content">
      <div className="text">Login Form</div>
      <form>
        <div className="field">
          <input type="text" required />
          <span className="fas fa-user"></span>
          <label>Email or Phone</label>
        </div>
        <div className="field">
          <input type="password" required />
          <span className="fas fa-lock"></span>
          <label>Password</label>
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Sign in</button>
        <div className="sign-up">
          Not a member? <Link to="/register">Signup now</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
