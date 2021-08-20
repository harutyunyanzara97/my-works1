<template>
  <Dashboard>

    <div class="dashboardContent">
      <section class="main__conttent dashboard">
        <div class="main__conttent__menu">
          <!--        <a href='/' class="main__conttent__menu__goBack">Back to Landing page</a>-->
          <div class="main__conttent__search__container">
            <img src="@/assets/search.png" class="main__conttent__search__container__img"/>
            <input class="main__conttent__search" placeholder="Search for a project"  v-model.trim="search" @keyup="searchProject" />
          </div>
<!--          <v-select :options="['Once a Day','Once a Week']" label="title" class="style-chooser" v-model="selectedRuns">-->

<!--              {{ option }}-->
<!--          </v-select>-->
         <p v-on:click="isOpen = !isOpen" style="cursor: pointer">{{user_email}}</p>
          <select v-if="isOpen" v-model="selected" class="main__conttent__select" id="selectUSer" @change="changedLabel" value="{{user_email}}">

            <option v-for="option in items"
                    :key="option.value">
              {{ option.text }}
            </option>
<!--            <option class="main__conttent__option">{{user_email}}</option>-->
<!--            <option  class="main__conttent__option">User details</option>-->
<!--            <option  class="main__conttent__option" @click.prevent="logout">Logout</option>-->

          </select>

        </div>
      </section>
      <p>All projects</p>
      <router-link :to="{ name: 'Create',params: {id:user_id} }" class="dashboardBTN">Create new project</router-link>
    </div>
    <div class="project__matrix__container">
      <div class="project__matrix">
        <div class="project__matrix__navigation">
          <p class="project__matrix__navigation__Id">#</p>
          <p class="project__matrix__navigation__box">Code</p>
          <p class="project__matrix__navigation__Name">Project name</p>
          <p class="project__matrix__navigation__Name">Client</p>
          <p class="project__matrix__navigation__box">Created</p>
          <p class="project__matrix__navigation__box">Modified</p>
          <p class="project__matrix__navigation__box">Details</p>
          <p class="project__matrix__navigation__box">Delete</p>
        </div>
        <ol reversed class="project__matrix__base" id="dsf">
        <div v-for="i in info" :key="i" class="project__matrix__item" >
            <li class="project__matrix__item__Id" @click="singleProject(i.id)"></li>
              <p @click="singleProject(i.id)" class="project__matrix__item__box" >{{i.project_code}}</p>
              <p class="project__matrix__item__Name" @click="singleProject(i.id)">{{i.project_name}}</p>
              <p class="project__matrix__item__Name" @click="singleProject(i.id)">{{i.project_client}}</p>
              <p class="project__matrix__item__date" @click="singleProject(i.id)"><span>{{i.created.substring(0,10)}}</span><span>{{i.created.substring(11,19)}}</span></p>
              <p class="project__matrix__item__date" @click="singleProject(i.id)"><span>{{i.modified.substring(0,10)}}</span><span>{{i.modified.substring(11,19)}}</span></p>
              <p class="project__matrix__item__box" @click="singleProject(i.id)"><img src='@/assets/iconmonstr-eye-thin-24.png'  class="project__matrix__item__img"/></p>

              <p class="project__matrix__item__box" id="cancel_action"><img src='@/assets/delete.png' v-on:click="isToggled = !isToggled" class="project__matrix__item__img"/></p>


            <div class="confirm_popup" v-if="isToggled">
              <h2 class="confirm_popup__title">Are you sure you want to delete this project?</h2>
              <div  class="confirm_popup__block">
                <button class="confirm_popup__cancel"  @click="onCancel">Cancel</button>
                <button class="confirm_popup__ok" @click="acceptDel(i.id)">OK</button>
              </div>
            </div>

    </div>
        </ol>
        <!--            <div class="project__matrix__item">-->
        <!--              <p class="project__matrix__item__Id">2</p>-->
        <!--              <p class="project__matrix__item__box">&#45;&#45;/&#45;&#45;/&#45;&#45;</p>-->
        <!--              <p class="project__matrix__item__Name">&#45;&#45;/&#45;&#45;/&#45;&#45;</p>-->
        <!--              <p class="project__matrix__item__Name">&#45;&#45;/&#45;&#45;/&#45;&#45;</p>-->
        <!--              <p class="project__matrix__item__box">&#45;&#45;/&#45;&#45;/&#45;&#45;</p>-->
        <!--              <p class="project__matrix__item__box">&#45;&#45;/&#45;&#45;/&#45;&#45;</p>-->
        <!--              <p class="project__matrix__item__box"><img src='@/assets/delete.png' class="project__matrix__item__img"/></p>-->
        <!--            </div>-->
        <!--            <div class="project__matrix__item">-->
        <!--              <p class="project__matrix__item__Id">3</p>-->
        <!--              <p class="project__matrix__item__box">&#45;&#45;/&#45;&#45;/&#45;&#45;</p>-->
        <!--              <p class="project__matrix__item__Name">&#45;&#45;/&#45;&#45;/&#45;&#45;</p>-->
        <!--              <p class="project__matrix__item__Name">&#45;&#45;/&#45;&#45;/&#45;&#45;</p>-->
        <!--              <p class="project__matrix__item__box">&#45;&#45;/&#45;&#45;/&#45;&#45;</p>-->
        <!--              <p class="project__matrix__item__box">&#45;&#45;/&#45;&#45;/&#45;&#45;</p>-->
        <!--              <p class="project__matrix__item__box"><img src='@/assets/delete.png' class="project__matrix__item__img"/></p>-->
        <!--            </div>-->
        <!--        </div>-->
      </div>
    </div>
  </Dashboard>
</template>

<script>
  // import Dashboard from "./Dashboard.vue";
  import axios from "axios";
  import Swal from "sweetalert2";

  export default {
    name: 'DashboardDefoult',
    // components: {
    //   Dashboard
    // },
    // methods: {
    //   logout: function () {
    //     this.$store.dispatch('logout')
    //             .then(() => {
    //               this.$router.push('/')
    //             })
    //   },
    //
    // },
    data() {
      return {
        info: [],
        project:"",
        projects:[],
        isVisible:false,
        isToggled:false,
        show:true,
        search:"",
        selected:"",
        isOpen:false,
        selectedRuns:"",
        user_id:localStorage.getItem('user_id'),
        user_email:localStorage.getItem('user_email'),
        items:[
          {text:this.user_email,value: this.user_email},
          {text:'User details',value:'User details'},
          {text:'Logout',value:'Logout'}
        ],


      }

    },

    mounted() {
      axios
              .get('https://pvbatt.herokuapp.com/api/v1/project/projects-list/' + this.user_id + '/')
              .then(response => {
                this.info = response.data.results
              })
      this.acceptDel()
      this.singleProject()
      // this.cancelDel()
      // this.getStudies();

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
      userDetails:function () {
                  this.$router.push({name: 'Details',params:{id:this.user_id}});
      },
      acceptDel(id) {
        axios.delete('https://pvbatt.herokuapp.com/api/v1/project-delete/' + id + '/')
                .then((res) => {
                  this.$router.push({name: 'Projects'});
                  Swal.fire('Successfully deleted',res)
                  this.isToggled = false;
                });
      },
      onCancel(){
        this.isToggled = false;
      },
      changedLabel() {
        if(this.selected === "Logout") {
          this.logout()
        }
        else {
          this.userDetails();
        }
        },

      searchProject() {
        axios.get('https://pvbatt.herokuapp.com/api/v1/projects-search/' + this.user_id + '/' + this.search + '/')
                .then((response) => {
                  console.log(response);
                  // if (this.search) {
                  //   $('.project__matrix').empty().append(``)
                  // }
                    // this.projects = response.data.results.filter(project =>
                    //         project.name.toLowerCase().includes(this.search.toLowerCase())
                    // );
                  // } else {
                  //   this.projects = response.data.results;
                  // }

                })
      },
      // cancelDel() {
      //   document.getElementById('cancel_action').style.display="none";
      // },

      singleProject(id) {
        axios.get('https://pvbatt.herokuapp.com/api/v1/project-edit/' + id + '/')
                .then((res) => {
                  this.project=res.data.project_name;
                  this.$router.push({name: 'Dashboard',params:{id:id,project:this.project}});
                });

      }

    }
  }
</script>
<style lang="scss" scoped >
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  .dashboardContent{
    max-width: 1200px;
    margin:0 auto;
    padding-bottom: 90px;
    padding-left: 20px;
    padding-top: 63px;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    justify-content: space-between;
    margin-top: 75px;
  }
  .dashboardBTN{
    background-color: #008B8B;
    color: #FFF;
    padding: 15px 69px;
    font-family: 'Montserrat', sans-serif;
    border-radius: 9px;
    &:hover{
      color: #FFF;
    }
  }
  .project__matrix__container{
    // max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    // border: 1px solid red;


  }
  .project__matrix{
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    &__navigation{
      display: flex;
      align-items: center;
      background-color: #F2F2F2;
      border-bottom: 4px solid  #008B8B;
      font-family: 'Montserrat', sans-serif;
      &>p:not(:nth-last-child(1)){
        border-right: 1px solid #FDFDFD;
      }
      &__box {
        width: 20%;
        padding-top: 18px;
        padding-bottom: 18px;
        // border: 1px solid red;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &__Name {
        width: 30%;
        padding-top: 18px;
        padding-bottom: 18px;
        // border: 1px solid red;
        margin-bottom: 0;
        display: flex;
        font-family: 'Montserrat', sans-serif;
        justify-content: center;
        align-items: center;
      }
      &__Id{
        width: 80px;
        padding-top: 18px;
        padding-bottom: 18px;
        // border: 1px solid red;
        margin-bottom: 0;
        /*display: flex;*/
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        align-items: center;
      }
    }
    &__base{
      display: flex;
      flex-direction: column;
      font-family: 'Montserrat', sans-serif;
      // border: 1px solid red;
    }
    &__item{
      display: flex;
      align-items: center;
      background-color: #FDFDFD;
      font-family: 'Montserrat', sans-serif;
      border-bottom: 1px solid  #F2F2F2;
      &>p:not(:nth-last-child(1)){
        border-right: 1px solid #F2F2F2;
        font-family: 'Montserrat', sans-serif;
      }
      &__box {
        width: 20%;
        padding-top: 18px;
        padding-bottom: 18px;
        // border: 1px solid red;
        margin-bottom: 0;
        display: flex;
        font-family: 'Montserrat', sans-serif;
        justify-content: center;
        align-items: center;
      }
      &__date{
        width: 20%;
        padding-top: 18px;
        padding-bottom: 18px;
        // border: 1px solid red;
        margin-bottom: 0;
        display: flex;
        font-family: 'Montserrat', sans-serif;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
      &__Name {
        width: 30%;
        padding-top: 18px;
        padding-bottom: 18px;
        // border: 1px solid red;
        margin-bottom: 0;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &__Id{
        width: 80px;
        padding-top: 18px;
        padding-bottom: 18px;
        // border: 1px solid red;
        margin-bottom: 0;
        font-family: 'Montserrat', sans-serif;
        /*display: flex;*/
        justify-content: center;
        align-items: center;
      }
      &__img{
        cursor: pointer;
        padding-left: 12px;
        padding-right: 12px;
      }
      &:hover{
        background: rgba(237, 225, 225, 0.99);
      }

    }
    .confirm_popup{
      padding: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      font-family: 'Montserrat', sans-serif;
      transform: translate(-50%, -50%);
      z-index: 10;
      border-radius: 8px;
      background-color: #e9e9e9;
      -webkit-backdrop-filter: blur(4px);
      backdrop-filter: blur(1px);
      box-shadow: 0 0 20px 10px #6d6c6c29;

      &__title{
        color: #008B8B;
        font-size: 26px;
        text-align: center;
        max-width: 500px;
        font-family: 'Montserrat', sans-serif;
      }
      &__block{
        display: flex;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
      }
      &__ok{
        background-color: #0a0a0a;
        color: rgb(255,255,255);
        width: 160px;
        height: 40px;
        font-family: 'Montserrat', sans-serif;
        border-radius: 8px;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: 0 0 10px 5px #00000022;
        cursor: pointer;
      }
      &__cancel{
        background-color: rgb(255,255,255);
        color: black;
        width: 160px;
        height: 40px;
        font-family: 'Montserrat', sans-serif;
        border-radius: 8px;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: 0 0 10px 5px #00000022;
        cursor: pointer;
      }
    }
  }
  .main__conttent{
    padding-top: 98px;
    &__menu{
      width: calc(100% - 667px);
      background-color: #F8F8F8;
      padding-left: 20px;
      padding-right: 20px;
      font-family: 'Montserrat', sans-serif;
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
      font-family: 'Montserrat', sans-serif;
      position: relative;
      &::before{
        position: absolute;
        top: 0;
        z-index: 11;
        content: "<-";
        font-family: 'Montserrat', sans-serif;
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
      font-family: 'Montserrat', sans-serif;
      padding-right: 20px;
      box-sizing: border-box;
      position: relative;
      &__container{
        display: flex;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
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
      font-family: 'Montserrat', sans-serif;
      box-shadow: none !important;
      background-color: #f8f8f8 !important;
      outline: none;
      // &::focus{
      //   background-color: red;
      // }
    }
    &__option{
    font-family: 'Montserrat', sans-serif;
  }
  }
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: #dfe5fb;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
  }
</style>
