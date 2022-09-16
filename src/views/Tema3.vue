<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cadena de custodia: conceptos, usos y las tendencias del ecosistema tecnológico

    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-10.mb-lg-0
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-img-01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
           p.mb-0 Está asociado a un sistema de control y registro de todo el material utilizado como evidencia de alguna actividad que se considere delictiva. Por ejemplo, la ubicación, en caso de hacer algo incorrecto, existe la cadena de custodia que delata todas las pruebas que confirman la acción mal realizada. Existen 5 pasos principales que definen la cadena de custodia.

    h5.mt-5 Cadena de custodia: conceptos, usos y las tendencias del ecosistema tecnológico
    p.mt-5.mb-5 Está asociado a un sistema de control y registro de todo el material utilizado como evidencia de alguna actividad que se considere delictiva. Por ejemplo, la ubicación, en caso de hacer algo incorrecto, existe la cadena de custodia que delata todas las pruebas que confirman la acción mal realizada. Existen 5 pasos principales que definen la cadena de custodia. 

    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-10.mb-lg-0
        ImagenInfografica.color-primario(data-aos="fade-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-03.svg', alt='Texto que describa la imagen')

          .tarjeta.color-primario.p-3(x="9%" y="8%" numero="+").text-center      
            .h5.mb-2 Aislamiento de la escena:
            p Llimita el acceso al lugar donde ocurrió el incidente, evitando alteraciones en la evidencia a recolectar.

          .tarjeta.color-primario.p-3(x="29%" y="58%" numero="+").text-center
            .h5.mb-2 Examinación y recolección de información: 
            p Las herramientas y técnicas forenses se aplican a todos los datos recolectados donde se extrae la información relevante, donde no se alteran la integridad de los datos. 

          .tarjeta.color-primario.p-3(x="50%" y="8%" numero="+").text-center
            .h5.mb-2 Identificación de fuentes de información:
            p Se relaciona con los datos entregados de un evento identificados, de esta manera se controla y se procede con la siguiente fase que es la recolección y examinación. 

          .tarjeta.color-primario.p-3(x="70%" y="57%" numero="+").text-center
            .h5.mb-2 Análisis de datos: 
            p Se analiza toda la información prioritaria o relevante obtenida en la fase de examinación para encontrar las respuestas para el caso, se debe realizar la correlación de los eventos. 

          .tarjeta.color-primario.p-3(x="91%" y="8%" numero="+").text-center
            .h5.mb-2 Reporte:
            p En esta etapa se entrega un reporte detallado donde se describen los procesos verificaciones cambios si se realizaron, etc.

</template>

<script>
export default {
  name: 'Tema3',
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
