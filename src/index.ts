import { App } from "vue";
import { BeautiModal } from "./component/main";

export default {
  install(app: App) {
    app.component("b-modal", BeautiModal);
  },
};
