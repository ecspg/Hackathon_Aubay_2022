// import axios from 'axios';

const LoginService = {
  authenticate(loginInfo) {
    // TODO: Send to back-end the info and get userInfo in return
    return new Promise((resolve) => {
      if (loginInfo.login === 'admin' && loginInfo.password === 'admin') {
        resolve({ res: true, loginInfo });
      } else {
        resolve({ res: false, loginInfo });
      }
    });
    // return axios.post('http://bit.ly/2mTM3nY', loginInfo);
  },
};

export default LoginService;
