import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StartButtons } from '../../components/StartButtons/StartButtons';
import { tokenSelector } from '../../store/login/selectors';

import './StartPage.css';

export const StartPage: FC = () => {
  const token = useSelector(tokenSelector);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [navigate, token]);

  return (
    <div className="StartPage">
      <StartButtons />
    </div>
  );
};
