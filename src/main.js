import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {
	ElSelect,
	ElOption,
	ElOptionGroup,
	ElCheckbox,
	ElSwitch,
	ElIcon,
	ElButton
} from "element-plus";

const app = createApp(App);

app.use(router);

app.use(ElSelect);
app.use(ElOption);
app.use(ElOptionGroup);
app.use(ElCheckbox);
app.use(ElSwitch);
app.use(ElIcon);
app.use(ElButton);

app.mount("#app");
