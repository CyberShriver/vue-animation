<template>
  <div class="about">
    <transition 
      appear
      @before-enter="beforeEnter"
      @enter="enter"
     >
      <h1>About</h1>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import gsap from 'gsap'

export default {
  setup() {

     
      const beforeEnter=(e)=>{
        console.log("before enter")
        e.style.transform='translateY(-60px)'
        e.style.opacity=0;
      }
      const enter=(e,done)=>{
        console.log(" enter")
        gsap.to(e,{
          duration:3,
          y:0,
          opacity:1,
          ease:'bounce.out',
          onComplete:done
        })
        
      }
      const afterEnter=(e)=>{
        console.log("after enter")
        // gsap.to(e,{
        //   color:blue
        // })

      }

      return{beforeEnter,enter,afterEnter}
  }
}
</script>

<style>
  .about {
    max-width: 600px;
    margin: 20px auto;
  }

  /* leave transition */

  /* .about-enter-from,.about-leave-to{
    opacity:0;
  }
  .about-enter-active,.about-leave-active{
    transition: opacity 3s ease;
  } */
</style>