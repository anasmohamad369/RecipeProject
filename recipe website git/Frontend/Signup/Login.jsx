import React from 'react'
import "./Sign.css"
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
function Login() {

  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const emailHandler = (event) => {
    setEmail(event.target.value)
  }
  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }
  const submitHandler = async (event) => {
    try {
      event.preventDefault()
      let res = await axios.post("http://localhost:5000/login", { mail, password });
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data))

    
      navigate("/home")
      console.log(req.body);
    } catch (error) {
      toast.error(error.response.data)
    }

  }
  return (

    <>
      <div className="log">
        <div className="logo">
          {/* <img style={{backgroundColor:"transparent"}} src="../public/WAJAB.png" className='logoimgg' /> */}
        </div>
        <div className='rightside'>
          <form onSubmit={submitHandler}>


            <div className="logname">

              <h1 className='welcome'> welcome back</h1>
              <label>Mail Id</label>
              <input onChange={emailHandler} type="Mail" name="mail" placeholder="Mail" required className="st1" />


              <label> Password</label>
              <input onChange={passwordHandler} type="password" id="name" name="password" placeholder="password" className="st1" required />
              <div className='mainuser'>
                <p className='user'>Are you new to your website </p>
                <Link to="/signup"> Click Here </Link>
              </div>
              <button className='button'><span> Login </span></button>
            </div>



          </form>
        </div>
      </div>

    </>
  )
}

export default Login