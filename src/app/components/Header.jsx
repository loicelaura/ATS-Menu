"use client";

import { AppBar, Toolbar, Typography, InputBase, IconButton, Avatar, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    const handleSearch = () => {
        console.log('Search button clicked');
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                   
                </IconButton>
                <Typography variant="h6" style={{ marginRight: '20px' }}>
                    ATS Menu
                </Typography>
                <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: '#f0f0f0', padding: '0 16px', display: 'flex', alignItems: 'center', width: '400px' }}>
                        <InputBase placeholder="Search" style={{ paddingLeft: '36px', width: '100%' }} />
                        <IconButton onClick={handleSearch} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </div>
                </div>
                <IconButton color="inherit" aria-label="notifications">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Avatar alt="Andre Carvalli" src="/images/andre-photo.jpg" style={{ marginLeft: '16px' }} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;