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
        <div class="panel panel-primary" v-for="item of items">
            <div class="panel-body">
                {{ item.text }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            box: Object,
            items: Array,
        },

        data () {
            return {
                tags: [{
                        name: "critical",
                        active: 1
                    }, {
                    name: "warnning",
                    active: 1
                    }]
            };
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
                console.log(this.items[0].tags);
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

