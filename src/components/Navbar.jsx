import React, { useState } from 'react';
import Logo from '../Assets/Logo.svg';
import { BsCart2 } from 'react-icons/bs';
import HomeIcon from '@mui/icons-material/Home'; 
import InfoIcon from '@mui/icons-material/Info'; 
import HomeWorkIcon from '@mui/icons-material/HomeWork'; 
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'; 
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppinCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { HiOutlineBars3 } from 'react-icons/hi2';
import Drawer  from '@mui/material/Drawer';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false
    );
    const menuOptions = [
        { text: 'Home', icon: <HomeIcon />,link: '/' },
        { text: 'Sobre Nós', icon: <InfoIcon />,link: '/' },
        { text: 'Nosso Trabalho', icon: <HomeWorkIcon />, link: '/' },
        { text: 'Avaliação', icon: <CommentRoundedIcon />, link: '/' },
        { text: 'Contato', icon: <PhoneRoundedIcon />, link: '/' },
        { text: 'Carrinho', icon: <ShoppinCartRoundedIcon />, link: '/' },
    ];
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="logo donnuts" />
            </div>
            <div className="navbar-links-container">
                <a href="/">Home</a>
                <a href="/">Sobre Nós</a>
                <a href="/">Nosso Trabalho</a>
                <a href="/">Avaliação</a>
                 <a href="/"><BsCart2 className="navbar-cart-icon"/></a>
                 <button className="primary-button">Reservas Agora</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 className="navbar-menu-icon" onClick={() => setOpenMenu(!openMenu)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
               <Box style={{ width: 250 }} onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                <List>
                    {menuOptions.map((item, index) => ( 
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.text}</ListItemText>
                                </ListItemButton>         
                        </ListItem>
                    )           
                    )}
                </List>
                </Box>
            </Drawer>
        
        </nav>
    );
    }
    export default Navbar;