const OrderChart = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Order Chart</h2>
          <select className="border rounded px-2 py-1">
            <option>2025</option>
          
          </select>
        </div>
        <div className="flex justify-center items-center h-48 border-b">
          <img
            src="/your-graph-image.png" 
            alt="Order Chart"
            className="max-w-full max-h-full" 
          />
        </div>
      </div>
    );
  };
  
  export default OrderChart;