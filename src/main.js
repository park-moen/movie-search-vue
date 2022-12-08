import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from '~/App';
import router from '~/routes';

library.add(fas);
const pinia = createPinia();
const app = createApp(App);

pinia.use(({store}) => {
  store.$router = markRaw(router);
}); 
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(pinia);
app.use(router);
app.mount('#app');
