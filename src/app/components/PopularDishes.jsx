const PopularDishes = () => {
  return (
      <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Popular Dishes Today</h2>
          <ol className="list-decimal list-inside">
              <li className="mb-2 flex items-center">
                  <img src="/images/pizza.jpg" alt="pizza" className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                      Sweet cheesy pizza for kids
                      <span className="ml-2 text-gray-600">Orders: 29</span>
                  </div>
              </li>
              <li className="mb-2 flex items-center">
                  <img src="/images/pizza.jpg" alt="pizza" className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                  Sweet cheesy pizza for kids
                      <span className="ml-2 text-gray-600">Orders: 25</span>
                  </div>
              </li>
              <li className="mb-2 flex items-center">
                  <img src="/images/pizza.jpg" alt="pizza" className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                  Sweet cheesy pizza for kids
                      <span className="ml-2 text-gray-600">Orders: 20</span>
                  </div>
              </li>
          </ol>
      </div>
  );
};

export default PopularDishes;