// UserSearchBar.js

import React, { useState } from 'react';

const UserSearchBar = ({ users, setFilteredUsers }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Filter users based on the search term
        const filteredUsers = users.filter((user) =>
            user.username.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredUsers(filteredUsers);
    };

    return (
        <input
            type="text"
            placeholder="Search usernames..."
            value={searchTerm}
            onChange={handleSearch}
        />
    );
};

export default UserSearchBar;
