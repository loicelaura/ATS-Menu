const OrderManagement = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Order Management (Live)</h2>
          <select className="border rounded px-2 py-1">
            <option>Today</option>
          </select>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-2 font-semibold">Food Item</th>
              <th className="text-left p-2 font-semibold">Pending</th>
              <th className="text-left p-2 font-semibold">Cancelled</th>
              <th className="text-left p-2 font-semibold">Delivered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2 flex items-center">
                <img src="images/pizza.jpg" alt="Pizza" className="w-12 h-12 mr-2" />
                <div>
                  Sweet cheesy pizza for kids (Small) <br />
                  $20
                </div>
              </td>
              <td className="border-b p-2">9</td>
              <td className="border-b p-2">12</td>
              <td className="border-b p-2">369</td>
            </tr>
          </tbody>
        </table>
        <a href="#" className="block text-center mt-4 text-blue-500">View More</a>
      </div>
    );
  };
  
  export default OrderManagement;