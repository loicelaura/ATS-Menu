import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import DashboardStats from './components/DashboardStats.jsx';
import Typography from '@mui/material/Typography';
import PopularDishes from './components/PopularDishes.jsx';
import OrderManagement from './components/OrderManagement.jsx';

export default function Home() {
  const stats = [
    { value: '$96,321', label: 'Total Revenue' },
    { value: '61', label: 'Total Menus' },
    { value: '7,321', label: 'Total Customers' },
    { value: '321', label: 'Total Orders' },
  ];

  const orders = [
    { name: 'Sweet cheesy pizza for kids', pending: 9, cancelled: 12, delivered: 369 },
    { name: 'Sweet cheesy pizza for kids', pending: 9, cancelled: 12, delivered: 369 },
    { name: 'Sweet cheesy pizza for kids', pending: 9, cancelled: 12, delivered: 369 },
  ];

  const popularDishes = [
    { name: 'Sweet cheesy pizza for kids', orders: 29 },
    { name: 'Sweet cheesy pizza for kids', orders: 29 },
    { name: 'Sweet cheesy pizza for kids', orders: 29 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4"> 
      <Header />
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 p-4">
          <Typography variant="h5" gutterBottom>
            Welcome Andre Carvalli
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your daily dashboard report is here...
          </Typography>

          <DashboardStats stats={stats} />

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-6"> 
              <OrderManagement orders={orders} />
            </div>
            <div className="bg-white rounded-lg shadow p-6"> 
              <PopularDishes popularDishes={popularDishes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}