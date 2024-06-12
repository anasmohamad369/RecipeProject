import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Recipe.css"
import AvTimerIcon from '@mui/icons-material/AvTimer';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Nav from "./Nav1.jsx"
export const Recipedet = () => {
  let location = useLocation();
  let { state } = location;
  console.log(state);
  
  return (
    <>
      <Nav />


      <div className='recipedetailed-page'>
        <div className='block00'>
          <img src='../public/wajab.png' className='wajab1' />
          <h3 className='subblock0'>  {state.rnameHandler}  </h3>
        </div>
        <div className='maindiv1'>
          <div className="leftdiv1">
            <img src={state.imgHandler} className='rnameimg'></img>
            
          </div>
          <div className="rightdiv1">
         
            <div className="rightdivblock">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",flexWrap:"wrap" }} className='groupicon'>
                <GroupIcon style={{ fontSize: "40px" }}>

                </GroupIcon>
                <div className="groupicon2">
                  {state.numHandler}
                </div>
              </div>
              <div style={{
                display: 'flex', flexDirection: "column", justifyContent: "center"
                , alignItems: "center",
              }} className="avtime  r">
                <AvTimerIcon style={{ fontSize: "40px" }}></AvTimerIcon>
                <div className="avtimer2" style={{
                  display: 'flex', justifyContent: "center"
                  , alignItems: "center"
                }}>
                  {state.timeHandler}
                </div>
              </div>
              <div className="impoicon">

                <ImportContactsIcon style={{ fontSize: "40px" }}></ImportContactsIcon>
                <div className="impicon" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                  {state.ingredients.length}
                </div>
              </div>

            </div>
            <div className="rightdivsubblock">
              <div className="rightdivblock1">
                  <h1>Details about your recipe</h1>
              </div>
              <div className="rightdivblock2">
                {state.ingredients.map((ing)=>{
                  return (
                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
                   <ul>
                   <li><h3>{ing.ingName}</h3> </li>
                   </ul> 

                  <ul>
                <h3 >{ing.ingWei}</h3>  
                  </ul> 
                    </div>
                  )
                })}
              </div>
              <div className="rightdivblock3">
              <p>{state.descHandler}</p>  
              </div>
            </div>

          </div> 
        </div>
      </div>
    </>

  )
}
export default Recipedet
