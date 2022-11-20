/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, FormGroup, InputGroup, Intent, TextArea } from '@blueprintjs/core';
// import { Select2 } from "@blueprintjs/select";

import CampaignService from '@services/CampaignService';

import * as S from './styles';

function Campaign() {
  const navigate = useNavigate();
  const [campaignInfo, setCampaignInfo] = useState({name: '', title: '', description: '', status: ''});
  /* const [selectedFilm, setSelectedFilm] = useState({ title: "The Godfather", year: 1972 });
  const TOP_100_FILMS = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
  ];

  function renderFilm(film, { handleClick, handleFocus, modifiers }) {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        key={film.title}
        label={film.year.toString()}
        onClick={handleClick}
        onFocus={handleFocus}
        roleStructure="listoption"
        text={`${film.title}`}
      />
    );
  }; */

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
            {/* <FormGroup
              label="Status"
              labelFor="status"
            >
              <InputGroup
                id="status"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
            <Select2
              items={TOP_100_FILMS}
              // eslint-disable-next-line react/jsx-no-bind
              itemRenderer={renderFilm}
              noResults={<MenuItem disabled text="No results." roleStructure="listoption" />}
              onItemSelect={setSelectedFilm}
            >
              <Button text={selectedFilm?.title} rightIcon="double-caret-vertical" placeholder="Select a film" />
            </Select2> */}
          </S.FormWrapper>
          <S.ButtonWrapper>
            <Button type="submit" intent={Intent.SUCCESS}>Submit</Button>
          </S.ButtonWrapper>
        </form>
    </S.Container>
  )
}

export default Campaign;
