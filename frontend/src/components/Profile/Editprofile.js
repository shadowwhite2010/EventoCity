import React , { useEffect, useState } from 'react'
import {
    Link,
    Redirect,
    useNavigate
} from "react-router-dom";


function Editprofile() {

    
    const [full_name, setuname] = useState("")
    const [address, setaddress] = useState("")
    const [usr_img, setusrimg] = useState("")
    let nevigate = useNavigate();
    const handle_submit= async ()=>{
        var dict ={};
        if(full_name!=="") dict['full_name'] = full_name
        if(address!=="") dict['email'] = address
        if(usr_img!=="") dict['UserPhotoName'] = usr_img
        
        fetch(`http://127.0.0.1:8000/api/user/${localStorage.getItem('u_id')}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            
            body:JSON.stringify(dict)
        })
        .then(resp => resp.json())
        .then(
            resp=>{
                console.log(resp)
                nevigate("/profile")
            }
        ).then(error => console.log(error))
    }


    const handleFileSelected=(e)=>{
        e.preventDefault();
        
        let extension = e.target.files[0].name.split('.').pop();
        console.log(extension)
        setusrimg("user"+localStorage.getItem('u_id')+"."+extension)
        const formData = new FormData();
        formData.append(
            "myFile",
            e.target.files[0],
            e.target.files[0].name
        );

        fetch(`http://127.0.0.1:8000/api/user/SaveFile/${localStorage.getItem('u_id')}`,{
            method:'POST',
            body:formData
        })
        
    }

    return (
        <div  className="flex-h j-around bg-light text-secondary user-det">
            <form>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Full Name</span>
                    <input type="text" className="form-control" placeholder="Username" value = {full_name} onChange={e=>setuname(e.target.value)} aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>

                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Address</span>
                    <input type="text" className="form-control"  placeholder="Enter Address" value = {address} onChange={e=>setaddress(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGroupFile01"  className="form-label" >Profile Image</label>
                    <input type="file" className="form-control" onChange = {handleFileSelected} id="inputGroupFile01"/>
                </div>
                <button type="button" onClick={handle_submit} className="btn btn-secondary form-control logbtn">Submit</button>
            </form>
        </div>
    )
}

export default Editprofile
