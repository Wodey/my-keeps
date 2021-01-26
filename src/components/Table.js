import React from 'react';
import "../styles/dashboard.css";

const Table = ({children}) => (
  <table>
    <thead>
      <th className="table-header">Name</th>
      <th className="table-header">Description</th>
      <th className="table-header">Date</th>
      <th className="table-header">Age</th>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
);

export default Table;
