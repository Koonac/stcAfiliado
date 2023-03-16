<template>
  <div class="box-content h-3/4 w-10/12 font-semibold">
    <h3 class="font-mono text-center text-2xl md:text-4xl pb-3">
      Quantos métodos ou academias já tentou?
    </h3>
    <div class="h-2/4 bg-red border-2 border-red-600 rounded-3xl p-3 shadow-md shadow-gray-800 grid sm:grid-cols-3 gap-4">
      <button v-on:click="() => { responseQuestion($route.params.response1, '1') }"
        class="border-2 p-2 border-red-600 rounded-3xl transition duration-700 ease-in-out transform hover:bg-red-300 hover:-translate-y-2 hover:scale-110">
        Um ou dois
      </button>
      <button v-on:click="() => { responseQuestion($route.params.response1, '2') }"
        class="border-2 p-2 border-red-600 rounded-3xl transition duration-700 ease-in-out transform hover:bg-red-300 hover:-translate-y-2 hover:scale-110">
        Mais de dois e menos de 5
      </button>
      <button v-on:click="() => { responseQuestion($route.params.response1, '3') }"
        class="border-2 p-2 border-red-600 rounded-3xl transition duration-700 ease-in-out transform hover:bg-red-300 hover:-translate-y-2 hover:scale-110">
        Nenhum
      </button>
    </div>
  </div>
</template>
<script>
import router from '@/router';

export default {
  /* eslint-disable */
  name: "Q2",
  methods: {
    responseQuestion: (response1, responseQuestion) => {
      router.push({ path: '/q3/' + response1 + '/' + responseQuestion })
    }
  },
}
</script>
  