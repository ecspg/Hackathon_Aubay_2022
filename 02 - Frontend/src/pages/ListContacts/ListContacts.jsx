/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-unresolved */
import React, { useContext, useEffect, useState } from 'react'
import { Button, Classes, HotkeysProvider, Icon, InputGroup, Intent } from '@blueprintjs/core';
import { Cell, Column, ColumnHeaderCell2, Table2 } from "@blueprintjs/table";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line import/extensions
import { GlobalContext } from '@/GlobalContext';
import ContactService from '../../services/ContactService';

import * as S from './styles';

function ListContacts() {
  const global = useContext(GlobalContext);
  const navigate = useNavigate();
  const [contacts, setContacts] = useState();
  const [filterValue, setFilterValue] = useState();

  useEffect(() => {
    ContactService.getContacts().then(data => {
      setContacts(data);
    });
  }, []);

  function onLogout() {
    global.setUserInfo(null);
    navigate('/');
  }

  function renderName(name) {
    return (
      <div className={Classes.TEXT_LARGE}>
        <b>{name}</b>
      </div>
    );
  }

  function getColumnWidths() {
    let screenSize = window.screen.width;

    if (!contacts || screenSize <= 600) {
      return null;
    }
    if (screenSize > 1440) {
      screenSize = 1440;
    }
    
    screenSize /= 4;

    const screenSizeArray = [];

    for (let i = 0; i < 4; i += 1) {
      screenSizeArray.push(screenSize);
    }

    return screenSizeArray;
  }

  function handleFilterChange(e) {
    setFilterValue(e.target.value);
  }

  return (
    <S.Container>
      <Button onClick={() => onLogout()}>Logout</Button>

      <h1>Contacts</h1>
      <S.FilterButtonWrapper>
        <S.ButtonWrapper>
          <Button intent={Intent.SUCCESS}>
            Add Contact
          </Button>
          <Button intent={Intent.SUCCESS}>
            <Icon icon="table" /> Add via CSV
          </Button>
        </S.ButtonWrapper>
        <InputGroup
          large
          leftIcon="filter"
          onChange={(e) => handleFilterChange(e)}
          placeholder="Filter contacts..."
          value={filterValue}
        />
      </S.FilterButtonWrapper>
      {contacts && <HotkeysProvider>
        <Table2 columnWidths={getColumnWidths()} numRows={contacts.length} enableColumnResizing enableRowHeader={false}>
          <Column cellRenderer={(i) => <Cell>{ contacts[i].firstName }</Cell>} columnHeaderCellRenderer={() => <ColumnHeaderCell2 name="First name" index={0} nameRenderer={() => renderName('First name')} />} />
          <Column cellRenderer={(i) => <Cell>{ contacts[i].middleName }</Cell>} columnHeaderCellRenderer={() => <ColumnHeaderCell2 name="Middle name" index={1}  nameRenderer={() => renderName('Middle name')} />} />
          <Column cellRenderer={(i) => <Cell>{ contacts[i].surname }</Cell>} columnHeaderCellRenderer={() => <ColumnHeaderCell2 name="Surname" index={2} nameRenderer={() => renderName('Surname')} />} />
          <Column cellRenderer={(i) => <Cell>{ contacts[i].internalIdentification }</Cell>} columnHeaderCellRenderer={() => <ColumnHeaderCell2 name="Internal identification" index={3} nameRenderer={() => renderName('Internal identification')} />} />
        </Table2>
      </HotkeysProvider>}
    </S.Container>
  )
}

export default ListContacts;