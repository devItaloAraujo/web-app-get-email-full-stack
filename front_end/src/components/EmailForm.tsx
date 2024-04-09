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
      <h2>Store emails</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Type your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Save on database</button>
      </form>
    </div>
  );
};

export default EmailForm;
