/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import device from '@/constants/device-sizes';

export const Container = styled.div`
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

export const FormWrapper = styled.div`
  @media ${device.tablet} {
    display: grid;
    column-gap: 16px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
