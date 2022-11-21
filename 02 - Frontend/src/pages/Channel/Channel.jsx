/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Button, FormGroup, InputGroup, Intent } from '@blueprintjs/core';
import { useNavigate } from "react-router-dom";

import Header from '@components/Header/Header';
import ChannelService from '@services/ChannelService';

import * as S from './styles';

function Channel() {
  const navigate = useNavigate();
  const [channelInfo, setChannelInfo] = useState({ type: '', hostname: '', key: '', secret: '' });

  function handleOnChange({ id, value }) {
    const info = {};

    Object.assign(info, channelInfo);
    info[id] = value;

    setChannelInfo(info);
  }

  function handleSubmit(e) {
    e.preventDefault();
    ChannelService.addChannel(channelInfo).then(() => {
      navigate("/channels");
    });
  }

  return (
    <>
      <Header />
      <S.Container>
        <h1>New channel</h1>
        <form onSubmit={e => handleSubmit(e)}>
          <S.FormWrapper>
            <FormGroup
              label="Type"
              labelFor="type"
            >
              <InputGroup
                id="type"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
            <FormGroup
              label="Hostname"
              labelFor="hostname"
            >
              <InputGroup
                id="hostname"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
            <FormGroup
              label="Key"
              labelFor="key"
            >
              <InputGroup
                id="key"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
            <FormGroup
              label="Secret"
              labelFor="secret"
            >
              <InputGroup
                id="secret"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
          </S.FormWrapper>
          <S.ButtonWrapper>
            <Button type="submit" intent={Intent.SUCCESS}>Submit</Button>
          </S.ButtonWrapper>
        </form>
      </S.Container>
    </>
  )
}

export default Channel;
