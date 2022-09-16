<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción   

    .row.justify-content-around.aling-items-center
      .col-lg-10.mb-lg-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/introduccion/intro-img-01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
           p.mb-0 Con este componente formativo  identificará cómo ajustar los parámetros y estándares de los dispositivos de la infraestructura T.I en el que se incluyen, definiciones claves para el diseño y la implementación de un centro de datos de acuerdo a la infraestructura para la que debe ser diseñada. Aprenderá como es el funcionamiento del centro de datos, características, normas y estándares en el que podrá seleccionar las conexiones y componentes según su criterio y marcos de referencia previamente ya conocidos, de esta forma realizará un análisis de medición de riesgos para cumplir con las características del servicio T.I.           

    .row.justify-content-around.aling-items-center.mt-5
      .col-lg-10
        .row
          .col-lg-8
            p Se desarrollará la capacidad de establecer las conexiones y componentes según las especificaciones técnicas y los marcos de referencia, verificando la seguridad de la infraestructura tecnológica, comprendida por los modelos, estándares y normativa de la seguridad, que serán implementados en el centro de datos acorde con la infraestructura requerida. Finalizando con la cuantificación de los riesgos para cumplir con las características del servicio T.I reconociendo las variaciones de ejecución del centro de datos, de acuerdo con el desarrollo del proceso.
            p.text-black Lo invitamos a ver el siguiente video donde se amplía la información de este componente formativo.
          .col-lg-4
            figure(data-aos="fade-left")
              img(src="@/assets/curso/introduccion/intro-img-decorativa-1.svg", alt="Texto que describa la imagen")

    .row.justify-content-around.aling-items-center
      .col-lg-10.mb-lg-0.mt-lg-5
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
