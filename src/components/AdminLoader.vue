<template>
    <div v-if="data">
        <Admin :items="data.items"></Admin>
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
                const box = $.router.currentParameters.box;
                api.box(box).done(box => {
                    api.items(box).done(items => {
                        this.data = {box, items};
                    });
                })
            }, 100);
        },

        components: {
            'Admin': require('./Admin')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
