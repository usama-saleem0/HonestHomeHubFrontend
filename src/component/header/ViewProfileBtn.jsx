// CustomMenu.jsx

import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'
const ViewProfileBtn = () => {
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const LogoutHandle = () => {

        localStorage.clear();
        handleClose()
        navigate('/')
        window.location.reload();
        // window.location.href = 'https://honesthomehub.com/';
    }

    return (
        <div>
            {/* <Button onClick={handleClick}>

            </Button> */}
            <IconButton
                onClick={handleClick}
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/* {menuItems.map((item, index) => ( */}
                <MenuItem onClick={LogoutHandle}>
                    Logout
                </MenuItem>
                
                


                {/* ))} */}
            </Menu>
        </div>
    );
};

export default ViewProfileBtn;
