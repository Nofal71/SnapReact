import React from 'react'
import useFeedBacks from '../../redux/Providers/FeedBacksProviders'
import { Box, Button, Typography } from '@mui/material'

const Home = () => {

  const { setSnackBar, setAlert, setConfirm, setNewConfirm } = useFeedBacks()

  return (
    <Box p={5} display={'flex'} gap={4}>
      <Button
        color='primary'
        variant='contained'
        onClick={() => setSnackBar(true, "Snack Opened", () => setAlert("Snack Bar Undo Done ", "info"))} > Open SnackBar with Undo </Button>
      <Button
        color='primary'
        variant='contained'
        onClick={() => setSnackBar(true, "Snack Opened")} > Open SnackBar </Button>
      <Button
        color='primary'
        variant='contained'
        onClick={() => setConfirm(true, 'Test Dialogue', 'This is Test Confim Dialogue', [
          { lable: 'Action 1', sx: { background: 'primary.light' }, variant: 'contained', handler: () => setAlert("Action One Clicked", 'warning') },
          { lable: 'Action 2', sx: { background: 'primary.light' }, handler: () => setAlert("Action Two Clicked", 'warning') },
        ])} > Open Confirm </Button>
      <Button
        color='primary'
        variant='contained'
        onClick={() => setNewConfirm(true, () => {
          return (
            <>
              <Typography>New Confim Dialogue</Typography>
              <Button onClick={() => setNewConfirm(false)} >Close</Button>
            </>
          )
        })} > Open New Confirm </Button>
    </Box>
  )
}

export default Home
