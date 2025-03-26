const OutOfStock = () => {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Out of stock</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Sweet cheesy pizza for kids (Small) $20</span>
            <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs">
              1
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Sweet cheesy pizza for kids (Small) $20</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Sweet cheesy pizza for kids (Small) $20</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default OutOfStock;