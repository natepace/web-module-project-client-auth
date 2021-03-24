import React, { useState, useEffect } from "react";
import axios from 'axios';

const FriendForm = () => {
    const [friends, setFriends] = useState([])

    return (
        <div>
            <form>
                <input
                    name='name'
                    type='text'
                >
                </input>
            </form>
        </div>
    )
}

export default FriendForm;