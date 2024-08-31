import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/header';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './pages/Home/home';
import Sidebar from './components/Sidebar/sidebar';
import { createContext, useState, useEffect } from "react";
import SearchCoach from './pages/CoachMaster/SearchCoach/searchCoach';
import RlyTransfer from './pages/CoachMaster/RlyTransfer/rlyTransfer';

import Unusual from './pages/CentralApp/Unusual/unusual';
import DepotInfra from './pages/CentralApp/DepotInfra/depotInfra'
import SickMarking from './pages/CoachMaint/SickMarking/sickMarking';
import SickRelease from './pages/CoachMaint/SickRelease/sickRelease'; 
import RakeMaint from './pages/Rake/RakeMaint/rakeMaint';
import DeleteRake from './pages/Rake/DeleteRake/deleteRake';


const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const openNav = () => {
    setIsOpenNav(true);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const values = {
    isToggleSidebar, 
    setIsToggleSidebar,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader,
    theme,
    setTheme,
    windowWidth,
    openNav,
    isOpenNav,
    setIsOpenNav
  };

  return (
      <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <div className='main d-flex'>
        {isHideSidebarAndHeader !== true && (
            <>
            <div className={`sidebarOverlay d-none ${isOpenNav===true && 'show'}`} onClick={()=>setIsOpenNav(false)}></div>
              <div
                className={`sidebarWrapper ${
                  isToggleSidebar === true ? "toggle" : ""
                } ${isOpenNav === true ? "open" : ""}`}
              >
                <Sidebar />
              </div>
            </>
          )}

          <div	
            className={`content ${isHideSidebarAndHeader === true && "full"} ${
              isToggleSidebar === true ? "toggle" : ""
            }`}
          >
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/dashboard" exact={true} element={<Home />} /> 
            
            <Route path="/rakeMaint" exact={true} element={<RakeMaint />} />
            <Route path="/deleteRake" exact={true} element={<DeleteRake />} />

            <Route path="/sickMarking" exact={true} element={<SickMarking />} />
            <Route path="/sickRelease" exact={true} element={<SickRelease />} />

            <Route path="/searchCoach" exact={true} element={<SearchCoach />} />
            <Route path="/rlyTransfer" exact={true} element={<RlyTransfer />} />

            <Route path="/unusual" exact={true} element={<Unusual />} />
            <Route path="/depotInfra" exact={true} element={<DepotInfra />} />
          </Routes>
          </div>
        </div>
        
      </MyContext.Provider>
      </BrowserRouter>
      
  );
}

export default App;
export { MyContext };
