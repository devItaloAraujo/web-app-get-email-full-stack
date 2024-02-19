import React from 'react';
import './EmailList.css';

const EmailList = ({ emails }) => {
  return (
    <div className="email-list">
      <h2>E-mails no banco de dados</h2>
      <table>
        <thead>
          <th>ID</th>
          <th>E-mail</th>
        </thead>
        <tbody>
          {emails.map(({ id, email }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailList;
