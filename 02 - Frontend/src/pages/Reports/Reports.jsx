import React from 'react';

// eslint-disable-next-line import/no-unresolved
import Header from '@components/Header/Header';

import * as S from './styles';

function Reports() {
  return (
    <>
      <Header />
      <S.Container>
        <h1>Reports</h1>
        <tableau-viz id='tableau-viz' src='https://dub01.online.tableau.com/t/hackathonaubay2022/views/Hackathon/Painel1' width='1000' height='827' hide-tabs toolbar='bottom' />
      </S.Container>
    </>
  );
};

export default Reports;
