<template>
  <div class="about">
    <transition 
      appear
      name="about"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
     >
      <h1 v-if="showTitle">About</h1>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  setup() {

     const showTitle=ref(true)
     
      const beforeEnter=()=>{
        console.log("before enter")
      }
      const enter=()=>{
        console.log(" enter")
      }
      const afterEnter=(e)=>{
        console.log("after enter")
        e.style.color="blue"
        setTimeout(() => {
          showTitle.value=false
        }, 2000);

      }

      const beforeLeave=(e)=>{
         e.style.color="pink"
        console.log('before leave');
      }

      const leave=()=>{
        console.log('leave');
       
      }
      const afterLeave=()=>{
        console.log('after leave');
      }

      return{beforeEnter,enter,afterEnter,showTitle,beforeLeave,leave,afterLeave}
  }
}
</script>

<style>
  .about {
    max-width: 600px;
    margin: 20px auto;
  }

  /* leave transition */

  .about-enter-from,.about-leave-to{
    opacity:0;
  }
  .about-enter-active,.about-leave-active{
    transition: opacity 3s ease;
  }
</style>