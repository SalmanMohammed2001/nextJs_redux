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


    const handleChange=(e)=>{
        const {name,value}=e.target

        setUserInfo((cuurInfo)=>{
            return {
                ...cuurInfo,
                [name]:value
            }
        })
    }

    const handleClick=()=>{
        console.log(userInfo);
        
    }

    return (
    <div>
        <Navbar/>
        <div  className={style.home}>
            <div className={style.home_container}>
                <div className={style.home_formContainer}>
                    <h1 className={style.home_title}>Add User Information</h1>
                    <input name='id' value={userInfo.id} disabled/>
                    <br/>
                    <input
                     name='name'
                    type='text'
                    value={userInfo.name}
                    placeholder='enter name'
                    onChange={handleChange}
                      />
                       <br/>
                    <input
                     name='email'
                    type='email'
                    placeholder='enter email'
                    value={userInfo.email}
                    onChange={handleChange}
                      />
                       <br/>
                
                      <input
                       name='contact'
                      type='text'
                      placeholder='enter contact'
                      value={userInfo.contact}
                      onChange={handleChange}
                        />  <br/>
                        <input 
                        name='age'
                        type='text'
                        placeholder='enter age'
                        value={userInfo.age}
                        onChange={handleChange}
                          />  <br/>
                          <input 
                          name='jobRole'
                          type='text'
                          placeholder='enter jobRole'
                          value={userInfo.jobRole}
                          onChange={handleChange}
                            />
                            <br/>

                            <button onClick={handleClick}>Add user</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser