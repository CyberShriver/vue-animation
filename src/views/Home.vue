<template>
  <div class="home">
    <transition name="toast">
       <Toast v-if="showToast" />
    </transition>
    <Todos @badValue="triggerToast" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Toast from '../components/Toast'
import Todos from '../components/Todos'

export default {
  components: { Toast, Todos },
  setup() {
    const showToast = ref(false)

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => showToast.value = false, 3000)
    }

    return { showToast, triggerToast }
  }
}
</script>

<style scoped> 
/* enter transaction */
  /* .toast-enter-from{
    opacity:0;
    transform: translateY(-60px);
  }
  .toast-enter-to{
    opacity: 1;
    transform: translateY(0px);
  } */
  .toast-enter-active{
    /* transition: all 0.2s ease; */
    animation: best 0.5s ease;
  }

/* leave */

.toast-leave-from{
  opacity: 1;
    transform: translateY(0px);
}
.toast-leave-to{
  opacity:0;
    transform: translateY(-60px);
}
.toast-leave-active{
  transition: all 0.2s ease;
}
/* key frame */
@keyframes best {
  0%{opacity:0;transform: translateY(-60px);}
  50%{opacity:1;transform: translateY(0px);}
  60%{opacity:1;transform: translateX(-8px);}
  70%{opacity:1;transform: translateX(8px);}
  80%{opacity:1;transform: translateX(-4px);}
  90%{opacity:1;transform: translateX(4px);}
  100%{opacity:1;transform: translateX(0px);}
}

</style>