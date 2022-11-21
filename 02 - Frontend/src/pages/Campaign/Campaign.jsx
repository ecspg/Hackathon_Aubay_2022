/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, FormGroup, InputGroup, Intent, MenuItem, TextArea } from '@blueprintjs/core';
import { MultiSelect2 } from "@blueprintjs/select";

import CampaignService from '@services/CampaignService';
import ContactService from '@services/ContactService';
import Header from '@components/Header/Header';
import TransferList from '@components/TransferList';

import * as S from './styles';

function Campaign() {
  const navigate = useNavigate();
  const [campaignInfo, setCampaignInfo] = useState({name: '', title: '', description: '', status: '', scheduledBegin: null, scheduledEnd: null });
  const [contacts, setContacts] = useState(null);
  const [selectedContacts, setSelectedContacts] = useState(null);
  const [selectedChannels, setSelectedChannels] = useState([
    { type: "Email", id: 1 },
  ]);
  const popoverRef = React.createRef();
  const channels = [
    { type: "Email", id: 1 },
    { type: "Telegram", id: 2 },
    { type: "WhatsApp", id: 3 },
  ];

  useEffect(() => {
    ContactService.getContacts().then(data => {
      setContacts(data);
    });
  }, []);

  function handleOnChange({ id, value }) {
    const info = {};

    Object.assign(info, campaignInfo);
    info[id] = value;

    setCampaignInfo(info);
  }

  function handleTagRemove(removedItemText) {
    setSelectedChannels(selectedChannels.filter(selChannel => selChannel.type !== removedItemText));
  }

  function renderChannels(channel, { handleClick, handleFocus, modifiers }) {
    if (!modifiers.matchesPredicate) {
      return null;
    }

    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        key={channel.type}
        onClick={handleClick}
        onFocus={handleFocus}
        roleStructure="listoption"
        text={channel.type}

        selected={channels.indexOf(channel) !== -1}
        shouldDismissPopover={false}
      />
    );
  };

  function setSelectedChannel(newSelectedItem) {
    let isOnList = false;

    selectedChannels.forEach(selChannel => {
      if (selChannel.id === newSelectedItem.id) {
        isOnList = true;
      }
    });

    if (!isOnList) {
      setSelectedChannels([...selectedChannels, newSelectedItem]);
    }
  }

  function onTransfer(transferedItems) {
    setSelectedContacts(transferedItems);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newCampaign = {};

    Object.assign(newCampaign, campaignInfo);
    newCampaign.scheduledBegin = newCampaign.scheduledBegin ? new Date(newCampaign.scheduledBegin) : new Date();
    newCampaign.scheduledEnd = newCampaign.scheduledEnd ? new Date(newCampaign.scheduledEnd) : new Date();
    newCampaign.channelIds = selectedChannels.map(selectedChannel => selectedChannel.id);
    newCampaign.contactIds = selectedContacts;

    CampaignService.addCampaign(newCampaign).then(() => {
      navigate("/campaigns");
    });
  }

  return (
    <>
      <Header />
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
                label="Scheduled Begin (yyyy-MM-dd)"
                labelFor="scheduledBegin"
              >
                <InputGroup
                  id="scheduledBegin"
                  onChange={e=>handleOnChange(e.target)}
                />
              </FormGroup>
              <FormGroup
                label="Scheduled End (yyyy-MM-dd)"
                labelFor="scheduledEnd"
              >
                <InputGroup
                  id="scheduledEnd"
                  onChange={e=>handleOnChange(e.target)}
                />
              </FormGroup>
              {/* <FormGroup
                label="Status"
                labelFor="status"
              >
                <InputGroup
                  id="status"
                  onChange={e=>handleOnChange(e.target)}
                />
              </FormGroup> */}
              <FormGroup
                label="Channels"
                labelFor="channels"
              >
                <MultiSelect2
                  // eslint-disable-next-line react/jsx-no-bind
                  itemRenderer={renderChannels}
                  items={channels}
                  menuProps={{ "aria-label": "channels" }}
                  noResults={<MenuItem disabled text="No results." roleStructure="listoption" />}
                  onItemSelect={(e) => setSelectedChannel(e)}
                  popoverProps={{ matchTargetWidth: true, minimal: true }}
                  popoverRef={popoverRef}
                  tagRenderer={(channel) => channel.type}
                  tagInputProps={{
                    onRemove: handleTagRemove,
                    tagProps: { minimal: true },
                  }}
                  selectedItems={selectedChannels}
                />
              </FormGroup>
            </S.FormWrapper>
            <TransferList data={contacts} onTransfer={onTransfer} />
            <S.ButtonWrapper>
              <Button type="submit" intent={Intent.SUCCESS}>Submit</Button>
            </S.ButtonWrapper>
          </form>
      </S.Container>
    </>
  )
}

export default Campaign;
