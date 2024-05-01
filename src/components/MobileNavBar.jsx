"use client"
import React from 'react'

const MobileNavBar = () => {

    const clickMenu = () => {
        document.getElementById("menu").classList.toggle("hidden")
    }
    return (
        <div className="flex sm:hidden flex-col w-full p-5">
            <button onClick={clickMenu} className="flex flex-row justify-between">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
                <img src="/logo.png" alt="logo" width={50} height={50} />
            </button>
            <div className="hidden flex flex-col" id="menu">
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
            </div>
        </div>)
}

export default MobileNavBar