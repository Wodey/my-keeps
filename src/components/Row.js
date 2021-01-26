import React from 'react';
import "../styles/dashboard.css";

const Row = ({name, description, date}) => (
  <tr>
    <td>{name}</td>
    <td>{description}</td>
    <td>{date}</td>
    <td>{date}</td>
  </tr>
);

export default Row;
