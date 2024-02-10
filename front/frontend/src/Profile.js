import React from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="profile-main">
        <h1>Profile</h1>
        <div className='aside'>
          <ul>
            <Link to='/update'><li>Update</li></Link>
            <Link to='/view'><li>View </li></Link>
          </ul>
        </div>
      </div>
      <div className="profile-side">
      </div>
      
    </div>
  )
}

export default Profile
