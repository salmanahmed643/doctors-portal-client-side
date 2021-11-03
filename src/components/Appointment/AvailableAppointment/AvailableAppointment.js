import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import Bookings from '../Bookings/Bookings';


const AvailableAppointment = ({date}) => {
    const [bookings, setBookings] = useState([]);

    useEffect( () => {
        fetch('./availableappointment.json')
        .then(res => res.json())
        .then(data => setBookings(data))
    }, []);
    return (
        <Container sx={{my: 16}}>
            <Typography variant="h4" style={{color: '#10CFE3', fontWeight: '700', marginBottom: '50px'}}>
                Available Appointment on {date.toDateString()}
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        bookings.map(booking => <Bookings
                            key={booking.id}
                            booking={booking}
                            date={date}
                        ></Bookings>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AvailableAppointment;