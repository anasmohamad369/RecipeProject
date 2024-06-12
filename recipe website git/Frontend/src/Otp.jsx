import React, { useState } from 'react'
import "./Otp.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const Otp = () => {
  const [otp, Setotp] = useState("");
  const navigate = useNavigate()
  const otpHandler = (event) => {
    Setotp(event.target.value)
  }
  const subHandler = async (event) => {
    try {
      event.preventDefault()
      let mailid = localStorage.getItem("usermail")
      let res = await axios.post("http://localhost:5000/verifyotp", { otp, mailid });
      swal({
        title: "Otp verified Succesfull",
        text: "Now you are the member of our website",
        icon: "success",
        button: "Click here",
      });
      navigate("/login")
    }
    catch {
      toast.error("otp verified unsuccesfully")
    }

  }
  return (
    <>
      <div className='body'>

        <div className="MAINCARD" >

          <div className='mainotp'>
            <div className="Cardotp" >
              <h1>Enter the OTP</h1>
               <a>Otp Sent to this mail </a>
              <input type='text'  maxlength="4" onChange={otpHandler} />
              <button  class="btn-1" onClick={subHandler}><span>Submit</span></button>
            </div>
          </div>
        </div>

      </div>

    </>

  )
}
