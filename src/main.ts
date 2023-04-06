import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faBookMedical, faNotesMedical} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue';
import router from './router';
import "./scss/app.scss";

const app = createApp(App)
library.add(faBookMedical, faNotesMedical)
app.component('FontAwesome', FontAwesomeIcon)
app.use(router)


app.config.errorHandler = (err, instance, info) => {
    // console.error(info)
}


app.mount('#app')
