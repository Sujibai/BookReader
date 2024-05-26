"use client";
import * as Icons from '@mui/icons-material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import AdminFrame from '../comp/AdminFrame';

const MenuItems = [
    { href: '/admin', primary: 'Dashboard',isActive:false,icon:<Icons.Dashboard />},
    { href: '/admin/shelf', primary: 'Shelf',isActive:false,icon:<Icons.Book /> },
    { href: '/admin/page1', primary: 'Search',isActive:true,icon:<Icons.CrisisAlert /> },
    { href: '/admin/page2', primary: 'User Management',isActive:false,icon:<Icons.People /> },
  ];
const SideMenuConfig={
    items: MenuItems,
}
const defaultTheme = createTheme();

function About() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <Box sx={{ display: 'flex',height: '100vh' }}>
    <CssBaseline />
    <AdminFrame menuconfig={SideMenuConfig} TopBarTitle='Page2'>
      <h1>page1</h1>
      </AdminFrame>
    </Box>
    </ThemeProvider>
  )
}
  
  export default About