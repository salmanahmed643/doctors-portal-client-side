import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Spinner from '../../Shared/Spinner/Spinner'


const Register = () => {
    const [logInData, setLogInData] = useState({});
    const {registerUser, isLoading, user, authError} = useAuth();
    const login = 'https://i.ibb.co/NT38L57/login.png';


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...logInData};
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }

    const handleLoginSubmit = e => {
        if(logInData.password !== logInData.password2){
            alert('Your password did not match');
            return
        }
        registerUser(logInData.email, logInData.password)
        e.preventDefault();
    }
    return (
        <>
          <Navigation></Navigation>
            <Box>
                <Container sx={{my: 16}}>
                    <Box sx={{flexGrow: 1}}>
                        {/* login form */}
                        <Grid container spacing={2} sx={{justifyContent: 'center', alignItems: 'center'}}>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Box>
                                        <Typography sx={{fontSize: '20px', fontWeight: 'bold', mb: 8}} variant='body1'>
                                            Register
                                        </Typography>
                                    </Box>
                                    <Box>
                                        {
                                            user?.email &&
                                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                                <Alert severity="success" color="info">
                                                    Register Successfully
                                                </Alert>
                                            </Box>
                                        }
                                        {
                                            !isLoading &&
                                            <form onSubmit={handleLoginSubmit}>
                                                <TextField 
                                                    label="Your Email"
                                                    name="email"
                                                    type="email"
                                                    onChange={handleOnChange}
                                                    variant="standard"
                                                    sx={{width: '75%', mb: 2}} 
                                                />
                                                <TextField
                                                    label="Your Password"
                                                    name="password"
                                                    type="password"
                                                    onChange={handleOnChange}
                                                    variant="standard"
                                                    sx={{width: '75%', mb: 2}} 
                                                    autoComplete="current-password"
                                                />
                                                <TextField
                                                    label="Confirm Password"
                                                    name="password2"
                                                    type="password"
                                                    onChange={handleOnChange}
                                                    variant="standard"
                                                    sx={{width: '75%'}} 
                                                    autoComplete="current-password"
                                                />
                                                <Button 
                                                    sx={{px: 3, py: 1, width: '75%', mt: 5}} 
                                                    style={{backgroundColor: '#13D1D0', color: '#fff', textTransform: 'uppercase'}}
                                                    type="submit"
                                                    > Register 
                                                </Button> <br />
                                                <NavLink to="/login" style={{textDecoration: 'none'}}>
                                                    <Button size="small"> Already Registered? Login </Button>
                                                </NavLink>
                                            </form>
                                        }
                                        {
                                            isLoading && <Spinner/>
                                        }
                                        {
                                            authError && <Alert severity="error">{authError}</Alert>
                                        }
                                    </Box>
                                </Box>
                            </Grid>
                            {/* Login img */}
                            <Grid item xs={12} md={6}>
                                <img style={{width: '100%'}} src={login} alt="" />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Register;