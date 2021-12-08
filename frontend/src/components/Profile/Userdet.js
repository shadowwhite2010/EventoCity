import React from 'react'
import {
    Link,
} from "react-router-dom";


function Userdet() {
    return (
        <div  className="flex-h j-around bg-light text-secondary user-det">

                <div className='user-details'>
                    <h1 className="">{localStorage.getItem('full_name')?localStorage.getItem('full_name'):"Anonymous"+localStorage.getItem('u_id')}</h1>
                    
                    <Link to='editprofile' className="btn btn-outline-secondary" >
                        Edit Profile
                    </Link>
                    
                </div>
                <div className="prof my-2 user-details-2">
                    <h4 className='bd-bottom'>Profession</h4>
                    <p className=''>Designer</p>
                    <p className=''>Event Manager</p>
                    <p className=''>Sponser</p>
                </div>
                <div className="flex-v text-secondary my-2 user-details-2">
                    <h4 className='bd-bottom'>Contact</h4>
                    <p className=''>7 Events</p>
                    <p className=''>{localStorage.getItem('email')?localStorage.getItem('email'):"Anonymous"+localStorage.getItem('u_id')}</p>
                    
                    
                </div>
        </div>
    )
}

export default Userdet
