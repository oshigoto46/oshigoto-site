import React, { useState } from 'react';
import { slide as Menu } from "react-burger-menu";
//import RightMenu from '../Right-Menu/RightMenu'
// import { Link } from 'react-router-dom';
// import { Drawer, Button} from 'antd';

const Header: React.FC = () => {

	const [menuOpen,setMenuOpen] = useState(false);
	const handleStateChange = ():void => setMenuOpen(true);
	return (
		<nav className='header' data-test='navbar'>
			 <div className='menu__logo'>
				 <span>Oshigoto46 Site</span>
			 </div>
			 <Menu
				isOpen={menuOpen}
				onStateChange={state => handleStateChange()}
			 >
			 </Menu>
			
		</nav>
	);
};

export default Header;