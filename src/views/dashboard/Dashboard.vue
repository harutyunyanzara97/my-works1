<template>
  <div class="container">
    <div class="sidebar">
        <nav class="sidebar__content">
            <a href="/">
                <img class="logo" src="@/assets/logo.png"/>
            </a>
            <h2 class="sidebar__title">{{project}}</h2>

        <nav class="sidebar__menu">
            <router-link :to="{ name: 'Projects' }" class="sidebar__study">All projects</router-link>
            <p class="dashboard__drop__Link dashboardBt sidebar__study" v-show="id" v-on:click="isVisible = !isVisible" style="cursor: pointer;">Studies</p>



                <div class="dashboard__drop"  v-if="isVisible">
                    <router-link :to="{ name: 'Studies',params:{id:id} }"
                                 class="dashboard__drop__Link sidebar__study" style="cursor: pointer;margin-top:10px;"
                                 v-show="id">New study
                    </router-link>
                                            <p class="dashboard__drop__Link dashboardBt" v-for="i in info" :key="i">{{i.study_name}}</p>

                                        </div>


                <p class="dashboard__drop__Link dashboardBt sidebar__study" v-show="id" v-on:click="isBudgets = !isBudgets" style="cursor: pointer;">
                                            Budgets</p>


                                        <div class="dashboard__drop" v-show="info[0]" v-if="isBudgets">
                                            <router-link :to="{ name: 'Budgets',params:{id:id} }"
                                                         class="dashboard__drop__Link sidebar__study" style="cursor: pointer;margin-top:10px;"
                                                         v-show="id">New budget
                                            </router-link>
                                            <p class="dashboard__drop__Link dashboardBt" v-for="i in budgets" :key="i">{{i.budget_name}}</p>

                                            <!--                <router-link :to="{ name: 'Studies' }" class="dashboard__drop__Link">New Studie</router-link>-->
                                            <!--                <router-link :to="{ name: 'studies' }" class="dashboard__drop__Link">Studie 1</router-link>-->

                                        </div>

<!--            <router-link :to="{ name: 'Studies',params:{id:id} }"  class="dashboard__drop__Link sidebar__study" style="cursor: pointer;margin-top:10px;">New study</router-link>-->

<!--            <div class="dashboard__drop" v-show="info[0]" v-if="isVisible">-->
<!--                <p class="dashboard__drop__Link sidebar__study" style="cursor: pointer;margin-top:10px;" v-for="i in info" :key="i">{{i.study_name}}</p>-->

<!--                &lt;!&ndash;                <router-link :to="{ name: 'Studies' }" class="dashboard__drop__Link">New Studie</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;                <router-link :to="{ name: 'studies' }" class="dashboard__drop__Link">Studie 1</router-link>&ndash;&gt;-->

<!--            </div>-->

<!--            <p class="dashboard__drop__Link sidebar__study" style="cursor: pointer;margin-top:10px;" >Budgets</p>-->
<!--            <router-link :to="{ name: 'Budgets',params:{id:id} }" v-if="isBudgets" class="dashboard__drop__Link sidebar__study" style="cursor: pointer;margin-top:10px;" v-show="id">New budget</router-link>-->
<!--            <router-link :to="{ name: 'AllBudgets',params:{id:id} }" class="dashboard__drop__Link sidebar__study"  style="cursor: pointer;margin-top:10px;">Budgets</router-link>-->

<!--            <div class="dashboard__drop" v-show="info[0]" v-if="isBudgets">-->
<!--                <p class="dashboard__drop__Link sidebar__study" style="cursor: pointer;margin-top:10px;" v-for="i in budgets" :key="i">{{i.budget_name}}</p>-->

<!--                &lt;!&ndash;                <router-link :to="{ name: 'Studies' }" class="dashboard__drop__Link">New Studie</router-link>&ndash;&gt;-->
<!--                &lt;!&ndash;                <router-link :to="{ name: 'studies' }" class="dashboard__drop__Link">Studie 1</router-link>&ndash;&gt;-->

<!--            </div>-->
<!--            <router-link :to="{ name: 'Studies' }">Studies</router-link>-->
<!--            <a>Budgets</a>-->
            <a  class="dashboard__drop__Link sidebar__study">Schedules</a>
            <a class="dashboard__drop__Link sidebar__study">AC calculations</a>
            <a class="dashboard__drop__Link sidebar__study">DC calculations (PV)</a>
            <a class="dashboard__drop__Link sidebar__study">Reports</a>
            <a class="dashboard__drop__Link sidebar__study">Learn</a>
        </nav>
        </nav>
        <button class="logoutBTN" @click="logout">Logout</button>
    </div>

<!--    <section class="main__conttent dashboard">-->
<!--      <div class="main__conttent__menu">-->
<!--&lt;!&ndash;        <a href='/' class="main__conttent__menu__goBack">Back to Landing page</a>&ndash;&gt;-->
<!--        <div class="main__conttent__search__container">-->
<!--          <img src="@/assets/search.png" class="main__conttent__search__container__img"/>-->
<!--          <input class="main__conttent__search" placeholder="Search for a project" />-->
<!--        </div>-->
<!--        <select  class="main__conttent__select">-->
<!--          <option  class="main__conttent__option">dsafda</option>-->
<!--          <option  class="main__conttent__option">dsfdasafda</option>-->
<!--        </select>-->
<!--      </div>-->
<!--      <slot>-->

<!--      </slot>-->
<!--    </section>-->
    <!-- <h3>This is Dashboard page. Protected by AUTH <span @click="logout" style="color:blue;cursor:pointer;">Logout</span></h3> -->
  </div>
</template>

<script>
// import Sidebar from "@/components/Sidebar.vue";

import axios from "axios";

export default {
  name: 'Dashboard',
  components: {
    // Sidebar,
  },
    data(){
      return {
          isVisible: false,
          isBudgets: false,
          info:[],
          budgets:[],
          project:this.$route.params.project,
          id:this.$route.params.id,
          email:""
      }
    },
    mounted() {
        this.getStudies();
        this.getBudgets();
    },
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => {
                    window.localStorage.removeItem("username");
                    window.location.replace("")
                    this.$router.push('/')
                })
        },
     getStudies() {
         axios.get('https://pvbatt.herokuapp.com/api/v1/studies-list/' + this.id + '/')
                   .then((res) => {
                       this.info = res.data;
                   });
                // console.log(this.info);
           },

        getBudgets() {
            axios.get('https://pvbatt.herokuapp.com/api/v1/budgets-list/' + this.id + '/')
                .then((res) => {
                    this.budgets = res.data;
                });
            // console.log(this.info);
        },

       }

}
</script>
<style lang="scss" scoped >


  .logo{

    margin-bottom: 50px;
  }

  .sidebar {
        height: 100vh;
        left: 0;
        top: 0;
        right: 0;
        z-index: 99;
        padding-top: 32px;
        padding-bottom: 50px;
        position: fixed;
        width: 342px;
        z-index: 999;
        overflow: hidden;
        overflow-y: auto;
        transition: 0.5s;
        background: #DADADA;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        &__title{
          color: #008B8B;
          font-weight: 700;
          font-size: 36px;
          text-align: center;
        }
        &__study {
          line-height: inherit;
          color: #2ba6cb;
          text-decoration: none;
          cursor: pointer;
          margin-top:30px;
        }
        &__menu{
          margin-top:20px;
          display: flex;
          flex-direction: column;
          /*align-items: center;*/
        }
        &__content{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
  }
  .main__conttent{
    padding-top: 98px;
    &__menu{
      width: calc(100% - 342px);
      background-color: #F8F8F8;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 37px;
      padding-bottom: 37px;
      position: fixed;
      display: flex;
      justify-content: space-between;
      align-items: center;
      top: 0;
    }
    &__goBack{
      width: 300px;
      position: relative;
      &::before{
        position: absolute;
        top: 0;
        z-index: 11;
        content: "<-";
        height: 10px;
        width: 16px;
        background-color: aqua;
        // background-image: url('./../a');
      }
    }
    &__search{
      max-width: 460px;
      width: 100% ;
      height: 43px;
      border: 1px solid #F6F6F6;
      outline: none;
      border-radius: 72px;
      padding-left: 65px;
      padding-right: 20px;
      box-sizing: border-box;
      position: relative;
      &__container{
        display: flex;
        align-items: center;
        position: relative;
        &__img{
          position: absolute;
          left: 20px;
          width: 23px;
          // height: 30px;
          z-index: 1;
        }
      }
    }
    &__select{
      width: 200px;
      border: none !important;
      box-shadow: none !important;
      background-color: #f8f8f8 !important;
      outline: none;
      // &::focus{
      //   background-color: red;
      // }
    }
  }
  .dashboard {
    width: 100%;
    padding-left: 342px;
    transition: .5s;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;


  &__drop{
      background-color: rgb(255,255,255);
      display: flex;
      flex-direction: column;
      border-radius: 50px 37px 0 50px;
      padding-left:  66px ;
      border: 16px solid white;
      max-height: 152px;
      overflow: auto;
      margin-top: 16px;
      margin-bottom: 30px;
      box-sizing: border-box;
      width: 155%;
      margin-left: -12%;
      &::-webkit-scrollbar {
          width: 0;
      }
  }
  &__Link{
      color: #4D4D4D;
      transition: .22s;
      margin-bottom: 0;
      cursor: pointer;
      margin-top: 10px;
      &:hover{
          color: #008B8B;
          font-weight: 700;
          cursor: pointer;
      }
      &:active{
          color: #374b6d;
          font-weight: 700;
          cursor: pointer;
      }
  }
  }
  .logoutBTN{
      background-color: #FFF;
      padding: 15px 75px;
      border-radius: 100px;
      cursor: pointer;
  }
</style>
