import React,{useState, useContext, createContext} from 'react';
import firebase from 'firebase';

const State = createContext();


const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [keeps, setKeeps] = useState([]);

  const getKeeps = async () => {
    try {
      const response = await firebase.ref('keeps');
      setKeeps(response.val());
  } catch (err) {
      console.error(err);
  }
  };

  const register = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return firebase.auth().signOut();
  };

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      setUser(user);
    } else {
      setUser(null);
    }
  })

  return (
    <State.Provider value={{register, login, logout, keeps, user}}>
      {children}
    </State.Provider>
  )
};


export const useStore = () => {
  return useContext(State);
}

export default ContextProvider;
