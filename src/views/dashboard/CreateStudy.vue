<template>
  <Dashboard>
    <div class="container">
      <h2>Create Study</h2>
    </div>
  </Dashboard>
</template>

<script>
import Dashboard from "./Dashboard.vue";
import {mapActions} from "vuex";

export default {
  name: 'DashboardDefoult',
  components: {
    Dashboard
  },
  data() {
    return {
      errors: [],
      name: "",
    };
  },
  methods: {
    ...mapActions({
      studies: "studies",
    }),

  }
}
</script>
<style lang="scss" scoped >
  .sidebar {
        height: 100vh;
        left: 0;
        top: 0;
        right: 0;
        z-index: 99;
        padding-top: 135px;
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
        &__menu{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
  }
  .main__conttent{
    padding-top: 135px;
    &__menu{
      width: 100%;
      background-color: #F8F8F8;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 37px;
      padding-bottom: 37px;
      position: fixed;
      top: 0;
    }
  }
  .dashboard {
     padding-left: 342px;
     width: 100%;
    //  padding-top: 0px !important;
     transition: .5s;
     position: relative;
     min-height: 100vh;
     padding-bottom: 90px;
  }
  .logoutBTN{
      background-color: #FFF;
      padding: 15px 75px;
      border-radius: 100px;
      cursor: pointer;
  }
</style>
