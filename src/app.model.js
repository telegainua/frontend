import api from './services/apiService';

class Channels {
    constructor(api) {
        this.api = api;
    }

    async init() {
        const response = this.api.channels();
        this.channels = response;
        return response;
    }

    getChannels() {
        return this.channels;
    }
}

const channels = new Channels(api);

export const AppModel = {
    getChannels: async () => {
        return await channels.init();
    }
};
