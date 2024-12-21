import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useFeedBacks from '../../redux/Providers/FeedBacksProviders';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Slide } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog() {
  const { confirm_Open, setConfirm, confirmContent } = useFeedBacks();

  const handleClose = () => {
    setConfirm(false);
  };

  return (
    <React.Fragment>
      {
        confirm_Open && (
          <>
            <Dialog
              open={confirm_Open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              TransitionComponent={Transition}
              keepMounted
            >
              {confirmContent?.component ? (
                <Box sx={{
                  p: 5,
                }}>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                      position: 'absolute',
                      right: 8,
                      top: 6,
                      color: theme.palette.grey[500],
                    })}
                  >
                    <CloseIcon />
                  </IconButton>
                  {confirmContent?.component()}
                </Box>
              ) : (
                <>
                  <DialogTitle id="alert-dialog-title">
                    {confirm_Open && confirmContent?.title}
                  </DialogTitle>

                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: theme.palette.grey[500],
                    })}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {confirm_Open && confirmContent?.content}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    {confirm_Open &&
                      confirmContent?.actions?.map((action, index) => (
                        <div key={index}>
                          <Button
                            variant={action.variant && action.variant}
                            sx={action.sx}
                            onClick={() => {
                              action.handler();
                              setConfirm(false);
                            }}
                          >
                            {action?.lable}
                          </Button>
                        </div>
                      ))}
                  </DialogActions>
                </>
              )}
            </Dialog>
          </>
        )
      }

    </React.Fragment>
  );
}

