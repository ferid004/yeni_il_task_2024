import React from 'react'

import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar'

function MainL() {
    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer />
        </>
    )
}

export default MainL