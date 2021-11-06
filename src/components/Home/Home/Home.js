import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import Information from '../Information/Information';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <Featured></Featured>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </>
    );
};

export default Home;