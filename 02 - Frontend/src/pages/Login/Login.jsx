/* eslint-disable import/no-unresolved */
import React, { useContext, useState } from 'react';
import { Button, Elevation, FormGroup, InputGroup, Intent } from '@blueprintjs/core';
import { useNavigate } from "react-router-dom";

import LoginService from '@services/LoginService';
import logo from '@assets/logo.png';
// eslint-disable-next-line import/extensions
import { GlobalContext } from '@/GlobalContext';

import * as S from './styles';

function Login() {
  const global = useContext(GlobalContext);
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({login: '', password: ''});

  function handleOnChange({ id, value }) {
    const info = {};

    Object.assign(info, loginInfo);
    info[id] = value;

    setLoginInfo(info);
  }

  function handleSubmit(e) {
    e.preventDefault();
    LoginService.authenticate(loginInfo).then(res => {
      global.setUserInfo(res);
      navigate("/contacts");
    });
  }

  return (
    <S.Container>
      <S.LoginCard elevation={Elevation.THREE}>
        <S.Logo src={logo} alt="Aubay's logo" />
        <S.Form onSubmit={e => handleSubmit(e)}>
          <S.FormWrapper>
            <FormGroup
              label="Login"
              labelFor="login"
            >
              <InputGroup
                id="login"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
            <FormGroup
              label="Password"
              labelFor="password"
            >
              <InputGroup
                id="password"
                type="password"
                onChange={e=>handleOnChange(e.target)}
              />
            </FormGroup>
          </S.FormWrapper>
          <Button type="submit" intent={Intent.SUCCESS}>LOGIN</Button>
        </S.Form>
      </S.LoginCard>
    </S.Container>
  )
}

export default Login;
