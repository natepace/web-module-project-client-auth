import React, { useState, useEffect } from "react";
import axios from 'axios';
import { axiosWithAuth } from "./axiosWithAuth";
const FriendForm = (props) => {
    const { fetchMyFriendsList } = props
    const [newFriend, setNewFriend] = useState({ id: "", name: "", age: "", email: "" })

    const handleChange = (e) => {
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const addNewFriend = {
            id: new Date(),
            name: newFriend.name,
            age: newFriend.age,
            email: newFriend.email,
        }
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', addNewFriend)
            .then((res) => {
                fetchMyFriendsList();
            })
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='name'
                    type='text'
                    value={newFriend.name}
                    onChange={handleChange}
                >
                </input>
                <input
                    name='age'
                    type='text'
                    value={newFriend.age}
                    onChange={handleChange}
                >
                </input>
                <input
                    name='email'
                    type='text'
                    value={newFriend.email}
                    onChange={handleChange}
                >
                </input>

                <button>make friend</button>
            </form>
        </div>


    )
}

export default FriendForm;