/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  button:first-child {
    margin-bottom: 24px;
  }
`;

export const ListCard = styled(Card)`
  min-height: 250px;
  min-width: 250px;

  &:first-child {
    margin-right: 16px;
  }

  &:last-child {
    margin-left: 16px;
  }
`;
