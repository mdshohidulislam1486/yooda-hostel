import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Yooda Hostel
                    </Typography>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}> 
                    <Button color="inherit">Login</Button>
                    <Link to='/addStudent'><Typography sx={{mx:2}}>Add-Student </Typography></Link>
                    <Link to='/addMeal'><Typography>Add-Meal </Typography></Link>
                    </Box>
                    </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;