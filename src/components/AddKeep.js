import React,{useState, useEffect} from 'react';
import "../styles/addkeep.css";

const AddKeep = ({open, close}) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  useEffect(() => {
    window.addEventListener('click', close);
    return () => {
      window.removeEventListener('click', close);
    }
  })
  return (
    <div className={`addkeep ${open && 'addkeep--open'}`} onClick={(e) => e.stopPropagation()}>
      <div className="header">
        <span className="title advanced-title">New Keep</span>
        <img className="close" src="/close.svg" onClick={close}/>
      </div>
      <form className="form advanced-form" onSubmit={handleSubmit}>
        <label className="label">
          Name
          <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label className="label">
          Description
          <input type="text" className="input" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <button className="new-keep createkeep">Create Keep</button>
      </form>
    </div>
  )
};

export default AddKeep;
