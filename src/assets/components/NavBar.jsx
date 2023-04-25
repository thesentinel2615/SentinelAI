import React, { useState, useEffect, useRef } from "react";
import { HomeIcon, WrenchScrewdriverIcon, UserGroupIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { RxDiscordLogo } from 'react-icons/rx';
import { HiChevronDoubleRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import { BiWorld } from 'react-icons/bi';

const Navbar = () => {
  return (
    <>
      <div 
      className={'relative z-50 md:w-full lg:w-full shadow-md backdrop-blur-md left-1/2 transform -translate-x-1/2 top-0'}
      style={{
        backgroundColor: 'var(--selected-color)',
      }}>
        <div className="flex justify-center gap-10 w-10/12 mx-auto py-2">
          <Link
            title="Chat"
            className="bg-transparent rounded p-2 w-60 flex justify-center cursor-pointer hover:bg-selected-color hover:rounded hover:shadow-md hover:backdrop-blur-sm"
            style={{ color: 'var(--selected-text-color)' }}
            to="/"
          >
            <ChatBubbleLeftRightIcon className="w-8 h-8"/>
          </Link>
          <Link
            title="Characters"
            className="bg-transparent rounded p-2 w-60 flex justify-center cursor-pointer hover:bg-selected-color hover:rounded hover:shadow-md hover:backdrop-blur-sm"
            style={{ color: 'var(--selected-text-color)' }}
            to="/characters"
          >
            <UserGroupIcon className="w-8 h-8"/>
          </Link>
          <Link
            title="Worlds"
            className="bg-transparent rounded p-2 w-60 flex justify-center cursor-pointer hover:bg-selected-color hover:rounded hover:shadow-md hover:backdrop-blur-sm"
            style={{ color: 'var(--selected-text-color)' }}
            to="/worlds"
          >
            <BiWorld className="w-8 h-8"/>
          </Link>
          <Link
            title="Advanced Characters"
            className="bg-transparent rounded p-2 w-60 flex justify-center cursor-pointer hover:bg-selected-color hover:rounded hover:shadow-md hover:backdrop-blur-sm"
            style={{ color: 'var(--selected-text-color)' }}
            to="/advcharacter"
          >
            <HiChevronDoubleRight className="w-8 h-8"/>
          </Link>
          {/* <Link
            title="Discord Bot"
            className="bg-transparent rounded p-2 w-60 flex justify-center cursor-pointer hover:bg-selected-color hover:rounded hover:shadow-md hover:backdrop-blur-sm"
            style={{ color: 'var(--selected-text-color)' }}
            to="/discordbot"
          >
            <RxDiscordLogo className="w-8 h-8"/>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
