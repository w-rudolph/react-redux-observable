import axios from 'axios';

const BASE_URL = 'https://cnodejs.org/api/v1';

export const getTopics = () => {
    return axios.get(BASE_URL + '/topics ');
}

export const getTopic = (id) => {
    return axios.get(BASE_URL + '/topic/' + id);
}