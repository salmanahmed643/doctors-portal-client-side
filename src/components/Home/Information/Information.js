import { Container } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Information = () => {
    return (
        <>
            <Container sx={{my: 16}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Card  style={{backgroundColor: "#1BC2BC", color: "#fff"}} sx={{ minWidth: 275 }}>
                                    <CardContent style={{height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                                            <Box sx={{mr: 3}}>
                                                <i style={{fontSize: 60}} className="far fa-clock"></i>
                                            </Box>
                                            <Box>
                                                <Typography variant="h5" sx={{fontSize: '18px', textTransform: 'capitalize', fontWeight: 700}}>
                                                    opening hours
                                                </Typography>
                                                <Typography variant="p" sx={{fontSize: '12px', display: 'block', my: 1}}>
                                                    Lorem Ipsum is simply <br />
                                                    dummy text of the pri
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box>
                                <Card  style={{backgroundColor: "#3A4256", color: "#fff"}} sx={{ minWidth: 275 }}>
                                    <CardContent style={{height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Box sx={{mr: 3}}>
                                                <i style={{fontSize: 60}} className="fas fa-map-marker-alt"></i>
                                            </Box>
                                            <Box>
                                                <Typography variant="h5" sx={{fontSize: '18px', textTransform: 'capitalize', fontWeight: 700}}>
                                                    visit our location
                                                </Typography>
                                                <Typography variant="p" sx={{fontSize: '12px', display: 'block', my: 1}}>
                                                    Brooklyn, NY 10036, United States
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box>
                                <Card  style={{backgroundColor: "#1BC2BC", color: "#fff"}} sx={{ minWidth: 275 }}>
                                    <CardContent style={{height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Box sx={{mr: 3}}>
                                                <i style={{fontSize: 60}} className="fas fa-phone-volume"></i>
                                            </Box>
                                            <Box>
                                                <Typography variant="h5" sx={{fontSize: '18px', textTransform: 'capitalize', fontWeight: 700}}>
                                                    contact us now
                                                </Typography>
                                                <Typography variant="p" sx={{fontSize: '12px', display: 'block', my: 1}}>
                                                    +000 123 456789
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Information;