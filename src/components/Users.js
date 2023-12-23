import React, { useState,useEffect } from "react";
import { getUsers } from "../utils/apiServices";
const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [data,setData]=useState()
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

   const fetchUsers = async () => {
     try {
       const response = await getUsers(searchTerm, page, rowsPerPage);
       console.log("response is--->",response);
       setData(response);
     } catch (error) {
       console.error("Error fetching users:", error);
     }
   };

   useEffect(() => {
     fetchUsers();
   }, []);

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th>Wallet Address</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((user) => (
          <tr key={user._id} onClick={() => setSelectedUser(user)}>
            <td>{user.walletAddress}</td>
            <td>{user.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderUserDetails = () => {
    if (!selectedUser) return <div>Select a user to view details</div>;

    return (
      <div>
        <h2>User Details</h2>
        <p>
          <strong>Wallet Address:</strong> {selectedUser?.walletAddress}
        </p>
        <div className="transaction-history">
          <h3>Transaction History (Recent 5 Transactions):</h3>
          <div className="scrollable">
            {selectedUser?.depositHistory.slice(0, 5).map((item, index) => (
              <div key={index}>
                <p>Transaction Hash: {item.transactionHash}</p>
                <p>Amount: {item.depositAmount}</p>
                {/* Render other transaction details as needed */}
              </div>
            ))}
            {selectedUser.depositHistory.length > 5 && (
              <div className="more-transactions">
                {selectedUser?.depositHistory.slice(5).map((item, index) => (
                  <div key={index}>
                    <p>Transaction Hash: {item.transactionHash}</p>
                    <p>Amount: {item.depositAmount}</p>
                    {/* Render other transaction details as needed */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="user-table">
      {renderTable()}
      {renderUserDetails()}
    </div>
  );
};

export default Users;
