import React from 'react'
import Typewriter from 'typewriter-effect'

const HomePage = (props: { theme: any }) => {
  return (
    <div className='w-2/3 mx-auto pt-16 pb-10'>
      <div className='flex items-center'>
        <div className="profile bg-blue-500 rounded-full flex justify-center items-center mx-5 mb-3">
          <img src="/profile.jpg" alt="" className='rounded-full w-48 h-48 border-2 border-white pointer-events-none' />
        </div>
        <div className="typewriter text-white">
          <p className='text-2xl'>{"Hi, I'm Tausur Rahaman"}</p>
          <h1>
            <Typewriter
            options={{
              strings : [
                "Web developer",
                "Game developer",
                "UI/UX developer"
              ],
              autoStart : true,
              loop : true
            }}
            />
          </h1>
        </div>
      </div>

      <div className="bio">
        Bio
      </div>
    </div>
  )
}

export default HomePage
