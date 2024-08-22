"use client"

import React from 'react'
import style from './User.module.css'

const User = ({id,name,age,email,contact,jobRole,deleteUser}) => {
  return (
    <div className={style.user}>
        <h2>
            Id : <span> {id}</span>
        </h2>
        <h3>
        Age : <span> {age}</span>
        </h3>
        <h3>
        Email : <span> {email}</span>
        </h3>
        <h3>
        Contact : <span> {contact}</span>
        </h3>
        <h3>
        JobRole : <span> {jobRole}</span>
        </h3>
        <div className={style.user_bottom}>
            <button onClick={deleteUser} className={style.user_delete}>Delete</button>
        </div>
    </div>
  )
}

export default User