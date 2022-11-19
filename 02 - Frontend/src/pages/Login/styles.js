/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';

// eslint-disable-next-line import/extensions
import device from '@/constants/device-sizes';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  margin: 16px 0;
`;

export const LoginCard = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: center;

  @media ${device.mobileM} {
    padding: 40px 64px;
  }
`;

export const Logo = styled.img`
  max-width: 150px;
`;
