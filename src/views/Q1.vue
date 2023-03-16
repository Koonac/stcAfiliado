<template>
    <div class="box-content h-3/4 w-10/12 font-semibold">
      <h3 class="font-mono text-center text-2xl md:text-4xl pb-3">
        Qual seu objetivo ?
      </h3>
      <div
        class="h-2/4 bg-red border-2 border-red-600 rounded-3xl p-3 shadow-md shadow-gray-800 grid sm:grid-cols-3 gap-4">
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
      <!-- <router-link to="/StcDoAmorAfiliado" class="p-4 border rouded rounded-3xl bg-amber-400 m-10">Afiliado</router-link> -->
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
  