<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
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

const ERR_OK = 0;

export default {
  data () {
    return {
      seller: {}
    };
  },
  mounted () {
    this.$nextTick(function () {
      this.$http.get('/api/seller').then(response => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
        }
      }, response => {

      });
    });
  },
  components: {
    'v-header': header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"

#app
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex:1
      text-align: center
      & > a
        display: block
        color: rgb(77,85,93)
        font-size: 14px
        &.sell-active
          color: rgb(240,20,20)
</style>

