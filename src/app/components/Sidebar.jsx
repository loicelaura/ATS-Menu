import Link from 'next/link';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu'; 

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/*Andre Carvalli Photo*/}
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <MenuIcon style={{ fontSize: '32px', color: '#11a9cc' }} />
        <Typography variant="h6" style={{ fontWeight: 'bold', color: '#11a9cc' }}>
          ATS Menu
        </Typography>
      </div>

      {/* List of Menu Items */}
      <List style={{ flexGrow: 1 }}>
        <ListItem button>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Delivery" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Reservations" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Accounting" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Staff" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;