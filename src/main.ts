import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
import "@/assets/main.scss";
import { dropZoneDirective } from "@/directives/dropZoneDirective";
import { draggableDirective } from "@/directives/draggableDirective";

const app = createApp(App);
app.use(createPinia());
app.directive('dropzone', dropZoneDirective);
app.directive('draggable', draggableDirective)
app.mount("#app");
