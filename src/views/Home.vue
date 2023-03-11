<template>
  <div class="flex h-screen w-screen justify-center items-center m-0 p-0 bg-gradient-to-r from-pink-200 to-red-100">
      <Question />
    </div>
</template>
<script>
import Question from './../components/Question.vue';

export default {
  /* eslint-disable */
  name: "Home",
  components: {
    Question
  }
}
</script>
  