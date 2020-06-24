import {headerTemplate} from "./components/header/header.template";


export const appTemplate = async (model) => {

    const channels = await model.getChannels().then(data=>{
        let html = [];

        data.data.forEach((channel) => {
            html.push(
                ` <h3>${channel.title}</h3>
                  <button>Open</button>
                `
            );
        });
        return html.join("");
    });
    return channels;

};