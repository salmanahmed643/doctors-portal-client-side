import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';




const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <>
            <Box sx={{ flexGrow: 1, mt: 5 }}>
                <Container>
                    <Typography variant="h6" component="div" sx={{color: '#1CC7C1', textTransform: 'uppercase'}}>
                        Our Services
                    </Typography>
                    <Typography variant="h3" component="div" sx={{fontWeight: 500, textTransform: 'capitalize', mb: 10, mt: 2}}>
                        services we provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service
                                key={service.name}
                                service={service}
                            ></Service>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Services;