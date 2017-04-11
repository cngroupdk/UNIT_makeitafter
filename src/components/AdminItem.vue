<template>
    <div class="panel panel-primary">
        <div class="panel-body">
            {{ text }}
            <div class="small pull-right" v-if="dateTime">
                {{ formattedDateTime }}
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        props: ['text', 'dateTime'],

        computed: {
            formattedDateTime() {
                return moment(this.dateTime).format('DD. MM. YYYY HH:mm')
            }
        }
    }
</script>