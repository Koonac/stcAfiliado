<template>
  <div class="flex min-h-screen sm:h-screen w-screen justify-center items-center m-0 p-0">
    <transition name="slide-left" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
:root {
  --url-background-image: url('./assets/bg-sport1-1000.jpg');
}

@media (min-width: 640px) {
  :root {
    --url-background-image: url('./assets/bg-sport1-1000.jpg');
  }
}

@media (min-width: 1024px) {
  :root {
    --url-background-image: url('./assets/bg-sport1-2000.jpg');
  }
}

@media (min-width: 1536px) {
  :root {
    --url-background-image: url('./assets/bg-sport1-3000.jpg');
  }
}

@media (min-width: 1920px) {
  :root {
    --url-background-image: url('./assets/bg-sport1-5000.jpg');
  }
}

#app {
  background-image: var(--url-background-image);
  background-position: bottom;
  background-size: cover;
}

.slide-left-enter-active {
  transition: all 0.3s ease-out;
}

.slide-left-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
