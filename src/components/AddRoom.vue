<template>
    <div class="col-sm-12 col-lg-8">
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
                <button type="button" class="btn btn-primary" v-on:click="onsubmit()">Submit</button>
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
            }
        },
        watch : {
            address : function () {
                // TODO: check if is unique
                api.boxes().done( (data) => {
                    let flag = true;
                    data.forEach( (item) => {
                        console.log(item);
                       if(item.url === this.address) {
                           flag = false;
                       }
                    });
                    this.isAddressUnique = flag;
                });
                console.log("address changed " + this.address);

            }
        },
        methods: {
            onsubmit: function (el) {
                if (this.isAddressUnique) {
                    api.addBox({
                        "box": {
                            "name": this.roomName,
                            "url": this.address,
                            "type": "SUGGESTION",
                            "category": "Other",
                            "password": this.password
                    }}).done(function(message) {
                        if (message.message === "success") {
                            // TODO: Box is successfully added mesage
                            console.log("Room added");
                        }
                    });
                }
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
