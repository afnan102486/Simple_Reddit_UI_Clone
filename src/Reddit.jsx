import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Mainfeed from './MainFeed'
import RightSidebar from './RightSidebar'

const Reddit = () => {
     return (
    <div className="flex flex-col h-screen">
      
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden lg:block w-60 border-r border-gray-200 overflow-y-auto scrollbar-hide">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto p-4 scrollbar-hide">
          <Mainfeed />
        </main>
        <div className="hidden md:block w-96 border-l border-gray-200 overflow-y-auto scrollbar-hide">
        <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Reddit;