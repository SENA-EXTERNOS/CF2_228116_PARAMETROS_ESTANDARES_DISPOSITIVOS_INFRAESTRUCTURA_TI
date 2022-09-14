<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Titulo de primer nivel
  
      //- .titulo-segundo debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.1  Componentes y tipos de indemnizaciones

  
      h3.titulo-tercero.mt-5 Tipos de indemnizaciones

  
      h4.titulo-cuarto Título de cuarto nivel, 18pt


      //- .titulo-quinto debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-quinto.color-acento-contenido
      h4 Título de quinto nivel, 18pt

      p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

      //- .titulo-sexto debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-sexto.color-acento-contenido
      h5 Título de sexto nivel, 16pt
      span subtitulo

      p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
