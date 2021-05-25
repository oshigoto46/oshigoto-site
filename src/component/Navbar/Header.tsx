import React, { useState } from 'react';

//import RightMenu from '../Right-Menu/RightMenu'
// import { Link } from 'react-router-dom';
// import { Drawer, Button} from 'antd';

const Header: React.FC = () => {
	return (
		<nav className='header' data-test='navbar'>
			 <div className='menu__logo'>
				 <span>Oshigoto46 Site</span>
			 </div>
			
		</nav>
	);
};

export default Header;