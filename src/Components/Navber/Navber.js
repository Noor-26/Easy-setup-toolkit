import React from 'react'
import { Link } from 'react-router-dom'

function Navber() {
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
          <img src="https://placeimg.com/80/80/people" />
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
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navber