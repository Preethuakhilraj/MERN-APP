import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailForm from './components/EmailForm';
import OTPForm from './components/OTPForm';
import HomePage from './components/HomePage';
import './styles.css';
import Main from './components/Main';

function App() {
  const [formType, setFormType] = useState('EmailForm');

  return (
    <Router>
      <div style={{
        backgroundImage: 'url(https://images.pexels.com/photos/18024488/pexels-photo-18024488/free-photo-of-mac-studio-computer-on-a-white-office-desk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        minWidth: '100vw'
      }}>
        <Routes>
          <Route path="/" element={<EmailForm setFormType={setFormType} />} />
          <Route path="/otpform" element={<OTPForm />} />
          <Route path="/home" element={<Main child={<HomePage />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
