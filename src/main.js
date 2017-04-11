import Vue from 'vue'
import $ from 'jquery'
import translate from 'vue-translate'


import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
});


Vue.config.productionTip = false;

// the messages data
translate.messages = require('./messages');
Vue.use(translate);


Vue.router = router;

new Vue({
    el: '#app',
    router,
    template: '<router-view></router-view>',
})


// initialize Bootstrap
require('bootstrap-webpack!./bootstrap.config.js');


const requireAll = r => r.keys().map(r);

// and all less files, too
requireAll(require.context('./less/', true, /\.less$/));

// load all Javascript files
requireAll(require.context('./js/', true, /\.js$/));

// load font awesome
require("font-awesome-webpack");
