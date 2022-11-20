import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/users';
import { ASSET_URL } from '../../utils/env';
import { Button } from '@mui/material';
// type userTpe = {
//   active: Boolean,
//   email: string,
//   email_verified: Boolean,
//   favorites: [string],
//   firstName: string,
//   followers: [string],
//   following: [sting],
//   image: string,
//   lastName: string,
//   role: string,
//   _id: string,
// };
const List = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((users) => {
      console.log(ASSET_URL);
      console.log(users.data);
      setUsers(users.data?.data);
    });
  }, []);

  const rows = [
    {
      id: 1143155,
      product: 'Acer Nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'John Smith',
      date: '1 March',
      amount: 785,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 2235235,
      product: 'Playstation 5',
      img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Michael Doe',
      date: '1 March',
      amount: 900,
      method: 'Online Payment',
      status: 'Pending',
    },
    {
      id: 2342353,
      product: 'Redragon S101',
      img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'John Smith',
      date: '1 March',
      amount: 35,
      method: 'Cash on Delivery',
      status: 'Pending',
    },
    {
      id: 2357741,
      product: 'Razer Blade 15',
      img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Jane Smith',
      date: '1 March',
      amount: 920,
      method: 'Online',
      status: 'Approved',
    },
    {
      id: 2342355,
      product: 'ASUS ROG Strix',
      img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Harold Carol',
      date: '1 March',
      amount: 2000,
      method: 'Online',
      status: 'Pending',
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User_ID</TableCell>
            <TableCell className="tableCell">Profile</TableCell>
            <TableCell className="tableCell">First Name</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Action</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    src={ASSET_URL + row.image}
                    alt=""
                    className="image"
                  />
                  {row.firstName + row.lastName}
                </div>
              </TableCell>
              <TableCell className="tableCell">
                {row.firstName}
              </TableCell>
              <TableCell className="tableCell">
                {row.lastName}
              </TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">
                <Button
                  onClick={() => {
                    console.log(row);
                  }}
                >
                  Detail
                </Button>
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.active}`}>Active</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
