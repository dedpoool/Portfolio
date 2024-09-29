import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
return (
    <>
    {/* main div */}
    <div className='flex w-full justify-evenly align-middle bg-purple-400 items-center'> 
    {/* Logo */}
    <div className='w-1/12 rounded-lg'>
        <img className='rounded-2xl m-4' src="/public/my try 2square orange.png" alt="" />
    </div>

    {/* Navigation */}
    <div className='flex h-full align-middle content-center justify-center bas-3/4'>
        {/* options */}
        <div className='h-fit'>
            <NavLink to={'/'} className='text-white px-6 py-4'>Home</NavLink>
        </div>
        <div className='h-fit'>
            <NavLink to={'/Contact'} className='text-white px-6 py-4'>Contact</NavLink>
        </div>
        <div className='h-fit'>
            <NavLink to={'/About'} className='text-white px-6 py-4'>About</NavLink>
        </div>
        <div className='h-fit'>
            <NavLink to={'Sol'} className='text-white px-6 py-4'>Solutions</NavLink>
        </div>
    </div>
    </div>
    </>
)
}

export default Header