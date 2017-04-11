<template>
    <div class="panel">
        <div class="panel-body">
            <div class="admin">
                <h1>{{ box.name }}</h1>
                <div class="col-xs-12">
                    <div class="btn-group" role="group" aria-label="Sorting">
                        <button type="button" class="btn btn-secondary" v-on:click="sort('dateTime')">Sort by Date</button>
                        <button type="button" class="btn btn-secondary" v-on:click="sort('text')">Sort by Popularity</button>
                    </div>
                    <button type="button" class="btn btn-sm btn-default pull-right" v-on:click="exportData()">Export to Csv</button>
                </div>
                <div class="clearfix"></div>
                <div style="height: 1em"></div>
                <item v-for="item of items" :text="item.text" :dateTime="item.dateTime"  :rating="item.rating" :key="item.guid" @remove="remove(item.guid)" />
            </div>
        </div>
    </div>
</template>

<script>
    import InputTag from 'vue-input-tag'
    import api from '../js/Api.js';
    import exporterToCsv from '../js/lib/exportCsv.js';

    export default {

        props: {
            box: Object,
            items: Array,
        },
        components : {
            'input-tag': InputTag,
            item: require('./AdminItem'),
        },

        data () {
            return {
                tags: []
            };
        },

        methods: {
            exportData : function () {
                let array = [];
                this.items.forEach((item) => {
                    array.push([item.dateTime, item.text])
                });

                exporterToCsv("data.csv", array);
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

<style lang="less" scoped>

</style>

