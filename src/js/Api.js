import $ from 'jquery';

export default {

    baseUrl: 'http://myslenkynezastavis.cz/api/',

    request(method, resource, data) {
        return $.ajax(this.baseUrl + resource, {
            method,
            type: method.toUpperCase(),
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
        return this.request('get', 'suggestion-box').then(data => data.boxes.filter(i => i.url === url)[0]);
    },

    addBox(data) {
        return this.request('post', 'suggestion-box', data);
    },

    items(box) {
        return this.request('get', 'suggestion-item').then(data => data.items.filter(i => i.box === box || 1));
    },

    addItem(box, text) {
        return this.request('post', 'suggestion-item', {
            item: {
                dateTime: new Date() + '',
                text,
                box,
            }
        })
    },

    editItem(item) {
        return requet('put', 'suggestion-item', item);
    }

}
