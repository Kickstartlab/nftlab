import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>

      <div className="lg:flex hidden items-center justify-between font-dmsans h-28">
        <a href="/" className="logo lg:my-12 flex items-end gap-x-4">
          <img src={logo} alt="Logo" />
          <h1 className='text-4xl font-dmsans font-bold'>NFTLab</h1>
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-12 items-center pt-6">
            <li><a href="/" className="font-semibold">Home</a></li>
            <li><a href="/" className="font-semibold">Explore</a></li>
            <li><a href="/" className="font-semibold">Whitepaper</a></li>
            <li><a href="/" className="font-semibold">BOT</a></li>
            <li><a href="#tokenomics" className="font-semibold">Tokenomics</a></li>
          </ul>
        </nav>

        <a href="/">
          <button className="bg-white-100 rounded-full py-3 lg:px-8 px-4 mt-5 font-semibold border  hover:border-blue-100 hover:bg-blue-100 hover:text-white-100">
            Connect wallet
          </button>
        </a>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-montserat">
        <a href="/" className="logo lg:my-12 flex items-end gap-x-4">
          <img src={logo} alt="Logo" />
          <h1 className='text-2xl font-dmsans font-bold'>NFTLab</h1>
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 left-0 p-2 w-3/4 overflow-y-auto text-center font-montserat font-semibold bg-blue-100 z-20  text-white-100">

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="logo lg:my-12 flex items-end gap-x-4">
              <img src={logo} alt="Logo" />
              <h1 className='text-4xl font-dmsans font-bold'>NFTLab</h1>
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center">
            <a href="/" className="text-lg ml-4 font-semibold">Home</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center">
            <a href="/" className="text-lg ml-4 font-semibold">Explore</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center">
            <a href="#about" className="text-lg ml-4 font-semibold">Whitepaper</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center">
            <a href="/" className="text-lg ml-4 font-semibold">BOT</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center">
            <a href="#tokenomics" className="text-lg ml-4 font-semibold">Tokenomics</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-black-100 bg-white-100">
            <a href="/" className="text-lg ml-4 font-semibold text-blue-100">Connect Wallet</a>
          </button>
        </div> : null
      }


    </header >
  )
}
