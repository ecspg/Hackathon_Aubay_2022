/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Icon, InputGroup, Intent } from '@blueprintjs/core';

import ContactService from '@services/ContactService';
import List from '@components/List';

import * as S from './styles';

function ListContacts() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState();
  const [filterValue, setFilterValue] = useState();
  const tableFields = [
    { prop: 'firstName', header: 'First name' },
    { prop: 'middleName', header: 'Middle name' },
    { prop: 'surname', header: 'Surname' },
    { prop: 'internalIdentification', header: 'Internal identification' },
  ]

  useEffect(() => {
    ContactService.getContacts().then(data => {
      setContacts(data);
    });
  }, []);

  function handleFilterChange(e) {
    setFilterValue(e.target.value);
  }

  function handleAddClick() {
    navigate("/contacts/new");
  }

  return (
    <S.Container>
      <h1>Contacts</h1>
      <S.FilterButtonWrapper>
        <S.ButtonWrapper>
          <Button intent={Intent.SUCCESS} onClick={() => handleAddClick()}>
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
      {contacts && <List tableInfo={contacts} tableFields={tableFields} />}
    </S.Container>
  )
}

export default ListContacts;