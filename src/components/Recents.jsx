import React from 'react';
import { TbArrowBigUp, TbArrowBigDown, TbAward, TbShare3 } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa";
import posts from "../data/data"



const Recents = () => {
  return (
    <div className='max-w-xl mx-auto mt-16 space-y-1'>
        <div className="flex justify-between">
        <p className='text-xs text-gray-600 pl-4 font-semibold'>Recent Posts</p>
        <button className="text-xs text-blue-600 mr-4">Clear</button>
        </div>
        {posts.map((post,index) => (
      <div key={index} className="bg-white rounded-lg shadow p-4">
        <div className='flex items-center space-x-2 text-xs text-gray-500 border-b pb-2 border-gray-200 mb-2'>
            <span className='text-xs text-gray-600'>{post.SubName}</span>
            <span>•{ post.Posted} {post.Posted ===1 ? 'day ago' : 'days ago'} </span>
        </div>
        <div className="text-sm text-gray-600 mb-1 font-semibold">
          {post.Title}
        </div>
        <div className="flex items-center text-gray-600 text-xs space-x-4 mt-2 pb-3">
          <div className="flex items-center space-x-1">
            <TbArrowBigUp className='h-4 w-4' />
            <span>{post.Upvotes}</span>
            <TbArrowBigDown className='h-4 w-4' />
          </div>
          <div className="flex items-center space-x-1">
            <FaRegComment className='h-4 w-4' />
            <span>{post.Comments}</span>
          </div>
        </div>
        </div>
        ))}
    </div>
  );
};

export default Recents;
