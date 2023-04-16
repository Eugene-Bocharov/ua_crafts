import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrdersTable.module.css';

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
  createData(1, 'Paid', 'A minute ago', 120, '/order'),
  createData(2, 'Shipping', '2 days ago', 400, '/order'),
];

export const OrdersTable: React.FC = () => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{ border: 0 }}>
          <TableCell>
            <h1 className={styles.headings}>№</h1>
          </TableCell>
          <TableCell align="center">
            <h1 className={styles.headings}>Status</h1>
          </TableCell>
          <TableCell></TableCell>
          <TableCell align="center">
            <h1 className={styles.headings}>Created</h1>
          </TableCell>
          <TableCell align="center">
            <h1 className={styles.headings}> Total</h1>
          </TableCell>
          <TableCell align="center">
            <h1 className={styles.headings}>Action</h1>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.number}
            sx={{
              borderTop: 2,
              borderLeft: 0,
              borderRight: 0,
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            <TableCell component="th" scope="row">
              <p className={styles.data}>{row.number}</p>
            </TableCell>
            <TableCell align="center">
              <p className={styles.data}>{row.status}</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell align="center">
              <p className={styles.data}>{row.created}</p>
            </TableCell>
            <TableCell align="center">
              <p className={styles.data}>{row.total} UAN</p>
            </TableCell>
            <TableCell align="center">
              <Link
                to={row.action}
                className={`${styles.underscore}
                ${styles.data}`}
              >
                View
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
