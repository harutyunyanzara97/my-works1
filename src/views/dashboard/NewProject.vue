<template>
  <Dashboard>
    <div class="dashboardContent">
        <!-- <router-link :to="{ name: 'Features' }" class="dashboardBTN">Create new project</router-link> -->
        <div class="NewProject">
            <h2 class="NewProject__title">New Project</h2>
            <span class="NewProject__line"/>
            <p class="NewProject__text">Please complete the info the project</p>
        </div>
<!--        <router-link :to="{ name: 'Create' }" class="dashboardBTN">Create new project</router-link>-->
    </div>
    <!-- <div>
    </div> -->
    <div class="dashboardContent">
        <form class="NewProjectForm" @submit.prevent="create_project">
            <div v-if="errors.length">
                <p style="color:red;">{{ errors[0] }}</p>
            </div>
            <label className='NewProjectForm__item'>
                <span>Project code</span>
                <input  required  className='NewProjectForm__item__input'
                v-model="project_code"/>
            </label>
            <label className='NewProjectForm__item'>
                <span>Project name</span>
                <input  required  className='NewProjectForm__item__input'
                v-model="project_name"/>
            </label>
            <label className='NewProjectForm__item'>
                <span>Client</span>
                <input  required  className='NewProjectForm__item__input'
                 v-model="project_client"/>
            </label>
            <label className='NewProjectForm__item'>
                <span>Description</span>
                <textarea  className='NewProjectForm__item__TextArea'
                  v-model="project_description"></textarea>
            </label>
            <button type="submit" class="NewProjectForm__send">Create</button>
        </form>
    </div>
  </Dashboard>
</template>

<script>
// import Dashboard from "./Dashboard.vue";
import {mapActions} from "vuex";

export default {
  name: 'DashboardDefoult',
  // components: {
  //   Dashboard
  // },
    data() {
        return {
            errors:[],
            project_code: "",
            project_name: "",
            project_description: "",
            project_client:"",
            created_by:localStorage.getItem('user_id'),
            reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        };
    },
    methods: {
        ...mapActions({
            create: "create",
        }),
        create: function () {
            let data = {
                project_code: this.project_code,
                project_name: this.project_name,
                project_description: this.project_description,
                project_client: this.project_client,
                created_by:this.created_by
            }
            this.$store.dispatch('create', data)
                .then(() => this.$router.push('/dashboard/projects'))
                .catch(err => console.log(err))
        },
        create_project: function () {
            console.log(this.project_name, this.project_description, this.project_code, this.project_client,this.$route.params.id,this.created_by)
            this.errors = []
            if (!this.project_name) this.errors.push("Name is required.");
            if (!this.project_description) this.errors.push("Description is  required.");
            if (!this.project_code) this.errors.push("Code is required.");
            if(!this.project_client) this.errors.push("Client is required.");

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
        padding-bottom: 90px;
        padding-left: 20px;
        margin-left:350px;
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
    .NewProject{
        // margin-bottom: 45px;
        padding-left: 20px;
        margin-left: 150px;
        padding-right: 20px;
        margin-top:90px;
        box-sizing: border-box;
    }
    .NewProject__title{
        font-size: 20px;
        color: #008B8B;
        font-weight: 700;
    }
    .NewProject__line{
        background-color: #C4C4C4;
        width: 250px;
        height: 3px;
        border-radius: 3px;
        display: block;
        margin-bottom: 11px;
    }
    .NewProject__text{

    }
    .NewProjectForm {
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
        // &__item__input{
        //     width: 100%;
        //         height: 45px;
        //         margin-bottom: 8px;
        //         font-family: Helvetica, Arial, sans-serif;
        //         font-size: 18px;
        //         padding: 0 15px;
        //         box-sizing: border-box;
        //         border: 1.2px solid #B4BEC8;
        //         outline: none;
        // }
    }
</style>
