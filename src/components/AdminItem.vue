<template>
    <div class="panel panel-primary">
        <div class="panel-body">
            {{ text }}
            <a href="#" class="pull-right btn" @click="remove">
                &times;
            </a>
            <div class="small text-muted" v-if="dateTime">
                {{ formattedDateTime }}
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        props: ['text', 'dateTime','rating'],

        data () {
            return {
                tags: ["AHOJ"]
            };
        },


        computed: {
            formattedDateTime() {
                return moment(this.dateTime).format('DD. MM. YYYY HH:mm')
            }
        },

        methods: {
            remove(e) {
                e.preventDefault();
                this.$emit('remove');
            }
        }
    }
</script>