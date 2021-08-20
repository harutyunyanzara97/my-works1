<template>
    <Dashboard>
        <div class="dashboardContent">
            <p>All projects</p>
<!--            <router-link :to="{ name: 'Budgets' }" class="dashboardBTN">Create new budget</router-link>-->
        </div>
        <div class="project__matrix__container">
            <div class="project__matrix">
                <div class="project__matrix__navigation">
                    <p class="project__matrix__navigation__studi">General</p>
                    <p class="project__matrix__navigation__studi">Demand</p>
                    <p class="project__matrix__navigation__studi">PV</p>
                    <p class="project__matrix__navigation__studi">Wind</p>
                    <p class="project__matrix__navigation__studi">Battery</p>
                    <p class="project__matrix__navigation__studi">Diesel</p>
                    <p class="project__matrix__navigation__studi">Nat gas</p>
                    <p class="project__matrix__navigation__studi">Hydrogen</p>
                    <p class="project__matrix__navigation__studi">Biomass</p>
                    <p class="project__matrix__navigation__studi">Hydro</p>
                    <p class="project__matrix__navigation__studi">Result</p>
                </div>

                <div v-for="i in info" :key="i" class="project__matrix__base">
                    <div  class="project__matrix__item">
                        <p class="project__matrix__item__studi">{{i.id}}</p>
                        <p class="project__matrix__item__studi">{{i.project_code}}</p>
                        <p class="project__matrix__item__studi">{{i.project_name}}</p>
                        <p class="project__matrix__item__studi">{{i.project_client}}</p>
                        <p class="project__matrix__item__studi"><span>{{i.created.substring(0,10)}}</span><span>{{i.created.substring(11,19)}}</span></p>
                        <p class="project__matrix__item__studi"><span>{{i.modified.substring(0,10)}}</span><span>{{i.modified.substring(11,19)}}</span></p>
                        <p class="project__matrix__item__studi"><img src='@/assets/delete.png' class="project__matrix__item__img"/></p>
                        <p class="project__matrix__item__studi">{{i.id}}</p>
                        <p class="project__matrix__item__studi">{{i.project_code}}</p>
                        <p class="project__matrix__item__studi">{{i.project_name}}</p>
                        <p class="project__matrix__item__studi">{{i.project_client}}</p>
                    </div>
                </div>
            </div>
        </div>
    </Dashboard>
</template>

<script>
    import Dashboard from "./Dashboard.vue";
    import axios from "axios";

    export default {
        name: "studie",
        components: {
            Dashboard
        },
        methods: {
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/')
                    })
            }
        },
        data() {
            return {
                info :[],
                id:this.$route.params.id
            }
        },
        mounted(){
            axios.get('https://pvbatt.herokuapp.com/api/v1/budgets-list/' + this.id + '/')
                .then((res) => {
                    this.info = res.data;
                    console.log(this.info);
                });
            // console.log(this.info);
        },


    }
</script>
<style lang="scss" scoped >
    .dashboardContent{
        max-width: 1200px;
        padding-bottom: 90px;
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
        &:hover{
            color: #FFF;
        }
    }
    .project__matrix__container{
        // max-width: 1200px;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        // border: 1px solid red;


    }
    .project__matrix {
        max-width: 1200px;
        box-sizing: border-box;

        &__navigation {
            display: flex;
            align-items: center;
            background-color: #F2F2F2;
            border-bottom: 4px solid #008B8B;
            &__studi{
                width: 100%;
                text-align: center;
                background: #fff3d9;
            }

            &__studi:nth-child(2n+2)  {
                border: 1px solid #DDD;
                background: #DDDDDD;

            }
        }
        &__item{
            display: flex;
            align-items: center;
            background-color: #FDFDFD;
            border-bottom: 1px solid  #F2F2F2;
            &__studi{
                width: 100%;
                text-align: center;
            }
            &>p:not(:nth-last-child(1)) {
                border-right: 1px solid #F2F2F2;
            }
        }
    }
</style>
