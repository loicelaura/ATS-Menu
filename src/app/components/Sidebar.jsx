import Link from 'next/link';
import { List, ListItem, ListItemIcon, ListItemText, Typography, InputBase, Avatar, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu'; 

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '250px', backgroundColor: 'white', boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <MenuIcon style={{ fontSize: '32px', color: '#11a9cc', marginRight: '10px' }} />
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#11a9cc', marginRight: 'auto' }}>
            ATS Menu
          </Typography>
        </div>
      </div>

      {/* List of Menu Items */}
      <List style={{ flexGrow: 1, padding: '10px' }}>
        <Button 
          variant="contained" 
          className="bg-[#e0f7fa] text-[#1565c0] rounded-md mb-1 normal-case justify-start p-2 w-full"
        >
          <ListItemIcon style={{ minWidth: 'auto', marginRight: '10px' }}>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </Button>

        {/* Other List Items */}
        <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Delivery" />
        </ListItem>
        <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Reservations" />
        </ListItem>
        <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Accounting" />
        </ListItem>
        <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Staff" />
        </ListItem>
        <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button="true" style={{ borderRadius: '4px', marginBottom: '5px' }}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;