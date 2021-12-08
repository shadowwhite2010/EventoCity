import React from 'react'
import EventCard from './EventCard'
import imgg from "./images/default_user.png";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Editprofile from './Profile/Editprofile';
import Userdet from './Profile/Userdet';

// image link: https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
function Profile() {



    return (
        <div>
            <div className="container bg-dark mb-3 p-5 ">
                <div className="profile-container">

                    <div className="edit-and-pic">

                        <div className="profile-pic" >
                            <img src={localStorage.getItem('UserPhotoName')!='null'?'http://127.0.0.1:8000/api/media/'+localStorage.getItem('UserPhotoName'):imgg} alt="profile pic" />
                        </div>

                    </div>
                    <div className="flex-h j-around bg-light text-secondary user-det">
                        

                            <Routes>
                                <Route path="editprofile" element={<Editprofile/>}></Route>
                                <Route path="" element={<Userdet/>}></Route>
                            </Routes>
                        


                    </div>
                </div>
            </div>

            <div className="container bg-dark mb-3 p-5">
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
        </div>
    )
}

export default Profile
