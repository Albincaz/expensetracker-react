import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './Components/LoginForm';  // Separate Login form component
import RegisterForm from './Components/RegisterForm';  // Separate Register form component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
