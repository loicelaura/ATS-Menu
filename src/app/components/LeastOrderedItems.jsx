const LeastOrderedItems = () => {
    return (
      <div className="bg-white rounded-lg shadow p-6 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Least ordered items</h2>
          <select className="border rounded px-2 py-1 bg-white">
            <option>Today</option>
          </select>
        </div>
        <div className="space-y-4">
          {/* Replace with your actual data */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/pizza.jpg" alt="Hot & Spicy cheesey" className="w-12 h-12 mr-2" />
              <div>
                Hot & Spicy cheesey <br />
                $20
              </div>
            </div>
            <div className="text-sm text-gray-600">
              #1 <br />
              19x
            </div>
          </div>
          {/* ... more items ... */}
        </div>
      </div>
    );
  };
  
  export default LeastOrderedItems;