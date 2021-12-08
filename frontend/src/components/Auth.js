import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Auth() {

    const [regInputs, setregInputs] = useState({
        full_name: '',
        email: '',
        password: '',
        UserPhotoName: ''
    })
    let nevigate = useNavigate();
    const registerUser=  ()=>{
        if(regInputs.full_name!==''&&regInputs.email!==''&&regInputs.password!=='')
        {
            axios.get(`http://127.0.0.1:8000/api/retrieve/${regInputs.email}`)
            .then((res) => {
                if (res.data['msg'] === 'email available') {
                    axios.post('http://127.0.0.1:8000/api/create/',regInputs)
                    .then( async (resp) =>{
                        
                        var cred = {};
                        cred['email'] = regInputs.email;
                        cred['password'] = regInputs.password;
                        console.log(cred)
                        
                        localStorage.setItem('UserPhotoName', "");
                        localStorage.setItem('address', "");
                        localStorage.setItem('email', regInputs.email);
                        localStorage.setItem('full_name', regInputs.full_name);
                        setregInputs({
                            full_name:'',
                            email:'',
                            password:'',
                            UserPhotoName: ''
                        })
                        nevigate('/home')
                    })
                    
                }
                else {
                    console.log("already a user")
                    // let path = ``;
                    nevigate('/home');
                }
                
            })
            
        }
        setregInputs({
            full_name:'',
            email:'',
            password:'',
            UserPhotoName: ''
        })
        
    }

    return (
        <div className='container auth-container'>
            <div className="box">
                <div className="signin-box">
                    <h3>Sign In</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="signinemail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="signinemail" placeholder="Enter email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signinpassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="signinpassword" placeholder="Enter password" required />
                        </div>
                        <button type="button" className="btn btn-secondary form-control logbtn">Submit</button>
                    </form>
                </div>

                <div className="signup-box">
                    <h3>Sign Up</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">Full name</label>
                            <input type="text" className="form-control" id="fullname" placeholder="Enter fullname" value={regInputs.full_name} onChange={e=>setregInputs({full_name:e.target.value,email:regInputs.email,password:regInputs.password})} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" value={regInputs.email} onChange={e=>setregInputs({full_name:regInputs.full_name,email:e.target.value,password:regInputs.password})} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" value={regInputs.password} onChange={e=>setregInputs({full_name:regInputs.full_name,email:regInputs.email,password:e.target.value})} required />
                        </div>
                        <button type="button" className="btn btn-secondary form-control logbtn" onClick={registerUser}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth
