<template>
  <div class="header">
    <div class="content-wrapper">
      <!-- 头像 -->
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <!-- 头像 结束 -->
      <!-- 主要信息 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
        <div class="support-count" v-if="seller.supports">
          <span class="count">{{ seller.supports.length }}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <!-- 主要信息 结束 -->
    <!-- 公告 -->
    <div class="bulletin-wrapper">
      <span class="title"></span>
      <span class="text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 公告 结束 -->
  </div>
</template>
<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      });
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
.header
  color: #fff
  background-color: #999
  .content-wrapper
    position: relative
    padding: 24px 12px 18px 24px
    font-size: 0
    .avatar
      display: inline-block
      vertical-align: top
      img
        border-radius: 2px
    .content
      display: inline-block
      margin-left: 14px
      font-size: 14px
      vertical-align: top
      .title
        margin: 2px 0 8px 0
        .brand
          display: inline-block
          width: 30px
          height: 18px
          vertical-align: top
          bg-img("brand")
          background-size: 30px 18px
          background-repeat: no-repeat
        .name
          margin-left: 6px
          font-size: 16px
          line-height: 18px
          font-weight: bold
      .description
        margin-top: 8px
        margin-bottom: 10px
      .support
        .icon
          display: inline-block
          width: 12px
          height: 12px
          margin-right: 4px
          vertical-align: middle
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-img("decrease_1")
          &.discount
            bg-img("discount_1")
          &.special
            bg-img("special_1")
          &.invoice
            bg-img("invoice_1")
          &.guarantee
            bg-img("guarantee_1")
        .text
          font-size: 10px
          line-height: 12px
    .support-count
      position: absolute
      right: 12px
      bottom: 14px
      padding: 0 8px
      height: 24px
      font-size: 0
      font-weight: 200
      line-height: 24px
      color: rgb(255,255,255)
      text-align: center
      background-color: rgba(0,0,0,.2)
      border-radius: 14px
      .count
        font-size: 10px
        vertical-align: top
      .icon-keyboard_arrow_right
        margin-left: 2px
        font-size: 10px
        line-height: 24px
        vertical-align: top
  .bulletin-wrapper
    height: 28px
    padding: 0 12px
    color: rgb(255,255,255)
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

</style>
