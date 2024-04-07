import React from 'react';
import './EmailList.css';

interface Email {
  id: number;
  email: string;
}

interface EmailListProps {
  emails: Email[];
}

const EmailList: React.FC<EmailListProps> = ({ emails }) => {
  return (
    <div className="email-list">
      <h2>E-mails no banco de dados</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>E-mail</th>
          </tr>
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
