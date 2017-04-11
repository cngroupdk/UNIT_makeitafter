<template>
    <div class="admin">
        <h1>{{ box.name }}</h1>
        <div class="btn-group" role="group" aria-label="Sorting">
            <button type="button" class="btn btn-secondary" v-on:click="sort('dateTime')">Sort by Date</button>
            <button type="button" class="btn btn-secondary" v-on:click="sort('text')">Sort by Popularity</button>
        </div>
        <div class="container">
            <button v-for="tag in tags" v-show="tag.active" v-on:click="">{{tag.name}}</button>
        </div>
        <item v-for="item of items" :text="item.text" :dateTime="item.dateTime" :key="item.guid" @remove="remove(item.guid)" />
    </div>
</template>

<script>
    import api from '../js/Api.js';
    export default {

        props: {
            box: Object,
            items: Array,
        },

        data () {
            return {
                tags: []
            };
        },

        components: {
            item: require('./AdminItem'),
        },

        methods: {
            gettags : function () {
                this.items.forEach((item)=>{
                    tags.push({
                        name:item.tag,
                        active: 1
                    });
                });
            },
            sort : function(criterion) {
                this.items.sort((a, b)=> {
                   if (a[criterion] < b[criterion]) {
                       return -1;
                   } else {
                       return 1;
                   }
                });
            },
            remove(guid) {
                console.log(guid);
                this.$emit('remove', guid);
            }
        }
    }
</script>

