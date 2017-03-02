<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab-box">
      <ul class="tab border-1px">
        <li class="tab-item"><router-link to="/goods">商品</router-link></li>
        <li class="tab-item"><router-link to="/ratings">评价</router-link></li>
        <li class="tab-item"><router-link to="/seller">商家</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue';
export default {
  components: {
    'v-header': header
  }
};
</script>

<style lang="stylus">
 
</style>

