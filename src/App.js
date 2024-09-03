import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/header';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './modules/Home/home';
import Sidebar from './components/Sidebar/sidebar';
import { createContext, useState, useEffect } from "react";

import SearchCoach from './modules/CoachMaster/SearchCoach/searchCoach';
import RlyTransfer from './modules/CoachMaster/RlyTransfer/rlyTransfer';
import CoachCommission from './modules/CoachMaster/CoachCommission/coachCommission';
import ChangeCoachType from './modules/CoachMaster/CoachTypeChange/changeCoachType';
import CoachRCondemn from './modules/CoachMaster/CoachCondemnation/coachRCondemn';
import CoachCondemn from './modules/CoachMaster/CoachCondemnation/coachCondemn';

import Unusual from './modules/CentralApp/Unusual/unusual';
import DepotInfra from './modules/CentralApp/DepotInfra/depotInfra';

import SickMarking from './modules/CoachMaint/SickMarking/sickMarking';
import SickRelease from './modules/CoachMaint/SickRelease/sickRelease';
import UpdateSickMarking from './modules/CoachMaint/SickMarking/updateSickMarking';
import ScheduleMarking from './modules/CoachMaint/ScheduleMarking/scheduleMarking';
import UpdateScheduleMarking from './modules/CoachMaint/ScheduleMarking/updateScheduleMarking';
import ScheduleRelease from './modules/CoachMaint/ScheduleRelease/scheduleRelease'; 

import RakeMaint from './modules/Rake/RakeMaint/rakeMaint';
import DeleteRake from './modules/Rake/DeleteRake/deleteRake';


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
            <Route path="/updateSickMarking" exact={true} element={<UpdateSickMarking />} />
            <Route path="/sickRelease" exact={true} element={<SickRelease />} />
            <Route path="/scheduleMarking" exact={true} element={<ScheduleMarking />} />
            <Route path="/updateScheduleMarking" exact={true} element={<UpdateScheduleMarking />} />
            <Route path="/scheduleRelease" exact={true} element={<ScheduleRelease />} />

            <Route path="/searchCoach" exact={true} element={<SearchCoach />} />
            <Route path="/rlyTransfer" exact={true} element={<RlyTransfer />} />
            <Route path="/coachCommission" exact={true} element={<CoachCommission />} />
            <Route path="/changeCoachType" exact={true} element={<ChangeCoachType />} />
            <Route path="/coachRCondemn" exact={true} element={<CoachRCondemn />} />
            <Route path="/coachCondemn" exact={true} element={<CoachCondemn />} />

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
