<template>
  <div>
    <Header />
    <div class="contact">
      <img src='@/assets/son.png' class="contactBG" />
      <div class="contact__container">
        <form class="contact__form" @submit.prevent="contact_us">
          <h1>{{ $t('Contact us') }} </h1>
          <div v-if="errors.length">
            <p style="color:red;">{{ errors[0] }}</p>
          </div>
          <label class='contact__item'>
            <span class='visually-hidden'>searchInp</span>
            <input class='contact__input'
               type="text"
               :placeholder="$t('Name')"
               v-model="name" />
          </label>
          <label class='contact__item'>
            <span class='visually-hidden'>searchInp</span>
            <input class='contact__input'
               type="email"
               :placeholder="$t('Email')"
               v-model="email" />
          </label>
          <label class='contact__item'>
            <span class='visually-hidden'>searchInp</span>
            <input class='contact__input'
               type="text"
               :placeholder="$t('Subject')"
               v-model="subject" />
          </label>
          <label class='contact__item'>
            <textarea class='contact__textarea' name="message" id="message" cols="30" rows="5"
                      :placeholder="$t('Message')"
                      v-model="message">
            </textarea>
          </label>
          <button class="button contact__btn">
              {{ $t('Send') }}
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {mapActions} from "vuex";

export default {
  name: "Contact",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      errors:[],
      email: "",
      name: "",
      subject: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
  },
  methods: {
    ...mapActions({
      contact: "contact",
    }),
    contact: function () {
      let data = {
        email: this.email,
        name: this.name,
        subject: this.subject,
        message: this.message,
      }
      this.$store.dispatch('contact', data)
              .then(() => this.$router.push('/contact'))
              .catch(err => console.log(err))
    },
    contact_us: function () {
      console.log(this.name, this.email, this.subject, this.message)
      this.errors = []
      if (!this.name) this.errors.push("Name is required.");
      if (!this.subject) this.errors.push("Subject is  required.");
      if (!this.message) this.errors.push("Message is required.");
      if (!this.email) {
        this.errors.push("Email is required.");
      }
      if (!this.errors.length) {
        this.contact()
      }
    }
  }
}


</script>

<style lang="scss" scoped>
.contact {
   display: flex;

   &BG {
      width: calc(100% - 848px);
      max-height: 100vh;
      min-height: 500px;
      object-fit: cover;

      @media (max-width: 1300px) {
         width: calc(100% - 500px);
      }
   }

   &__container {
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

   &__form {
      width: 467px;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;

      @media (max-width: 1300px) {
         width: 400px;
      }
   }

   &__checkbox__container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .contact__btn {
      width: 100%;
      // height: 45px;
      background: #000000;
      border-radius: 6px;
      font-size: 20px;
      font-weight: 600;
      // font-family: $ff-1;
      font-family: Helvetica,Arial,sans-serif;
      color: white;
      padding: 13px;
      margin-top: 10px;
   }

   &__item {
      width: 100%;

      & textarea {
         padding-top: 10px;
         resize: none;
         width: 100%;
         height: 122px;
         margin-bottom: 8px;
         // font-family: $ff-1;
         font-family: Helvetica,
         Arial,
         sans-serif;
         font-size: 18px;
         padding: 15px;
         outline: none;
         border: 1.2px solid #B4BEC8;
         box-sizing: border-box;
         border-radius: 4px;
         border: 1.2px solid #B4BEC8;
         box-sizing: border-box;
         border-radius: 4px;
      }
   }

   &__input {
      width: 100%;
      height: 45px;
      margin-bottom: 8px;
      // font-family: $ff-1;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 18px;
      padding: 0 15px;
      outline: none;
      border: 1.2px solid #B4BEC8;
      box-sizing: border-box;
      border-radius: 4px;
   }
   &__textarea {

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
