<template>
  <div class="box-content h-2/4 w-10/12 font-semibold">
    <h3 v-if="$route.params.response1 == 1">
      Já pensou que pode ter uma rotina de exercícios que se adequa a
      sua realidade e rotina? E não parar de comer as comidas que
      mais gosta, pois o problema não é o que você come, mas sim o
      QUANTO come, além de se sentir orgulhoso de seu próprio
      corpo e do caminho que percorreu até ele. Com os 5 pilares do
      STC isso é mais do que possível, o STC foi baseado em estudos
      com Doutores da Universidade de Califórnia, com métodos
      comprovados, para conhece-los é só clicar no botão abaixo.
    </h3>
    <h3 v-else-if="$route.params.response1 == 2">
      Já pensou em mudar de vida? Olhar para o espelho e ter orgulho
      de quem é? De reconhecer seu corpo nele? Ter a autoestima que
      merece e não se envergonhar de quando vai a praia ou a
      churrascos de família? Com os 5 pilares do STC isso é possível,
      ele une sua mente e seu corpo, te deixando com a mentalidade
      certa para não desistir dos exercícios, para não desistir de
      você! O STC foi baseado em estudos com Doutores da
      Universidade de Califórnia, com métodos comprovados, para
      conhecer clique no botão abaixo.
    </h3>
    <h3 v-else>
      Já pensou em ter mais disposição no seu dia a dia? Ter uma
      vida mais saudável e ampla, sem dores no joelho ou
      enxaquecas? Uma boa rotina com poucos exercícios podem
      te ajudar a mudar isso, podem te proporcionar uma vida
      mais prazerosa, cheia de saúde e ainda comendo o que
      gosta. Com os 5 pilares do STC isso é mais do que possível,
      o STC foi baseado em estudos com Doutores da
      Universidade de Califórnia, com métodos comprovados, para
      conhece-los é só clicar no botão abaixo.
    </h3>
    <div class="w-auto flex justify-end p-2">
      <a href="/StcDoAmor">
        <button
          class="animate-pulse-v2 border-2 border-black rounded-xl p-3 transition duration-200 ease-in-out transform hover:animate-none hover:border-white hover:text-white">Saiba
          Mais</button>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  /* eslint-disable */
  name: "Info",
  methods: {
    responseQuestion: (responseQuestion) => {
      alert(responseQuestion);
    }
  },
}
</script>
<style scoped>
@keyframes pulse-v2 {

  0%,
  100% {
    transform: scaleX(1.2) scaleY(1.2);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-pulse-v2 {
  animation: pulse-v2 1.5s infinite;
}</style>