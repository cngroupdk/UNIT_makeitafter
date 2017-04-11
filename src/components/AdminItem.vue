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
            <div class="small">{{ rating }}</div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import InputTag from 'vue-input-tag'

    export default {
        props: ['text', 'dateTime','rating'],

        data () {
            return {
                tags: ["AHOJ"]
            };
        },

        components : {
            InputTag, 'input-tag': InputTag
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