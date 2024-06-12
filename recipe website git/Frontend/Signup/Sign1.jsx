import React from 'react'
import "./Sign.css"
import axios from 'axios'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { Audio } from 'react-loader-spinner'
;
import { useNavigate } from 'react-router-dom';
function Sign1() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Repassword, setRepassword] = useState("");

    const navigate = useNavigate()

    const fNameHandler = (event) => {
        setFname(event.target.value)
    }
    const lNameHandler = (event) => {
        setLname(event.target.value)
    }
    const EmailHandler = (event) => {
        setEmail(event.target.value)
    }
    const PassHandler = (event) => {
        setPassword(event.target.value)
    }
    const Rehandler = (event) => {
        setRepassword(event.target.value)
    }
    const submitHandler = async (event) => {
        try {
            event.preventDefault()
            
            let res = await axios.post("http://localhost:5000/signup", { fname, lname, email, password, Repassword });
            localStorage.setItem("usermail",email)
            console.log(res);
          
            swal({
                title: "Succesfull Created Account ",
                text: "Now you are the member of our website",
                icon: "success",
                button: "Click here",
              });
          
            navigate("/otp")
        } 
        catch (error) {
            toast.error(error.response.data)
        }

    }
    return (

        <>

            <div className="sigform">
                <div className='left'>
                 <div className='img1'> </div>
                </div>
                <div className='right'>
                <div className='sub2'>
                    <h1>WAJAB</h1>
                    <p className='comment'>Save your Taste</p>
                </div>
                <div className='sub1'>
                       <h1>Hello New User </h1>
                        <p>Already existing user </p>
                        <Link to="/login" >Click here to login</Link>
                       </div>
                    <form onSubmit={submitHandler} className='form1'>
                        <div className='subright'>
                     
                        
                            <label for="name">First Name:</label>
                            <input onChange={fNameHandler} type="text" id="name" name="fname" className="st2" required />


                            <label for="name">Last Name:</label>
                            <input onChange={lNameHandler} type="text" id="name" name="lname" className="st2" required />
                            
                            <label for="name">Email:</label>
                            <input onChange={EmailHandler} type="email" id="Email" name="email" className="st2" required />


                            <label for="name">Password:</label>
                            <input onChange={PassHandler} type="password" id="name" name="password" className="st2" 
                       />
                            <label for="name">Confrim Password:</label>
                            <input onChange={Rehandler} type="password" id="name" name="repassword" className="st2" required />

                            <button className='btnn'>Sign up</button>
                            
                        </div>
                       
                    </form>



                </div>
        </div>
            </>
            )
}

            export default Sign1;