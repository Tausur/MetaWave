import React from 'react'
import Link from 'next/link'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsFillSunFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='flex md:px-10 py-5 bg-blue-300 justify-between items-center'>
      <div className="logo md:mx-10 w-8 mx-3 flex space-x-2 items-center">
        <img src="/metaIcon.png" alt="" />
        <button className='font-mono text-xl'><Link href={'/'}>MetaWave</Link></button>
      </div>

      <div className="NavItems flex items-center">
        <ul className='md:flex space-x-5 text-lg hidden'>
          <li className='hover:text-blue-600 hover:-translate-y-1 duration-300 ease-in-out cursor-pointer'><Link href={'/'}>Home</Link></li>
          <li className='hover:text-blue-600 hover:-translate-y-1 duration-300 ease-in-out cursor-pointer'><Link href={'/works'}>Works</Link></li>
          <li className='hover:text-blue-600 hover:-translate-y-1 duration-300 ease-in-out cursor-pointer'><Link href={'/posts'}>Posts</Link></li>
          <li className='hover:text-blue-600 hover:-translate-y-1 duration-300 ease-in-out cursor-pointer'><Link href={'/contact'}>Contact</Link></li>
        </ul>
      </div>

      <div className="theme-burger pl-12 flex items-center space-x-2 mx-2">
          <button className='rounded-lg p-2 bg-yellow-500 text-xl'><BsFillSunFill/></button>
          <button className='rounded-lg text-2xl '><RxHamburgerMenu/></button>
      </div>
    </div>
  )
}

export default Navbar