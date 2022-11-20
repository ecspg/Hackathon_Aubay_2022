/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Button, FormGroup, InputGroup, Intent, TextArea } from '@blueprintjs/core';
import { useNavigate } from "react-router-dom";

import CampaignService from '@services/CampaignService';

import * as S from './styles';

function Campaign() {
  const navigate = useNavigate();
  const [campaignInfo, setCampaignInfo] = useState({name: '', title: '', description: '', status: ''});

  function handleOnChange({ id, value }) {
    const info = {};

    Object.assign(info, campaignInfo);
    info[id] = value;

    setCampaignInfo(info);
  }

  function handleSubmit(e) {
    e.preventDefault();
    CampaignService.addCampaign(campaignInfo).then(() => {
      navigate("/campaigns");
    });
  }

  return (
    <S.Container>
      <h1>New campaign</h1>
      <form onSubmit={e => handleSubmit(e)}>
          <S.FormWrapper>
            <FormGroup
              label="Name"
              labelFor="name"
            >
              <InputGroup
                id="name"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
            <FormGroup
              label="Title"
              labelFor="title"
            >
              <InputGroup
                id="title"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
            <FormGroup
              label="Description"
              labelFor="description"
            >
              <TextArea
                id="description"
                growVertically
                fill
                large
                intent={Intent.PRIMARY}
                onChange={e=>handleOnChange(e.target)}
                value={campaignInfo.description}
              />
            </FormGroup>
            <FormGroup
              label="Status"
              labelFor="status"
            >
              <InputGroup
                id="status"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
          </S.FormWrapper>
          <S.ButtonWrapper>
            <Button type="submit" intent={Intent.SUCCESS}>Submit</Button>
          </S.ButtonWrapper>
        </form>
    </S.Container>
  )
}

export default Campaign;