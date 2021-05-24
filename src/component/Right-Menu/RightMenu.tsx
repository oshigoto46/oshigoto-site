import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuMode } from 'antd/lib/menu';
import { HOME, SIGNIN, SIGNUP, USER_PROFILE } from '../../constants/routes';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface IRightMenuProps {
    mode: MenuMode;
    closeMenu?: () => void;
  }

  const RightMenu:React.FC<IRightMenuProps> = (props: IRightMenuProps) =>{
  
    const closeMenuFunction = (): void => {
      if(props.closeMenu){
        props.closeMenu();
      }
    }
      return (
        <Menu mode={props.mode}>
          <Menu.Item key='home' onClick={closeMenuFunction}>
            <Link to={HOME}>Home</Link>
          </Menu.Item>
          <Menu.Item key="signin" onClick={closeMenuFunction}>
            <Link to={SIGNIN}>Sign In</Link>
          </Menu.Item>
          <Menu.Item key="signup" onClick={closeMenuFunction}>
            <Link to={SIGNUP}>Sign Up</Link>
          </Menu.Item>
         
        </Menu>
      );
    
  }
  
  export default RightMenu;