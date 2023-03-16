<template>
  <div class="flex h-screen w-screen justify-center items-center m-0 p-0 bg-gradient-to-r from-pink-200 to-red-100">
    <transition name="slide-left" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.slide-left-enter-active {
  transition: all 0.3s ease-out;
}
.slide-left-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
