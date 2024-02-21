import React from 'react';
import Image from 'next/image';
import { FiMessageCircle, FiShare } from 'react-icons/fi';
import { AiOutlineRetweet } from 'react-icons/ai';
import { CiBookmark, CiHeart, CiViewBoard } from 'react-icons/ci';
const FeedCard: React.FC = () => {
  return (<div className='border border-gray-600 p-4 m-2 hover:bg-slate-600'>
    <div className='grid grid-cols-12'>
      <div className='col-span-2 rounded'>
        <Image src="https://avatars.githubusercontent.com/u/31730550?v=4" width="50" height="50" alt='User profile image' />
      </div>
      <div className='col-span-10'>
        <h5>Manoj Kumar</h5>
        <p>This is a good boy....
          This is a good boy....
          This is a good boy....
        </p>
        <div className='flex justify-between mt-5 text-xl items-center p-2 w-[90%]'>
          <div>
            <FiMessageCircle />
          </div>
          <div>
            <AiOutlineRetweet />
          </div>
          <div>
            <CiHeart />
          </div>
          <div>
            <CiViewBoard />
          </div>
          <div>
            <CiBookmark />
          </div>
          <div>
            <FiShare />
          </div>
        </div>
      </div>
    </div>
    

  </div>)
}

export default FeedCard