<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-sexto.color-acento-contenido.mb-5
      .row.mb-2
        h5 Implementación de infraestructura de tecnologías de la información y las comunicaciones.
      .row
        span Síntesis: ajustar los parámetros y estándares de los dispositivos de la infraestructura T.I.
    
    img(src="@/assets/curso/temas/sintesis-img-01.svg", alt="alt").imagen-sintesis-1

    p.mb-4 La tecnología cada día brinda mayores soluciones a las necesidades de cada persona, siendo parte de las actividades cotidianas y principalmente de nuestro trabajo. Desde que se produjo la pandemia, el cambio a los trabajos remotos aumentó de manera exponencial y por esa razón las redes tecnológicas están siempre renovando y actualizando su portafolio para brindar un mejor servicio a sus clientes.
    p.mb-4 Tener el control de la información permite operar y gestionar los entornos T.I empresariales incluyendo todos los elementos de red, software, hardware y principalmente el almacenamiento de datos, ofreciendo al cliente servicios y soluciones con alternativa tecnológica  que se ajustan a los parámetros y estándares basados en las normas que conforman los dispositivos, utilizando plataformas y entornos que ayudan a la gestión de los datos obtenidos. La simplicidad es la clave de un ecosistema de T.I más seguro y eficiente al implementar una infraestructura basada en las tecnologías de fácil acceso y comunicación con la empresa y el cliente.
    p.mb-5 De esta forma se garantiza mayor efectividad y rapidez a la hora de obtener la información, siendo un apoyo para la empresa, velar por sus propios intereses con un sistema automatizado y confianza a la hora de subir información y tener retroalimentación efectiva con el uso de los datos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis-img-02.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
