// import axios from 'axios';

const mock = [
  { firstName: 'José', middleName: 'Aderbal', surname: 'Aragão Filho', internalIdentification: 'I188797' },
  { firstName: 'Gabriel', middleName: '', surname: 'Matos', internalIdentification: 'I188798' },
]

const ContactService = {
  getContacts() {
    // TODO: Get from back-end contacts
    return new Promise((resolve) => {
      resolve(mock);
    });
    /* return axios.get('http://bit.ly/2mTM3nY'); */
  },
};

export default ContactService;
