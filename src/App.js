import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  
  const addUserHandler = (userName, userAge) => {
    setListOfUsers((prevUserList) => {
      return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={listOfUsers}/>
    </div>
  );
}

export default App;