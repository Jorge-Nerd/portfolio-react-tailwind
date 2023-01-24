import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import Navbar from "./components/Navbar";
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
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  
  return (
    <div className="App bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
