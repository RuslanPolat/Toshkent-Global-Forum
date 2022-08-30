import React from 'react'
import { useLocation } from 'react-router'
import { Interface } from 'readline'
import { NavbarStyle } from './NavbarStyle'


export default function Navbar() {

  const location = useLocation().pathname

  return (
    <NavbarStyle>
        <section className='navbar'>
            <div className='text--div'>
                <h1>{location === "/fields" ? "Fields" : location === "/position" ? "Position"
                 : location === "/ticket" ? "Biletlar" :  location === "/foydalanuvchilar" ? "Foydalanuvchilar"
                  :  location === "/agenda" ? "Agenda" 
                  :  location === "/spikerlar" ? "Speaker" :  location === "/comments" ? "Comments" :  location === "/settings" ? "Settings" : "User"}</h1>
            </div>
            {/* <div className='icon--div'>
                <div className='icon icon-msg'></div>
                <div className='back--icon'>
                <div className='icon icon-notify'></div>
                </div>
                <div className='icon icon-full'></div>
            </div> */}
        </section>
    </NavbarStyle>
  )
}
