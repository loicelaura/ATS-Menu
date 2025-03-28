import Sidebar from './components/Sidebar.jsx';
import Typography from '@mui/material/Typography';
import TodaysReservations from './components/TodaysReservations.jsx';
import OutOfStock from './components/OutOfStock.jsx';
import OrderChart from './components/OrderChart.jsx';
import OrderManagement from './components/OrderManagement.jsx';
import PopularDishes from './components/PopularDishes.jsx';
import LeastOrderedItems from './components/LeastOrderedItems.jsx';
import { createTheme } from '@mui/material/styles';
import ThemeProviderWrapper from './components/ThemeProviderWrapper.jsx';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

export default function Home() {
    const stats = [
        { value: '$96,321', label: 'Total Revenue' },
        { value: '61', label: 'Total Menus' },
        { value: '7,321', label: 'Total Customers' },
        { value: '321', label: 'Total Orders' },
    ];

    const leastOrderedData = [
        { name: 'Hot & Spicy cheesey', price: 20, orders: 89, image: '/pizza.jpg' },
        { name: 'Sweet cheesy pizza for kids', price: 20, orders: 89, image: '/pizza.jpg' },
        { name: 'Sweet cheesy pizza for kids', price: 20, orders: 89, image: '/pizza.jpg' },
    ];

    const orders = [
        { name: 'Sweet cheesy pizza for kids', pending: 9, cancelled: 12, delivered: 369 },
        { name: 'Sweet cheesy pizza for kids', pending: 9, cancelled: 12, delivered: 369 },
        { name: 'Sweet cheesy pizza for kids', pending: 9, cancelled: 12, delivered: 369 },
    ];

    const popularDishesData = [
        { name: 'Sweet cheesy pizza for kids', orders: 29 },
        { name: 'Sweet cheesy pizza for kids', orders: 29 },
        { name: 'Sweet cheesy pizza for kids', orders: 29 },
    ];

    return (
        <ThemeProviderWrapper>
            <div className="bg-gray-100 min-h-screen p-4">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex justify-center flex-grow">
                        <div className="flex items-center border rounded-full p-2 bg-white w-64">
                            <SearchIcon className="mr-2" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="flex-grow outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="mr-4 p-2 rounded-full bg-gray-200">
                            <NotificationsIcon />
                        </button>
                        <img
                            src="images/andre.jpg"
                            alt="Andre Carvalli"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </div>
                <div className="flex" style={{ height: 'calc(100vh - 88px)' }}>
                    <div className="w-1/4">
                        <Sidebar />
                    </div>
                    <div className="w-3/4 p-4 mt-8">
                        <Typography variant="h5" gutterBottom>
                            Welcome Andre Carvalli
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Your daily dashboard report is here...
                        </Typography>
    
                        <div className="grid grid-cols-4 gap-4 mb-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
                                    <div className="text-2xl font-semibold">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
    
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1 space-y-4">
                                <OrderManagement orders={orders} />
                                <div className="bg-white rounded-lg shadow p-4">
                                    <OrderChart />
                                    <LeastOrderedItems items={leastOrderedData} />
                                </div>
                            </div>
                            <div className="col-span-1 space-y-4">
                                <PopularDishes dishes={popularDishesData} />
                                <TodaysReservations />
                                <OutOfStock />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProviderWrapper>
    );
    }