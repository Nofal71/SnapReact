import React from 'react'
import useFeedBacks from '../../redux/Providers/FeedBacksProviders'
import { Button } from '@mui/material'

const Home = () => {

  const { setSnackBar, setAlert } = useFeedBacks()

  return (
    <div>
      <Button
        color='primary'
        variant='contained'
        onClick={() => setSnackBar(true, "Snack Opened", () => setAlert("Snack Bar Undo Done ", "info"))} > Open SnackBar </Button>
    </div>
  )
}

export default Home
