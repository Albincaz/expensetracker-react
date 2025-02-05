import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react'; 
import '../Css/Reg.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState(null); 

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Name:', name, 'Email:', email, 'Password:', password);
    if (profilePic) {
      console.log('Profile Picture:', profilePic);
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div className="content">
      <div className="text">Register Form</div>
      <form onSubmit={handleRegisterSubmit}>
        <div className="profile-pic-section">
          <div className="profile-pic-demo">
            {profilePic ? (
              <img src={profilePic} alt="Profile Preview" className="profile-pic-preview" />
            ) : (
              <span>No Profile Picture Selected</span>
            )}
          </div>
          <label htmlFor="profile-pic" className="profile-pic-icon">
            <Camera size={32} />
          </label>
          <input
            type="file"
            id="profile-pic"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleProfilePicChange}
          />
        </div>

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
