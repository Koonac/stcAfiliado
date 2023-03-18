<template>
  <div class="box-content h-3/4 w-10/12 font-semibold">
    <h3 class="font-sans italic tracking-widest underline font-bold text-center text-2xl md:text-4xl pb-3">
      MUDE SUA VIDA COM O NOVO SISTEMA DE TRANSFORMAÇÃO CORPORAL
    </h3>
    <div class="sm:h-4/5 md:h-5/6 border-2 border-red-600 bg-gradient-to-r from-pink-200 to-red-100 rounded-3xl p-3 shadow-xl">
      <h3 class="font-mono text-center text-xl md:text-2xl">
        Quantos dos métodos ou academias que
        você tentou foram capazes de ajudá-lo a
        alcançar e manter o peso desejado?
      </h3>
      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-red-600">
      <div class="sm:h-4/5 text-lg grid sm:grid-cols-2 gap-4 md:pb-5">
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
  