<template>
    <div v-if="boxes" class="row">
        <div v-for="box of boxes" class="panel col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="panel-body">
                <h2>
                    <router-link :to="{'name': 'box', params: {'box' : box.url}}">
                    {{ box.name }}
                    </router-link>
                </h2>
            </div>
        </div>
    </div>
    <div v-else>
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
                boxes: false,
            }
        },

        mounted() {
            setTimeout(() => {
                api.boxes().done(boxes => {
                    this.boxes = boxes.filter(box => !box.password);
                })
            }, 100);
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .panel {
        margin: 1em;
        background: transparent;
        color: #fff;
        text-shadow: #000 0 0 2px;
    }

    .panel a {
        color: white;
    }

    .panel a:hover {
        text-decoration: none;
        text-shadow: #000 0 0 10px;
    }
</style>
