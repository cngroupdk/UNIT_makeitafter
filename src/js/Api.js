import $ from 'jquery';

export default {

    baseUrl: 'http://myslenkynezastavis.cz/api/',

    request(method, resource, data) {
        return $.ajax(this.baseUrl + resource, {
            method,
            data,
        });
    },


    categories() {
        return this.request('get', 'category');
    },

    boxes() {
        return this.request('get', 'suggestion-box');
    },

    box(url) {
        return this.request('get', 'suggestion-box').then(data => data.boxes.filter(i => i.url === url)[0]);
    },

    addBox(data) {
        return this.request('post', 'suggestion-box', data);
    },

    items(boxUrl) {
        return this.request('get', 'suggestion-item').then(data => data.items.filter(data.box === boxUrl));
    }

}
