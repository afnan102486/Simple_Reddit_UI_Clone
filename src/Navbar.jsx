import React from 'react';
import { Bell, Plus, MessageCircle, FileText } from 'lucide-react';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-4 shadow bg-white">
      <div className="flex items-center space-x-4">
        <img className="w-32 h-14" src="./logo.svg" alt="reddit logo" />
      </div>

      <div className="flex-grow max-w-xl mx-4">
        <input
          className="w-full bg-slate-300 px-5 py-2 rounded-full text-sm focus:outline-none"
          placeholder="Search Reddit"
          type="text"
        />
      </div>

      <div className="flex items-center space-x-4 text-gray-600">
  <FileText className="w-5 h-5 cursor-pointer" />
  <MessageCircle className="w-5 h-5 cursor-pointer" />
  <div className="flex items-center space-x-1 cursor-pointer">
    <Plus className="w-5 h-5" />
    <p className="text-sm">Create</p>
  </div>
  <div className="relative">
    <Bell className="w-5 h-5 cursor-pointer" />
  </div>
  <div className="relative">
    <CgProfile className="w-5 h-5 cursor-pointer" />
  </div>
</div>

    </nav>
  );
};

export default Navbar;
