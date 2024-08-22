
import { Link } from "react-router-dom";
import logo from '../../assets/images/IR_Logo.png';
import emblemlogo from '../../assets/images/Emblem_of_India.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import SearchBox from '../../components/Search/searchbox';

const Header = ()=>{
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img alt="" src={logo} />
                                <span className="ml-2">CMM</span>
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-item-center part2 pl-4">
                            <Button className="rounded-circle"><MdMenuOpen/> </Button>
                            <SearchBox />
                        </div>

                        <div className="col-sm-7 d-flex align-item-center justify-content-end part3">
                            <Button className="rounded-circle mr-3"><MdOutlineLightMode /> </Button>
                            <Button className="rounded-circle mr-3"><FaRegBell/> </Button>
                            
                            <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-item-center">
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img alt="" src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                        </span>
                                    </div>
                                    <div className="userInfo">
                                        <h4>Devbrat Kumar</h4>
                                        <p className="mb-0">8130593695</p>
                                    </div>
                                </Button>
                            </div>

                            <Link to={'/'} className="d-flex align-items-center emblemlogo">
                                <img alt="" src={emblemlogo} />
                            </Link>

                        </div>


                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;