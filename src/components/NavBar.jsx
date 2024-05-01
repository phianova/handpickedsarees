import React from 'react'

const NavBar = () => {
  return (
    <div className="hidden sm:flex flex-row w-full justify-between p-10">
        <img src="/logo.png" alt="logo" width={50} height={50} />
        <div className="flex flex-row justify-end">
            <a href="/" className="px-5">Home</a>
            <a href="/about" className="px-5">About</a>
            <a href="/contact" className="px-5">Contact</a>
        </div>
    </div>
  )
}

export default NavBar