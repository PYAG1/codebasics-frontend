import React from 'react'
import Navbar from '../reusables/Navbar'

function Layout({children}) {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default Layout