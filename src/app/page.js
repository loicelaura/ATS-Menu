import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import DashboardStats from './components/DashboardStats.jsx';
import Typography from '@mui/material/Typography';
import PopularDishes from './components/PopularDishes.jsx';
import OrderManagement from './components/OrderManagement.jsx';
import TodaysReservations from './components/TodaysReservations.jsx';
import OutOfStock from './components/OutOfStock.jsx';
import LeastOrderedItems from './components/LeastOrderedItems.jsx';
import OrderChart from './components/OrderChart.jsx';

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

          {/* Stats Section */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4"> 
            <div className="col-span-2">
              <OrderManagement orders={orders} />
              <LeastOrderedItems />
            </div>
            <div className="col-span-1">
              <TodaysReservations />
              <OutOfStock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}