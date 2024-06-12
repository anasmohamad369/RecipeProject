import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './Nav1';
import "./Own.css";
import Recipedet
  from './Recipedet';
import { Link, useNavigate } from 'react-router-dom';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
export const Own = () => {


  const [own, Setown] = useState([]);
  const [filter, SetFilter] = useState([]);
  const navigate = useNavigate()
  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:5000/del/${id}`);

    list()
  }


  let data = localStorage.getItem("user");

  useEffect(() => {
    if (data === null) {
      navigate("/login")
    }
  }, [])
  let parsedData = JSON.parse(data)
  async function list() {
    let res = await axios.get(`http://localhost:5000/own/${parsedData._id}`);
    Setown(res.data);
    SetFilter(res.data)
  };
  const [search, SetSearch] = useState("");
  const searchHandler = (event) => {
    SetSearch(event.target.value)
  }

  const Searched = () => {
    if (search === "") {
      Setown(filter)
    } else {
      let arr = own.filter((eachValue, index) => {
        return eachValue.rnameHandler.toLowerCase().includes(search.toLowerCase());
      });
      console.log(arr);
      Setown(arr);
    }
  }
  console.log(own);
  useEffect(() => { list() }, [])


  return (
    <>
      <Nav />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className='searchbox'>
          <button class="searchButton" type="submit" onClick={Searched} >
            <i class="material-icons" style={{ color: "red" }}>
              search
            </i>
          </button>
          <input class="searchInput" type="search" className="srch" name="q" placeholder="Search" onChange={searchHandler} />
        </div>
      </div>



      <div className="cardmenu" style={{ display: 'flex', justifyContent: "center", gap: "15px", flexWrap: "wrap", padding: "15px" }}>
        {own.map((eachValue, index) => {
          return (
            <>
              <div className='card' style={{ background: 'white', height: '400px', width: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <div className='card__img__top' style={{ background: 'blue', height: '150px', width: '230px' }}>
                  <img src={eachValue.imgHandler} className="recipeeimg" alt="" srcset="" />
                </div>
                <div className='card__img__bottom' style={{ height: '230px', width: '230px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                  <div className='card__bottom__title' style={{ height: '40px', width: '90%' }}>
                    <h1 style={{ fontSize: "20px" }}>{eachValue.rnameHandler}
                    </h1>
                  </div>
                  <div className='card__bottom__icons' style={{ height: '50px', width: '90%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div className='card__icon__one' style={{ height: '90%', width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <AvTimerIcon >
                      </AvTimerIcon>
                      <h2 className="card2-4">{eachValue.timeHandler}</h2>
                    </div>
                    <div className='card__icon__one' style={{ height: '90%', width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <ImportContactsIcon ></ImportContactsIcon>
                      <h2>{eachValue.ingredients.length}</h2>
                    </div>

                    <div className='card__icon__one' style={{ height: '90%', width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <GroupIcon></GroupIcon>
                      <h2>{eachValue.numHandler}</h2>
                    </div>

                  </div>
                  <div className='card__bottom__desc'>
                    <p style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '100%',
                      width: "200px"
                    }}> {eachValue.descHandler}</p>
                  </div>
                  <div className='card__bottom__click__here'>
                    <button className='viewer'>
                      <span> <Link to={`/recipe-detail/${eachValue._id}`} state={eachValue} >Continue
                      </Link> </span>
                      <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="ddelete">
                    <button className='delete' onClick={() => { deleteHandler(eachValue._id) }}>Delete</button>
                  </div>
                </div>
              </div>





            </>
          )
        })}
      </div>
    </>

  );
}
