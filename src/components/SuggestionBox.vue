<template>
    <div class="container">
        <div v-if="showLoading" class="row">
            <div class="alert alert-info">
                Saving...
            </div>
        </div>
        <div v-if="showThanks">
            <div class="alert alert-success">
                Thank you!
            </div>
        </div>
        <div v-show="!showLoading && !showThanks" class="row" style="margin-top:40px;">
            <div class="col-md-6">
                <div class="well well-sm">
                    <div class="text-right">
                        <a class="btn btn-success btn-green" href="#reviews-anchor"
                           id="open-review-box">Leave a Review</a>
                    </div>

                    <div class="row" id="post-review-box" style="display:none;">
                        <div class="col-md-12">
                            <input id="ratings-hidden" name="rating" type="hidden">
                            <textarea class="form-control animated" cols="50" id="new-review" v-model="text"
                                      placeholder="Enter your review here..." rows="5"></textarea>

                            <div class="text-right">
                                <div class="stars starrr" data-rating="0"></div>
                                <a class="btn btn-danger btn-sm" href="#" id="close-review-box"
                                   style="display:none; margin-right: 10px;">
                                    <span class="glyphicon glyphicon-remove"></span>Cancel</a>
                                <button class="btn btn-success btn-lg" type="submit" @click="save">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


</template>

<script>

    import $ from 'jquery'
    import reloadSuggestion from '../js/lib/suggestionBox.js'
    import api from '../js/Api.js';
    export default {
        data () {
            return {
                text: '',
                showLoading: false,
                showThanks: false,
            }
        },

        mounted() {
            reloadSuggestion();
        },

        methods: {
            save() {
                this.showLoading = true;
                api.addItem(this.$route.params.box, this.text).done(() => {
                    this.showLoading = false;
                    this.showThanks = true;
                    this.text = '';
                    setTimeout(() => this.showThanks = false, 1000);
                }).fail(() => {
                    this.showLoading = false;
                })
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>

