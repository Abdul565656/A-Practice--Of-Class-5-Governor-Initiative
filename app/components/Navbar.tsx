import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-slate-400'>
            <div className='flex justify-between items-center p-6'>
                <h3 className='text-2xl ml-8'>Abdullah Kashif</h3>
                <ul className='flex space-x-4 mr-3'>
                    <li>Home</li>
                    <li>Work</li>
                    <li>Courses</li>
                    <li>Services</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar