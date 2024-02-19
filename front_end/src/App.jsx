import React, { useState, useEffect } from 'react';
import EmailForm from './components/EmailForm';
import EmailList from './components/EmailList';
import './App.css';

const App = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await fetch('http://localhost:3001/email');
      if (!response.ok) {
        throw new Error('Erro ao buscar emails do backend');
      }
      const data = await response.json();
      setEmails(data);
    } catch (error) {
      console.error('Erro ao buscar emails do backend:', error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const handleSubmitEmail = async (email) => {
    try {
      const response = await fetch('http://localhost:3001/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        throw new Error('Erro ao enviar email para o backend');
      }
      const data = await response.json();
      setEmails([...emails, data]);
    } catch (error) {
      console.error('Erro ao enviar email para o backend:', error);
    }
  };

  return (
    <div className="app">
      <EmailForm onSubmit={handleSubmitEmail} />
      <EmailList emails={emails} />
    </div>
  );
};

export default App;
