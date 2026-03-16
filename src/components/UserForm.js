import React, { useState, useEffect } from "react";

function UserForm({ addUser, editingUser, updateUser }) {

const [name, setName] = useState("");
const [email, setEmail] = useState("");

useEffect(() => {
if (editingUser) {
setName(editingUser.name);
setEmail(editingUser.email);
}
}, [editingUser]);

const handleSubmit = (e) => {
e.preventDefault();

if (!name || !email) return;

const user = { name, email };

if (editingUser) {
updateUser({ ...editingUser, name, email });
} else {
addUser(user);
}

setName("");
setEmail("");
};

return (

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<button type="submit">
{editingUser ? "Update User" : "Add User"}
</button>

</form>

);
}

export default UserForm;