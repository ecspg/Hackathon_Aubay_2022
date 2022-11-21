/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Icon, InputGroup, Intent } from '@blueprintjs/core';

import ChannelService from '@services/ChannelService';
import Header from '@components/Header/Header';
import List from '@components/List';

import * as S from './styles';

function ListChannels() {
  const navigate = useNavigate();
  const [channels, setChannels] = useState();
  const [filterValue, setFilterValue] = useState();
  const tableFields = [
    { prop: 'type', header: 'Channel name' },
    { prop: 'hostname', header: 'Hostname' },
    { prop: 'key', header: 'Key' },
    { prop: 'secret', header: 'Secret' },
  ]

  useEffect(() => {
    ChannelService.getChannels().then(data => {
      setChannels(data);
    });
  }, []);

  function handleFilterChange(e) {
    setFilterValue(e.target.value);
  }

  function handleAddClick() {
    navigate("/channels/new");
  }

  return (
    <>
      <Header />
      <S.Container>
        <h1>Channels</h1>
        <S.FilterButtonWrapper>
          <S.ButtonWrapper>
            <Button intent={Intent.SUCCESS} onClick={() => handleAddClick()}>
              Add Channel
            </Button>
            <Button intent={Intent.SUCCESS}>
              <Icon icon="table" /> Import CSV
            </Button>
          </S.ButtonWrapper>
          <InputGroup
            large
            leftIcon="filter"
            onChange={(e) => handleFilterChange(e)}
            placeholder="Filter channels..."
            value={filterValue}
          />
        </S.FilterButtonWrapper>
        {channels && <List tableInfo={channels} tableFields={tableFields} />}
      </S.Container>
    </>
  )
}

export default ListChannels;
