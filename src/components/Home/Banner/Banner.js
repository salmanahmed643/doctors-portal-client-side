import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bg = 'https://i.ibb.co/CWMbbfR/bg.png';
const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Banner = () => {
    const banner = 'https://i.ibb.co/YZgRsmW/chair.png';
    return (
        <div style={bannerBg}>
            <Container sx={{my: 16,}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <Grid item xs={12} md={5} style={verticalCenter}>
                            <Box sx={{textAlign: 'left'}}>
                                <Typography variant="h3" sx={{textTransform: 'capitalize'}}>
                                    your new smile <br /> starts here
                                </Typography>
                                <Typography variant="p" sx={{color: 'text.secondary', display: 'block', my: 3}}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta architecto eveniet, a, inventore vitae, ducimus consequuntur libero aliquam laborum aliquid corporis minima velit.
                                </Typography> <br />
                                <Button sx={{px: 3, py: 1}} style={{backgroundColor: '#10CFE3', color: '#fff', textTransform: 'uppercase'}}> get appointment </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} style={verticalCenter}>
                            <img style={{width: '100%'}} src={banner} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Banner;