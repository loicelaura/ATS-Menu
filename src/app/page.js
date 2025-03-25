import Grid from '@mui/material/Grid';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import DashboardStats from './components/DashboardStats.jsx';
import OrderList from './components/OrderList.jsx';
import Typography from '@mui/material/Typography'; 
export default function Home() {
  const stats = [
    { value: '$96,321', label: 'Total Revenue' },
    { value: '61', label: 'Total Menus' },
    { value: '7,321', label: 'Total Customers' },
    { value: '321', label: 'Total Orders' },
  ];

  const orders = [
    { name: 'Sweet cheesy pizza for kids', pending: 9, cancelled: 12, delivered: 369 },
  ];


  const popularDishes = []; 
  

  return (
    <div>
      <Header />
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={9}>
          {/* Welcome Message and Subtext */}
          <Typography variant="h5" gutterBottom>
            Welcome Andre Carvalli
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your daily dashboard report is here...
          </Typography>

          {/* Dashboard Components */}
          <DashboardStats stats={stats} />
          <OrderList orders={orders} />
        </Grid>
      </Grid>
    </div>
  );
}