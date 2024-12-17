import { Button, Typography } from '@mui/material';
import React from 'react';
import useFeedBacks from '../../redux/Providers/FeedBacksProviders';

const Home = () => {
  const { setNewConfirm, setConfirm, setAlert , toggleTheme} = useFeedBacks();

  return (
    <div>
      <Button
        onClick={() => {
          setNewConfirm(true, () => (
            <>
              <Typography>Hello Welcome to the New Confirm Dialog</Typography>
            </>
          ));
        }}
      >
        Open New Confirm
      </Button>
      <Button
        onClick={() => {
          setConfirm(true, 'Simple Dialogue', 'data ...................................................')
        }}
      >
        Open Confirm
      </Button>
      <Button onClick={() => setAlert('This is Reusable Alert' , 'success')}>Open Alert</Button>
      <Button onClick={() => toggleTheme('dark')}>Toggle Theme</Button>
    </div>
  );
};

export default Home;
