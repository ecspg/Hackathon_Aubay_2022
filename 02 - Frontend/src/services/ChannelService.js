// import axios from 'axios';

const mock = [
  {
    type: 'WhatsApp',
    hostname: '',
    key: '',
  },
  {
    type: 'Telegram',
    hostname: '',
    key: '',
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
