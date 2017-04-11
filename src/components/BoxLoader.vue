<template>
    <div>
        <div v-if="box === false">
            Loading...
        </div>
        <div v-if="box === undefined">
            <div class="alert alert-warning">
                Box not found
            </div>
        </div>
        <div v-if="box && box.password && !access" class="panel">
            <div class="panel-body">
                <h1>Box {{box.name}} is protected by password:</h1>
                <form @submit="checkPassword">
                    <input class="form-control" type="password" v-model="password">
                    <button :disabled="password === ''" class="btn btn-primary" type="submit">Let me in</button>
                </form>
                <div v-if="wrongPassword" class="alert alert-danger">Wrong password</div>
            </div>
        </div>
        <div v-if="box && access">
            <suggestion-box :box="box" />
        </div>
    </div>
</template>

<script>
    import api from '../js/Api.js'
    export default {

        data() {
            return {
                box: false,
                access: false,
                password: '',
                wrongPassword: false,
            }
        },

        components: {
            'suggestion-box': require('./SuggestionBox'),
        },

        mounted() {
            setTimeout(() => {
                api.box(this.$route.params.box).done(box => {
                    this.box = box;
                    this.access = box && !box.password;
                })
            }, 100);
        },

        watch: {
            password(newPassword, oldPassword) {
                if (newPassword !== '') {
                    this.wrongPassword = false;
                }
            }
        },

        methods: {
            checkPassword(e) {
                e.preventDefault();
                if (this.password === this.box.password) {
                    this.access = true;
                } else {
                    this.password = '';
                    this.wrongPassword = true;
                }
            }
        }

    }
</script>

<style lang="less" scoped>

    input[type=password] {
        width: 200px;
        display: inline-block;
    }

    form button {
        display: inline-block;
    }


</style>