/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Icon } from '@blueprintjs/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import * as S from './styles';

function TransferList({ data }) {
  const [items, setItems] = useState();
  const [selectedItems, setSelectedItems] = useState();

  useEffect(() => {
    setItems(data);
    setSelectedItems(null);
  }, [data]);

  function handleCheck(checkItems, setCheckItems) {
    const newCheckItems = checkItems.map(checkItem => {
      const newCheckItem = {};

      Object.assign(newCheckItem, checkItem);
      newCheckItem.checked = !newCheckItem.checked;

      return newCheckItem;
    });

    setCheckItems(newCheckItems);
  }

  return (
    <S.Container>
      <S.ListCard>{items && items.map(item => (
        <Checkbox checked={item.checked} onChange={() => handleCheck(items, setItems)}>
          {`${item.firstName} ${item.middleName} ${item.surname}`}
        </Checkbox>
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
