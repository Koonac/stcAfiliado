<template>
  <div class="box-content h-3/4 w-10/12 font-semibold">
    <div>
      <h3 class="font-sans italic tracking-widest underline font-bold text-center text-2xl md:text-4xl divide-y pb-3">
        MUDE SUA VIDA COM O NOVO SISTEMA DE TRANSFORMAÇÃO CORPORAL
      </h3>
    </div>
    <div class="sm:h-4/5 md:h-5/6 border-2 border-red-600 bg-gradient-to-r from-pink-200 to-red-100 rounded-3xl p-3 shadow-xl">
      <h3 class="font-mono text-center text-xl md:text-2xl">
        Qual seu objetivo?
      </h3>
      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-red-600">
      <div class="sm:h-4/5 text-lg shadow-gray-800 grid sm:grid-cols-3 gap-4">
        <button v-on:click="() => { responseQuestion('1') }"
          class="border-2 p-2 border-red-600 rounded-3xl transition duration-700 ease-in-out transform hover:bg-red-300 hover:-translate-y-2 hover:scale-110">
          Converter gorduras em kilos
        </button>
        <button v-on:click="() => { responseQuestion('2') }"
          class="border-2 p-2 border-red-600 rounded-3xl transition duration-700 ease-in-out transform hover:bg-red-300 hover:-translate-y-2 hover:scale-110">
          Ter o corpo que deseja
        </button>
        <button v-on:click="() => { responseQuestion('3') }"
          class="border-2 p-2 border-red-600 rounded-3xl transition duration-700 ease-in-out transform hover:bg-red-300 hover:-translate-y-2 hover:scale-110">
          Ter uma saúde/disposição melhor
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import router from '@/router';

export default {
  /* eslint-disable */
  name: "Q1",
  methods: {
    responseQuestion: (responseQuestion) => {
      router.push({ path: 'q2/' + responseQuestion })
    }
  },
}
</script>
  