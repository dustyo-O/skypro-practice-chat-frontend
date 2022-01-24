import React, { FC, useCallback } from 'react';
import { Alert, Backdrop, Box, Button, CircularProgress, Grid, Paper, Snackbar, Stack, styled, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { loginSelector } from '../../store/login/selectors';
import { createStatusSelector } from '../../store/chat/selectors';
import { chatCreateRoom } from '../../store/chat/actions';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const StartButtons: FC = () => {
  const login = useSelector(loginSelector);
  const createStatus = useSelector(createStatusSelector);

  const dispatch = useDispatch();

  const handleCreateNewChat = useCallback(() => {
    dispatch(chatCreateRoom());
  }, [dispatch]);

  return (
    <Box className="StartButtons">
      <>
        <Typography variant="h4" component="h4" textAlign={'center'} marginBottom={2}>
          Привет, {login}!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={0} sm={3}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={2}>
              <Item>
                <Button fullWidth variant="contained" onClick={handleCreateNewChat}>Создать новый чат</Button>
              </Item>
              <Item>
                <Button fullWidth variant="contained">Подключиться к существующему</Button>
              </Item>
            </Stack>
          </Grid>
          <Grid item xs={0} sm={3}>
          </Grid>
        </Grid>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={createStatus === 'progress'}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar open={createStatus === 'error'} autoHideDuration={6000}>
          <Alert severity="error" sx={{ width: '100%' }}>
            Ошибка при создании комнаты, попробуйте еще раз
          </Alert>
        </Snackbar>
      </>
    </Box>
  );
}
