import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () =>{
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu)
    }
    return(
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard <span className='arrow'><FaAngleRight /> </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon'><FaProductHunt /></span>
                            Rake <span className='arrow'><FaAngleRight /> </span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li> <Link to="/rakeMaint">Rake Maintenance</Link> </li>
                                <li> <Link to="/deleteRake">Delete Rake</Link> </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 2 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                            <span className='icon'><FaProductHunt /></span>
                            Coach Maintenance <span className='arrow'><FaAngleRight /> </span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 2 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li> <Link to="/sickMarking">Sick Marking</Link> </li>
                                <li> <Link to="/updateSickMarking">Update / Discard Sick Marking</Link> </li>
                                <li> <Link to="/sickRelease">Sick Release</Link> </li>
                                <li> <Link to="/scheduleMarking">Schedule Marking</Link> </li>
                                <li> <Link to="/updateScheduleMarking">Update Schedule Marking</Link> </li>
                                <li> <Link to="/scheduleRelease">Schedule Release</Link> </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 3 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                            <span className='icon'><FaProductHunt /></span>
                            Coach Master <span className='arrow'><FaAngleRight /> </span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 3 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li> <Link to="/searchCoach">Search & Edit</Link> </li>
                                <li> <Link to="/rlyTransfer">Railway Transfer</Link> </li>
                                <li> <Link to="/coachCommission">Coach Commission</Link> </li>
                                <li> <Link to="/changeCoachType">Change Coach Type</Link> </li>
                                <li> <Link to="/coachRCondemn">Coach RCondemnation</Link> </li>
                                <li> <Link to="/coachCondemn">Coach Condemnation</Link> </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 4 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                            <span className='icon'><FaProductHunt /></span>
                            Central Application <span className='arrow'><FaAngleRight /> </span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 4 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li> <Link to="/unusual">Unusual</Link> </li>
                                <li> <Link to="/depotInfra">Depot Infra</Link> </li>
                            </ul>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}

export default Sidebar;