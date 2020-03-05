import Vue from "nativescript-vue";

import App from "./components/App";

Vue.registerElement('YoutubePlayer', () => require('nativescript-youtubeplayer').YoutubePlayer)

new Vue({
    render: h => h(App)
}).$start();
