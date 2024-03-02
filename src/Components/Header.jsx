import { useState, useEffect } from "react"; 
import logo from "../logo.png";
import './Header.scss';
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { BiCameraMovie } from "react-icons/bi";
import { useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location.pathname]);

  return (
    <nav className="header">
        <img src={logo} alt="" />
        <div className="icons">
            <CgProfile className='glarge'/>
            <IoSearchOutline className='glarge'/>
            {isHomePage ? (
              <GoHomeFill className='glarge' style={{ color: 'white', transform : "Scale(1.2)" }} />
            ) : (
              <GoHomeFill className='glarge' />
            )}
            <PiTelevisionSimple className='glarge'/>
            <BiCameraMovie className='glarge'/>
            <MdOutlineSportsSoccer className='glarge'/>
            <TbCategoryPlus className='glarge'/>
        </div>
        
    </nav>
  )
}

export default Header