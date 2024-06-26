// Home.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import UserSearchBar from './UserSearchBar'; 

export default function Home() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8093/users');
        setUsers(result.data);
        setFilteredUsers(result.data); 
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8093/user/${id}`);
        loadUsers();
    };

    return (
        <div className="container">
            <div className="py-4">

                <div class="search-bar">
                    <UserSearchBar users={users} setFilteredUsers={setFilteredUsers} />
                </div>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">ZipCode</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.addr}</td>
                                <td>{user.zipCode}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>
                                        View
                                    </Link>
                                    <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger mx-2"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}
