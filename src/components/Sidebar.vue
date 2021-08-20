<template>
    <div class="sidebar">
        <nav class="sidebar__menu">
            <h2 class="sidebar__title">Projects Name</h2>
            <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
            <router-link :to="{ name: 'Projects' }">All projects</router-link>
            <a>Project details</a>
        </nav>
        <button class="logoutBTN">Logout</button>
    </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
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
  .logoutBTN{
      background-color: #FFF;
      padding: 15px 75px;
      border-radius: 100px;
      cursor: pointer;
  }
</style>