<template>
    <div v-if="data">
        <Admin :box="data.box" :items="data.items" @remove="remove"></Admin>
    </div>
    <div v-else="data">
        <h1>
            loading...
        </h1>
    </div>
</template>

<script>
    import api from '../js/Api.js';
    import $ from 'jquery';
    export default {
        data () {
            return {
                data: false,
            }
        },

        mounted() {
            setTimeout(() => {
                this.reload();
            }, 100);
        },

        methods: {

            reload() {
                const box = this.$route.params.box;
                api.box(box).done(box => {
                    api.items(box.url).done(items => {
                        this.data = {box, items};
                    });
                })
            },

            remove(guid) {
                api.removeItem(guid).done(() => {
                    this.reload();
                })
            }
        },

        components: {
            'Admin': require('./Admin')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
