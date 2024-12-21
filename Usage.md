    <Button
      variant='contained'
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
          setConfirm(true, 'Simple Dialogue', 'data')
        }}
      >
        Open Confirm
      </Button>
      <Button onClick={() => setAlert('This is Reusable Alert', 'success')}>Open Alert</Button> 

      <Button
        color='primary'
        variant='contained'
        onClick={() => setSnackBar(true, "Snack Opened", () => setAlert("Snack Bar Undo Done ", "success"))} > Open SnackBar </Button>