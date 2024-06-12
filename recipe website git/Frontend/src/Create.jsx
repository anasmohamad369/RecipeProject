import React from 'react'
import "./Create.css";
import Nav from "./Nav1.jsx"
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import Groups2Icon from '@mui/icons-material/Groups2';
import { FormControlLabel, RadioGroup, TextField, Radio, colors } from '@mui/material';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import EggAltIcon from '@mui/icons-material/EggAlt';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Loader from "./Loader.jsx"

export const Create = () => {
  const [img, setImg] = useState("");
  const [rname, setRname] = useState("");
  const [num, setNum] = useState("");
  const [time, setTime] = useState("");
  const [prem, setPrem] = useState(false);
  const [desc, setDesc] = useState("")
let data = localStorage.getItem("user");
let parsedData = JSON.parse(data)
const navigate = useNavigate()


useEffect(() => {
  if (data === null) {
    navigate("/login")
  }
}, [])

  const [textFields, setTextFields] = useState([{ ingName: "", ingWei: 0 }]);

  // Function to add a new input field
  const handleAddFields = () => {
    setTextFields([...textFields, { ingName: "", ingWei: 0 }]);
  };

  // Function to remove an input field by index
  const handleRemoveFields = (index) => {
    const newInputFields = [...textFields];
    newInputFields.splice(index, 1);
    setTextFields(newInputFields);
  };

  // Function to update the value of an input field
  const handleValueChange = (index, event, name) => {
    const values = [...textFields];
    values[index][name] = event.target.value;
    setTextFields(values);
  };
 
  const rnameHandler = (event) => {
    setRname(event.target.value)
  }
  const imgHandler = (event) => {
    setImg(event.target.value)
  }
  const numHandler = (event) => {
    setNum(event.target.value)
  }
  const timeHandler = (event) => {
    setTime(event.target.value)
  }
  const premHandler = (event) => {
    console.log(event.target.checked);
    setPrem(event.target.checked)
  }
 
  const descHandler = (event) => {
    setDesc(event.target.value)
  }
 
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      console.log({ img, rname, num, time, prem,  textFields });
      let res = await axios.post("http://localhost:5000/create", { img, rname, num, time, desc, prem, textFields ,customerId:parsedData._id});
      console.log(res);
      swal({
        title: " Hoorayhhhhh ",
        text: "Your Recipe have been stored in database ",
        icon: "success",
        button: "Click here",
      });
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data)
    }
  }
  let location = useLocation();
  let { state } = location;
  return (
    <>
      <Nav />
     <div className='createe'> 
     <div className='main1'>
        <h5>Recipe  Information</h5>
        <form className="formstyle" onSubmit={submitHandler}>
          <div className='left1'>
            <TextField onChange={imgHandler}
              label="Image URL"
              id="filled-start-adornment"
              sx={{ m: 2, borderRadius: 15, fontSize: 14, width: '70%' }}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <KeyboardArrowRightIcon />
                </InputAdornment>,
              }}
              variant="filled"
            />
            <div>
              <TextField onChange={rnameHandler}
                label="Recipe Name"
                id="filled-start-adornment"
                sx={{ m: 2, width: '70%', fontSize: 14 }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <KeyboardArrowRightIcon />
                  </InputAdornment>,
                }}
                variant="filled"
              />
              <TextField onChange={numHandler}
                label="Number Serving"
                id="filled-start-adornment"
                sx={{ m: 2, width: '70%' }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <Groups2Icon />
                  </InputAdornment>,
                }}
                variant="filled"
              />
            </div>
            <TextField onChange={timeHandler}
              label=" Cook Duration"
              id="filled-start-adornment"
              sx={{ m: 2, width: '70%' }}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <AvTimerIcon />
                </InputAdornment>,
              }}
              variant="filled"
            />

            <textarea  className='Desc1' autofocus onChange={descHandler} placeholder='Description'   rows="5" cols="15">
          
            </textarea>
            <h6 style={{ fontSize: "20px" }}>Set Recipe as</h6>
            <div className='subleft2' style={{
              display: "flex",
              flexDirection: "column",

            }}>


              <FormControl sx={{ border: "0.5px solid black", margin: "4px" }} className='box'>

                {/* <FormLabel id="demo-radio-buttons-group-label">Premium Details</FormLabel> */}
                <RadioGroup onChange={premHandler}
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group1"
                >
                  <FormControlLabel value={false} control={<Radio />} label="Free For everyone" />
                  <p>Every One See your recipe Freely</p>



                </RadioGroup>
              </FormControl>


            </div>
          </div>

          <div className='right1'>

            <div>
              <p>Ingredients <span class="material-symbols-outlined" style={{ fontSize: "15px" }}>
                info
              </span> </p>
              {textFields.map((textField, index) => (
                <div style={{ display: "flex" }} className="input-container" key={index}>
                  <TextField
                    label="Ingredient Name"
                    id="filled-start-adornment"
                    sx={{ m: 1, width: '70%' }}
                    className='st6'
                    InputProps={{
                      endAdornment: <InputAdornment position="end">
                        <EggAltIcon />
                      </InputAdornment>
                    }}
                    value={textField.value}
                    onChange={(e) => handleValueChange(index, e, "ingName")}

                    variant="filled"
                  />
                  <TextField
                    label="Ingredient Weight"
                    id="filled-start-adornment"
                    sx={{ m: 1, width: '70%' }}
                    className='st6'
                    InputProps={{
                      endAdornment: <InputAdornment position="end">
                        <EggAltIcon />
                      </InputAdornment>
                    }}
                    value={textField.value}
                    onChange={(e) => handleValueChange(index, e, "ingWei")}

                    variant="filled"
                  />


                  <button className="delete-btn" onClick={() => handleRemoveFields(index)}>
                    <span class="material-symbols-outlined delete-icon">delete</span>
                  </button>
                </div>
              ))}

              <div className='subright1' style={{display:"flex", gap:"15px"}}>
                <button className='button2' type='button' onClick={handleAddFields}>+ Add Ingredients </button>
                <button  className="savebtn" style={{display:"flex",justifyContent:'center'}} >

  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
        class="icon"
      >
        <path
          d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Save</span>
</button>

              </div>
            </div>


          </div>
        </form>
      </div>
     </div> 
      
    </>

  )
}
export default Create;
