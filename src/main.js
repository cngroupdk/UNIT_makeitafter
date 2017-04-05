import Vue from 'vue'
import $ from 'jquery'

Vue.config.productionTip = false;


// load all Vue components
$(() => {
  $('[data-vue-component]').each(function() {
    const componentName = $(this).data('vue-component');
    const component = require(`./components/${componentName}.vue`); // dynamically load required component
    const name = componentName.substr(componentName.lastIndexOf('/') + 1); // auto derive component name as file name
    const data = $(this).data('vue-data') || {};
    // dynamically create template for the component, with keys derived from its data
    const template = `<${name} ${Object.keys(data).map(key => `:${key}="${key}"`).join(' ')} />`;
    new Vue({
        el: this,
        components: {[name]: component},
        data,
        template,
    });
  })
});


// initialize Bootstrap
require('bootstrap-webpack!./bootstrap.config.js');


const requireAll = (r) => r.keys().map(r);

// and all less files, too
requireAll(require.context('./less/', true, /\.less$/));


// load all Javascript files
requireAll(require.context('./js/', true, /\.js$/));

// load font awesome
require("font-awesome-webpack");
