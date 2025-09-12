import React from 'react'
import profileIcon from '../../assets/userProfileicon.png';

function Navbar() {
  return (
    <div className='bg-white border-b w-screen h-[8vh] flex items-center justify-between px-20'>
        <div>
            <h1 className='text-2xl cursor-pointer font-extrabold'>TrackIt</h1>
        </div>
        <div>
            <img className='w-10 cursor-pointer' src={profileIcon}/>
        </div>
    </div>
  )
}

export default Navbar