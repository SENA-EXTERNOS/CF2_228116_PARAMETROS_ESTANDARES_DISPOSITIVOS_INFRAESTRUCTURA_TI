<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión de redes de computadores y recursos de tecnologías de la información, técnicas de respaldo y recuperación de la información.

    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-11.mb-lg-0
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
           p.mb-0 Para la gestión de respaldo y recuperación de la información es importante identificar y conocer la norma ISO 27000 y ISO/IEC13335-1:2004. Partiendo de este concepto, nos referimos a la información como uno de los activos más importantes para una empresa. Así  mismo se relaciona lo que comprende la información, #[.clr-Blue “(…) bases de datos y archivos  de data, contratos y acuerdos, documentación del sistema, información de investigaciones, manuales del usuario, material de capacitación, procedimientos operacionales o de soporte, planes de continuidad del negocio, acuerdos para  contingencias, rastros de auditoría e información archivada”.] 4. Por ello, la  información tiene tres pilares importantes los cuales hay que cuidar y mantener que son la confidencialidad, integridad y la disponibilidad (ISO/IEC 13335-1:2004).

    .titulo-segundo.color-primario.mt-5
      h2 4.1  Tipos de respaldo de información

    .row.justify-content-around.aling-items-center.mt-2
      .col-lg-8
        p.mb-3 Según las necesidades de cada empresa existen diferentes tipos de almacenamiento, como se nombran a continuación.
        ul.lista-ul
          li.mb-4
            i.fab.fa-jira
            | Copia de seguridad completa: se realiza una copia de todos los datos que se desee guardar. Esta copia de seguridad requiere mayor capacidad y espacio de almacenamiento. Se recomienda realizar copias de preferencia completas de forma periódica por ejemplo, cada semana, o cada 3 días dependiendo de la necesidad de la persona. Cuando pasa mucho tiempo entre la última copia de seguridad, muy probablemente muchos archivos ya hayan cambiado. Por eso, hay que llegar a un equilibrio para evitar que las copias intermedias acaben siendo tan grandes como una copia completa.
          li 
            i.fab.fa-jira
            | Copia de seguridad diferencial: es cuando se guardan los últimos cambios realizados a la copia de seguridad completa, y solo tiene dependencia con la copia completa.
      .col-lg-4
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/tema4/tema4-img-02.svg", alt="Texto que describa la imagen")

</template>

<script>
export default {
  name: 'Tema4',
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
