<template>
  <div id="app" class="container">
    <br />
    <div class="miniNav">
      <span> <router-link :to="{ path: '/' }"> Home</router-link></span> |
      <span>
        <router-link :to="{ path: '/search' }">Search </router-link>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  }
};
</script>

<style>
.miniNav {
  justify-content: center;
  display: flex;
  flex-direction: row;
}
.miniNav span {
  padding: 0 10px;
}
a {
  color: black !important;
  text-decoration: none !important;
}
a:hover {
  color: black !important;
  text-decoration: none !important;
}
</style>
