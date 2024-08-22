import React from 'react'
import Link from 'next/link'
import Style from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={Style.nav}>

        <Link href={"/"}>
       <h3> Data Entry Operator</h3>
        </Link>

        <ul className={Style.list}>
           
                <Link href={"/add"}>Add User</Link>
                <Link href={"/users"}> Users</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
            
        </ul>
    
    </nav>
  )
}

export default Navbar