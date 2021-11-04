import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TestimonialCard = ({testimonial}) => {
    const {name, description, img, city} = testimonial
    return (
        <>
        
            <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{py: 5, px: 2}} >
                    <Box>
                        <Box>
                            <Typography sx={{color: 'text.secondary'}} variant="p">
                                {description}
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4}}>
                            <img style={{width: '60px'}} src={img} alt="" />
                            <Box sx={{ml: 2}}>
                                <Typography sx={{color: '#10CFE3', textTransform: 'capitalize'}} variant="h6">
                                    {name}
                                </Typography>
                                <Typography sx={{textTransform: 'capitalize', fontSize: '16px'}} variant="h6">
                                    {city}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    );
};

export default TestimonialCard;