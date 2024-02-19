import React from 'react';
import './EmailList.css';

const EmailList = ({ emails }) => {
  return (
    <div className="email-list">
      <h2>E-mails Salvos</h2>
      <ul>
        {emails.map(({ id, email }) => (
          <li key={id}>{email}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
