import React, { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert, Backdrop, Box, Button, CircularProgress, Grid, Paper, Snackbar, TextField, Typography } from '@mui/material';

import { loginStart, loginInit } from '../../store/login/actions';
import { loginDataSelector } from '../../store/login/selectors';

import './LoginForm.css'

const DEFAULT_REGISTER_FORM = {
  login: '',
  password: '',
};

export const LoginForm: FC = () => {
  const [form, setForm] = useState(DEFAULT_REGISTER_FORM);
  const loginData = useSelector(loginDataSelector);
  const dispatch = useDispatch();

  const { status, user } = loginData;

  const handleRestart = useCallback(() => {
    dispatch(loginStart());
  }, [dispatch]);

  const onFieldChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleRegisterClick = useCallback(() => {
    dispatch(loginInit(form));
  }, [dispatch, form]);

  return (
    <Box className="LoginForm">
      {
        status !== 'success' ? (
          <>
            <Typography variant="h6" component="h6">
              Вход на сайт
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="login"
                  label="Логин"
                  variant="outlined"
                  fullWidth
                  onChange={onFieldChange}
                  value={form.login}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="password"
                  type="password"
                  label="Пароль"
                  variant="outlined"
                  fullWidth
                  onChange={onFieldChange}
                  value={form.password}
                />
              </Grid>
              <Grid item xs={0} sm={8}>

              </Grid>
              <Grid item xs={12} sm={4}>
                <Button fullWidth variant="contained" onClick={handleRegisterClick}>Войти</Button>
              </Grid>
            </Grid>
          </>
        ) : (
          <Paper elevation={3} className='LoginForm-Success'>
            <Typography variant="h6" component="h6">
              Вы вошли как { user?.login }
            </Typography>
            <Typography variant="h6" component="h6">
              <Link to="/">На главную</Link>
            </Typography>
          </Paper>
        )
      }
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={status === 'progress'}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={status === 'error'} autoHideDuration={6000}>
        <Alert onClose={handleRestart} severity="error" sx={{ width: '100%' }}>
          Ошибка при входе, попробуйте еще раз
        </Alert>
      </Snackbar>
    </Box>
  );
}
