import { Box } from '@mui/material';
import React from 'react';
import Header from '../Shared/Header';
import Banner from './Banner';

const Home = () => {
    return (
        <Box>
            <Header></Header>
            <Banner></Banner>    
        </Box>
    );
};

export default Home;