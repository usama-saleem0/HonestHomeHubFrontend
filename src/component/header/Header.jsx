import React from "react";
import "./header.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled, alpha } from '@mui/material/styles';
import ViewProfileBtn from './ViewProfileBtn.jsx'
import BootstrapDropdown from "./dropdown.jsx";
const Header = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    borderRadius:'12px',
    // maxWidth:'70%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(10),
      width: '0%',
    },
    border: '1px solid black',
    flexGrow: 1
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '40ch',
      },
    },
  }));
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search here..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search> */}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
          
           
        {/* <BootstrapDropdown/> */}
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
             
              {/* <Badge badgeContent={0} color="error">
              <NotificationsIcon />

              

           
            </Badge> */}
          </IconButton>
          {/* <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton> */}
          <ViewProfileBtn/>
        </Box>
      </Toolbar>

         

    </AppBar>
  );
};
export default Header;
// <Stack >
//   <Stack flexDirection={'row'}>
//     <Stack
//       ml={2}
//       flexGrow={1}
//     >
//       <SearchInput />
//     </Stack>
//     <Stack
//       mr={2}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           width: 'fit-content',
//           '& svg': {
//             m: 1.5,
//           },
//           '& hr': {
//             mx: 0.5,
//           },
//         }}
//       >
//         <Badge badgeContent={17} color="error">
//         <NotificationsIcon />
//       </Badge>
//         <Divider orientation="vertical" variant="middle" flexItem />
//         <Avatar
//           alt="Remy Sharp"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZOOwgZCtafWlGHkSlYjG278BQU7PEAQVvI1011y9&s"
//         />
//       </Box>
//     </Stack>
//   </Stack>
//   {/* <Divider sx={{ borderColor: "#333333", border: '0px, 0px, 1px, 0px',ml:3, }}/> */}
// </Stack>