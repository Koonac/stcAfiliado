<template>
  <div class="box-content h-3/4 w-10/12 font-semibold">
    <h3 class="font-mono text-center text-xl md:text-2xl pb-3">
      Quantos dos métodos ou academias que
      você tentou foram capazes de ajudá-lo a
      alcançar e manter o peso desejado?
    </h3>
    <div class="h-2/4 bg-red border-2 border-red-600 rounded-3xl p-3 shadow-md shadow-gray-800 grid sm:grid-cols-2 gap-4">
      <button v-on:click="() => { responseQuestion($route.params.response1, $route.params.response2, '1') }"
        class="border-2 p-2 border-red-600 rounded-3xl transition duration-700 ease-in-out transform hover:bg-red-300 hover:-translate-y-2 hover:scale-110">
        Poucos
      </button>
      <button v-on:click="() => { responseQuestion($route.params.response1, $route.params.response2, '2') }"
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
  name: "Q3",
  methods: {
    responseQuestion: (response1, response2, responseQuestion) => {
      router.push({ path: '/info/' + response1 + '/' + response2 + '/' + responseQuestion })
    }
  },
}
</script>
  