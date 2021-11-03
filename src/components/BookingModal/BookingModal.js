import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #10CFE3',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ({openBooking, handleBookingClose, booking, date}) => {
  const {name, time} = booking;


  const handleBookingSubmit = e => {
    alert("submiting");
    e.preventDefault();
    handleBookingClose()
  }

    return (
        <>
          <Modal
              sx={{width: '100%'}}
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openBooking}
              onClose={handleBookingClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}>
              <Fade in={openBooking}>
                <Box sx={style}>
                  <Box sx={{textAlign: 'center', p: 3}}>
                    <Typography sx={{mb: 3, color: '#10CFE3'}} id="transition-modal-title" variant="h5" component="h2">
                      {name}
                    </Typography>
                    {/* form start */}
                    <form onSubmit={handleBookingSubmit}>
                      <TextField disabled size="small" sx={{mb: 3}} fullWidth label={time} id="fullWidth" />
                      <TextField size="small" sx={{mb: 3}} fullWidth label="Phone Number" id="fullWidth" />
                      <TextField size="small" sx={{mb: 3}} fullWidth label="Your Name" id="fullWidth" />
                      <TextField size="small" sx={{mb: 3}} fullWidth label="Email" id="fullWidth" />
                      <TextField sx={{mb: 5}} disabled size="small" defaultValue={date.toDateString()} fullWidth id="fullWidth" />
                      <Box style={{textDecoration: 'none'}}>
                        <Button type="submit" sx={{px: 7, py: 1}} style={{backgroundColor: '#13D1D0', color: '#fff', textTransform: 'uppercase'}}> Send </Button>
                      </Box>
                    </form>
                    {/* form end */}
                  </Box>
                </Box>
              </Fade>
            </Modal>
        </>
    );
};

export default BookingModal;