<template>
    <div class="hello">
        <h1>
            This is code from Vue.js - component Hello
        </h1>
        <img src="../assets/logo.png">
        <div class="alert alert-danger">{{ msg }}</div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import translate from 'vue-translate'
    Vue.use(translate)
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

    .hello {
        h1 {
            border: 3px black solid;
        }
        text-align: center;
    }
</style>
