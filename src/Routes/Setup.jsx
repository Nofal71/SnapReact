import { Button, Typography } from '@mui/material';
import React from 'react';
import useFeedBacks from '../redux/Providers/FeedBacksProviders';

const Setup = () => {
  const { setAlert, setConfirm } = useFeedBacks();

  const actions = [
    { lable: 'Save', handler: () => setAlert('Saved', 'success'), sx: { color: 'green' } },
    { lable: 'Cancle', handler: () => setAlert('Cancled', 'info'), sx: { color: 'red', backgroundColor: 'pink' } },
  ]

  return (
    <>
      <h1>React Template</h1>
      <Typography>MUI TEST</Typography>

      <Button onClick={() => setAlert('Alert Opens Success', 'success')}>
        Open Alert
      </Button>
      <Button onClick={() => setConfirm(true, 'title', 'aasjjjjjjjjjj sjajksnlaks         aklsnlkasndklas       saklxm', actions)}>
        Open Alert Dialogue
      </Button>

    </>
  );
};

export default Setup;
