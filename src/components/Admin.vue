<template>
    <div class="admin">
        <h1>{{ box.name }}</h1>
        <div class="btn-group" role="group" aria-label="Sorting">
            <button type="button" class="btn btn-secondary" v-on:click="sort('dateTime')">Sort by Date</button>
            <button type="button" class="btn btn-secondary" v-on:click="sort('text')">Sort by Popularity</button>
        </div>
        <div class="container">
            <input-tag placeholder="Add Tag" :tags="tags" validate="text"></input-tag>
        </div>
        <item v-for="item of items" :text="item.text" :dateTime="item.dateTime" :key="item.guid" />
    </div>
</template>

<script>
    import InputTag from 'vue-input-tag'
    export default {

        props: {
            box: Object,
            items: Array,
        },
        components : {
            'input-tag': InputTag
        },

        data () {
            return {
                tags: ["helpdeskissue"]
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
            }
        }
    }
</script>

