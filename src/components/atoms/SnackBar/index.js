import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };


  const buttons = (
    <>
      <Button onClick={handleClick({
        vertical: 'top',
        horizontal: 'right',
      })}>Apply</Button>
    </>
  )

  return (
    <Stack >
      {buttons}
      <Snackbar
        sx={{ width: '20%', marginTop: '-8px' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}


      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Apply Success!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
