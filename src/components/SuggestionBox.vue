<template>
    <div class="container suggestionbox-wrap" >
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
        <div v-show="!showLoading && !showThanks" class="row">
            <h2 class="suggestion-title">{{ box && box.name }}</h2>
            <div class="col-md-12">
                <div class="well  box-innerwrap">
                     
                        <a class="btn btn-success suggestion-open" href="#reviews-anchor" @click="$event.preventDefault()"
                           id="open-review-box">Throw a Suggestion <br><span class="fa fa-envelope-open-o">
                           </span></a>
        

                    <div class="row" id="post-review-box" style="display:none;">
                        <div class="col-md-12">
                            <input id="ratings-hidden" name="rating" v-model="rating" type="hidden">
                            <textarea class="form-control animated suggestion-textarea" cols="50" id="new-review" v-model="text"
                                      placeholder="Your suggestion..." rows="5"></textarea>

                            <div class="text-right">
                                <div class="stars starrr" data-rating="0"></div>
                
                                <button class="btn suggestion-post" type="submit" @click="save"><span class="fa fa-envelope "></span> Send</button>
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
                box:'',
                showLoading: false,
                showThanks: false,
            }
        },

        mounted() {
            reloadSuggestion();
            api.box(this.$route.params.box).done(box => this.box = box);
        },

        methods: {
            save() {
                this.showLoading = true;
                api.addItem(this.$route.params.box, this.text,this.rating).done(() => {
                    this.showLoading = false;
                    this.showThanks = true;
                    this.text = '';
                    this.rating = 0;

                    setTimeout(() => this.showThanks = false, 6000);
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

