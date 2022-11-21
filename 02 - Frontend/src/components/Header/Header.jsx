/* eslint-disable import/no-unresolved */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Classes, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';

import logo from '@assets/logo.png';
// eslint-disable-next-line import/extensions
import { GlobalContext } from '@/GlobalContext';

import * as S from './styles';

function Header() {
  const global = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isTabletOrLarger, setIsTabletOrLarger] = useState(false);

  useEffect(() => {
    setIsLoginPage(window.location.pathname === '/login');
    setIsTabletOrLarger(window.screen.width >= 768);
  }, [])

  function handleNavClick(navUrl) {
    navigate(navUrl);
  }

  function handleLogout() {
    global.setUserInfo(null);
    navigate("/");
  }

  return (!isLoginPage || global.userInfo) && (
    <S.Wrapper>
      <S.Container className='bp4-dark'>
        <NavbarGroup>
          <NavbarHeading>
            <S.Logo src={logo} alt="Aubay's logo" />
          </NavbarHeading>
          <NavbarDivider />
          <Button className={Classes.MINIMAL} icon="person" text={isTabletOrLarger ? 'Contacts' : ''} onClick={() => handleNavClick('/contacts')} />
          <Button className={Classes.MINIMAL} icon="comment" text={isTabletOrLarger ? 'Campaigns' : ''} onClick={() => handleNavClick('/campaigns')} />
          <Button className={Classes.MINIMAL} icon="chat" text={isTabletOrLarger ? 'Channels' : ''} onClick={() => handleNavClick('/channels')} />
          <Button className={Classes.MINIMAL} icon="chart" text={isTabletOrLarger ? 'Reports' : ''} onClick={() => handleNavClick('/reports')} />
        </NavbarGroup>
        <Button className={Classes.MINIMAL} onClick={() => handleLogout()} icon="log-out" text="Logout" />
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;
