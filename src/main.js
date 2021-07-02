import { createApp } from 'vue';
import App from './App.vue';
import {
    ElSelect,
    ElOption,
    ElOptionGroup,
    ElCheckbox,
    ElSwitch,
    ElIcon
} from 'element-plus';

const app = createApp(App);

app.use(ElSelect);
app.use(ElOption);
app.use(ElOptionGroup);
app.use(ElCheckbox);
app.use(ElSwitch);
app.use(ElIcon);

app.mount('#app');
