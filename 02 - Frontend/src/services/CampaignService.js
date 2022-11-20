// import axios from 'axios';

const mock = [
  {
    name: 'Férias da Teresa',
    title: 'Férias manager 01/12 a 12/12',
    description:
      'A manager Teresa entrará de férias entre os dias 01/12 a 12/12. Favor contactar Inês caso necessário.',
    scheduledBegin: '28/11/2022',
    scheduledEnd: '28/11/2022',
    status: 'Sent',
  },
  {
    name: 'Escolha de folga fim de ano',
    title: 'Escolha de folga entre 24/12 ou 31/12',
    description:
      'A Aubay informa que você poderá tirar um dos seguintes dias de folga: 24/12 ou 31/12. Favor avisar a manager e verificar a melhor escolha com sua equipe de trabalho.',
    scheduledBegin: '05/12/2022',
    scheduledEnd: '06/12/2022',
    status: 'Sent',
  },
];

const CampaignService = {
  getCampaigns() {
    // TODO: Get from back-end campaigns
    return new Promise((resolve) => {
      resolve(mock);
    });
    /* return axios.get('http://bit.ly/2mTM3nY'); */
  },
  addCampaign(campaignInfo) {
    // TODO: Post to back-end campaigns
    return new Promise((resolve) => {
      resolve(campaignInfo);
    });
    /* return axios.post('http://bit.ly/2mTM3nY', campaignInfo); */
  },
};

export default CampaignService;
