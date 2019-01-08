<template>
  <div class="header">
    <router-link to="/loginPage">
      <div class="header_menu">登陆</div>
    </router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header {
  width: 103%;
  height: 30px;
  left: 0;
  top: 0;
  color: #000;
  background-color: #c3bd5c;
}
.header_menu {
  padding-right: 60px;
  padding-top: 10px;
  float: right;
  color: #fff;
  font-size: 8px;
}
</style>
