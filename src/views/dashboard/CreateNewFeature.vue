<template>
    <Dashboard>
        <div class="dashboardContent">
            <form class="NewFeatureForm" @submit.prevent="create_project">
                <div v-if="errors.length">
                    <p style="color:red;">{{ errors[0] }}</p>
                </div>
                <label class='NewFeatureForm__item'>
                    <span>Feature name</span>
                    <input  required  class='NewFeatureForm__item__input'
                            v-model="project_client"/>
                </label>
                <label class='NewFeatureForm__item'>
                    <span>Description</span>
                    <textarea  class='NewFeatureForm__item__TextArea'
                               v-model="project_description"></textarea>
                </label>
                <label class='NewFeatureForm__item'>
                    <!-- <span class="visually-hidden">Created by</span>
                    <input type='file' required  class='NewFeatureForm__item__upload'/> -->
                    <div class='NewFeatureForm__item__upload'>
                        <div v-if="!image" class="file-input">
                            <img src="src=@/assets/camera.png"/>
                            <div>
                                <input
                                        type="file"
                                        name="file-input"
                                        id="file-input"
                                        class="file-input__input"
                                        @change="onFileChange"
                                />
                                <label class="file-input__label" for="file-input">
                                    <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="upload"
                                            class="svg-inline--fa fa-upload fa-w-16"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                    >
                                        <path
                                                fill="currentColor"
                                                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                        ></path>
                                    </svg>
                                    <span>Upload file</span></label>
                            </div>
                            <!-- <input type="file" @change="onFileChange"> -->
                        </div>
                        <div v-else class="file-input">
                            <img :src="image" class="select__img"/>
                            <button @click="removeImage" class="file-input__change">Remove image</button>
                        </div>
                    </div>
                </label>
                <button type="submit" class="NewFeatureForm__send">Create</button>
            </form>
        </div>
    </Dashboard>
</template>

<script>
    import Dashboard from "./Dashboard.vue";
    import {mapActions} from "vuex";

    export default {
        name: 'DashboardDefoult',
        components: {
            Dashboard
        },
        data() {
            return {
                errors:[],
                project_code: "",
                project_name: "",
                project_description: "",
                project_client:"",
                created_by:"",
                image: '',
                deleteClicked: false,
                imageinfo: null,
                reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            };
        },

        methods: {
            ...mapActions({
                create: "create",
            }),


            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },

            createImage(file) {
                //   var image = new Image();
                var reader = new FileReader();
                var vm = this;

                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImage: function () {
                this.image = '';
            },


            create: function () {
                let data = {
                    project_code: this.project_code,
                    project_name: this.project_name,
                    project_description: this.project_description,
                    project_client: this.project_client,
                    created_by:this.created_by
                }
                this.$store.dispatch('create', data)
                    .then(() => this.$router.push('/create'))
                    .catch(err => console.log(err))
            },
            create_project: function () {
                console.log(this.project_name, this.project_description, this.project_code, this.project_client,this.created_by)
                this.errors = []
                if (!this.project_name) this.errors.push("Name is required.");
                if (!this.project_description) this.errors.push("Description is  required.");
                if (!this.project_code) this.errors.push("Code is required.");
                if(!this.project_client) this.errors.push("CLient is required.");
                if(!this.created_by) this.errors.push("Created by is required");

                if (!this.errors.length) {
                    this.create()
                }
            },
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/')
                    })
            }
        }

    }
</script>
<style lang="scss" scoped >
    .dashboardContent{
        max-width: 1200px;
        padding-bottom: 50px;
        padding-left: 20px;
        padding-top: 63px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .dashboardBTN{
        background-color: #008B8B;
        color: #FFF;
        padding: 15px 69px;
        border-radius: 9px;
    }
    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
    .NewFeature{
        // margin-bottom: 45px;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .NewFeature__title{
        font-size: 20px;
        color: #008B8B;
        font-weight: 700;
    }
    .NewFeature__line{
        background-color: #C4C4C4;
        width: 250px;
        height: 3px;
        border-radius: 3px;
        display: block;
        margin-bottom: 11px;
    }
    .NewFeature__text{

    }
    .NewFeatureForm {
        width: 100%;
        max-width: 830px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__item {
            width: 100%;
            &__input {
                width: 100%;
                height: 45px;
                margin-bottom: 8px;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 18px;
                padding: 0 15px;
                box-sizing: border-box;
                border: 1.2px solid #B4BEC8;
                outline: none;
            }
            &__TextArea{
                height: 250px;
                padding: 15px;
                resize: none;
            }
            &__upload{
                width: 80%;
                // height: 45px;
                margin-bottom: 8px;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 18px;
                padding: 30px;
                box-sizing: border-box;
                border: 1.2px dashed #B4BEC8;
                outline: none;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 30px;
                // display: flex;
                // al
                // flex-direction: column;
                // margin: 0 auto;
                &__title{
                    text-align: center;
                }
            }
        }
        &__send{
            padding: 15px 77px;
            background-color: #008B8B;
            color: #FFF;
            font-size: 20px;
            font-family: Helvetica, Arial, sans-serif;
            cursor: pointer;
            // margin-left: 0;
            // margin-right: 0;
        }
        .select__img{
            width: 50%;
            margin: auto;
            display: block;
            margin-bottom: 10px;
        }
    }
    .file-input{
        display: flex;
        flex-direction: column;
        align-items: center;
        &__change{
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 600;
            color: #fff;
            font-size: 14px;
            padding: 10px 12px;
            background-color: #4245a8;
            // box-shadow: 0px 0px 2px rgb(0 0 0 / 25%);
        }
    }
    .file-input__input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .file-input__label {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        font-size: 14px;
        padding: 10px 12px;
        background-color: #4245a8;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    }

    .file-input__label svg {
        height: 16px;
        margin-right: 4px;
    }

</style>

