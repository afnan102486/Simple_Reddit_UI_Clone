import React from 'react';
import { TbArrowBigUp, TbArrowBigDown, TbAward, TbShare3 } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi"
import { RxViewHorizontal } from "react-icons/rx";
import posts from "../data/data"



const Feed = () => {
  return (
    <div className='max-w-xl mx-auto ml-14 mt-8 space-y-1'>
        <div className="flex items-center border-b border-gray-200 pb-3 px-4 text-xs text-gray-600">
            <div className="flex items-center space-x-1">
                <span className='pb-1'>Best</span>
                <FiChevronDown className='w-3 h-3' />
            </div>
            <div className="flex items-center ml-2">
                <button className="w-5 h-5 flex items-center justify-center">
                    <RxViewHorizontal className='w-4 h-4' />
                </button>
                <FiChevronDown className='w-3 h-3 ml-1' />
            </div>
        </div>
        {posts.map((post,index) => (
      <div key={index} className="bg-white rounded-lg shadow p-4">
        <div className='flex items-center space-x-2 text-xs text-gray-500 border-b pb-2 border-gray-200 mb-2'>
            <span className='font-semibold text-black'>{post.SubName}</span>
            <span>•{ post.Posted} {post.Posted ===1 ? 'day ago' : 'days ago'}</span>
            <span>•{ post.Tag}</span>
        </div>
        <div className="text-base mb-1 font-semibold">
          {post.Title}
        </div>
        <p className="text-xs text-gray-700 mb-2">
            {post.Description}
        </p>
        <div className="flex items-center font-semibold text-xs space-x-4 mt-2">
          <div className="flex items-center space-x-1 bg-gray-400 rounded-full px-2 py-1">
            <TbArrowBigUp className='h-4 w-4' />
            <span>{post.Upvotes}</span>
            <TbArrowBigDown className='h-4 w-4' />
          </div>
          <div className="flex items-center bg-gray-400 rounded-full px-2 py-1 space-x-1">
            <FaRegComment className='h-4 w-4' />
            <span>{post.Comments}</span>
          </div>
          <div className=" bg-gray-400 rounded-full px-2 py-1">
            <TbAward className='h-4 w-4'/>
          </div>
          <div className="flex items-center space-x-1 bg-gray-400 rounded-full px-2 py-1">
            <TbShare3 className='h-4 w-4'/>
            <span>Share</span>
          </div>
        </div>
        </div>
        ))}
    </div>
  );
};

export default Feed;
