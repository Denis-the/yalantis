import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yalantis-react-school-api.yalantis.com/api/task0/'
})

export const api = {
    async requestUsers() {
        const request = await instance.get('users')
        return request
    }

}

export default api;