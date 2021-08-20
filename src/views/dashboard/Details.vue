<template>
    <Dashboard>
        <div class="dashboardContent">
            <!-- <router-link :to="{ name: 'Features' }" class="dashboardBTN">Create new project</router-link> -->
            <div class="user">
                <h2 class="user__title">New Project</h2>
                <span class="user__line"/>
                <p class="user__text">Please complete the info the project</p>
            </div>
            <!--        <router-link :to="{ name: 'Create' }" class="dashboardBTN">Create new project</router-link>-->
        </div>
        <div class="dashboardContent">
            <form class="NewFeatureForm" @submit.prevent="changeDetails">

                <label class='NewFeatureForm__item'>
                    <span>Name</span>
                    <input  required  class='NewFeatureForm__item__input'  v-model="name"
                           />
                </label>
                <label class='NewFeatureForm__item'>
                    <span>Country</span>
                    <input  required  class='NewFeatureForm__item__input'
                            />
                </label>
                <label class='NewFeatureForm__item'>
                    <span>Language</span>
                    <select class='NewFeatureForm__item__input'>
                        <option>11</option>
                        <option>22</option>
                        <option>33</option>
                        <option>44</option>
                        <option>55</option>
                    </select>
                </label>
                <label class='NewFeatureForm__item'>
                    <span>Change Password</span>
                    <input  required  class='NewFeatureForm__item__input'
                           />
                </label>
                <label class='NewFeatureForm__item'>
                    <span>Repeat Password</span>
                    <input  required  class='NewFeatureForm__item__input'
                            />
                </label>
                <label class="toggle" for="uniqueID">
                    <span>Dark mode</span>
                    <input type="checkbox" class="toggle__input" id="uniqueID" />
                    <span class="toggle-track">
		        		<span class="toggle-indicator">
		        			<!-- 	This check mark is optional	 -->
		        			<span class="checkMark">
		        				<svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
		        					<path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
		        				</svg>
		        			</span>
		        		</span>
		        	</span>
                </label>
                <button type="submit" class="NewFeatureForm__send">Change settings</button>
            </form>
        </div>
    </Dashboard>
</template>

<script>
    import {mapActions} from "vuex";
    import axios from "axios";

    export default {
        name: 'UserSettings',
        // components: {
        //     Dashboard
        // },
        data() {
            return {
                errors:[],
                name : "",
                email : "",
                organization : "",
                user_language : "",
                password : "",
                user_id:localStorage.getItem('user_id'),
                country:"",
                confirm_password : "",
                is_demo: false,
                info:[]
            };
        },
        mounted() {
            axios.get('https://pvbatt.herokuapp.com/api/v1/users/edit/' + this.user_id + '/')
                .then((res=> {
                    this.info = res.data;
                }))
                },

        methods: {
            ...mapActions({
                update: "update",
            }),
           update: function () {
                let data = {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    organization: this.organization,
                    user_language: this.user_language,
                    is_demo: this.is_demo
                }
                this.$store.dispatch('update', data)
                    .then(() => this.$router.push('/dashboard/projects'))
                    .catch(err => console.log(err))
            },
            changeDetails: function () {
                console.log(this.name, this.email, this.organization, this.user_language, this.password, this.confirm_password,  this.is_demo)
                this.errors = []

                if(!this.name) this.errors.push("Name is required.");
                if(!this.organization) this.errors.push("Organization is  required.");
                if(!this.user_language) this.errors.push("Language is required.");

                if(!this.email) {
                    this.errors.push("Email is required.");
                }

                if(!this.password) {
                    this.errors.push("Password is required.")
                } else if (!this.confirm_password) {
                    this.errors.push("Confirm password is required.")
                } else if (this.password !== this.confirm_password) {
                    this.errors.push("Passwords do not match.");
                }

                if(!this.is_demo) this.errors.push("User type is required.");

                if(!this.errors.length) {
                    this.update()
                }

            }
        }
    }
</script>
<style lang="scss" scoped >

    .user{
        // margin-bottom: 45px;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .user__title{
        font-size: 20px;
        color: #008B8B;
        font-weight: 700;
    }
    .user__line{
        background-color: #C4C4C4;
        width: 250px;
        height: 3px;
        border-radius: 3px;
        display: block;
        margin-bottom: 11px;
    }
    .dashboardContent{
        max-width: 1200px;
        padding-bottom: 50px;
        padding-left: 20px;
        padding-top: 63px;
        display: flex;
        margin:0 auto;
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

    /////////////////////

    .toggle {
        align-items: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        border-radius: 100px;
        display: flex;
        font-weight: 700;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    // Since we can't style the checkbox directly, we "hide" it so we can draw the toggle.
    .toggle__input {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;

        // This style sets the focus ring. The ":not([disabled])" prevents the focus ring from creating a flash when the element is clicked.
        &:not([disabled]):active + .toggle-track,
        &:not([disabled]):focus + .toggle-track {
            border: 1px solid transparent;
            // box-shadow: $focus-ring;
        }

        &:disabled + .toggle-track {
            cursor: not-allowed;
            opacity: 0.7;
        }
    }

    .toggle-track {
        background: #e5efe9;
        border: 1px solid #5a72b5;
        border-radius: 100px;
        cursor: pointer;
        display: flex;
        height: 30px;
        margin-right: 12px;
        position: relative;
        width: 60px;
    }

    .toggle-indicator {
        align-items: center;
        background: #121943;
        border-radius: 24px;
        bottom: 2px;
        display: flex;
        height: 24px;
        justify-content: center;
        left: 2px;
        outline: solid 2px transparent;
        position: absolute;
        transition: 0.25s;
        width: 24px;
    }

    // The check mark is optional
    .checkMark {
        fill: #fff;
        height: 20px;
        width: 20px;
        opacity: 0;
        transition: opacity 0.25 ease-in-out;
    }

    .toggle__input:checked + .toggle-track .toggle-indicator {
        background: #121943;
        transform: translateX(30px);

        .checkMark {
            opacity: 1;
            transition: opacity 0.25s ease-in-out;
        }
    }


</style>
