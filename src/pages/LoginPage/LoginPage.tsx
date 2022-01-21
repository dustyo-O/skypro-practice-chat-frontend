import { FC } from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';

import './LoginPage.css';

export const LoginPage: FC = () => {
  return (
    <div className="LoginPage">
      <LoginForm/>
    </div>
  );
};
