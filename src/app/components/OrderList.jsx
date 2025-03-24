import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const OrderList = ({ orders }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Food Item</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>Cancelled</TableCell>
            <TableCell>Delivered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.pending}</TableCell>
              <TableCell>{order.cancelled}</TableCell>
              <TableCell>{order.delivered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;