import * as React from 'react';
import Link from 'next/link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


interface ListItemProps {
    href: string;
    primary: string;
    isActive?:boolean;
    icon?: React.ReactNode;
  }
interface ListItemsProps {
    items:ListItemProps[];
}

function MainListItems(props:ListItemsProps){
    const {items} = props
    return(
        <React.Fragment>
            {items.map((item,index)=>(
                <Link key={index} href={item.href} passHref>
                <ListItemButton selected={item.isActive}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.primary} />
                </ListItemButton>
                </Link>
            ))}
        </React.Fragment>
    )
}

export default MainListItems;