/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { Button, Icon } from '@blueprintjs/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import * as S from './styles';

function TransferList({ data }) {
  const [items, setItems] = useState();
  const [selectedItems] = useState(null); // , setSelectedItems

  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <S.Container>
      <S.ListCard>{items && items.map(item => (
        <div>{`${item.firstName} ${item.middleName} ${item.surname}`}</div>
      ))}</S.ListCard>
      <S.ButtonWrapper>
        <Button><Icon icon="chevron-right" /></Button>
        <Button><Icon icon="chevron-left" /></Button>
      </S.ButtonWrapper>
      <S.ListCard>{selectedItems && selectedItems.map(item => (
        <div>{`${item.firstName} ${item.middleName} ${item.surname}`}</div>
      ))}</S.ListCard>
    </S.Container>
  );
};

TransferList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TransferList;
