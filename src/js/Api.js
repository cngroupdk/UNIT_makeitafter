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
        return this.request('get', 'suggestion-box').then(response => response.boxes);
    },

    box(url) {
        return this.request('get', 'suggestion-box').then(data => data.filter(data.url === url)[0]);
    },

    addBox(data) {
        return this.request('post', 'suggestion-box', data);
    }

}
