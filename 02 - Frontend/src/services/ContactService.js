// import axios from 'axios';

const mock = [
  {
    firstName: 'José',
    middleName: 'Aderbal',
    surname: 'Aragão Filho',
    internalIdentification: 'I188797',
    phone1: '914 843 957',
    phone2: '914 843 956',
    email1: 'aderbal@gmail.com',
    email2: 'aderbal@yahoo.com.br',
    id: 1,
  },
  {
    firstName: 'Gabriel',
    middleName: '',
    surname: 'Matos',
    internalIdentification: 'I188798',
    phone1: '914 843 958',
    phone2: '914 843 959',
    email1: 'gabriel@gmail.com',
    email2: 'gabriel@yahoo.com',
    id: 2,
  },
];

const ContactService = {
  getContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (!contacts) {
      localStorage.setItem('contacts', JSON.stringify(mock));
    }

    // TODO: Get from back-end contacts
    return new Promise((resolve) => {
      resolve(contacts || mock);
    });
    /* return axios.get('http://bit.ly/2mTM3nY'); */
  },
  addContact(contactInfo) {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      contacts.push(contactInfo);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    // TODO: Post to back-end contacts
    return new Promise((resolve) => {
      resolve(contacts);
    });
    /* return axios.post('http://bit.ly/2mTM3nY', contactInfo); */
  },
};

export default ContactService;
