import React from 'react'
import logo_1 from '../assets/logo_1.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import youtube from '../assets/youtube.png';




export default function Footer() {
  return (
    <div className="font-dmsans py-8 bg-white-50">
      <footer data-aos="zoom-in" className='container mx-auto lg:px-20 font-montserat px-5'>

        <div className='grid lg:grid-cols-7 md:grid-cols-3 grid-cols-1 items-baseline gap-12'>
          <div className='col-span-2 space-y-3'>
            <a href='/'>
              <img src={logo_1} alt=''></img>
            </a>
            <p className='text-gray-50'>
              NFT Lab is revolutionising the way creators, artists, and collectors interact with the world of digital art and ownership.
            </p>
            <div className='flex gap-x-6 items-center'>
              <a href='/'>
                <img src={twitter} alt=''></img>
              </a>

              <a href='/'>
                <img src={telegram} alt=''></img>
              </a>

              <a href='/'>
                <img src={discord} alt=''></img>
              </a>

              <a href='/'>
                <img src={youtube} alt=''></img>
              </a>
            </div>
            <p className='text-gray-100'>Copyright © {new Date().getFullYear()} NFTLab. All rights reserved.</p>

          </div>

          <div className='col-span-1'>
            <h5 className='text-xl font-semibold'>
              Maketplace
            </h5>
            <div className='pt-6 flex flex-col gap-y-5'>
              <a href='/' className='text-gray-50'>
                Explore
              </a>
              <a href='/' className='text-gray-50'>
                Explore
              </a>
              <a href='/' className='text-gray-50'>
                Explore
              </a>
            </div>

          </div>

          <div className='col-span-1'>
            <h5 className='text-xl font-semibold'>
              Stats
            </h5>
            <div className='pt-6 flex flex-col gap-y-5'>
              <a href='/' className='text-gray-50'>
                Ranking
              </a>
              <a href='/' className='text-gray-50'>
                Activity
              </a>
              <a href='/' className='text-gray-50'>
                Auther
              </a>
            </div>

          </div>

          <div className='col-span-1'>
            <h5 className='text-xl font-semibold'>
              Resoure
            </h5>
            <div className='pt-6 flex flex-col gap-y-5'>
              <a href='/' className='text-gray-50'>
                Blogs
              </a>
              <a href='/' className='text-gray-50'>
                Help and Center
              </a>
              <a href='/' className='text-gray-50'>
                FaQs
              </a>
            </div>

          </div>

          {/* <div className='col-span-1'>
            <h5 className='text-xl font-semibold'>
              My account
            </h5>
            <div className='pt-6 flex flex-col gap-y-5'>
              <a href='/' className='text-gray-50'>
                Profile
              </a>
              <a href='/' className='text-gray-50'>
                My wallet
              </a>
            </div>
          </div> */}

          <div className='col-span-2'>
            <h5 className='text-xl font-semibold'>
              Subscribe Us
            </h5>
            <p className='text-gray-50 pt-5'>
              Signup for our newsletter to get the latest news in your inbox.
            </p>
          </div>
        </div>

      </footer>
    </div>

  )
}
