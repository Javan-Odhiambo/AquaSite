import React from 'react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const links = [
    'home',
    'problem',
    'solution',
    'team',
    'contact'
  ]

  return (
    <section className='text-center p-4 bg-primary-1'>
      <div className='mb-3'>
        <Image alt='logo' src="/aquatwin-logo.png" height={200} width={200} className='mx-auto'/>
        <div className='mt-7'>
          <ul className='flex flex-col sm:flex-row sm:justify-center gap-3 font-medium'>
            {links.map((link, index) => (
              <li key={index}>
                <Link className='hover:text-btn hover:underline' href={`#{link}`}>
                  {link.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <Separator /> */}
      <hr className='fill-white bg-title block h-[2px]'/>
      <footer className='mt-3'>
        <div className='text-sm underline flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-5'>
          <Link href="#" >
            Privacy policy
          </Link>
          <Link href="#" >
            Terms of Service
          </Link>
        </div>
        <div className='mt-3 text-sm'>
          <p>&copy; 2024. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer


