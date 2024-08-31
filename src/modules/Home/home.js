
import DashboardBox from "./HomeComponent/dashboardBox";

import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import newImage from '../../assets/images/new.gif';
import qrCode from '../../assets/images/telegram_qr_code.jpeg';


export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const options = {
    'backgroundColor': 'transparent',
    'chartArea': { 'width': '100%', 'height': '100%' },
};

const Home = ()=>{

    const [showBy, setshowBy] = useState('');
    const [showBysetCatBy, setCatBy] = useState('');

    return (
        <>
            <div className="right-content w-200">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} />
                        </div>
                        
                    </div>
                    <div className="col-md-4 pl-0 topPart2">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomEle">
                            <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                                
                            </div>
                            <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                            <p>$3,578.90 in last month</p>

                        </div>
                        
                    </div>
                    <div className="card shadow border-0 p-3 mt-4">
                        <h3 className="hd lineBreakAfterDiv" style={{ color: 'red' }}> All Pivot Reports are available under Pivot Table Reports Sub Menu </h3>
                        
                        <div className="row cardFilters mt-3 lineBreakAfterDiv">
                            <div className="col-md-10">
                                <b>Dear Users,Attention, <br /> please. Immediate redressal of CMM issues is our 
                                    endeavour, and therefore, we invite feedback on Telegram. 
                                    Kindly join the Telegram group by Given QR Code.<br/><br/>
                                    Helpdesk (24X7) - 7827936501</b>
                            </div>
                            <div className="col-md-2">
                                <img alt="" src={qrCode} width={115} height={115} ></img>
                            </div>
                        </div>

                        <div className="hd lineBreakAfterDiv">
                            <Button className="linkButtonOnHome" variant="contained">DRS 
                                <img alt="" src={newImage}></img> </Button>
                            <Button className="linkButtonOnHome" variant="contained">Watering Sensor 
                                 </Button>
                            <Button className="linkButtonOnHome" variant="contained">Coach Purification 
                                </Button>
                            <Button className="linkButtonOnHome" variant="contained">Rake Under Maint Tree View 
                                 </Button>
                            <Button className="linkButtonOnHome" variant="contained">Vande Bharat BPC 
                                 </Button>
                            <Button className="linkButtonOnHome" variant="contained">CMM Dashboard 
                                 </Button>
                        </div>
                        <div className="hd lineBreakAfterDiv">
                            
                            <Button className="linkButtonOnHome" variant="contained">Load Home Page 
                                 </Button>
                        </div>
                        
                        <div className="row cardFilters mt-3">
                            <div className="col-md-3">
                                <h4>SHOW BY</h4>
                                <FormControl size="small" className="w-100">
                                    <Select
                                        value={showBy}
                                        onChange={(e) => setshowBy(e.target.value)}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        labelId="demo-select-small-label"
                                        className="w-100"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-md-3">
                                <h4>CATEGORY BY</h4>
                                <FormControl size="small" className="w-100">
                                    <Select
                                        value={showBysetCatBy}
                                        onChange={(e) => setCatBy(e.target.value)}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        labelId="demo-select-small-label"
                                        className="w-100"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>

                        <div className="table-responsive mt-3">
                            <table className="table table-bordered table-striped v-align">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>UID</th>
                                        <th>PRODUCT</th>
                                        <th>CATEGORY</th>
                                        <th>BRAND</th>
                                        <th>PRICE</th>
                                        <th>STOCK</th>
                                        <th>RATING</th>
                                        <th>ORDER</th>
                                        <th>SALES</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#1</td>
                                        <td>
                                            <div className="d-flex align-items-center productBox">
                                                <div className="imgWrapper">
                                                    <div className="img card shadow m-0">
                                                        <img alt="" src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                                                    </div>
                                                </div>
                                                <div className="info pl-3">
                                                    <h6>Tops and skirt set for Female...</h6>
                                                    <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>womans	</td>
                                        <td>richman</td>
                                        <td>
                                            <div style={{ width: '70px' }}>
                                                <del className="old">$21.00</del>
                                                <span className="new text-danger">$21.00</span>
                                            </div>
                                        </td>
                                        <td>Rate Us </td>
                                        <td>4.9(16)</td>
                                        <td>380</td>
                                        <td>$38k</td>
                                        <td>
                                            <div className="actions d-flex align-items-center">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                                <Button className="success" color="success"><FaPencilAlt /></Button>
                                                <Button className="error" color="error"><MdDelete /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="d-flex tableFooter">
                            <p>showing <b>12</b> of <b>60</b> results</p>
                            <Pagination count={10} color="primary" className="pagination"
                                showFirstButton showLastButton />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;