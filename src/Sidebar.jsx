import React from "react";

import {
  Home,
  CircleArrowOutUpRight,
  HelpCircle,
  Users,
  BarChart,
  Plus,
  Settings,
} from "lucide-react";
import { PiRedditLogoBold, PiMicrophoneStageBold } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiBarChartAlt } from "react-icons/bi";
import { LuBookOpen, LuCircleHelp } from "react-icons/lu";
import { FiTool } from "react-icons/fi";
import { RiHourglass2Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="flex flex-col text-[14px] w-56 space-y-4 p-2 border-gray-300">
      <div className="flex flex-col space-y-1 border-b border-gray-300">
        <button className=" items-center px-3 py-2 rounded hover:bg-gray-100">
          <Home className="w-5 h-5 mr-3" /> Home
        </button>
        <button className=" items-center px-3 py-2 rounded hover:bg-gray-100">
          <CircleArrowOutUpRight className="w-5 h-5 mr-3" /> Popular
        </button>
        <button className=" items-center px-3 py-2 rounded hover:bg-gray-100">
          <HelpCircle className="w-5 h-5 mr-3" /> Answers{" "}
          <span className="ml-1 text-xs text-orange-500">beta</span>
        </button>
        <button className=" items-center px-3 py-2 rounded hover:bg-gray-100">
          <Users className="w-5 h-5 mr-3" />
          Explore
        </button>
        <button className=" items-center px-3 py-2 rounded hover:bg-gray-100 mb-4">
          <BarChart className="w-5 h-5 mr-3" />
          All
        </button>
      </div>

      <div className="space-y-1 border-b border-gray-300">
        <p className="text-gray-500 uppercase text-xs px-3 mb-1">
          Custom Feeds
        </p>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100 mb-4">
          <Plus className="w-5 h-5 mr-3" /> Create a custom feed
        </button>
      </div>
      <div className="space-y-1 border-b border-gray-300">
        <p className="text-gray-500 uppercase text-xs px-3 mb-1">Recent</p>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100 text-gray-700 mb-4">
          <div className="w-5 h-5 bg-black text-white text-xs flex items-center justify-center mr-3 font-bold rounded-full">
            r/
          </div>
          r/scifi
        </button>
      </div>

      <div className="space-y-1 border-b border-gray-300">
        <p className="text-gray-500 uppercase text-xs px-3 mb-1">Communities</p>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <Plus className="w-5 h-5 mr-3" />
          Create a community
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <Settings className="w-5 h-5 mr-3" />
          Manage
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100 mb-4">
          <img
            className="w-5 h-5 mr-3 rounded-full"
            src="https://styles.redditmedia.com/t5_2r0ij/styles/communityIcon_yor9myhxz5x11.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=681d33bd42be28350bef1f10e2fc7e8c4cf50b74"
          />
          r/announcements
        </button>
      </div>

      <div className="space-y-1 border-b border-gray-300">
        <p className="text-gray-500 uppercase text-xs px-3 mb-1">Resources</p>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <PiRedditLogoBold className="w-5 h-5 mr-3" />
          About Reddit
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <HiOutlineSpeakerphone className="w-5 h-5 mr-3" />
          Advertise
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <BiBarChartAlt className="w-5 h-5 mr-3" />
          Reddit Pro
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <LuCircleHelp className="w-5 h-5 mr-3" />
          Help
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <LuBookOpen className="w-5 h-5 mr-3" />
          Blog
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <FiTool className="w-5 h-5 mr-3" />
          Careers
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100 mb-4">
          <PiMicrophoneStageBold className="w-5 h-5 mr-3" />
          Press
        </button>
      </div>

      <div className="space-y-1">
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <div className="w-5 h-5 border-2 text-xs flex items-center justify-center mr-3 font-bold rounded-full">
            r/
          </div>
          Communities
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <RiHourglass2Fill className="w-5 h-5 mr-3" /> Best of Reddit
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <TbWorld className="w-5 h-5 mr-3" /> Top Translated Posts
        </button>
        <button className="flex items-center px-3 py-2 rounded hover:bg-gray-100 mb-4">
          <Users className="w-5 h-5 mr-3" />
          Topics
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
