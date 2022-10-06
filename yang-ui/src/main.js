import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Card from "../components/lib/card/index";
import "../components/css/card.less";

const app = createApp(App);
app.use(store);
app.use(Card);
app.use(router);
app.mount("#app");
