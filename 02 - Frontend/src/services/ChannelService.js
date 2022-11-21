// import axios from 'axios';

const mock = [
  {
    type: 'Email',
    hostname: '',
    key: '',
    secret: '',
    id: 1,
  },
  {
    type: 'WhatsApp',
    hostname: '',
    key: '',
    secret: '',
    id: 2,
  },
  {
    type: 'Telegram',
    hostname: '',
    key: '',
    secret: '',
    id: 3,
  },
];

const ChannelService = {
  getChannels() {
    // TODO: Get from back-end channels
    return new Promise((resolve) => {
      resolve(mock);
    });
    /* return axios.get('http://bit.ly/2mTM3nY'); */
  },
  addChannel(channelInfo) {
    // TODO: Post to back-end channels
    return new Promise((resolve) => {
      resolve(channelInfo);
    });
    /* return axios.post('http://bit.ly/2mTM3nY', channelInfo); */
  },
};

export default ChannelService;
