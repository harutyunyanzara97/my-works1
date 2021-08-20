<!--<template>-->
<!--    <div>-->
<!--        <Header />-->
<!--        <div class="dashboardContent">-->
<!--            <form class="NewFeatureForm" @submit.prevent="create_feature" enctype="multipart/form-data">-->
<!--                <div v-if="errors.length">-->
<!--                    <p style="color:red;">{{ errors[0] }}</p>-->
<!--                </div>-->
<!--                <label class='NewFeatureForm__item'>-->
<!--                    <span>Feature name en</span>-->
<!--                    <input  required  class='NewFeatureForm__item__input'-->
<!--                            v-model="name_en"/>-->
<!--                </label>-->
<!--                <label class='NewFeatureForm__item'>-->
<!--                    <span>Feature name es</span>-->
<!--                    <input  required  class='NewFeatureForm__item__input'-->
<!--                            v-model="name_s"/>-->
<!--                </label>-->
<!--                <label class='NewFeatureForm__item'>-->
<!--                    <span>Description en</span>-->
<!--                    <textarea  class='NewFeatureForm__item__TextArea'-->
<!--                               v-model="description_en"></textarea>-->
<!--                </label>-->
<!--                <label class='NewFeatureForm__item'>-->
<!--                    <span>Description es</span>-->
<!--                    <textarea  class='NewFeatureForm__item__TextArea'-->
<!--                               v-model="description_es"></textarea>-->
<!--                </label>-->
<!--                <label class='NewFeatureForm__item'>-->
<!--                    &lt;!&ndash; <span class="visually-hidden">Created by</span>-->
<!--                    <input type='file' required  class='NewFeatureForm__item__upload'/> &ndash;&gt;-->
<!--                    <div class='NewFeatureForm__item__upload'>-->
<!--                        <div v-if="!image" class="file-input">-->
<!--                            <svg style="cursor:pointer;" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M34.7493 16.5581C34.9426 16.5581 35.0994 16.4019 35.0994 16.2085V14.5776H36.7297C36.9231 14.5776 37.0798 14.4214 37.0798 14.228C37.0798 14.0347 36.9231 13.8784 36.7297 13.8784H35.0994V12.2476C35.0994 12.0542 34.9426 11.8979 34.7493 11.8979C34.5559 11.8979 34.3992 12.0542 34.3992 12.2476V13.8784H32.7688C32.5754 13.8784 32.4187 14.0347 32.4187 14.228C32.4187 14.4214 32.5754 14.5776 32.7688 14.5776H34.3992V16.2085C34.3992 16.4019 34.5559 16.5581 34.7493 16.5581Z" fill="#303030"/>-->
<!--                                <path d="M22.8411 31.6284C24.9939 31.6284 26.7449 29.8765 26.7449 27.7241C26.7449 25.5718 24.9939 23.8198 22.8411 23.8198C20.6882 23.8198 18.9368 25.5718 18.9368 27.7241C18.9368 29.8765 20.6882 31.6284 22.8411 31.6284ZM22.8411 24.5669C24.5823 24.5669 25.9988 25.9829 25.9988 27.7241C25.9988 29.4653 24.5823 30.8814 22.8411 30.8814C21.0999 30.8814 19.6829 29.4653 19.6829 27.7241C19.6829 25.9829 21.0999 24.5669 22.8411 24.5669Z" fill="#303030"/>-->
<!--                                <path d="M27.1071 26.0122C27.3207 26.5424 27.4451 27.1182 27.4451 27.7241C27.4451 30.2632 25.3796 32.3276 22.8411 32.3276C20.302 32.3276 18.2366 30.2632 18.2366 27.7241C18.2366 27.1182 18.361 26.5424 18.5746 26.0122H11.6204H10.9202V35.0835C10.9202 35.645 11.3777 36.102 11.9402 36.102H33.7307C34.2991 36.102 34.7615 35.6401 34.7615 35.0718V26.0122H34.0613H27.1071Z" fill="#303030"/>-->
<!--                                <path d="M33.7415 19.3384H27.8743L26.6248 17.1216C26.45 16.8091 26.1189 16.6157 25.7615 16.6157H19.9202C19.5627 16.6157 19.2317 16.8091 19.0574 17.1206L17.8069 19.3384H11.9294C11.3728 19.3384 10.9202 19.7905 10.9202 20.3472V25.313H11.6204H18.9363C19.7488 24.0026 21.1887 23.1206 22.8411 23.1206C24.4931 23.1206 25.9329 24.0026 26.7453 25.313H34.0613H34.7615V20.3579C34.7615 19.7954 34.304 19.3384 33.7415 19.3384Z" fill="#303030"/>-->
<!--                            </svg>-->
<!--                            <div>-->
<!--                                <input type="file"-->
<!--                                        name="file-input"-->
<!--                                        id="file-input"-->
<!--                                        class="file-input__input"-->
<!--                                        @change="onFileChange"-->
<!--                                />-->
<!--                                <label class="file-input__label" for="file-input">-->
<!--                                    <span class="file-input__span">Download photo</span></label>-->
<!--                            </div>-->
<!--                            &lt;!&ndash; <input type="file" @change="onFileChange"> &ndash;&gt;-->
<!--                        </div>-->
<!--                        <div v-else class="file-input">-->
<!--                            <img :src="image" class="select__img"/>-->
<!--                            <button @click="removeImage" class="file-input__change">Remove image</button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </label>-->
<!--                <button type="submit" class="NewFeatureForm__send">Create</button>-->
<!--            </form>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    import Header from "@/components/Header.vue";-->
<!--    import {mapActions} from "vuex";-->

<!--    export default {-->
<!--        name: 'DashboardDefoult',-->
<!--        components: {-->
<!--            Header,-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                errors:[],-->
<!--                name_en: "",-->
<!--                name_es: "",-->
<!--                description_en: "",-->
<!--                description_es:"",-->
<!--                feature_img:"",-->
<!--                image:'',-->
<!--                deleteClicked: false,-->
<!--                imageinfo: null,-->
<!--                reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/-->
<!--            };-->
<!--        },-->

<!--        methods: {-->
<!--            ...mapActions({-->
<!--                create: "CreateNewFeatures",-->
<!--            }),-->


<!--            onFileChange(e) {-->
<!--                var files = e.target.files || e.dataTransfer.files;-->
<!--                if (!files.length)-->
<!--                    return;-->
<!--                this.createImage(files[0]);-->
<!--            },-->

<!--            createImage(file) {-->
<!--                //   var image = new Image();-->
<!--                var reader = new FileReader();-->
<!--                var vm = this;-->

<!--                reader.onload = (e) => {-->
<!--                    vm.image = e.target.result;-->
<!--                };-->
<!--                reader.readAsDataURL(file);-->
<!--                console.log(file.name);-->
<!--                this.feature_img = file.name-->
<!--            },-->
<!--            removeImage: function () {-->
<!--                this.image = '';-->
<!--            },-->


<!--            create: function () {-->
<!--                let data = {-->
<!--                    name_en: this.name_en,-->
<!--                    name_es: this.name_es,-->
<!--                    description_en: this.description_en,-->
<!--                    description_es:this.description_es,-->
<!--                    feature_img:this.feature_img-->
<!--                }-->
<!--                this.$store.dispatch('create_feature', data)-->
<!--                    .then(() => this.$router.push('/create'))-->
<!--                    .catch(err => console.log(err))-->
<!--            },-->
<!--            create_feature: function () {-->
<!--                console.log(this.name_en, this.description_en, this.feature_img)-->
<!--                this.errors = []-->
<!--                // if (!this.name_en && !this.name_es) this.errors.push("Name is required.");-->
<!--                // if (!this.description_en && this.description_es ) this.errors.push("Description is  required.");-->
<!--                // if (!this.errors.length) {-->
<!--                    this.create()-->
<!--                },-->
<!--            // },-->
<!--            logout: function () {-->
<!--                this.$store.dispatch('logout')-->
<!--                    .then(() => {-->
<!--                        this.$router.push('/')-->
<!--                    })-->
<!--            }-->
<!--        }-->

<!--    }-->
<!--</script>-->
<!--<style lang="scss" scoped >-->
<!--    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');-->
<!--    .dashboardContent{-->
<!--        max-width: 1200px;-->
<!--        padding-bottom: 50px;-->
<!--        /* padding-left: 159px; */-->
<!--        margin: 0 auto;-->
<!--        padding-top: 222px;-->
<!--        display: flex;-->
<!--        align-items: center;-->
<!--        justify-content: space-between;-->
<!--    }-->
<!--    .dashboardBTN{-->
<!--        background-color: #008B8B;-->
<!--        color: #FFF;-->
<!--        padding: 15px 69px;-->
<!--        border-radius: 9px;-->
<!--    }-->
<!--    .visually-hidden {-->
<!--        clip: rect(0 0 0 0);-->
<!--        clip-path: inset(50%);-->
<!--        height: 1px;-->
<!--        overflow: hidden;-->
<!--        position: absolute;-->
<!--        white-space: nowrap;-->
<!--        width: 1px;-->
<!--    }-->
<!--    .NewFeature{-->
<!--        // margin-bottom: 45px;-->
<!--        padding-left: 20px;-->
<!--        padding-right: 20px;-->
<!--        box-sizing: border-box;-->
<!--    }-->
<!--    .NewFeature__title{-->
<!--        font-size: 20px;-->
<!--        color: #008B8B;-->
<!--        font-weight: 700;-->
<!--    }-->
<!--    .NewFeature__line{-->
<!--        background-color: #C4C4C4;-->
<!--        width: 250px;-->
<!--        height: 3px;-->
<!--        border-radius: 3px;-->
<!--        display: block;-->
<!--        margin-bottom: 11px;-->
<!--    }-->
<!--    .NewFeature__text{-->

<!--    }-->
<!--    .NewFeatureForm {-->
<!--        width: 100%;-->
<!--        max-width: 830px;-->
<!--        margin-left: auto;-->
<!--        margin-right: auto;-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        align-items: center;-->
<!--        &__item {-->
<!--            width: 100%;-->
<!--            &__input {-->
<!--                width: 100%;-->
<!--                height: 45px;-->
<!--                margin-bottom: 8px;-->
<!--                font-family: Helvetica, Arial, sans-serif;-->
<!--                font-size: 18px;-->
<!--                padding: 0 15px;-->
<!--                box-sizing: border-box;-->
<!--                border: 1.2px solid #B4BEC8;-->
<!--                outline: none;-->
<!--            }-->
<!--            &__TextArea{-->
<!--                height: 250px;-->
<!--                padding: 15px;-->
<!--                resize: none;-->
<!--            }-->
<!--            &__upload{-->
<!--                width: 80%;-->
<!--                // height: 45px;-->
<!--                margin-bottom: 8px;-->
<!--                font-family: Helvetica, Arial, sans-serif;-->
<!--                font-size: 18px;-->
<!--                padding: 30px;-->
<!--                box-sizing: border-box;-->
<!--                border: 1.2px dashed #B4BEC8;-->
<!--                outline: none;-->
<!--                margin-left: auto;-->
<!--                margin-right: auto;-->
<!--                margin-bottom: 30px;-->
<!--                // display: flex;-->
<!--                // al-->
<!--                // flex-direction: column;-->
<!--                // margin: 0 auto;-->
<!--                &__title{-->
<!--                    text-align: center;-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--        &__send{-->
<!--            padding: 15px 77px;-->
<!--            background-color: #008B8B;-->
<!--            color: #FFF;-->
<!--            font-size: 20px;-->
<!--            font-family: Helvetica, Arial, sans-serif;-->
<!--            cursor: pointer;-->
<!--            // margin-left: 0;-->
<!--            // margin-right: 0;-->
<!--        }-->
<!--        .select__img{-->
<!--            width: 50%;-->
<!--            margin: auto;-->
<!--            display: block;-->
<!--            margin-bottom: 10px;-->
<!--        }-->
<!--    }-->
<!--    .file-input{-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        align-items: center;-->
<!--        &__change{-->
<!--            width: 306px;-->
<!--            cursor: pointer;-->
<!--            display: inline-flex;-->
<!--            align-items: center;-->
<!--            border-radius: 4px;-->
<!--            font-size: 14px;-->
<!--            font-weight: 600;-->
<!--            color: #fff;-->
<!--            font-size: 14px;-->
<!--            padding: 10px 12px;-->
<!--            background:transparent;-->
<!--            // box-shadow: 0px 0px 2px rgb(0 0 0 / 25%);-->
<!--        }-->
<!--    }-->
<!--    .file-input__input {-->
<!--        width: 0.1px;-->
<!--        height: 0.1px;-->
<!--        opacity: 0;-->
<!--        overflow: hidden;-->
<!--        position: absolute;-->
<!--        z-index: -1;-->
<!--    }-->
<!--    .file-input__label {-->
<!--        width:306px;-->
<!--        cursor: pointer;-->
<!--        text-align: center;-->
<!--        display: inline-flex;-->
<!--        align-items: center;-->
<!--        border-radius: 4px;-->
<!--        font-size: 14px;-->
<!--        color: #000;-->
<!--        border:1px solid #CACACA;-->
<!--        padding: 10px 12px;-->
<!--        font-family: 'Montserrat', sans-serif;;-->
<!--        font-style: normal;-->
<!--        font-weight: 700;-->
<!--        line-height: 17px;-->
<!--        letter-spacing: 0.05em;-->
<!--        text-align: left;-->

<!--        background:transparent;-->
<!--        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);-->
<!--    }-->

<!--    .file-input__label svg {-->
<!--        height: 16px;-->
<!--        margin-right: 4px;-->
<!--    }-->
<!--    .file-input__span {-->
<!--        margin: 0 auto;-->
<!--    }-->

<!--</style>-->

