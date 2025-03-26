const PopularDishes = ({ dishes }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Popular dishes today</h2>
      <ol className="list-decimal list-inside">
        {dishes.map((dish, index) => (
          <li key={index} className="flex items-start mb-4">
            <div className="bg-white rounded p-1 mr-2">
              <img
                src="/images/pizza.jpg"
                alt={dish.name}
                className="w-12 h-12" 
              />
            </div>
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