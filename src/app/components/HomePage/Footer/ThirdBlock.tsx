import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import googlePlay from "./../../../../images/social-icon/732208.png"
import Image from 'next/image'
export default function ThirdBlock() {
  return (
    <div className='w-96'>
      <h3 className="text-xs font-bold py-2 uppercase p-1 mb-4">
        Experience Myntra App on Mobile
      </h3>
      <div className='flex'>
        <div className='bg-black px-2 py-1 flex justify-between	items-center rounded-lg mr-2'>
          <div style={{ position: 'relative', width: '100%', height: '24px' }}>
            <Image
              src={googlePlay}
              alt="Description of the image"  
              layout="fill"
              objectFit="contain" // Adjust as needed
            />
          </div>
          <div className='text-white px-4'>
            <p className='text-xs'>GET IT ON</p>
            <p className='text-sm'>Google Play</p>
          </div>
        </div>
        <div className='bg-black px-2  flex justify-between	items-center rounded-lg '>
          {/* <Image
            className="h-8 mr-1"
            src="https://logodix.com/logo/995526.png"
            alt=""
          /> */}
          <div className='text-white px-4'>
            <p className='text-xs'>Download on the</p>
            <p className='text-sm'>App Store</p>
          </div>
        </div>
      </div>
      <h3 className="text-xs font-bold uppercase p-1 mt-4">Keep in Touch</h3>
      <div className="flex text-3xl text-stone-500 py-1">
        <AiFillFacebook className="mr-4" />
        <AiOutlineTwitter className="mr-4" />
        <AiFillInstagram className="mr-4" />
        <AiFillYoutube className="mr-4" />
      </div>
    </div>
  )
}
