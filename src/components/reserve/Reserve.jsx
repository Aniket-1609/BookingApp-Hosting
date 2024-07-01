import React, { useContext, useState } from 'react'
import './Reserve.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch.js'
// import { SearchContext } from '../../context/SearchContext.js'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const Reserve = ({setOpen,hotelId}) => {

  const [selectedRooms,setSelectedRooms]=useState([]); 
  const {data,loading,error}=useFetch(`/hotels/rooms/${hotelId}`);
  
  
  const handleSelect=(e)=>{
    const checked = e.target.checked;
    const value=e.target.value;
    setSelectedRooms(checked
      ?
      [...selectedRooms,value]
      :selectedRooms.filter(item=>item!==value)
    );
  };

  console.log(selectedRooms);

  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/contact');
  }

  return (
    <div className='reserve'>
        <div className='rContainer'>

            <FontAwesomeIcon icon={faXmark} 
            className='rClose'
            onClick={()=>setOpen(false)}/>

            <span>Select your rooms:</span>
            {
              data.map((item,i)=>(
                <div className='rItem' key={i}>
                  <div className='rItemInfo'>
                    <div className='rTitle'>{item.title}</div>
                    <div className='rDesc'>{item.desc}</div>
                    <div className='rMax'>
                      Max People:<b>{item.maxPeople}</b>
                    </div>
                    <div className='rPrice'>{item.price}</div>
                  </div>
                  <div className='rSelectRooms'>
                    {item.roomNumbers.map((roomNumber)=>(
                      <div className='room'>
                        <label>{roomNumber.number}</label>
                        <input type='checkbox' value={roomNumber._id}
                        onChange={handleSelect}
                        className='checks'/>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            }

            <button  className='rButton' onClick={handleClick}>Reserve Now!</button>
        </div>
    </div>
  )
}

export default Reserve
