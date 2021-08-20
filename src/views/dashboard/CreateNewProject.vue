<template>
  <Dashboard>
    <!-- <div class="dashboardContent">
      <h2>CreateNewProject</h2>
    </div> -->
  </Dashboard>
</template>

<script>
import Dashboard from "./Dashboard.vue";

export default {
  name: 'DashboardDefault',
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
}
</script>
<style lang="scss" scoped >

</style>
