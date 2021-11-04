import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Featured></Featured>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;