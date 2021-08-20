<template>
  <div>
    <Header />
    <div class="login">
      <img src='@/assets/son.png' class="loginBG"/>
      <div class="login__container">
            <form  class="login__form" @submit.prevent="login">
                <h1>{{ $t('Login') }}</h1>
                <div v-if="errors.length">
                  <p style="color:red;">{{ errors[0] }}</p>
                </div>
                <label class='login__item'>
                    <span class='visually-hidden'>searchInp</span>
                    <input
                      class='login__input'
                      type="email"
                      :placeholder="$t('Email')"
                      v-model="email"
                    />
                </label>
                <label class='login__item'>
                    <span class='visually-hidden'>searchInp</span>
                    <input
                      class='login__input'
                      type="password"
                      :placeholder="$t('Password')"
                      v-model="password"
                    />
                </label>
                <div class="login__checkbox__container">
                  <label class='login__checkbox'>
                      <input type='checkbox' name="CompanyAddress"/>
                      <span class='ogin__checkbox__text'>{{ $t('Remember me') }}</span>
                  </label>
                  <a>{{ $t('Forget Password?') }}</a>
                </div>
                <button class="button login__btn">
                    {{ $t('Login') }}
                </button>
            </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Login",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      errors:[],
      email: "",
      password: "",
      user_id:"",
      user_email:"",
      reg: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
  },

  methods: {
    ...mapActions({
      login: "login",
    }),
    login: function () {

        console.log(this.name, this.email, this.organization, this.user_language, this.password, this.confirm_password, this.is_demo)
        this.errors = []

        if (!this.email) {
            this.errors.push("Email is required.");
        }


        if (!this.password) {
            this.errors.push("Password is required.")
        }

        if (!this.errors.length) {
            let email = this.email
            let password = this.password
            this.$store.dispatch('login', {email, password})


            axios
                .get('https://pvbatt.herokuapp.com/api/v1/users/get-id/' + this.email + '/')
                .then(response => {
                    this.user_id = response.data[0].id;
                    localStorage.setItem('user_id',response.data[0].id)
                    localStorage.setItem('user_email',this.email)
                    this.$router.push({
                        name: 'Projects',
                        params: {id: this.user_id}
                    });
                });
        }
    }

  }
};
</script>

<style lang="scss" scoped>
    .login {
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
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .login__btn{
            width: 100%;
            // height: 45px;
            background: #000000;
            border-radius: 6px;
            font-size: 20px;
            font-weight: 600;
            font-family: $ff-1;
            color: white;
            padding: 13px;
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
            border: 1.2px solid #B4BEC8;
            outline: none;
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
