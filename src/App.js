import React, { useState } from "react";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";

function App() {

const [users, setUsers] = useState([
{ id: 1, name: "Ganesh", email: "ganesh@gmail.com" },
{ id: 2, name: "Rahul", email: "rahul@gmail.com" }
]);

const [editingUser, setEditingUser] = useState(null);

const addUser = (user) => {
user.id = users.length + 1;
setUsers([...users, user]);
};

const deleteUser = (id) => {
setUsers(users.filter((user) => user.id !== id));
};

const editUser = (user) => {
setEditingUser(user);
};

const updateUser = (updatedUser) => {
setUsers(users.map((user) => user.id === updatedUser.id ? updatedUser : user));
setEditingUser(null);
};

return (
<div className="container">
<h1>User CRUD Table</h1>

<UserForm
addUser={addUser}
editingUser={editingUser}
updateUser={updateUser}
/>

<UserTable
users={users}
deleteUser={deleteUser}
editUser={editUser}
/>

</div>
);
}

export default App;