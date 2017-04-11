<template>
    <div v-if="added" class="alert alert-success">
        Room {{roomName}} added
        <button class="btn btn-default" @click="reset">
            Add another
        </button>
    </div>
    <div v-else class="col-sm-12 col-lg-8">
        <h1>
            Add new room {{roomName}}
        </h1>
        <div class="container">
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2">Box name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Name of room" v-model="roomName">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2">Address:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="must url-friendly and unique eq.: MyMother" v-model="address">
                    </div>
                    <span v-show="!isAddressUnique" class="label label-danger">Address must be unique</span>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" id="checkbox" v-model="addPassword">Add password :</label>
                </div>
                <div class="form-group" v-show="addPassword">
                    <label class="control-label col-sm-2">Password:</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" placeholder="type password" v-model="password">
                    </div>
                </div>
                <button type="button" :disabled="!valid" class="btn btn-primary" v-on:click="onsubmit()">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import api from '../js/Api'
    export default {
        name: 'add',
        data () {
            return {
                roomName: '',
                address: '',
                addPassword : false,
                isAddressUnique: true,
                password: '',
                added: false,
            }
        },
        computed: {
            valid() {
                return this.isAddressUnique && this.address !== '';
            }
        },
        watch : {
            address : function () {
                api.boxes().done( (data) => {
                    let flag = true;
                    data.forEach( (item) => {
                       if(item.url === this.address) {
                           flag = false;
                       }
                    });
                    this.isAddressUnique = flag;
                });

            }
        },
        methods: {
            onsubmit: function (el) {
                if (this.valid) {
                    api.addBox({
                        "box": {
                            "name": this.roomName,
                            "url": this.address,
                            "type": "SUGGESTION",
                            "category": "Other",
                            "password": this.password
                    }}).done((message) => {
                        if (message.message === "success") {
                            this.added = true;
                        }
                    });
                }
            },
            reset() {
                this.added = false;
                this.address = '';
                this.isAddressUnique = true;
                this.name = '';
                this.url = '';
                this.password = '';
                this.addPassword = false;
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
