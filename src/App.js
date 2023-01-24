import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import Navbar from "./components/Navbar";
import DotGroup from './components/DotGroup'
import AnchorLink from "react-anchor-link-smooth-scroll";

// const Link=({page, selctedPage, setSelectedPage})=>{
//   const lowerCasePage=page.toLowerCase();

//   return (
//     <AnchorLink
//       className={`${selectedPage === lowerCasePage ? 'text-#54C4DB':''}
//         hover:text-#54C4DB transition duration-500`}
//       href={`#${lowerCasePage}`}
//       onClick={()=>setSelectedPage(lowerCasePage)}
//     >
//       {page}
//     </AnchorLink>
//   )
// }

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setIsTopPage(true) : setIsTopPage(false);
      window.addEventListener("scroll", handleScroll);
    };
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  return (
    <div className="App bg-deep-blue">
      <Navbar
        isTopPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 max-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
