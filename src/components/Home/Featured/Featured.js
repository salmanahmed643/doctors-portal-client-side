import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Featured = () => {
    const treatment = 'https://i.ibb.co/DfJXwVF/treatment.png'
    return (
        <Container sx={{my: 16}}>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item xs={12} md={6}>
                        <img style={{width: '70%', borderRadius: '20px'}} src={treatment} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{textAlign: 'left'}}>
                            <Typography variant="h5" sx={{textTransform: 'capitalize', fontWeight: 'bold'}}>
                                exceptional dental <br />
                                care, on your terms
                            </Typography>
                            <Typography sx={{my: 5, display: 'block', color: 'text.secondary'}} variant="p">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                            </Typography>
                            <Box>
                                <Button sx={{px: 4, py: 1, textTransform: 'capitalize'}} style={{backgroundColor: '#10CFE3', color: '#fff'}}> Learn More </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Featured;