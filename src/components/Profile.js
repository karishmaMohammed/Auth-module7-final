import React, {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
//import { StateContext } from '../Main/AuthProvider'

const Profile = () => {


  const navigate = useNavigate();

  let getName = window.localStorage.getItem("localName");
  let getEmail = window.localStorage.getItem("localEmail");
  let getPassword = window.localStorage.getItem("localPassword");

  useEffect(() => {
    if(!getName){
      setTimeout(()=>{
        navigate('/');
      }, 2000)
    }
  }, [getName, navigate])
  
  const logOut =()=>{
    window.localStorage.setItem("localName", "");
    window.localStorage.setItem("localEmail", "");
    window.localStorage.setItem("localPassword", "");
    navigate('/')
  }

  return (
    <div className='w-[85%] m-auto mt-10 text-2xl flex flex-col gap-4'>
        <h2>Profile </h2>
        <h2>Full Name : {getName}</h2>
        <h2>Email : {getEmail} </h2>
        <h2>Password : {getPassword} </h2>
        <button onClick={logOut} className='bg-white text-black w-28 rounded-sm p-2'>Logout</button>
    </div>
  )
}

export default Profile