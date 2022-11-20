import { Button, Card, Icon } from '@blueprintjs/core';
import React from 'react';

import * as S from './styles';

function TransferList() {
  return (
    <S.Container>
      <Card>Test</Card>
      <div>
        <Button><Icon icon="chevron-right" /></Button>
        <Button><Icon icon="chevron-left" /></Button>
      </div>
      <Card>Test</Card>
    </S.Container>
  );
};

export default TransferList;
