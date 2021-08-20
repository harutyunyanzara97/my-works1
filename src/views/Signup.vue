<template>
    <div>
        <Header />
        <div class="signup">
            <img src='@/assets/son.png' class="signupBG"/>
            <div class="signup__container">
                <form  class="signup__form" @submit.prevent="signup">
                    <h1>{{ $t('Sign up')}}</h1>
                    <div v-if="errors.length">
                        <p style="color:red;">{{ errors[0] }}</p>
                    </div>
                    <label class='signup__item'>
                        <span class='visually-hidden'>Name inp</span>
                        <input
                                class='signup__input'
                                type="text"
                                :placeholder="$t('Name')"
                                v-model="name"
                        />
                    </label>
                    <label class='signup__item'>
                        <span class='visually-hidden'>organization inp</span>
                        <input
                                class='signup__input'
                                type="text"
                                :placeholder="$t('Organization')"
                                v-model="organization"
                        />
                    </label>
                    <label class='signup__item'>
                        <span class='visually-hidden'>User langage inp</span>
                        <select name="user_language" id="user_language" class='signup__select' v-model="user_language">
                            <option value="" disabled selected>{{ $t('Select language') }}</option>
                            <option value="EN">{{ $t('English') }}</option>
                            <option value="ES">{{ $t('Spanish') }}</option>
                        </select>
                    </label>
                    <label class='signup__item'>
                        <span class='visually-hidden'>Email inp</span>
                        <input
                                class='signup__input'
                                type="email"
                                :placeholder="$t('Email')"
                                v-model="email"
                        />
                    </label>

                    <label class='signup__item'>
                        <span class='visually-hidden'>password inp</span>
                        <input
                                class='signup__input'
                                type="password"
                                :placeholder="$t('Password')"
                                v-model="password"
                        />
                    </label>
                    <label class='signup__item'>
                        <span class='visually-hidden'>Repeat password inp</span>
                        <input
                                class='signup__input'
                                type="password"
                                :placeholder="$t('Repeat password')"
                                v-model="confirm_password"
                        />
                    </label>

                    <div class="signUp__radio">
                        <label class="signup__item__text">
                            <input class="signUp__radio__inp" type="radio" id="demo" name="is_demo" value="1" v-model="is_demo" >
                            <span>{{ $t('Demo user') }}</span>
                        </label>
                        <label class="signup__item__text">
                            <input class="signUp__radio__inp" type="radio" id="paid" name="is_demo" value="0" v-model="is_demo" >
                            <span>{{ $t('Paid user') }}</span>
                        </label>
                    </div>

                    <div class="signup__checkbox__container">
                        <label class='signup__checkbox'>
                            <input class="signUp__radio__inp" type='checkbox' name="CompanyAddress"/>
                            <span class='ogin__checkbox__text'>{{ $t('Remember me') }}</span>
                        </label>
                        <a>{{ $t('Forget Password?') }}</a>
                    </div>
                    <button class="button signup__btn">
                        {{ $t('Sign up') }}
                    </button>
                    <div class="question">
                        <p class="question__text">{{ $t('Don’t have an account?') }}</p>
                        <a  class="question__link">{{ $t('Sign up') }}</a>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    /* eslint-disable */
    import { mapActions } from "vuex";
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";

    export default {
        name: "Signup",
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                errors:[],
                name : "",
                email : "",
                organization : "",
                user_language : "",
                password : "",
                confirm_password : "",
                is_demo: false,
                reg: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            };
        },

        methods: {
            ...mapActions({
                register: "register",
            }),
            register: function () {
                let data = {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    organization: this.organization,
                    user_language: this.user_language,
                    is_demo: this.is_demo
                }
                this.$store.dispatch('register', data)
                    .then(() => this.$router.push('/login'))
                    .catch(err => console.log(err))
            },
            signup: function () {
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
                    this.register()
                }

            }
        }
    };
</script>

<style lang="scss" scoped>
    .signup {
        display: flex;
        &BG{
            width: calc(100% - 848px);
            max-height: 100vh;
            min-height: 500px;
            object-fit: cover;
            @media (max-width: 1300px) {
                width: calc(100% - 500px);
            }
        }
        &__container{
            width: 848px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 150px;
            padding-bottom: 150px;
            @media (max-width: 1300px) {
                width: 500px;
            }
        }
        &__form{
            width: 467px;
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-items: center;
            @media (max-width: 1300px) {
                width: 400px;
            }
        }
        &__checkbox__container{
            width: 100%;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .signup__btn{
            width: 100%;
            // height: 45px;
            background: #000000;
            border-radius: 6px;
            font-size: 20px;
            font-weight: 600;
            font-family: $ff-1;
            color: white;
            padding: 13px;
            box-sizing: border-box;
            margin-top: 10px;
        }
        &__item{
            width: 100%;
        }
        &__input{
            width: 100%;
            height: 45px;
            margin-bottom: 8px;
            font-family: $ff-1;
            font-size: 18px;
            padding: 0 15px;
            box-sizing: border-box;
            border: 1px solid #000;
            outline: none;
        }
        &__select{
            margin-top: 5px;
            width: 100%;
            height: 45px;
            margin-bottom: 8px;
            font-family: $ff-1;
            font-size: 18px;
            border: 1px solid #000;
            outline: none;
        }
    }
    .signUp__radio{
        width: 100%;
        align-items: center;
        display: flex;
    }
    .signup__item__text{
        margin-right: 15px;
        display: flex;
        align-items: center;
    }
    .signUp__radio__inp{
        margin: 0 10px 0 0;
    }
    .question{
        display: flex;
        justify-content: center;
        &__text{
            margin-right: 20px;
            font-family: $ff-1;
        }
        &__link{
            font-weight: 600;
            font-family: $ff-1;
            color: #032D23;
        }
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
</style>

