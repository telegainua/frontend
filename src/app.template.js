import { headerTemplate } from "./components/header/header.template";
import { sectionTemplate } from "./components/section-card/section.template";
import { footerTemplate } from "./components/footer/footer.template";
export const appTemplate = (model) => {
  let html = `${headerTemplate}, ${sectionTemplate},${footerTemplate}`;
  return html;
};

//export const appTemplate = async (model) => {

//const channels = await model.getChannels().then(data=>{
// let html = ${headerTemplate};

// data.data.forEach((channel) => {
//     html.push(
//         ` <h3>${channel.title}</h3>
//           <button>Open</button>
//         `
//     );
// });
// return html.join("");
//});
//return channels;

//};
