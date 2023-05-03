import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

import { FaBars } from "react-icons/fa";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-purple" : ""}
            hover:text-purple hover:scale-110 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isAboveSmallsScreen = useMediaQuery("(min-width:768px)");
  const navBg = isTopPage ? "" : "bg-gradient-j";
  return (
    <nav className={`${navBg} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <AnchorLink href="·home"><h4 className="font-playfair text-3xl font-bold">Jailson </h4></AnchorLink>
        {/* DESKTOP NAV*/}
        {isAboveSmallsScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-purple p-2"
            onClick={() => setIsMenuToggle(!isMenuToggle)}
          >
            <FaBars />
            {/* <img alt="menu-icon" src="../assets/menu-icon.svg"></img> */}
          </button>
        )}
        {/** MOBILE MENU POP UP */}
        {!isAboveSmallsScreen && isMenuToggle && (
          <div className="fixed right-0 bottom-0 h-full bg-pubg w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
                <img alt="close-icon" src="../assets/close-icon.svg" className="hover:bg-pink-600"></img>
              </button>
            </div>
            {/** MENU ITEMS */}
            <div className="grid grid-cols-1 gap-10 ml-[33%] text-2xl text-white">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
