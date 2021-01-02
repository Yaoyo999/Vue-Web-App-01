<template>
    <div id="app">
        <router-view />
        <!-- $route 表示当前路由 表示需要展示底部导航的控制 -->
        <FooterGuide v-show="$route.meta.showFooter"/>
     
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {

    mounted () {
      // this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()
    },

    methods: {
      ...mapActions(['getAddress', 'getUserInfo'])
    },
    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
    width 100%;
    height 100%;
    background-color:#f5f5f5;
}
</style>