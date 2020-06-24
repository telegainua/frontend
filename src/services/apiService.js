import axios from 'axios';
import config from "../js/config/configApi";

class ApiService {
    constructor(config) {
        this.url = config.url;
    }

    async channels(){
        try {
            const response = await axios.get(`${this.url}/channels`);
            return response;
        } catch (err) {
          return Promise.reject(err)
        }
    }
}

const api = new ApiService(config);

export default api;