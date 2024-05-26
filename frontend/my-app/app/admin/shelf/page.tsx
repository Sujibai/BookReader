"use client";
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as Icons from '@mui/icons-material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import { BrokenImageOutlined } from '@mui/icons-material';

import AdminFrame from '../comp/AdminFrame';
import { url } from 'inspector';

const MenuItems = [
  { href: '/admin', primary: 'Dashboard', isActive: false, icon: <Icons.Dashboard /> },
  { href: '/admin/shelf', primary: 'Shelf', isActive: true, icon: <Icons.Book /> },
  { href: '/admin/page1', primary: 'CVEs', isActive: false, icon: <Icons.CrisisAlert /> },
  { href: '/admin/page2', primary: 'User Management', isActive: false, icon: <Icons.People /> },
];

const SideMenuConfig = {
  items: MenuItems,
};

const defaultTheme = createTheme();

interface CardComponentProps {
  image: string;
  text: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ image, text }) => {
  return (
    <Paper elevation={1} sx={{ 
        width: '135px', 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease',
        cursor:'pointer',
        '&:hover': {
        transform: 'scale(1.05)',
      }, }}>
      <Box sx={{ width: '135px', height: '180px', overflow: 'hidden', position: 'relative' }}>
          <CardMedia
            image={image}
            // component='img'
            style={{
              width: '135px',
              height: '180px',
              objectFit: 'cover', 
              backgroundColor: '#eeeef2',
            }}
            // onError={e => { e.currentTarget.src = "/bki.png"; }}
          />
      </Box>
      <Box sx={{ padding: '8px' }}>
        <Typography sx={{ fontSize: 16, display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, lineClamp: 2,textAlign: 'center',color:'#333333',fontFamily: 'Microsoft YaHei, SimHei, Helvetica, Arial, sans-serif', }} >
          {text}
        </Typography>
      </Box>
    </Paper>
  );
};
  
const BookInfo1 = {
    image:'/600.jpg',
    text:'title1'
}

const BookInfo2 = {
    image:'/500.jpg',
    text:'500标题'
}


const fetchBooks = async () => {
    const res = await axios.get('http://localhost:8000/api/data');
    return res.data;
  };
  const Admin = () => {
    const [books, setBooks] = React.useState<CardComponentProps[]>([]);
    const getBooks = async () => {
        const data = await fetchBooks();
        setBooks(data); 
      };
    
      React.useEffect(() => {
        getBooks();
      }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <CssBaseline />
        <AdminFrame menuconfig={SideMenuConfig} TopBarTitle='Shelf'>
          <Box>
          <Button variant="contained" onClick={getBooks} sx={{ marginBottom: 2 }}>
              Reload Books
            </Button>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {books.map((book, index) => (
                <Grid key={index} item>
                  <CardComponent image={book.image} text={book.text} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </AdminFrame>
      </Box>
    </ThemeProvider>
  );
}

export default Admin;
