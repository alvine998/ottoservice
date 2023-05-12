import React, { useState } from 'react'
import {
  EllipsisVerticalIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link';

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div className='h-12 w-full sm:w-full bg-blue-500 md:px-0 md:py-2 flex justify-between items-center'>
        <div className=''></div>
        <p className='text-white w-full md:ml-10 text-lg text-center'>OTTOSERVICE</p>
        <button className='sm:mr-5' onClick={() => { setDropdown(!dropdown) }}>
          <EllipsisVerticalIcon className='text-white w-5' />
        </button>
      </div>
      {
        dropdown ?
          <>
            <div className='bg-white border-2 z-10 absolute border-gray-100 sm:right-[470px] right-0 w-full sm:w-[250px] shadow-lg rounded-sm w-56 h-auto'>
              <ul>
                <li className='hover:bg-gray-400 trasition duration-300 md:p-2 p-2 cursor-pointer'>
                  <Link href={"#home1"}>
                    <p>Home</p>
                  </Link>
                </li>
                <li className='hover:bg-gray-400 trasition duration-300 md:p-2 p-2 cursor-pointer'>
                  <Link href={"#home2"}>
                    <p>Home</p>
                  </Link>                </li>
                <li className='hover:bg-gray-400 trasition duration-300 md:p-2 p-2 cursor-pointer'>
                  <Link href={"#home3"}>
                    <p>Home</p>
                  </Link>                </li>
              </ul>
            </div>
          </> : ""
      }
    </div>
  )
}
