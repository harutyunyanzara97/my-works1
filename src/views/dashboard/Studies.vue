<template>
        <Dashboard>
            <div class="dashboardContent">
                <!-- <router-link :to="{ name: 'Features' }" class="dashboardBTN">Create new project</router-link> -->
                <div class="NewProject">
                    <h2 class="NewProject__title">Studies</h2>
                    <span class="NewProject__line"/>
                </div>
            </div>
                <div class="dashboardContent">
                    <form class="NewProjectForm" @submit.prevent="create_studies">
                        <div v-if="errors.length">
                            <p style="color:red;">{{ errors[0] }}</p>
                        </div>
                        <label className='NewProjectForm__item'>
                            <span>Study name</span>
                            <input  required  className='NewProjectForm__item__input'
                                    v-model="study_name"/>
                        </label>
                        <button type="submit" class="NewProjectForm__send">Create</button>

                    </form>
                 </div>
        </Dashboard>
</template>

<script>
    import Dashboard from "./Dashboard.vue";
    import {mapActions} from "vuex";

    export default {
        name: 'DashboardDefault',
        components: {
            Dashboard
        },
        data() {
            return {
                errors: [],
                project: this.$route.params.id,
                created_by:localStorage.getItem('user_id'),
                study_name:""
            };
        },
        methods: {
            ...mapActions({
                studies: "studies",
            }),

        studies: function () {
            let data = {
                project: this.project,
                created_by:this.created_by,
                study_name:this.study_name
            }
            this.$store.dispatch('studies', data)
                .then(() => this.$router.push('/dashboard/studies'))
                .catch(err => console.log(err))
        },
        create_studies: function () {
            this.errors = []
            if (!this.study_name) this.errors.push("Study name is required.");
            if (!this.errors.length) {
                this.studies()
            }
        }
    }
    }
</script>
<style lang="scss" scoped >
    .dashboardContent{
        max-width: 1200px;
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
    .NewProject{
        // margin-bottom: 45px;
        padding-left: 20px;
        padding-right: 20px;
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
            margin-top:20px;
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
