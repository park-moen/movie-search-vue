import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from '~/App';

library.add(fas);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
// app.use(router);
// app.use(store);
app.mount('#app');
