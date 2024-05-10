import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faWifi, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.styleDefault = "duotone";
library.add(faWifi, faPowerOff); // Add all icons here

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store);

app.mount("#app");
