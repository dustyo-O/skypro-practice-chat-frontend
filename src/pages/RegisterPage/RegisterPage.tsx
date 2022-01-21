import { FC } from 'react';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

import './RegisterPage.css';

export const RegisterPage: FC = () => {
  return (
    <div className="RegisterPage">
      <RegisterForm/>
    </div>
  );
};