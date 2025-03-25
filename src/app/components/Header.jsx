"use client"; 

import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const handleSearch = () => {
        console.log('Search button clicked');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    ATS Menu
                </Typography>
                <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: '#f0f0f0', padding: '0 16px', display: 'flex', alignItems: 'center' }}>
                    <InputBase placeholder="Search" style={{ paddingLeft: '36px' }} />
                    <IconButton onClick={handleSearch} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;