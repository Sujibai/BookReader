import * as React from 'react';
import { styled, alpha , createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import * as Icons from '@mui/icons-material';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useSideMenu } from '../SideMenu/SideMenuContext';
import { getGlobalSearchQuery, setGlobalSearchQuery } from '../../context/AppData';


const drawerWidth: number = 240;
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    display: 'flex',
    alignItems: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(0.5, 1, 0.5, 1),
      // paddingLeft: theme.spacing(2), 
      // paddingRight: theme.spacing(0),
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '32ch',
        '&:focus': {
          width: '32ch',
        },
      },
    },
  }));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

interface TopBarProps{
  TopTitle:string;
}

function TopBar(props:TopBarProps){
  let GlobalSearchQuery = getGlobalSearchQuery()
    const {TopTitle} = props
    const { open, toggleOpen } = useSideMenu();
    const [searchValue, setSearchValue] = React.useState('');
    const handleSearch = () => {
      if (searchValue ==null || searchValue ===''){
        
      }else{
        setGlobalSearchQuery(searchValue)
      }
      console.log(searchValue)
      console.log('click')
      console.log(GlobalSearchQuery)
      const url = `/admin/search`;
      window.location.href = url
    };
    const handleSearchButtonClick = () => {
      handleSearch();
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
          handleSearch();
      }
    };
    return(
        <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" height="100%">
        <Box sx={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleOpen}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <Icons.Menu />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
          >
            {TopTitle}
          </Typography>
          </Box>
          <Box sx={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', marginLeft:'20px' }}>
          <Search>
            <StyledInputBase
              placeholder={GlobalSearchQuery}
              inputProps={{ 'aria-label': 'search' }}
              onKeyDown={handleKeyPress}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <IconButton 
            onClick={handleSearchButtonClick}
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              right: 0, 
            }}>
          <Icons.Search /></IconButton>
          </Search>
          </Box>
          <Box>
          </Box>
          <Box sx={{ justifyContent: 'flex-end' }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Icons.Notifications />
            </Badge>
          </IconButton>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
    )
}

export default TopBar;