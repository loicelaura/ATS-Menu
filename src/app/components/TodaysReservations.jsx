const TodaysReservations = () => {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Today's Reservations</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>11:30 am Table 2 / 2 Guests</span>
            <span className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs flex items-center">
              ✔ Reserved
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>11:30 am Table 2 / 2 Guests</span>
            <span className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs flex items-center">
              ✔ Reserved
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>12:30 am Table 8 / 3 Guests</span>
            <span>Out of stock</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default TodaysReservations;