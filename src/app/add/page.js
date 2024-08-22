"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import style from './Add.module.css'
import { v4 as uuid } from 'uuid'



const AddUser = () => {

    const [userInfo,setUserInfo]= useState({
        id:"",
        name:"",
        email:"",
        contact:"",
        age:"",
        jobRole:""
    })


    useEffect(()=>{

        setUserInfo((currInfo)=>{
            return {
                ...userInfo,
                id: uuid(),
            }
        })

    },[])

    return (
    <div>
        <Navbar/>
        <div  className={style.home}>
            <div className={style.home_container}>
                <div className={style.home_formContainer}>
                    <h1 className={style.home_title}>Add User Information</h1>
                    <input name='id' value={userInfo.id} disabled/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser