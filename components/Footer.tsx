import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#202023] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p>&copy; 2023 My Portfolio. All rights reserved.</p>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer