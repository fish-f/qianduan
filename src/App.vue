/* eslint-disable */
<template>
  <div>
    <v-header :seller=seller></v-header>
    <div class="tab">
      <router-link class="tab-item" to='/goods'>商品</router-link>
      <router-link class="tab-item" to='/ratings'>评论</router-link>
      <router-link class="tab-item" to='/seller'>商家</router-link>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import {urlParse} from './common/js/util.js'
import header from './components/header/header.vue'
const ERR_OK=0;
export default {
    name:'app',
    data() {
      return {
        seller:{
          id:(()=>{
            let queryParam=urlParse()
            console.log(queryParam.id)
            return queryParam.id
          })()
        }
      }
    },
    created(){
       this.$http.get('/api/seller?id='+this.seller.id).then((response)=>{
        response=response.body;
        if(response.errno===ERR_OK){
          this.seller=Object.assign({},this.seller,response.data)
        }
       });
    },
    components:{
      "v-header":header
     
}
}
</script>
<style lang="stylus">
@import './common/stylus/mixin.styl'

  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      text-align center
      flex 1
      font-size 14px
      color rgb(77,85,93)
      &.active
        color rgb(240,20,20)
</style>
