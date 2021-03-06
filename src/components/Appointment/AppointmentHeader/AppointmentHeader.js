import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';



const AppointmentHeader = ({date, setDate}) => {
    const chair = 'https://i.ibb.co/YZgRsmW/chair.png'
    return (
        <>
            <Container sx={{my: 8}}>
                <Grid container spacing={2}>
                    <Grid item xs ={12} md={5}>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs ={12} md={7}>
                        <img style={{width: '100%'}} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AppointmentHeader;