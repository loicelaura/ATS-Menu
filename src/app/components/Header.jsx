"use client";

import { AppBar, Toolbar, Avatar, Badge, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    const handleSearch = () => {
        console.log('Search button clicked');
    };

    return (
        <AppBar position="static" className="bg-gray-100 text-black"> 
            <Toolbar className="p-0"> 
            
                <div className="flex flex-grow justify-center">
                    <div className="relative rounded-md bg-white p-3 flex items-center w-[400px] border border-gray-400 shadow-sm">
                        <InputBase placeholder="Search" className="pl-9 w-full border-none" />
                        <IconButton onClick={handleSearch} aria-label="search" className="bg-white">
                            <SearchIcon />
                        </IconButton>
                    </div>
                </div>
                <IconButton color="inherit" aria-label="notifications">
                    <Badge badgeContent className="text-white">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Avatar alt="Andre Carvalli" src="/images/andre.jpg" className="ml-4 border-2 border-white" />
            </Toolbar>
        </AppBar>
    );
};

export default Header;