import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsFillSunFill} from 'react-icons/bs'
import {HiMoon} from 'react-icons/hi'

const Navbar = (props: { onSubmit: (arg0: string) => void }) => {

  const [mode, setMode] = useState('dark')
  const [menu, setMenu] = useState(false)

  useEffect(() => {
  props.onSubmit(mode)
  }, [mode])
  
  return (
    <div className='flex md:px-10 py-5 bg-gray-800 justify-between items-center'>
      <div className="logo md:mx-10 w-8 mx-3 flex space-x-2 items-center">
        <img src="/metaIcon.png" alt="" />
        <button className='font-mono text-xl'><Link href={'/'}>MetaWave</Link></button>
      </div>

      <div className="NavItems flex items-center">
        <ul className='md:flex space-x-10 text-lg hidden'>
          <li className='hover:text-blue-600 hover:-translate-y-1 duration-300 ease-in-out cursor-pointer'><Link href={'/'}>Home</Link></li>
          <li className='hover:text-blue-600 hover:-translate-y-1 duration-300 ease-in-out cursor-pointer'><Link href={'/works'}>Works</Link></li>
          <li className='hover:text-blue-600 hover:-translate-y-1 duration-300 ease-in-out cursor-pointer'><Link href={'/posts'}>Posts</Link></li>
          <li className='hover:text-blue-600 hover:-translate-y-1 duration-300 ease-in-out cursor-pointer'><Link href={'/contact'}>Contact</Link></li>
        </ul>
      </div>

      <div className="theme-burger pl-12 flex items-center space-x-2 mx-2">
          {mode == 'dark' && <button className='rounded-lg p-2 bg-yellow-500 text-xl flex justify-center items-center active:rotate-180 duration-100 ease-in-out' onClick={()=>setMode('light')}>
            <BsFillSunFill/>
          </button>}
          {mode == 'light' && <button className='rounded-lg p-2 bg-cyan-500 text-xl flex justify-center items-center active:-rotate-180 duration-100 ease-in-out' onClick={()=>setMode('dark')}>
            <HiMoon/>
          </button>}
          <button className='rounded-lg text-2xl staic md:hidden' onClick={()=>setMenu(menu ? false : true)}>
            <RxHamburgerMenu/>
          </button>

          {menu && <div className='mobile-menu absolute right-5 top-16 bg-gray-500 px-8 py-2'>
            <ul className='space-y-2'>
              <li className='text-lg font-semibold hover:text-blue-500 duration-200 ease-in-out'><Link href={'/'}>Home</Link></li>
              <li className='text-lg font-semibold hover:text-blue-500 duration-200 ease-in-out'><Link href={'/works'}>Works</Link></li>
              <li className='text-lg font-semibold hover:text-blue-500 duration-200 ease-in-out'><Link href={'/posts'}>Posts</Link></li>
              <li className='text-lg font-semibold hover:text-blue-500 duration-200 ease-in-out'><Link href={'/contact'}>Contact</Link></li>
            </ul>
          </div>}
      </div>
    </div>
  )
}

export default Navbar