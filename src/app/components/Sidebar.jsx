import Link from 'next/link';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import TableChartIcon from '@mui/icons-material/TableChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '250px', backgroundColor: 'white', boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <MenuIcon style={{ fontSize: '32px', color: '#11a9cc', marginRight: '10px' }} />
                    <Typography variant="h6" style={{ fontWeight: 'bold', color: '#11a9cc', marginRight: 'auto' }}>
                        ATS Menu
                    </Typography>
                </div>
            </div>

            <List style={{ flexGrow: 1, padding: '10px' }}>
                <Button
                    variant="contained"
                    className="bg-[#e0f7fa] text-[#1565c0] rounded-md mb-2 normal-case justify-start p-2 w-full"
                >
                    <ListItemIcon style={{ minWidth: 'auto', marginRight: '10px', color: '#1565c0' }}>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </Button>

                <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
                    <ListItemIcon style={{ color: '#555' }}><ShoppingCartIcon /></ListItemIcon>
                    <ListItemText primary="Orders" style={{ fontSize: '14px' }} />
                </ListItem>
                <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
                    <ListItemIcon style={{ color: '#555' }}><RestaurantMenuIcon /></ListItemIcon>
                    <ListItemText primary="Menu" style={{ fontSize: '14px' }} />
                </ListItem>
                <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
                    <ListItemIcon style={{ color: '#555' }}><TableChartIcon /></ListItemIcon>
                    <ListItemText primary="Tables" style={{ fontSize: '14px' }} />
                </ListItem>
                <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
                    <ListItemIcon style={{ color: '#555' }}><LocalShippingIcon /></ListItemIcon>
                    <ListItemText primary="Delivery" style={{ fontSize: '14px' }} />
                </ListItem>
                <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
                    <ListItemIcon style={{ color: '#555' }}><EventSeatIcon /></ListItemIcon>
                    <ListItemText primary="Reservations" style={{ fontSize: '14px' }} />
                </ListItem>
                <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
                    <ListItemIcon style={{ color: '#555' }}><AccountBalanceIcon /></ListItemIcon>
                    <ListItemText primary="Accounting" style={{ fontSize: '14px' }} />
                </ListItem>
                <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
                    <ListItemIcon style={{ color: '#555' }}><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Customers" style={{ fontSize: '14px' }} />
                </ListItem>
                <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
                    <ListItemIcon style={{ color: '#555' }}><PersonIcon /></ListItemIcon>
                    <ListItemText primary="Staff" style={{ fontSize: '14px' }} />
                </ListItem>
                <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
                    <ListItemIcon style={{ color: '#555' }}><InsertChartIcon /></ListItemIcon>
                    <ListItemText primary="Reports" style={{ fontSize: '14px' }} />
                </ListItem>
                <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
                    <ListItemIcon style={{ color: '#555' }}><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Settings" style={{ fontSize: '14px' }} />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;