export default {
  global: {
    componenteFormativo:
      'Ajustar los parámetros y estándares de los dispositivos de la infraestructura T.I.',
    descripcionCurso:
      'En esta área se conforman los parámetros y normas que complementan todos los dispositivos que se describen en la infraestructura tecnológica T.I. Teniendo en cuenta el plan de contingencia que describe el diseño y uso para los centros de datos, como utilizar las características de la computación en la nube y la gestión de redes y computadores. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Funcionamiento del centro de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Centro de datos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Infraestructura y Componentes del software para centro de datos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan de Contingencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cadena de custodia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestión de redes de computadoras y recursos tecnológicos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción a la Informática hardware y software.',
      referencia:
        '(S/f). Edu.ar. Recuperado el 18 de agosto de 2022, de https://economicas.unsa.edu.ar/sigeco/archivos/semi_material/U1-DT-IntroduccionalaInformatica.pdf.',
      tipo: 'APA',
      link:
        'https://economicas.unsa.edu.ar/sigeco/archivos/semi_material/U1-DT-IntroduccionalaInformatica.pdf',
    },
    {
      tema: 'DOCUMENTO - VERSIÓN ACTUALIZADA DEL MODELO DE GESTIÓN IT4+',
      referencia: 'DOCUMENTO - VERSIÓN ACTUALIZADA DEL MODELO DE GESTIÓN IT4+',
      tipo: 'Norma, artículo, manual.',
      descarga:
        'https://www.mintic.gov.co/arquitecturati/630/propertyvalues-8170_documento_pdf.pdf',
    },
    {
      tema: 'Data Center una mirada por dentro.',
      referencia:
        '(S/f-c). Researchgate.net. Recuperado el 18 de agosto de 2022, de https://www.researchgate.net/publication/282611136_DATACENTER_-_UNA_MIRADA_POR_DENTRO',
      tipo: 'Norma, artículo, manual.',
      descarga:
        'https://www.researchgate.net/publication/282611136_DATACENTER_-_UNA_MIRADA_POR_DENTRO',
    },
  ],
  glosario: [
    {
      termino: 'Contingencia',
      significado: 'Se asocia a la posibilidad de que una acción suceda o no',
    },
    {
      termino: 'Data Center',
      significado:
        'Centro de proceso de información. Lugar físico donde se guardan los datos e información relevante.',
    },
    {
      termino: 'DNS',
      significado: 'Sistema de nombre de dominios.',
    },
    {
      termino: 'Firewalls',
      significado: 'Sistema diseñado para proteger redes privadas.',
    },
    {
      termino: 'LAN',
      significado: 'Red de área local.',
    },
    {
      termino: 'Racks',
      significado:
        'Soportes metálicos para guardar y almacenar centros de información.',
    },
    {
      termino: 'RRHH',
      significado: 'Recursos Humanos.',
    },
    {
      termino: 'Salvaguardar',
      significado: 'Salvaguardar	Proteger algo que requiera protección.',
    },
    {
      termino: 'Telnet',
      significado: 'Telnet	Servidor utilizado para las telecomunicaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        '(S/f-a). Researchgate.net. Recuperado el 18 de agosto de 2022',
      link:
        'https://www.researchgate.net/publication/282611136_DATACENTER_-_UNA_MIRADA_POR_DENTRO',
    },
    {
      referencia:
        'PROCEDIMIENTO PARA REALIZAR EL RESPALDO DE INFORMACIÓN SIGUIENDO LAS BUENAS PRÁCTICAS EN. (s/f-b). Edu.co. Recuperado el 18 de agosto de 2022',
      link:
        'https://repository.ucatolica.edu.co/bitstream/10983/860/2/PROCEDIMIENTO%20PARA%20REALIZAR%20EL%20RESPALDO%20DE%20INFORMACI%C3%93N%20SIGUI.p',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
