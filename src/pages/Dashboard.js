import React, {useState} from 'react';
import "../styles/dashboard.css";
import {useStore} from "../contextProvider";
import Table from "../components/Table";
import Row from "../components/Row";
import AddKeep from "../components/AddKeep";

export default function Dashboard() {
  const {logout, keeps} = useStore();
  const [isOpenAddKeep, openAddKeep] = useState(false);
  const [error, setError] = useState(null);


  const handleLogOut = async () => {
    try {
      setError(null);
      await logout();
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="dashboard">
      <span className="title">Dashboard</span>
      <AddKeep open={isOpenAddKeep} close={() => openAddKeep(false)} />
      <Table>
        {keeps.map(i => <Row {...i} />) }
      </Table>
      <button className={`new-keep ${isOpenAddKeep && 'new-keep--active'}`} onClick={(e) => {
        e.stopPropagation();
        openAddKeep(!isOpenAddKeep);
      }}>new keep</button>
      <span className="option" onClick={handleLogOut}>Log out</span>
      {error && <span className="error">{error}</span>}
    </div>
  )
};
