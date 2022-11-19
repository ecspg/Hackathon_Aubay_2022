// import axios from 'axios';

const LoginService = {
  authenticate(loginInfo) {
    // TODO: Send to back-end the info and get userInfo in return
    return new Promise((resolve) => {
      resolve(loginInfo);
    });
    /* return axios({
      method: 'post',
      url: 'http://bit.ly/2mTM3nY',
      data: loginInfo,
    }); */
  },
};

export default LoginService;
