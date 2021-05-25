import React, { useState } from 'react';
import { Drawer, Button} from 'antd';
import RightMenu from '../Right-Menu/RightMenu'
import {UploadModal} from "../Photos/UploadModal";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {


	// うえの変数は不要
	const [isDrawerMenuVisible, setIsDrawerMenuVisible] = useState<boolean>(false);
	const [open , setOpen]  = useState<boolean>(true);

	// どう書くのがいいのか検討
	const handleStateChange = ():void => setOpen(true);
	const handleClose       = ():void => setOpen(false);
	const showDrawer        = ():void => { setIsDrawerMenuVisible(true);}; 
	const onClose           = ():void => { setIsDrawerMenuVisible(false);};

	return (
		<nav className='header' data-test='navbar'>
			 <div className='menu__logo'>
				 {/* <Link></Link> */}
				 <span>Firegram</span>
			 </div>
			 {open && <UploadModal open={open} handleClose={handleClose} />}
			 <IconButton
				edge="start"
				// className={classes.menuButton}
			    onClick={() => showDrawer()}
				color="inherit"
				aria-label="menu"
             >
			 <MenuIcon />
			 </IconButton>
		</nav>
	);
};

export default Header;