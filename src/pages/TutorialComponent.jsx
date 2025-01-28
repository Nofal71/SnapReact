import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { snap_features } from 'snap-react';

const TutorialComponent = () => {
  const { setSnackBar, setAlert, setConfirm, setNewConfirm } = snap_features();

  const handleFormSubmit = (formData) => {
    console.log('Form Submitted with Data:', formData);
    setAlert('Form Submitted Successfully!', 'success');
  };

  return (
    <Box p={5}>
      <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', textAlign: 'center' }}>
        SnapReact Tutorial Guide
      </Typography>

      <Stack spacing={4}>
        {/* SnackBar Section */}
        <Box>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            1. Open SnackBar:
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            The SnackBar is a temporary message that appears at the bottom of the screen to provide feedback to the user.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setSnackBar(true, "Snack Opened", () => setAlert("Snack Bar Undo Done", "info"))}
              sx={{ mb: 2 }}
            >
              Open SnackBar with Undo
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setSnackBar(true, "Snack Opened")}
              sx={{ mb: 2 }}
            >
              Open SnackBar
            </Button>
          </Stack>
        </Box>

        {/* Alert Section */}
        <Box>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            2. Display Alert:
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            Alerts notify the user with messages indicating success, failure, or other statuses.
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setAlert('Form Submitted Successfully!', 'success')}
            sx={{ mb: 2 }}
          >
            Show Success Alert
          </Button>
        </Box>

        {/* Confirm Dialog Section */}
        <Box>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            3. Open Confirm Dialog:
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            The Confirm dialog allows you to show a message and ask for user confirmation with multiple actions.
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={() =>
              setConfirm(true, 'Test Confirmation', 'Are you sure you want to continue?', [
                { lable: 'Yes', sx: { backgroundColor: 'primary.light' }, variant: 'contained', handler: () => setAlert("Confirmed", 'success') },
                { lable: 'No', sx: { backgroundColor: 'primary.light' }, handler: () => setAlert("Cancelled", 'error') },
              ])
            }
            sx={{ mb: 2 }}
          >
            Open Confirm Dialog
          </Button>
        </Box>

        {/* Custom Modal Section */}
        <Box>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            4. Open New Custom Modal with Form:
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            You can also create custom modals with forms or custom components for more personalized actions.
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={() =>
              setNewConfirm(true, (
                <Box textAlign="center">
                  <Typography variant="h6" sx={{ color: 'text.primary' }}>Confirm Form</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleFormSubmit({ name: 'John', email: 'john@example.com' })}
                    sx={{ mt: 2 }}
                  >
                    Submit Form
                  </Button>
                </Box>
              ))
            }
            sx={{ mb: 2 }}
          >
            Open New Custom Modal
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default TutorialComponent;
