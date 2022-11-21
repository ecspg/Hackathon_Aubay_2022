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
    const channels = JSON.parse(localStorage.getItem('channels'));

    if (!channels) {
      localStorage.setItem('channels', JSON.stringify(mock));
    }

    // TODO: Get from back-end channels
    return new Promise((resolve) => {
      resolve(channels || mock);
    });
    /* return axios.get('http://bit.ly/2mTM3nY'); */
  },
  addChannel(channelInfo) {
    const channels = JSON.parse(localStorage.getItem('channels'));

    if (channels) {
      channels.push(channelInfo);
      localStorage.setItem('channels', JSON.stringify(channels));
    }

    // TODO: Post to back-end channels
    return new Promise((resolve) => {
      resolve(channels);
    });
    /* return axios.post('http://bit.ly/2mTM3nY', channelInfo); */
  },
};

export default ChannelService;
