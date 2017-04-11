<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div v-if="added" class="alert alert-success">
                Room {{roomName}} was sucessfully added&nbsp;
                <button class="btn btn-default" @click="reset">
                    Add another
                </button>
            </div>
            <div v-else class="col-sm-12 col-lg-8">
                <h1>
                    Add new box {{roomName}}
                </h1>
                <div class="container">
                    <form class="form-horizontal">

                        <div class="form-group">
                            <label class="col-md-4 control-label" for="name">Box name:</label>
                            <div class="col-md-4">
                                <input id="name" name="textinput" type="text" v-model="roomName" class="form-control input-md">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="textinput">Address:</label>
                            <div class="col-md-4">
                                <input id="textinput" name="textinput" type="text" v-model="address" class="form-control input-md">
                            </div>
                            <span v-show="!isAddressUnique" class="label label-danger">Address must be unique</span>
                        </div>

                        <!-- Prepended checkbox -->
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="prependedcheckbox">Add password:</label>
                            <div class="col-md-4">
                                <div class="input-group">
                              <span class="input-group-addon">
                                  <input type="checkbox" v-model="addPassword">
                              </span>
                                    <input id="prependedcheckbox" :disabled="!addPassword" v-model="password" name="prependedcheckbox" class="form-control" type="password"
                                    >
                                </div>
                            </div>
                        </div>


                        <!-- Button -->
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="singlebutton"></label>
                            <div class="col-md-4">
                                <button id="singlebutton" name="singlebutton" @click="onsubmit" class="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
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
                el.preventDefault();
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


</style>
