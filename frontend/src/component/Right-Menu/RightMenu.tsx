import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import { Layout } from 'antd';
import { DropdownProps } from "react-overlays/cjs/Dropdown";
// import Avatar from "@material-ui/core/Avatar";
// import AddIcon from "@material-ui/icons/Add";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { MenuMode } from 'antd/lib/menu';

import { HOME, SIGNIN, SIGNUP, USER_PROFILE } from '../../constants/routes';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface IRightMenuProps {
    mode: MenuMode;
    closeMenu?: () => void;
  }

  const RightMenu:React.FC<IRightMenuProps> = (props: IRightMenuProps) =>{
  
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);


    const closeMenuFunction = (): void => {
      if(props.closeMenu){
        props.closeMenu();
      }
    }
      return (

        <nav>
          <div className={isOpen ? "visible" : ""} role="menu"> HOGEHOGEHOGHOEG </div>          
          <Menu mode={props.mode}>
              <Menu.Item key='home' onClick={closeMenuFunction}>
              <Link to={HOME}>
                Home
                {/* <AddIcon />   */}
              </Link>
            </Menu.Item>
            <Menu.Item key="signin" onClick={closeMenuFunction}>
              <Link to={SIGNIN}>Sign In</Link>
            </Menu.Item>
            <Menu.Item key="signup" onClick={closeMenuFunction}>
              <Link to={SIGNUP}>Sign Up</Link>
            </Menu.Item>
          </Menu>
         </nav>
      );

    
  }
  
  export default RightMenu;