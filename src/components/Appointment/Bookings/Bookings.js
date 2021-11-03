import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';




const Bookings = ({booking, date}) => {
    const {name, time, space} = booking;

    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false)
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{py: 5}}>
                    <Typography style={{color: '#10CFE3'}} variant="h6">
                        {name}
                    </Typography>
                    <Typography variant="h6" sx={{mt: 2, fontSize: 16, fontWeight: 'bold'}}>
                        {time}
                    </Typography>
                    <Typography variant="h6" sx={{color: 'text.disabled', textTransform: 'uppercase', typography: 'subtitle2', my: 2, fontSize: 12}}>
                        {space} spaces available
                    </Typography>
                    <Link to="/appointment" style={{textDecoration: 'none'}}>
                        <Button onClick={handleBookingOpen} sx={{px: 3, py: 1}} style={{backgroundColor: '#13D1D0', color: '#fff', textTransform: 'uppercase'}}> Book appointment </Button>
                    </Link>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking} 
                openBooking={openBooking} 
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
    );
};

export default Bookings;