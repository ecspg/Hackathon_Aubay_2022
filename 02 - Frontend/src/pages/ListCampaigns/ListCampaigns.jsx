/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Icon, InputGroup, Intent } from '@blueprintjs/core';

import CampaignService from '@services/CampaignService';
import Header from '@components/Header/Header';
import List from '@components/List';

import * as S from './styles';

function ListCampaigns() {
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState();
  const [filterValue, setFilterValue] = useState();
  const tableFields = [
    { prop: 'name', header: 'Name' },
    { prop: 'title', header: 'Title' },
    { prop: 'description', header: 'Description' },
    { prop: 'scheduledBegin', header: 'Scheduled begin' },
    { prop: 'scheduledEnd', header: 'Scheduled end' },
    { prop: 'status', header: 'Status' },
  ]

  useEffect(() => {
    CampaignService.getCampaigns().then(data => {
      setCampaign(data);
    });
  }, []);

  function handleFilterChange(e) {
    setFilterValue(e.target.value);
  }

  function handleAddClick() {
    navigate("/campaigns/new");
  }

  return (
    <>
      <Header />
      <S.Container>
        <h1>Campaigns</h1>
        <S.FilterButtonWrapper>
          <S.ButtonWrapper>
            <Button intent={Intent.SUCCESS} onClick={() => handleAddClick()}>
              Add Campaign
            </Button>
            <Button intent={Intent.SUCCESS}>
              <Icon icon="table" /> Import CSV
            </Button>
          </S.ButtonWrapper>
          <InputGroup
            large
            leftIcon="filter"
            onChange={(e) => handleFilterChange(e)}
            placeholder="Filter campaign..."
            value={filterValue}
          />
        </S.FilterButtonWrapper>
        {campaign && <List tableInfo={campaign} tableFields={tableFields} />}
      </S.Container>
    </>
  )
}

export default ListCampaigns;
