import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle' 

const Navbar = () => {
  return (
    
        <nav className='w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5'>
            <Link href="/" className='font-bold text-5xl'>
               Gaming<span className='text-primary'>Blog</span>
            </Link>
            <ModeToggle/>
            
        </nav>
   
  )
}

export default Navbar
