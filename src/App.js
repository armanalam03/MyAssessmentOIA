import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster/>
      <LoginPage />
    </div>
  );
}

export default App;
