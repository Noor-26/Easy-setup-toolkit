import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'

function Navber() {
  const [user] = useAuthState(auth)
  const  [photo, setPhoto] = useState("https://placeimg.com/80/80/people" )
  
useEffect(() => {
  if(user){
    setPhoto(user.photoURL)
  }
  else{
    setPhoto("https://placeimg.com/80/80/people")
  }
}, [user])

  return (
    <div class="navbar bg-base-100">
  <div class="flex-1">
    <Link to='/' class="btn btn-ghost normal-case text-xl nav_head">Darkfam-Social</Link>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src={photo}/>
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to='/chats' class="justify-between">
            Chats
            <span class="badge">New</span>
          </Link>
        </li> 
        <li><a >Settings</a></li>
        <li>{user ? <button className='btn' onClick={() => signOut(auth)}>Sign Out</button> :<Link to='/login'>Login</Link>}</li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navber