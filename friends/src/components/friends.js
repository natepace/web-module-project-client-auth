import React, { useState, useEffect } from "react";
import axios from 'axios';
import FriendForm from './friendform';
import { axiosWithAuth } from "./axiosWithAuth";
const Friends = () => {

    // const initialValues = {
    //     id: '',
    //     name: '',
    //     age: '',
    //     email: '',
    // }
    // // const newFriend = initialValues;

    // const [values, setValues] = useState(initialValues)
    // const [newFriend, setNewFriend] = useState(initialValues)

    // const handleChange = e => {
    //     setNewFriend({
    //         ...newFriend,
    //         [e.target.name]: e.target.value
    //     })

    // }

    // useEffect(() => {
    //     getData();
    // }, [])
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const NewFriend = {
    //         id: new Date(),
    //         name: values.name,
    //         age: values.age,
    //         email: values.email,
    //     }
    //     axiosWithAuth()
    //         .post('http://localhost:5000/api/friends', NewFriend)
    //         .then(res => {
    //             getData()
    //         })


    // }

    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchMyFriendsList = () => {
        setIsLoading(true)

        axiosWithAuth().get('http://localhost:5000/api/friends', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then((resp) => {
                setFriends(resp.data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err.response)
                setIsLoading(false)
            })

    }

    useEffect(() => {
        fetchMyFriendsList();
    }, [])
    return (

        <div className='friendpage'>
            {friends.map((friend) => {
                return (

                    <div className='friendBox' >
                        <h4>{friend.name}</h4>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                )
            })}
            <FriendForm fetchMyFriendsList={fetchMyFriendsList} />
            {/* <div>
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
            </div> */}

        </div>

    )
}
export default Friends;