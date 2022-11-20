/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Icon } from '@blueprintjs/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import * as S from './styles';

function TransferList({ data, onTransfer }) {
  const [items, setItems] = useState();
  const [selectedItems, setSelectedItems] = useState();

  useEffect(() => {
    setItems(data);
    setSelectedItems([]);
  }, [data]);

  useEffect(() => {
    const transferedItems = [];

    selectedItems?.forEach(selectedItem => {
      transferedItems.push(selectedItem.id);
    });

    onTransfer(transferedItems);
  }, [selectedItems]);

  function handleCheck(checkItems, setCheckItems, id) {
    const newCheckItems = checkItems.map(checkItem => {
      if (checkItem.id === id) {
        const newCheckItem = {};
  
        Object.assign(newCheckItem, checkItem);
        newCheckItem.checked = !newCheckItem.checked;

        return newCheckItem;
      }

      return checkItem;
    });

    setCheckItems(newCheckItems);
  }

  function moveItems(direction) {
    const itemsToTransfer = [];

    if (direction === 'right') {
      setItems(items.filter(item => {
        if (item.checked) {
          const newItem = {};

          Object.assign(newItem, item);
          delete newItem.checked;

          itemsToTransfer.push(newItem);
        }

        return !item.checked;
      }));

      setSelectedItems([...selectedItems, ...itemsToTransfer]);
    }

    if (direction === 'left') {
      setSelectedItems(selectedItems.filter(item => {
        if (item.checked) {
          const newItem = {};

          Object.assign(newItem, item);
          delete newItem.checked;

          itemsToTransfer.push(newItem);
        }

        return !item.checked;
      }));

      setItems([...items, ...itemsToTransfer]);
    }
  }

  return (
    <S.Container>
      <S.ListCard>{items && items.map(item => (
        <Checkbox key={item.id} checked={item.checked} onChange={() => handleCheck(items, setItems, item.id)}>
          {`${item.firstName} ${item.middleName} ${item.surname}`}
        </Checkbox>
      ))}</S.ListCard>
      <S.ButtonWrapper>
        <Button onClick={() => moveItems('right')}><Icon icon="chevron-right" /></Button>
        <Button onClick={() => moveItems('left')}><Icon icon="chevron-left" /></Button>
      </S.ButtonWrapper>
      <S.ListCard>{selectedItems && selectedItems.map(item => (
        <Checkbox key={item.id} checked={item.checked} onChange={() => handleCheck(selectedItems, setSelectedItems, item.id)}>
          {`${item.firstName} ${item.middleName} ${item.surname}`}
        </Checkbox>
      ))}</S.ListCard>
    </S.Container>
  );
};

TransferList.defaultProps = {
  data: null,
};

TransferList.propTypes = {
  data: PropTypes.array,
  onTransfer: PropTypes.func.isRequired,
};

export default TransferList;
