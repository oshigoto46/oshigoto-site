import React, { useState } from 'react';
import { Drawer, Button} from 'antd';
import RightMenu from '../Right-Menu/RightMenu'
import {UploadModal} from "./UploadModal";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

	const [isDrawerMenuVisible, setIsDrawerMenuVisible] = useState<boolean>(
		false
	  );
    const showDrawer = (): void => {
		setIsDrawerMenuVisible(true);
	  };
	
    const onClose = (): void => {
		setIsDrawerMenuVisible(false);
	  };
	const [open, setOpen] = useState(true);
	const handleClose = () => setOpen(false);

	return (
		<nav className='header' data-test='navbar'>
			 <div className='menu__logo'>
				 {/* <Link></Link> */}
				 <span>Firegram</span>
			 </div>
			 <div className='menu__container'>
                <div className='menu_rigth'>
				    <RightMenu mode='inline' ata-test='menu-outside-drawer' />
				</div>
				{open && <UploadModal open={open} handleClose={handleClose} />}
				<Button
					data-test='button-show-drawer'
					className='menu__mobile-button'
					type='primary'
					onClick={showDrawer}
					>
						button button
					{/* <Icon type='align-left' /> */}
				</Button>
				<Drawer
					data-test='drawer-menu'
					title='Firegram'
					placement='left'
					className='menu_drawer'
					closable={false}
					onClose={onClose}
					visible={isDrawerMenuVisible}
					>
				</Drawer>
	
			 </div>
		</nav>
	);
};

export default Header;