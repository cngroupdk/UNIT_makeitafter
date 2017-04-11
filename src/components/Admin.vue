<template>
    <div class="admin">
        <h1>

        </h1>
        <img src="../assets/logo.png">
        <div class="alert alert-danger">{{ msg }}</div>
        <p>
            <a href="/about/nested">About</a>
        </p>
    </div>
</template>

<script>
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
