import React, { useState, ChangeEvent, FormEvent } from 'react';
import './EmailForm.css';

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

const EmailForm: React.FC<EmailFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="email-form">
      <h2>Armazenar e-mail</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default EmailForm;
