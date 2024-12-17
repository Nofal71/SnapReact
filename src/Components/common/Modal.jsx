import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useFeedBacks from '../../redux/Providers/FeedBacksProviders';

export default function AlertDialog() {

  const { confirm_Open, setConfirm, confirmContent } = useFeedBacks()

  const handleClose = () => {
    setConfirm(false)
  };

  return (
    <React.Fragment>
      <Dialog
        open={confirm_Open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {confirm_Open && confirmContent?.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {confirm_Open && confirmContent?.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {confirm_Open && confirmContent?.actions?.map((action, index) => (
            <div key={index}>
              <Button sx={action.sx} onClick={() => {
                action.handler()
                setConfirm(false)
              }}>
                {action?.lable}
              </Button>
            </div>
          ))}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
