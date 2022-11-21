import axios from 'axios';

const mock = [
  {
    name: 'Férias da Teresa',
    title: 'Férias manager 01/12 a 12/12',
    description:
      'A manager Teresa entrará de férias entre os dias 01/12 a 12/12. Favor contactar Inês caso necessário.',
    scheduledBegin: new Date('2022-11-28'),
    scheduledEnd: new Date('2022-11-28'),
    status: 'Sent',
  },
  {
    name: 'Escolha de folga fim de ano',
    title: 'Escolha de folga entre 24/12 ou 31/12',
    description:
      'A Aubay informa que você poderá tirar um dos seguintes dias de folga: 24/12 ou 31/12. Favor avisar a manager e verificar a melhor escolha com sua equipe de trabalho.',
    scheduledBegin: new Date('2022-05-12'),
    scheduledEnd: new Date('2022-06-12'),
    status: 'Sent',
  },
];

const CampaignService = {
  getCampaigns() {
    let campaign = JSON.parse(localStorage.getItem('campaign'));

    if (!campaign) {
      localStorage.setItem('campaign', JSON.stringify(mock));
    } else {
      campaign = campaign.map((camp) => {
        const newCamp = {};

        Object.assign(newCamp, camp);
        newCamp.scheduledBegin = new Date(newCamp.scheduledBegin);
        newCamp.scheduledEnd = new Date(newCamp.scheduledEnd);

        return newCamp;
      });
    }

    // TODO: Get from back-end campaigns
    return new Promise((resolve) => {
      resolve(campaign || mock);
    });
    /* return axios.get('http://bit.ly/2mTM3nY'); */
  },
  addCampaign(campaignInfo) {
    const campaign = JSON.parse(localStorage.getItem('campaign'));

    if (campaign) {
      campaign.push({ ...campaignInfo, status: 'Sent' });
      localStorage.setItem('campaign', JSON.stringify(campaign));

      campaignInfo.contactIds.forEach((contact) => {
        const templateParams = {
          service_id: 'service_7f2rgqb',
          template_id: 'template_lhfx1jp',
          user_id: 'o9y4l8EZqZ52Oo3y1',
          template_params: {
            title: campaignInfo.title,
            description: campaignInfo.description,
            email: contact.email1,
          },
        };

        axios
          .post('https://api.emailjs.com/api/v1.0/email/send', templateParams)
          .then(
            (response) => {
              // eslint-disable-next-line no-console
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              // eslint-disable-next-line no-console
              console.log('FAILED...', error);
            }
          );
      });
    }

    // TODO: Post to back-end campaigns
    return new Promise((resolve) => {
      resolve(campaign);
    });
    /* return axios.post('http://bit.ly/2mTM3nY', campaignInfo); */
  },
};

export default CampaignService;
