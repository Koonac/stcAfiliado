<template>
  <div class="box-content w-10/12 font-semibold">
    <h3 class="font-sans italic tracking-widest underline font-bold text-center text-2xl md:text-4xl pb-3">
      MUDE SUA VIDA COM O NOVO SISTEMA DE TRANSFORMAÇÃO CORPORAL
    </h3>
    <div
      class="bg-gradient-to-r from-pink-200 to-red-100 border-2 border-red-600 rounded-3xl p-5 shadow-lg text-xl shadow-gray-800 text-justify ">
      <h3>
        Olá! Seja bem-vindo ao nosso quiz introdutório de emagrecimento saudável e equilíbrio mental. Este quiz foi
        cuidadosamente criado para ajudá-lo a identificar seus objetivos pessoais de saúde e bem-estar, e a encontrar o
        caminho certo para alcançá-los. Sabemos que a jornada para um corpo saudável e uma mente equilibrada pode parecer
        difícil às vezes, ou até impossível, mas estamos aqui para guiá-lo a cada passo do caminho. Não espere mais para
        tornar o seu sonho uma realidade - responda com honestidade e descubra o que podemos fazer juntos para alcança-lo.
        Basta clicar em "começar quiz" Para mudar de vida
      </h3>
      <div class="pt-5">
        <router-link :to="{ name: 'Q1' }">
          <button
            class="border-2 w-full border-red-600 rounded-xl p-3 tracking-wide font-bold shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-2xl">
            Começar Quiz
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  /* eslint-disable */
  name: "Apresentacao",
}
</script>
  