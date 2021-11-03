import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = ({service}) => {
    const {name, description, img} = service
    return (
        <>
            <Grid item xs={12} sm={4} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={img}
                        alt="Paella dish"
                        style={{
                            width: 'auto',
                            height: '70px',
                            margin: '0 auto'
                        }}
                    />
                    <CardContent>
                        <Typography sx={{m: 2}} variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>             
            </Grid>
        </>
    );
};

export default Service;