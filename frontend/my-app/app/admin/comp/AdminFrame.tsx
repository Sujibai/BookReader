// "use client";

import * as Icons from '@mui/icons-material';
import { SideMenuProvider } from './SideMenu/SideMenuContext';
import React, { Children } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import SideMenu from "./SideMenu/SideMenu"
import TopBar from './AppBar/TopBar';

interface ListItemProps {
    href: string;
    primary: string;
    isActive?:boolean;
    icon?: React.ReactNode;
  }
interface SideMenuProps {
    items:ListItemProps[];
    aaa?:string;
}
interface AdminFrameProps {
    menuconfig:SideMenuProps;
    children?:React.ReactNode;
    TopBarTitle:string;
    Another?:string;
}

function AdminFrame(props:AdminFrameProps) {
    const {menuconfig,children,TopBarTitle} = props
    const {items} = menuconfig
    return (
    <SideMenuProvider>
    <React.Fragment>
    <TopBar TopTitle={TopBarTitle}></TopBar>
    <SideMenu items={items}/>
    <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
    <Toolbar />
    <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
        {children}
    </Container>
    </Box>
    </React.Fragment>
    </SideMenuProvider>
    )
  }
  
  export default AdminFrame