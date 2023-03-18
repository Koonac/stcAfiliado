<template>
  <div class="box-content w-10/12 font-semibold">
    <h3 class="font-sans italic tracking-widest underline font-bold text-center text-2xl md:text-4xl pb-3">
      MUDE SUA VIDA COM O NOVO SISTEMA DE TRANSFORMAÇÃO CORPORAL
    </h3>
    <div class="bg-red border-2 border-red-600 rounded-3xl bg-gradient-to-r from-pink-200 to-red-100 p-5 shadow-lg text-lg shadow-gray-800 text-justify ">
      <h3 class="font-mono text-center text-xl md:text-2xl">
        Alcance o corpo que sempre sonhou e a autoestima que merece!
      </h3>
      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-red-600">
      <h3 v-if="$route.params.response1 == 1">
        Você já se perguntou por que é tão difícil manter uma rotina
        de exercícios e uma dieta saudável? Eu também já me fiz essa
        pergunta, muitas vezes. Mas então, descobri o STC, um método
        revolucionário que mudou minha vida. Com os 5 pilares do STC,
        pude finalmente encontrar uma rotina de exercícios que se
        encaixa na minha vida agitada e ainda assim me permite comer
        as comidas que eu amo. Mas o STC não é apenas sobre o que
        você come ou quanto você se exercita. É sobre mudar sua
        mentalidade e sua perspectiva sobre a saúde e o bem-estar. É
        sobre se sentir orgulhoso de quem você é e do caminho que
        percorreu para chegar lá. E eu quero te convidar a se juntar a
        mim nesta jornada de transformação. Clique em "Saiba Mais"
        agora para descobrir mais sobre o STC e como ele pode ajudar
        você a alcançar seus objetivos de saúde e bem-estar.
      </h3>
      <h3 v-else-if="$route.params.response1 == 2">
        Imagine acordar todas as manhãs sentindo-se confiante e
        orgulhoso de quem você é. Imagine olhar no espelho e
        finalmente ver a versão mais forte e saudável de si mesmo.
        Com o STC, isso não é apenas um sonho - é uma realidade
        alcançável em apenas 5 passos simples. Cada pilar do STC
        aborda aspectos fundamentais da sua saúde, desde sua
        dieta e exercícios até sua mentalidade e bem-estar
        emocional. Nós sabemos que mudar hábitos é difícil, mas
        com nosso suporte e orientação, você pode superar
        qualquer obstáculo. Não espere mais para transformar sua
        vida - clique agora para saber como o STC pode ajudá-lo a
        alcançar seus objetivos de maneira sustentável e
        duradoura
      </h3>
      <h3 v-else>
        Você já se sentiu preso em um corpo que não
        reconhece? Com dores nas articulações, enxaquecas
        constantes e uma falta de energia que impede você de
        aproveitar a vida ao máximo? Eu sei como é. Por anos,
        lutei para perder peso e melhorar minha saúde, mas
        nada parecia funcionar. Foi só quando descobri o STC
        que finalmente encontrei uma solução que funcionou.
        Com o STC, pude começar a transformar minha vida em
        apenas alguns minutos por dia. Cada exercício, cada
        movimento, foi uma oportunidade de me reconectar
        com meu corpo e minha mente, de me tornar mais
        forte, mais saudável e mais confiante. E agora, eu quero
        compartilhar essa mesma oportunidade com você. Não
        deixe que a falta de disposição e saúde te impeça de
        viver sua vida ao máximo. Com o STC, você pode
        finalmente começar a se sentir vivo novamente. Clique
        em "Saiba Mais" agora para começar sua jornada de
        transformação.
      </h3>
    </div>
    <div class="w-auto flex justify-end p-5">
      <router-link :to="{ name: 'StcDoAmor' }">
        <button
          class="animate-pulse-v2 border-2 border-red-600 rounded-xl bg-gradient-to-r from-pink-200 to-red-100 p-3 tracking-wide font-bold shadow-xl transition duration-200 ease-in-out hover:bg-none hover:-translate-y-2 hover:-translate-x-2 ">
          Saiba Mais
        </button>
      </router-link>
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
}

</style>