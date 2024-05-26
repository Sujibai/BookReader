import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import * as Icons from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import MainListItems from './ListItems';
import { useSideMenu } from './SideMenuContext';

const drawerWidth: number = 240;
const defaultTheme = createTheme();
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        overflowX: 'hidden',
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

interface ListItemProps {
    href: string;
    primary: string;
    isActive?:boolean;
    icon?: React.ReactNode;
  }
interface SideMenuProps {
    items:ListItemProps[];
}

function SideMenu(props:SideMenuProps){
    let {items} = props
    const { open, toggleOpen } = useSideMenu();
    return(
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [2],
            }}
          >
            <IconButton  onClick={toggleOpen}>
                {open?<Icons.ChevronLeft />:<Icons.ChevronRight />}
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems items={items}/>
          </List>
        </Drawer>
    )
}

export default SideMenu;
