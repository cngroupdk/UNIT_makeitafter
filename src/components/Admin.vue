<template>
    <div class="admin">
        <h1>{{ box.name }}</h1>
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
            return {};
        }
    }
</script>

