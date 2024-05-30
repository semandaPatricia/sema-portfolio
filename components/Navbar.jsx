import React from 'react'
import Image from "next/image";
import LiveClock from './LiveClock';
import SlideTab from './SlideTab'
//import PopMenu from './menu/PopMenu';

const Navbar = () => {
  return (
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                {/*LEFT */}
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          
          <Image
              src="/logo2.svg"
              alt=" Logo"
              className="w-12 h-12 mr-10" 
              width={50}
              height={24}
              priority
            />
        </a>
      </div>
                {/*CENTER */}
    <SlideTab/>

                 {/*RIGHT */}
      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
         <div>
          <span><LiveClock/> </span>
          
          </div>

          <div className="hidden sm:flex">
            {/*PROFILE     <PopMenu/> */}
            <button className='outline rounded-full m-2 px-4 py-3 text-white bg-black'>Contact</button>
          </div>
        </div>

            {/*MOBILE DEVICES - menutoggle */}

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </div>
</header>
  )
}

export default Navbar