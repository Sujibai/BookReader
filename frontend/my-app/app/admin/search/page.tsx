"use client";
import * as Icons from '@mui/icons-material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import {Card, CardMedia, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdminFrame from '../comp/AdminFrame';
import SearchCard from '../comp/SearchCard/SearchCard';
import { getGlobalSearchQuery, setGlobalSearchQuery } from '../context/AppData';

const BookInfo = {
  image:'/600.jpg',
  title:'从打铁开始骑砍欧陆',
  author:'今天',
  description:'这是一个充斥着进化之力的绿色星球，昆虫在自然神的庇护下在此共生，它们依靠命囊孕育命种，播种命种产出果实供应自身成长。虫族将命种分为四个层次，普通命种，神赐之种，神品神赐之种，法则神赐之种。普通命种任何虫族都能孕育出来。自然法则又会随机赋予种子神性让它成为神赐之种。神赐之种当中有万中无一的概率会诞生神品神赐之种。而法则神赐之种，自原力星界诞生起，每一万八千年一轮回，经历上万个轮回，一共出现不到二十棵。一切的故事都从最特殊的那朵法则之花下诞生的蜘蛛开始。'
}

// const BookInfo = {
//   image:'/500.jpg',
//   title:'从打铁开始骑砍欧陆',
//   author:'今天',
//   description:'这是一个充斥着进化之力的绿色星球，昆虫在自然神的庇护下在此共生，它们依靠命囊孕育命种，播种命种产出果实供应自身成长。'
// }

const MenuItems = [
    { href: '/admin', primary: 'Dashboard',isActive:false,icon:<Icons.Dashboard />},
    { href: '/admin/shelf', primary: 'Shelf',isActive:false,icon:<Icons.Book /> },
    { href: '/admin/page1', primary: 'CVEs',isActive:false,icon:<Icons.CrisisAlert /> },
    { href: '/admin/page2', primary: 'User Management',isActive:false,icon:<Icons.People /> },
  ];
const SideMenuConfig={
    items: MenuItems,
}
const defaultTheme = createTheme();

function Admin() {
  const data = getGlobalSearchQuery()
    // const [searchParam, setSearchParam] = useState('');
    // useEffect(() => {
    //     // Check if we are in the browser environment
    //     if (typeof window !== 'undefined') {
    //         const search = window.location.search; // 获取 URL 中的查询字符串
    //         const params = new URLSearchParams(search); // 使用 URLSearchParams 解析查询字符串
    //         const q = params.get('q'); // 获取参数 "q"
    //         setSearchParam(q||'');
    //     }
    // }, []);
    return (
      <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex',height: '100vh' }}>
      <CssBaseline />
        <AdminFrame menuconfig={SideMenuConfig} TopBarTitle='Search'>
        <Box className='max-w-4xl'>
        <h1>SERCH FOR {data}</h1>
        <List>
        <ListItem className="width-full">
          <SearchCard image={BookInfo.image} title={BookInfo.title} author={BookInfo.author} description={BookInfo.description}></SearchCard>
        </ListItem>
        <ListItem className="width-full">
          <SearchCard image={BookInfo.image} title={BookInfo.title} author={BookInfo.author} description={BookInfo.description}></SearchCard>
        </ListItem>
        <ListItem className="width-full">
          <SearchCard image={BookInfo.image} title={BookInfo.title} author={BookInfo.author} description={BookInfo.description}></SearchCard>
        </ListItem>
        <ListItem className="width-full">
          <SearchCard image={BookInfo.image} title={BookInfo.title} author={BookInfo.author} description={BookInfo.description}></SearchCard>
        </ListItem>
        <ListItem className="width-full">
          <SearchCard image={BookInfo.image} title={BookInfo.title} author={BookInfo.author} description={BookInfo.description}></SearchCard>
        </ListItem>
        <ListItem className="width-full">
          <SearchCard image={BookInfo.image} title={BookInfo.title} author={BookInfo.author} description={BookInfo.description}></SearchCard>
        </ListItem>
        </List>
        </Box>
        </AdminFrame>
      </Box>
      </ThemeProvider>
  )
  }
  
  export default Admin