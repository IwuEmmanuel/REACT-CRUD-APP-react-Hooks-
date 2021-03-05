import React, { useState } from 'react';

const AddUserForm = (props) => {
  const initialFormState = {
                            id: null,
                            name: '', 
                            username: ''
                          }

  const [user, setNewUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value} = event.target;

    setNewUser({ ...user, [name]: value })
    
  }
  

  return (
    <form
       onSubmit= {(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return 

        props.addUser(user);
        setNewUser(initialFormState);
      }}
    >
      
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm