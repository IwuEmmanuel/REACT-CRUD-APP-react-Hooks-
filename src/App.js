import React from "react";
import {useState} from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from './forms/EditUserForm'

const App = () => {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
  user.id = users.length + 1
  setUsers([...users, user])
}
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEdit(false);
  }

  const [edit, setEdit] = useState(false);

  const initialFormState = { id: null, name: '', username: '' };
  
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
  setEdit(true)

  setCurrentUser({ id: user.id, name: user.name, username: user.username })
}
  const updateUser = (id, updatedUser) => {
  setEdit(false)

  setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
}
  

  return (
    <div className="container">
      <header className="App-header">
        <h1>CRUD  App built with React Hooks</h1>
      </header>
      <div className="flex-row">
        <div className="flex-large">
        {edit ? (
          <div>
      <h2>Edit user</h2>
      <EditUserForm
        setEditing={setEdit}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Add user</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
