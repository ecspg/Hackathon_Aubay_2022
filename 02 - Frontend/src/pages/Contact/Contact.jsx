/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Button, FormGroup, InputGroup, Intent } from '@blueprintjs/core';
import { useNavigate } from "react-router-dom";

import Header from '@components/Header/Header';
import ContactService from '@services/ContactService';

import * as S from './styles';

function Contact() {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({firstName: '', middleName: '', surname: '', internalIdentification: '', phone1: '', phone2: '', email1: '', email2: ''});

  function handleOnChange({ id, value }) {
    const info = {};

    Object.assign(info, contactInfo);
    info[id] = value;

    setContactInfo(info);
  }

  function handleSubmit(e) {
    e.preventDefault();
    contactInfo.id = Math.floor(Math.random() * 1000);
    ContactService.addContact(contactInfo).then(() => {
      navigate("/contacts");
    });
  }

  return (
    <>
      <Header />
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
              <FormGroup
                label="Phone 1"
                labelFor="phone1"
              >
                <InputGroup
                  id="phone1"
                  onChange={e=>handleOnChange(e.target)}
                />
              </FormGroup>
              <FormGroup
                label="Phone 2"
                labelFor="phone2"
              >
                <InputGroup
                  id="phone2"
                  onChange={e=>handleOnChange(e.target)}
                />
              </FormGroup>
              <FormGroup
                label="Email 1"
                labelFor="email1"
              >
                <InputGroup
                  id="email1"
                  onChange={e=>handleOnChange(e.target)}
                />
              </FormGroup>
              <FormGroup
                label="Email 2"
                labelFor="email2"
              >
                <InputGroup
                  id="email2"
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

export default Contact;
