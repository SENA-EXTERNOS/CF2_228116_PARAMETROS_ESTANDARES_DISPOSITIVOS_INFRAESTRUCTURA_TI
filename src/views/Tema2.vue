<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plan de Contingencia
    figure
      img(src="@/assets/curso/temas/tema2/tema2-img-01.svg", alt="Texto que describa la imagen").mb-4

    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.estiloNuevo.p-4
          p Son conjuntos de procedimientos alternativos a la operatividad de cada empresa u organización. Su principal objetivo es permitir el funcionamiento de la organización, especialmente cuando algunas de las funciones no se ejecutan por fallas internas. 
    
    img(src="@/assets/curso/temas/tema2/tema2-img-decorativa-01.svg", alt="Texto que describa la imagen").tema2-decorativa-01

    .row.justify-content-around.aling-items-center.mt-5
      .col-lg-3
        figure(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema2/tema2-img-02.svg", alt="Texto que describa la imagen")
      .col-lg-9
        p #[b Los objetivos del plan de contingencia:] son el de planificar y describir la capacidad para respuestas rápidas, requerida para el control de emergencias. Paralelo al plan se debe identificar los distintos tipos de riesgos que potencialmente podrían ocurrir e incorporar una estrategia de respuesta para cada uno, con algunos objetivos específicos:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.mb-2
              span 1
            | Establecer un procedimiento formal y por escrito que indique las acciones a seguir frente a determinados riesgos.
          li 
            .lista-ol--cuadro__vineta.mb-2
              span 2
            | Optimizar el uso de recursos humanos y materiales.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Un control adecuado para cumplir con las normas y procedimientos establecidos.
    
    img(src="@/assets/curso/temas/tema2/tema2-img-decorativa-02.svg", alt="Texto que describa la imagen").tema2-decorativa-02

    .row.justify-content-around.aling-items-center.mt-5
      .col-lg-7
        p Los planes de contingencia son necesarios en todo sistema y no podría dejarse de lado en el tema de seguridad.
        p Las etapas de un plan de contingencia se describen a continuación.
        p Haciendo una síntesis para su elaboración la podríamos dividir en cinco etapas.

        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Evaluación.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Planificación.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Pruebas de viabilidad.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Ejecución.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Recuperación.
      .col-lg-5
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/tema2/tema2-img-03.svg", alt="Texto que describa la imagen")

</template>

<script>
export default {
  name: 'Tema2',
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
