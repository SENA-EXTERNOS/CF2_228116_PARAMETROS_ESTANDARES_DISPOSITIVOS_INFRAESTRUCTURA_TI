<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .tarjeta.clr--gris.p-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-lg-5.mb-4.mb-md-0
          //img(src="@/assets/curso/temas/actividad/actividad_01.svg").mb-3
          p imagen

        .col-md.col-lg-6
          h3 Cuestionario
          p.mb-4 #[strong Opción múltiple.] Lea la afirmación de cada ítem y luego señale la respuesta correcta según corresponda.
          
          //a.boton.boton--b(:href="obtenerLink('/actividades/AD1/index.html')" target="_blank")
            span Realizar
            i.fas.fa-puzzle-piece 
          p boton realizar
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
