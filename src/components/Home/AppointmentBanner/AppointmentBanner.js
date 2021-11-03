import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import appBanner from '../../../images/appointment-bg.png';

const appointmentBanner = {
    background: `url(${appBanner})`,
    marginTop: '175px',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgb(63, 71, 90, 0.9)',
    backgroundBlendMode: 'darken, luminosity'
}


const AppointmentBanner = () => {
    const doctor = "https://i.ibb.co/Tmt2QCS/doctor.png";

    return (
        <>
            <Box style={appointmentBanner} sx={{ flexGrow: 1, mb: 16 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img style={{width: '100%', marginTop: '-150px'}} src={doctor} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: "flex-start", alignItems: 'center'}}>
                            <Box sx={{textAlign: 'left'}}>
                                <Typography variant="h6" sx={{color: '#18D2B1', textTransform: 'uppercase'}}>
                                    appointment
                                </Typography>
                                <Typography variant="h3" sx={{my: 3, color: '#fff'}}>
                                    Make an appointment <br /> Today
                                </Typography>
                                <Typography variant="p" sx={{mb: 3, display: 'block', color: '#fff'}}>
                                    It is a long established fact that a reader will be distractedby the readable content of a page when looking at its
                                </Typography> <br />
                                <Button sx={{px: 3, py: 1}} style={{backgroundColor: '#10CFE3', color: '#fff'}}> Learn More </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default AppointmentBanner;