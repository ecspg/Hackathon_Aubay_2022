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

export const FilterButtonWrapper = styled.div`
  margin-bottom: 16px;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  @media ${device.tablet} {
    margin-bottom: 0;

    button:first-child {
      margin-right: 16px;
    }
  }
`;