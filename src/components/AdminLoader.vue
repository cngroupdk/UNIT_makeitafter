<template>
    <div v-if="data">
        <Admin :items="data.items"></Admin>
    </div>
    <div v-else="data">
        <h1 v-trans>
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
                api.box($.router.currentParameters.box).done(response => {
                    console.log(response);
                    this.data = response;
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
