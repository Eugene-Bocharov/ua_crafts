import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  number: number,
  status: string,
  created: string,
  total: number,
  action: string
) {
  return { number, status, created, total, action };
}

const rows = [
  createData(1, 'paid', 'A minute ago', 120, '#'),
  createData(1, 'shipping', '2 days ago', 120, '#'),
];

export const OrdersTable: React.FC = () => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>№</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Created</TableCell>
          <TableCell align="right">Total</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.number}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.number}
            </TableCell>
            <TableCell align="right">{row.status}</TableCell>
            <TableCell align="right">{row.created}</TableCell>
            <TableCell align="right">{row.total}</TableCell>
            <TableCell align="right">{row.action}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
