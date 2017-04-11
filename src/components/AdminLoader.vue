<template>
    <div>
        <h1 v-trans>
            loading...
        </h1>
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
