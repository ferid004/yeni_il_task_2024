import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.scss"

import  lopa from "../../assets/img/lupa.png"
import  whislist from "../../assets/img/Wishlist.png"
import basket from "../../assets/img/sebetim.png"
import title from "../../assets/img/title_yeni.avif"
import user from "../../assets/img/user.png"

function Navbar() {
  return (
      <>
        <div className='Main_container'>
          <div className='header_and_navbar'>
            <div className='h11'>
            <img src={title} alt="" />
            </div>
            <div className='navbar'>
              <NavLink className='navlink' activeClassName='active' to={'/'}>Home</NavLink>
              <NavLink className='navlink' to={'/login'}>Login</NavLink>
              <NavLink className='navlink' to={'/register'}>Register</NavLink>
              <NavLink className='navlink' to={'/admin'}>ADMIN</NavLink>


            </div>
          </div>
          <div className="search_and_icon">
            <div className="search">
              <div className="box">
                <input type="text" placeholder="Search for products, brands and more" />
                <div className="lopa">
                  <img src={lopa} alt="" />
                </div>
              </div>
            </div>
            <div className='icon'>
              <img src={whislist} alt="" />
              <img src={basket} alt="" />
              <NavLink className='navlink' to={'/profile'}><img src={user} alt="" /></NavLink>
              
            </div>
          </div>

        </div>
      </>
  )
}

export default Navbar