import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const [testimonialCard, setTestimonialCard] = useState([]);

    useEffect( () => {
        fetch('./testimonialcard.json')
        .then(res => res.json())
        .then(data => setTestimonialCard(data))
    }, []);

    return (
        <>
            <Container sx={{my: 16}}>
                <Box sx={{flexGrow: 1}}>
                    <Grid>
                        <Box sx={{textAlign: 'left'}}>
                            <Typography sx={{textTransform: 'uppercase', fontSize: '16px', fontWeight: 'bold', color: '#10CFE3', mb: 1}} variant="h6">
                                testimonial
                            </Typography>
                            <Typography sx={{textTransform: 'capitalize', fontWeight: 500, fontSize: '25px'}} variant="h5">
                                what's our patients <br />
                                says
                            </Typography>
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{flexGrow: 1, mt: 6}}>
                    <Grid container spacing={2}>
                        {
                            testimonialCard.map(testimonial => <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                            ></TestimonialCard>)
                        }
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Testimonial;