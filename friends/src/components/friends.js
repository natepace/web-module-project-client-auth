import React, { useState, useEffect } from "react";
import axios from 'axios';
import FriendForm from './friendform';
const Friends = () => {


    const [friends, setFriends] = useState([])
    const getData = () => {
        axios

            .get('http://localhost:5000/api/friends', {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            .then(res => {
                console.log(res)
                // setFriends({
                //     id: res.data.data.id,
                //     name: res.data.data.name,
                //     age: res.data.data.age,
                //     email: res.data.data.email,
                // }
                // )
                setFriends(res.data

                )

            })
            .catch(err => {
                console.log(err)
            })
        return friends;
    }
    useEffect(() => {
        getData();
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
            <FriendForm />
        </div>

    )
}
export default Friends;