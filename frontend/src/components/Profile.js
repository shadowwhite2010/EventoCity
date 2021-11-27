import React from 'react'

function Profile() {
    return (
        <div>
            <div className="container bg-dark mb-3 p-5">
                <div className="profile-container">

                    <div className="edit-and-pic">

                        <div className="profile-pic" >
                            <img src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="profile pic" />
                        </div>

                    </div>
                    <div className="flex-h">

                        <div className='user-details'>
                            <h1 className="">Name</h1>
                            <div className="prof my-2">

                                <p className='bd-bottom'>Designer</p>
                                <p className='bd-bottom'>Event Manager</p>
                                <p className='bd-bottom'>Sponser</p>
                            </div>
                            
                        </div>
                        <div className="flex-v text-secondary my-5">
                            <p className=''>7 Events</p>
                            <p className=''>email@gmail.com</p>
                            <p className=''>major works</p>
                            <button type="button" className="btn btn-outline-secondary" >
                                Edit Profile
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
