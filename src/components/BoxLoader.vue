<template>
    <div>
        <div v-if="box">
            Loading...
        </div>
        <div v-if="box.password && !access">
            <h1>Box {{box.name}} is protected by password:</h1>
            <form @submit="checkPassword">
                <input class="form-control" type="password" v-model="password">
                <button class="btn btn-primary" type="submit">Let me in</button>
            </form>
        </div>
        <div v-if="access">
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
            }
        },

        components: {
            'suggestion-box': require('./SuggestionBox'),
        },

        mounted() {
            setTimeout(() => {
                api.box(this.$route.params.box).done(box => {
                    console.log(box);
                    this.box = box;
                    this.access = !box.password;
                })
            }, 100);
        },

        methods: {
            checkPassword(e) {
                e.preventDefault();
                if (this.password === this.box.password) {
                    this.access = true;
                } else {
                    alert('Wrong password');
                    this.password = '';
                }
            }
        }

    }
</script>