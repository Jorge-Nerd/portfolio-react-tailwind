import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

import { FaBars } from 'react-icons/fa';

const Link = ({page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
    
        className={`${selectedPage === lowerCasePage ? 'text-purple':''}
            hover:text-purple hover:scale-125 transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={()=> setSelectedPage(lowerCasePage)}
            >
        {page}
    </AnchorLink>
  )
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isAboveSmallsScreen = useMediaQuery("(min-width:768px)");
  return (
    <nav className={"z-40 w-full fixed top-0 py-6"}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">Jailson </h4>
        {/* DESKTOP NAV*/}
        {isAboveSmallsScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page='Skills'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
        <button
            className="rounded-full bg-purple p-2"
            onClick={()=>setIsMenuToggle(!isMenuToggle)}
        >
            <FaBars />
            {/* <img alt="menu-icon" src="../assets/menu-icon.svg"></img> */}
        </button>)}
      </div>
    </nav>
  );
};

export default Navbar;
