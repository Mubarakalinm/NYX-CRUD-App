import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

import "./styles.css";

const App = () => {
  const usersData = [
    { id: uuidv4(), name: "Javed", username: "abc@123" },
    { id: uuidv4(), name: "Vikas", username: "abc@111" },
    { id: uuidv4(), name: "Ali", username: "abc@222" }
  ];

  //state
  const [users, setUsers] = useState(usersData);

  //Add User
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  // Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Update User
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: ""
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD APP </h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
