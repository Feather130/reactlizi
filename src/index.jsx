import axios from 'axios';

axios.get('/user').then(response => console.log(response.data));
axios.get('/alarm/alarms').then(response => console.log(response.data));
