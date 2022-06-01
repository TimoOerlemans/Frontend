import React from 'react'

const Chatroom = () => {
    const[userData, setUserData] =useState({
        username:"",
        receivername:"",
        connected: false,
        message:"" 
    })

    const handleUserName = (event) => {
        const {value} = event.target;
        setUserData({...userData, "username":value});
    }

    return(
        <div className="container">
            {userData.connected?
            <div>                
            </div>
            :
            <div className='register'>
                <input 
                id='user-name'
                placeholder='Enter the user name'
                value={userData.username}
                onChange={handleUserName}
                />
                <button type='button' onClick={registerUser}>
                    Connect
                </button>
            </div>
            }
        </div>
    )
}

export default Chatroom