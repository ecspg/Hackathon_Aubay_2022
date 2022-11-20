/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Button, FormGroup, InputGroup, Intent } from '@blueprintjs/core';
import { useNavigate } from "react-router-dom";

import ContactService from '@services/ContactService';

import * as S from './styles';

function Contact() {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({firstName: '', middleName: '', surname: '', internalIdentification: ''});

  function handleOnChange({ id, value }) {
    const info = {};

    Object.assign(info, contactInfo);
    info[id] = value;

    setContactInfo(info);
  }

  function handleSubmit(e) {
    e.preventDefault();
    ContactService.addContact(contactInfo).then(() => {
      navigate("/contacts");
    });
  }

  return (
    <S.Container>
      <h1>New contact</h1>
      <form onSubmit={e => handleSubmit(e)}>
          <S.FormWrapper>
            <FormGroup
              label="First Name"
              labelFor="firstName"
            >
              <InputGroup
                id="firstName"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
            <FormGroup
              label="Middle Name"
              labelFor="middleName"
            >
              <InputGroup
                id="middleName"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
            <FormGroup
              label="Surname"
              labelFor="surname"
            >
              <InputGroup
                id="surname"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
            <FormGroup
              label="Internal identification"
              labelFor="internalIdentification"
            >
              <InputGroup
                id="internalIdentification"
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

export default Contact;