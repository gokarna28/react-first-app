import React from 'react'
import Nav from './Nav'
// import { ReactComponent as Logo } from '../assets/images/logo.svg';
import LogoIcon from '../assets/images/logo.svg'

const Header = () => {
    return (
        <>
            <div className='bg-slate-50 border-b flex items-center p-4 text-lg justify-between px-10 bg-stone-900'>
                <div className="font-bold text-2xl">
                    <img src={LogoIcon} />
                </div>
                <Nav />
                <div className='flex gap-6'>
                    <button className='bg-transparent border rounded-full py-2 px-4 text-white'>Login</button>
                    <button className='bg-[#5443F4] text-white py-2 px-4 rounded-full'>Start a Project</button>
                </div>
            </div>
        </>
    )
}

export default Header
