import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/adnene-guessoum'
});

export const getRepos = () => api.get('/repos');

export default api;
