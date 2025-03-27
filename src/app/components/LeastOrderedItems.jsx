const LeastOrderedItems = ({ items }) => {
  return (
      <div className="bg-white rounded-lg shadow p-6 mt-4">
          <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Least ordered items</h2>
              <select className="border rounded px-2 py-1 bg-white appearance-none">
                  <option>Today</option>
              </select>
          </div>
          <div className="space-y-4">
              {items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                          <div className="bg-white rounded p-1 mr-2">
                              <img src="/images/pizza.jpg" alt={item.name} className="w-12 h-12" /> 
                          </div>
                          <div>
                              {item.name} <br />
                              <span className="text-blue-500">${item.price}</span>
                          </div>
                      </div>
                      <div className="text-sm text-gray-600">
                          #{index + 1} <br />
                          {item.orders}x
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default LeastOrderedItems;