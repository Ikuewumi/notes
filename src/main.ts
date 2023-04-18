import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faBars, faBookMedical, faClock, faClockFour, faClockRotateLeft, faNotesMedical, faPencil, faSearch, faEnvelope, faBookOpen, faBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome'
import App from './App.vue';
import router from './router';
import "./scss/app.scss";

const app = createApp(App)
library.add(faBookMedical, faNotesMedical, faSearch, faBars, faClock, faClockFour, faClockRotateLeft, faPencil, faEnvelope, faBookOpen, faBook)
app.component('Icon', Icon)
app.use(router)



// TODO: Implement global Error Handler
// app.config.errorHandler = (err, instance, info) => {
//     // console.error(info)
// }


app.mount('#app')
