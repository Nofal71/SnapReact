import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { snap_features } from 'snap-react';


const ConfirmComponent = ({ data, onSubmit, onClose }) => {
  const [formData, setFormData] = useState(data || { name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Box>
      <Typography variant="h6">Confirm Form</Typography>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

const Home = () => {

  const { setSnackBar, setAlert, setConfirm, setNewConfirm } = snap_features()

  const handleFormSubmit = (formData) => {
    console.log('Form Submitted with Data:', formData);
    setAlert('Form Submitted Successfully!', 'success');
  };

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
        color="primary"
        variant="contained"
        onClick={() =>
          setNewConfirm(true, <ConfirmComponent data={{ name: '', email: '' }} onSubmit={handleFormSubmit} onClose={() => setNewConfirm(false)} />)
        }
      >
        Open New Modal with Form
      </Button>
    </Box>
  )
}

export default Home
