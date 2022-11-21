/* eslint-disable import/no-unresolved */
import React, { useContext, useState } from 'react';
import { Button, Elevation, FormGroup, InputGroup, Intent, Toaster } from '@blueprintjs/core';
import { useNavigate } from "react-router-dom";

import LoginService from '@services/LoginService';
import logo from '@assets/logo.png';
import team from '@assets/team.jpg';
// eslint-disable-next-line import/extensions
import { GlobalContext } from '@/GlobalContext';

import * as S from './styles';

function Login() {
  const global = useContext(GlobalContext);
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({login: '', password: ''});
  const [toaster, setToaster] = useState(null);

  function handleOnChange({ id, value }) {
    const info = {};

    Object.assign(info, loginInfo);
    info[id] = value;

    setLoginInfo(info);
  }

  function handleSubmit(e) {
    e.preventDefault();
    LoginService.authenticate(loginInfo).then(res => {
      if (res.res) {
        global.setUserInfo(res.loginInfo);
        navigate("/contacts");
      } else {
        toaster.show({ icon: 'warning-sign', intent: Intent.DANGER, message: 'Login and/or password are wrong!', timeout: 2000 });
      }
    });
  }

  return (
    <S.Container style={{ backgroundImage: `url(${team})` }}>
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
      <Toaster usePortal canEscapeKeyClear ref={ref => setToaster(ref)} />
    </S.Container>
  )
}

export default Login;
