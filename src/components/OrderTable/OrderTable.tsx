import React from 'react';
import styles from './OrderTable.module.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name: string, amount: number, price: number) {
  return { name, amount, price };
}

const rows = [createData('Flag-shaped keychain', 2, 60)];

export const OrderTable: React.FC = () => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{ border: 0 }}>
          <TableCell align="center">
            <h1 className={styles.headings}>Name</h1>
          </TableCell>
          <TableCell align="center">
            <h1 className={styles.headings}>Amount</h1>
          </TableCell>
          <TableCell align="center">
            <h1 className={styles.headings}>Price</h1>
          </TableCell>
          <TableCell align="center">
            <h1 className={styles.headings}>Sum</h1>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{
              borderTop: 2,
              borderLeft: 0,
              borderRight: 0,
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            <TableCell align="center" component="th" scope="row">
              <p className={styles.data}>{row.name}</p>
            </TableCell>
            <TableCell align="center">
              <p className={styles.data}>{row.amount}</p>
            </TableCell>
            <TableCell align="center">
              <p className={styles.data}>{row.price} UAN</p>
            </TableCell>
            <TableCell align="center">
              <p className={styles.data}>{row.price * row.amount} UAN</p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
