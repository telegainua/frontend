import {appTemplate} from "../app.template";
import {AppModel} from "../app.model";

export const AppComponent = {
      init(){
          this.appElement = document.querySelector('#app');
          this.render();
      },

    render() {
          appTemplate(AppModel).then(html => {
              this.appElement.innerHTML = html
          });
    }
};

AppComponent.init();