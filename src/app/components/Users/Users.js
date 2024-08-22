"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./Users.module.css"
import Link from 'next/link'
import User from '../User/User'
import { removeUser } from '@/redux/slices/userSlices'
const Users = () => {

    const users=useSelector((state)=>state.userInfo.users)

    const dispatch= useDispatch();


    const deleteUser=(id)=>{
            dispatch(removeUser(id))
    }


  return (
    <div className={style.users}>
        <h1 className={style.user_title}> userrs</h1>
        <div className={style.user_container} >

            {
                users.length ==0 ? <div className={style.user_empty}>
                    <h1>No Users found please add some</h1>
                    <h3>
                        <Link href={"/add"}>Add user</Link>
                    </h3>
                </div> : <>
                    {
                        users.map((value)=>{
                            return <User key={value.id} id={value.id} email={value.email} name={value.name} contact={value.contact} jobRole={value.jobRole} deleteUser={()=>deleteUser(value.id)}/>
                        })
                    }
                </>

            }
        </div>
    </div>
  )
}

export default Users