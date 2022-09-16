<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Funcionamiento del centro de datos
  
      //- .titulo-segundo debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-segundo.color-primario.mt-5
      h2 1.1  Funcionamiento del centro de datos     
    .row.justify-content-around.aling-items-center.mt-5
      .col-lg-7        
        p Los centros están asociados a la modernización de la obtención de la información, es decir, al almacenamiento de las actividades diarias dependiendo el área de organización de cada empresa, por ejemplo, contabilidad, información de personal de recursos humanos RRHH, entre otros. Un centro de datos son aquellos componentes físicos donde se instalan las redes, computadores e incluso almacenamiento entre otros dispositivos y equipos T.I que ayudan al funcionamiento de las organizaciones. 
      .col-lg-5
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/tema1/tema1-img-01.svg", alt="Texto que describa la imagen")

      h3.titulo-tercero.mt-5 Tipos de centros de datos 

      p Los centros de datos pueden variar de acuerdo a las consideraciones de diseño. Sin embargo, cada uno se compone por los siguientes elementos que constituyen su estructura y funcionamiento.

      .bg--img_03
        .row.justify-content-center.mb-4
          .col-lg-4
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema1/tema1-img-02.svg", alt="alt").img400.m-auto
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta--azul")
              .row(titulo="Computación")
                .col-12
                  p.mb-0 Es proporcionada (en su mayoría) por servidores de alta gama y se compone por la memoria y la potencia, que es justamente lo que propicia la ejecución de las aplicaciones del CPD. 
              .row(titulo="Seguridad")
                .col-12
                  p.mb-0 Es un elemento fundamental en un data center, ya que su principal objetivo es garantizar que la información de una empresa no tenga fugas o sufra ante diferentes situaciones como robos de información, accesos no autorizados, desastres naturales, incendios, entre otras. 
              .row(titulo="Almacenamiento")
                .col-12
                  p.mb-0 Toda la información y los datos de una empresa se almacenan dentro del CPD en diferentes soportes. Estos pueden ser cintas, unidades de estado sólido o múltiples copias de seguridad.  
                        |Generalmente las grandes empresas optan por un procesador de datos en la nube con el fin de tener copias de seguridad o respaldo ante la  posible pérdida de la información. Sin embargo, puede llegar a ser menos rentable que el almacenamiento local debido a los gastos del transporte de datos. 
              .row(titulo="Redes")
                .col-12
                  p.mb-0 Este elemento se refiere a las interconexiones entre los componentes de la data center y el entorno exterior en el que se encuentra. Esto incluye enrutadores, conmutadores, controladores de entrega de aplicaciones, entre otros más. 

      .crd.clr-paleBlue.p-4.mb-5(data-aos="flip-up")
        h4.titulo-cuarto Características

        p.mt-4.mb-4 Existen diferentes características que conforman el data center o centro de datos: 

        .row.justify-content-center.mb-3
            .col-6
              .crd.crd--avatarHorizontal.crd--first.clr--paleBlue.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema1/tema1-img-t-01.svg", alt="alt")
                  .col
                    h5 Seguridad
                    p En todo modelo de negocio o adquisición de la información los datos son el soporte fundamental en esta era digital, por tal razón, es importante garantizar la seguridad de la información que se encuentra tan vulnerable en el internet. Por otra parte, hay otros factores como por ejemplo, aplicar medidas de protección que sean implementadas en el entorno físico, ejemplo utilizando la biometría, controles de acceso entre otros.
            .col-6
              .crd.clr--paleBlue.p-4.mb-4
                .row.align-items-center
                  .col-auto
                    figure
                     img(src="@/assets/curso/temas/tema1/tema1-img-t-02.svg", alt="alt").img100
                  .col
                    h5 Refrigeración
                    p Para la ubicación de los data centers es importante que sean ubicados en un lugar que no sean expuestos al polvo, altas temperaturas. Estos detalles permiten un mayor rendimiento posible del centro de datos. Por esta razón, el sistema de refrigeración debe ser óptimo evitando altas temperaturas que reduzcan la vida útil del sistema. 

        .row.justify-content-center.mb-5
            .col-6
              .crd.clr--paleBlue.p-4.mb-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema1/tema1-img-t-03.svg", alt="alt").img100
                  .col
                    h5 Capacidad de almacenamiento
                    p Cada vez se obtienen más datos y en las empresas se necesita brindar soluciones por tal razón es necesario guardar más información, debido a esto cada día se necesita mayor almacenamiento con mayor capacidad. Gracias a los aportes tecnológicos las empresas necesitan diferentes espacios de almacenamiento que permitan guardar la información sin limitaciones.
            .col-6
              .crd.clr--paleBlue.p-4.mb-4
                .row.align-items-center
                  .col-auto
                    figure
                     img(src="@/assets/curso/temas/tema1/tema1-img-t-04.svg", alt="alt").img100
                  .col
                    h5 Transferencia de datos
                    p Es muy importante a la hora de enviar o recibir información sea de manera rápida. Por esta razón, es importante que la transferencia de datos se realice con mayor velocidad de esta forma se masifica la accesibilidad a la información. Permitiendo transportar de una forma eficiente toda la información a diferentes dispositivos de visualización.
    Separador
    .row.justify-content-around.aling-items-center.mt-5
      .col-lg-10
        .row
          .col-lg-7
            figure
              img(src="@/assets/curso/temas/tema1/tema1-img-03.svg", alt="Texto que describa la imagen")
          .col-lg-5
            p.mt-5 Los Data centers están compuestos de un sistema de redes de comunicaciones de alta velocidad y demanda, que son capaces de manejar el tráfico de las redes SAN (Storage Área Network), NAS (Network Attached Storage), granjas de servidores de archivos/ aplicaciones/ redes y otros componentes que se localizan en un ambiente controlado. Las comunicaciones hacia adentro y hacia fuera se hacen a través de enlaces WAN, CAN/MAN, METRO ETHERNET, en una variedad de configuraciones dependiendo de las necesidades de cada centro. 

    
    h4.mt-5.mb-5 Normas y estándares
  
    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.mt-5
            p A nivel internacional cada vez son más actualizados los centros de datos, debido a que la infraestructura tecnológica cambia consecutivamente también sucede con las normas y estándares. Debido a la alta demanda de la información adquirida muchas empresas improvisan diferentes centros de cómputo y van adquiriendo información de forma desorganizada, exponiendo así su información sin notar que es lo más importante debido a que se guarda toda la información, por ejemplo, transacciones, información clientes, finanzas, etc.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-04.svg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0.mt-5
            p Por esta razón, los centros de datos se basan en normas y estándares internacionales, que permiten brindar seguridad en el funcionamiento para el manejo de la información. Según las Normas IEEE 802.3 y ANSI/TIA-942 la infraestructura de soporte se debe complementar con 4 subsistemas que son:
            ul.lista-ul
              li
                i.fab.fa-jira
                | Telecomunicaciones 
              li 
                i.fab.fa-jira
                | Arquitectura 
              li 
                i.fab.fa-jira
                | Sistema eléctrico
              li 
                i.fab.fa-jira
                | Sistema mecánico      
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-05.svg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0.mt-5
            h2.mb-4 NORMA IEEE (Institute of Electrical and Electronics Engineers)
            p IEEE es la asociación de profesionales dedicada al avance de la innovación tecnológica y la excelencia para beneficio de la sociedad, para ello existe la normativa 802.3, significa que es el detalle sobre la que se monta Ethernet un método de establecimiento de las comunicaciones el cual, es un método para una red de área local o LAN que es una comunicación física.   
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-06.svg', alt='Texto que describa la imagen')                            

    .titulo-segundo.color-primario.mt-5
      h2 1.2  Infraestructura y componentes del software para centro de datos
    .row.justify-content-around.aling-items-center
      .col-lg-10.mb-lg-0.mt-lg-3
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

    h4.mt-5.mb-4 Tipos de servidores
    p.mb-3 A continuación se describen los 10 tipos de servidores que existen en el momento. 

    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-md-10.mb-md-0
          h3.mt-5 Servidor DNS
          p Son utilizados para gestionar los nombres de dominios de páginas web. Cuando el usuario escribe un dominio en los exploradores, el servidor DNS  lee dichos requerimientos regresando así la información de la interfaz de la página.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-07.svg', alt='Texto que describa la imagen')
      .row
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-08.svg', alt='Texto que describa la imagen')
        .col-md-10
          h3.text-left.mt-5 Servidor web
          p.mb-4 Este servidor permite en el formato HTML guardar toda la información de los sitios, incluyendo videos, imágenes y texto. Utilizando exploradores web por ejemplo: Brave, Eagle y Chrome. Los servidores web también se clasifican en:
          ul.lista-ul
            li
              i.fab.fa-jira
              | Microsoft IIS: su funcionamiento es posible en el sistema operativo de Windows y tiene la opción de cambiar un computador en un servidor web a menor escala.
            li 
              i.fab.fa-jira
              | Apache: es multiplataforma permitiendo al usuario mayor estabilidad y seguridad.
            li
              i.fab.fa-jira
              | Lighttpd: es utilizado en entornos que requieren mayor velocidad.
            li 
              i.fab.fa-jira
              | Sun Java System Web Server: servidor de código abierto, para tecnologías JSP, PHP etc.
            li 
              i.fab.fa-jira
              | Servidores virtuales: estos servidores permiten optimizar costos de hardware y generar mayor flexibilidad para el uso de otros sistemas operativos.
      .row
        .col-md-10.mb-md-0
          h3.mt-5 Servidor de base de datos
          p Estos dispositivos fueron creados para almacenar grandes cantidades de datos y analizar y gestionar cada uno de ellos. También permite alojar y manipular los datos de acuerdo a las necesidades del cliente.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-09.svg', alt='Texto que describa la imagen')
      .row
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-10.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-md-0
          h3.mt-5 Servidores cloud
          p Este servidor está asociado para aquellas empresas que se dedican a rentar espacio en los servidores, de esta forma otros usuarios guardan la información de forma remota. Se conoce como caja fuerte el término que describe la seguridad para cuidar ante pérdidas de información.
      .row
        .col-md-10.mb-md-0
          h3.mt-5 Servidor del acceso remoto (RAS)
          p Vigila todas las líneas del módem de los computadores o cualquier medio de comunicación de internet, utilizando todos los requerimientos, se conecten de forma remota y accediendo a todas las funciones y acceso a la red.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-11.svg', alt='Texto que describa la imagen')
      .row
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-12.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-md-0
          h3.mt-5 Servidor Telnet
          p Este servidor es utilizado en las comunicaciones, porque se asocia a un protocolo de red permitiendo a los usuarios enviar, gestionar y recibir datos para solucionar problemas asociadas a las redes telefónicas.
      .row
        .col-md-10.mb-md-0
          h3.mt-5 Servidor FTP
          p Este servidor su principal función es transferir archivos y datos entre otros servidores y otros computadores.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-13.svg', alt='Texto que describa la imagen')
      .row
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-14.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-md-0
          h3.mt-5 Servidor SIP
          p Establece la conexión para realizar llamadas telefónicas por internet, se conoce como proxy SIP.
      .row
        .col-md-10.mb-md-0
          h3.mt-5 Servidor de email
          p Oficina de correo virtual que permite, enviar, recibir y almacenar información, por ejemplo, correos de clientes. Así mismo se clasifica en tres subtipos:
          ul.lista-ul
            li
              i.fab.fa-jira
              | SMTP: administra los emails salientes. Funcionan con una combinación entre POP3 y IMAP.
            li
              i.fab.fa-jira
              | POP3: es donde retiene todos los emails recibidos hasta que el usuario envía la información al dispositivo ejemplo: teléfono, Tablet o computadora.
            li
              i.fab.fa-jira
              | IMAP: este subtipo permite interactuar con los mensajes recibidos sin guardarlos en el ordenador. Utilizando la opción vista previa tiene la opción de descargar, archivar o eliminar.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-15.svg', alt='Texto que describa la imagen')
      .row
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-16.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-md-0
          h3.mt-5 Servidor compartido
          p Comparte recursos con la memoria RAM, el CPU, la conexión a internet, el sistema operativo y la dirección IP. Estos servidores son utilizados para recibir todas las solicitudes de los clientes.
    
    h4.mt-5.mb-5 Características Gestión de red
    p Un centro de Datos o Data Center (nombre en inglés) debe cumplir las siguientes características. 
  
    TabsC.color-primario
      .py-3.py-md-4(titulo="Escalabilidad")
        .row
          .col-md-6.mb-4.mb-md-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/tema1-img-17.svg', alt='Texto que describa la imagen')
          .col-md-6
            p.mb-2 Se refiere a la forma en que una red puede expandirse rápidamente para admitir nuevos usuarios y aplicaciones sin dañar el rendimiento del servicio enviado a los usuarios, esto sucede porque todos los días nuevos usuarios y proveedores de servicio se conectan a internet, lo que permite que la capacidad de la red pueda admitir a estas nuevas interconexiones dependiendo del diseño jerárquico en capas que tiene la infraestructura física subyacente y la arquitectura lógica. 
            p El funcionamiento de cada capa hace posible a los usuarios y proveedores de servicios, introducirse sin necesidad de causar alguna disrupción en toda la red. Incrementando las capacidades de transmitir el mensaje y el rendimiento de los componentes de la estructura física en cada capa. Estos modelos en conjunto con los métodos para identificar y localizar usuarios individuales dentro de una internetwork, permiten a Internet estar al tanto de la demanda de los usuarios.
      .py-3.py-md-4(titulo="Calidad de servicio")
        .row
          .col-md-6.mb-4.mb-md-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/tema1-img-18.svg', alt='Texto que describa la imagen')
          .col-md-6
            p Para que una red tenga buena calidad en su servicio, establece prioridades. En la actualidad internet proporciona un nivel considerable de tolerancia a fallas y escalabilidad para sus usuarios, sin embargo, las aplicaciones más recientes para los usuarios en internetworks crean mayores expectativas en cuestión de esperar mejor calidad en los futuros servicios entregados.  Los requisitos más nuevos son para dar soporte a la calidad del servicio sobre una red convergente, modificando la forma en que están diseñadas y en que se implementan las arquitecturas de red.
      .py-3.py-md-4(titulo="Seguridad")
        .row
          .col-md-6.mb-4.mb-md-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/tema1-img-19.svg', alt='Texto que describa la imagen')
          .col-md-6
            p.mb-2 La confidencialidad de datos es primordial para cualquier empresa, es por ello, que han ido cambiando los requerimientos de seguridad de la red. Internet ha tenido que evolucionar de ser una internetwork controlada sobre organizaciones educativas y gubernamentales, a un medio accesible para la transmisión de comunicaciones comerciales y personales. 
            p La rápida expansión de las áreas de comunicación que no eran atendidas por las redes de datos tradicionales han ido aumentando la necesidad de incorporar mayor seguridad en la arquitectura de red, creando expectativas de privacidad y seguridad que se originan del uso de internetworks para el intercambio de información empresarial, crítica y confidencial.
      .py-3.py-md-4(titulo="Gestión de red")
        .row
          .col-md-6.mb-4.mb-md-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema1/tema1-img-20.svg', alt='Texto que describa la imagen')
          .col-md-6
            p Da como resultado las funciones para controlar, planificar, asignar, implementar y coordinar los recursos de la red de monitores. Es también, el sistema que incluye a las otras funciones de la red, las controla y gestiona con el objetivo de que los datos de acceso y los flujos de datos se gestionen a través de la red. Los mecanismos de administración de red incluyen la supervisión y recopilación de datos, la instrumentación para acceder, transmitir, actuar, y modificar los datos.

    h4.mt-5.mb-5 Base de datos
    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-10.mb-lg-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-21.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
           p.mb-0 Las bases de datos son fundamentales a la hora de realizar un centro de datos, debido a que permite almacenar, analizar, enviar o recibir información que permita el manejo de gestionar toda la información de forma oportuna. 

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
