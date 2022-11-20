/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { Navbar } from '@blueprintjs/core';

// eslint-disable-next-line import/extensions
import device from '@/constants/device-sizes';

export const Wrapper = styled.header`
  background-color: #383E47;
  padding: 8px 0;
`;

export const Container = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 16px;

  @media ${device.tablet} {
    padding: 0 24px;
  }

  @media ${device.laptopL} {
    padding: 0 40px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

export const ListItem = styled.li`
  float: left;
`;

export const NavLink = styled.a`
  color: #FFFFFF;
  display: block;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
`;

export const Logo = styled.img`
  margin-right: 16px;
  width: 50px;
`;
