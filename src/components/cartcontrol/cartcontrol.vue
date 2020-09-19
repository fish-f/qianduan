<template>
 <div class="cartcontrol">
   <transition name="move">
     <div v-show="food.count>0" class="cart-decrease" @click.stop.prevent='decreaseCart' >
       <span class="inner icon-remove_circle_outline"></span>
     </div>
    </transition>
     <div v-show="food.count>0" class="cart-count" >{{food.count}}</div>
     <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
 </div>
</template>
<script>
  import Vue from 'vue'
export default {
    props:{
        food:{
            type:Object
        }
    },
    
    methods:{
      addCart(event){
        if(!event._constructed){
          return
        }
        if(!this.food.count){
          Vue.set(this.food,'count',1)
        }else{
          this.food.count++
        }
        this.$emit('add',event.target)
      },
      decreaseCart(event){
        console.log('fff')
        if(!event._constructed){
          return
        }
        if(this.food.count){
          this.food.count--
        }
      }
    }
}
</script>
<style lang='stylus'>

.cartcontrol
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px
    transition all 0.4s linear
    &.move-enter, &.move-leave-to
      opacity 0
      transform translate3d(24px,0,0)
      .inner 
        display inline-block
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220)
        transform rotate(180deg)
        transition all 0.4s linear
    &.move-enter-to, &.move-leave
      opacity 1
      transform translate3d(0,0,0)
      .inner 
        display inline-block
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220)
        transition all 0.4s linear
        transform rotate(0)
    &.move-enter-active, &.move-leave-active
      transition all 0.4s linear
    .inner
      line-height 24px
      font-size 24px
      color rgb(0,160,220)
      
  .cart-count
    display inline-block
    vertical-align top
    padding-top 6px
    width 12px
    text-align center
    line-height 24px
    font-size 10px
    color rgb(147,153,159)
  .cart-add
    display inline-block
    line-height 24px
    font-size 24px
    color rgb(0,160,220)
    padding 6px

</style>