import {createApp} from 'vue'
import PUI from '../../src/index.js';
import App from './App.vue'
import '../../src/styles/index.scss'
console.log(PUI);


//use来引入pui组件库
createApp(App).use(PUI).mount('#app');