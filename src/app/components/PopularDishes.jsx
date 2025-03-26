const PopularDishes = ({ popularDishes }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Popular Dishes Today</h2>
      <ol className="list-decimal list-inside"> 
        {popularDishes.map((dish, index) => (
          <li key={index} className="flex items-start mb-4"> 
            <img 
              src="images/pizza.jpg" 
              alt={dish.name} 
              className="w-16 h-16 mr-4 border rounded"
            />
            <div>
              {dish.name} <br />
              Orders: {dish.orders}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PopularDishes;