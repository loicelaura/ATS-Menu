const OrderChart = () => {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Order chart</h2>
          <select className="border rounded px-2 py-1 bg-white">
            <option>2025</option>
          </select>
        </div>
        <div className="h-48 border-b">
          {/* Placeholder for the bar chart */}
          <div className="flex justify-around items-end h-full">
          
            <div className="bg-gray-300 w-4 h-24"></div>
            <div className="bg-grey-300 w-4 h-32"></div>
            <div className="bg-gray-300 w-4 h-25"></div>
            <div className="bg-gray-300 w-4 h-35"></div>
            <div className="bg-gray-300 w-4 h-31"></div>
            <div className="bg-gray-300 w-4 h-27"></div>
            <div className="bg-gray-300 w-4 h-32"></div>
            <div className="bg-gray-300 w-4 h-25"></div>
            <div className="bg-gray-300 w-4 h-36"></div>
            <div className="bg-gray-300 w-4 h-28"></div>
            <div className="bg-gray-300 w-4 h-32"></div>
            <div className="bg-gray-300 w-4 h-25"></div>
          
          </div>
        </div>
        <div className="flex justify-around mt-2">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
                    
        </div>
      </div>
    );
  };
  
  export default OrderChart;