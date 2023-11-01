import React from 'react';
import Avatar from './avatar';
import MobileMenu from './mobile-menu';
import "./style.css"
import SocialIcons from './social-icons';
import MainNav from './main-nav';
import Copyright from './copyright';
import Name from './name';
const Header = () => {
  return (
    <header className="header pull-left">
      <MobileMenu />
      <Avatar />
      <Name/>
      <SocialIcons/>
      <MainNav/>
      <Copyright/>
    </header>
  );
};
export default Header;