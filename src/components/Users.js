import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { getUsers } from "../utils/apiServices";

const Users= () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers(); // Update with your API endpoint
        console.log("response of user data is--->",response)
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Paper style={{ margin: "20px", padding: "20px" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Users and Their Histories
      </Typography>
      {users?.map((user) => (
        <div key={user?._id} style={{ marginBottom: "30px" }}>
          <Typography variant="h5">User: {user?.walletAddress}</Typography>
          <TableContainer component={Paper} style={{ marginTop: "10px" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Pool ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user?.depositHistory?.map((deposit, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      Deposit
                    </TableCell>
                    <TableCell align="right">{deposit.depositAmount}</TableCell>
                    <TableCell align="right">{deposit.poolId}</TableCell>
                  </TableRow>
                ))}
                {user?.claimHistory?.map((claim, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      Claim
                    </TableCell>
                    <TableCell align="right">{claim.claimAmount}</TableCell>
                    <TableCell align="right">{claim.poolId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            Referrers:
          </Typography>
          <List>
            {user?.referrers?.map((referrer, index) => (
              <ListItem key={index}>{referrer}</ListItem>
            ))}
          </List>
        </div>
      ))}
    </Paper>
  );
};

export default Users;
