import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./store";
import "@/assets/main.scss";

createApp(App).use(store, key).mount("#app");
