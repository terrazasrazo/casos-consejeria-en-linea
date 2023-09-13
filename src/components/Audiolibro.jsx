import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'

function Audiolibro() {
  const tracks = [
    {
      url: './src/assets/audio/01-Portada.mp3',
      title: '01 Portada',
      tags: ['General']
    },
    {
      url: './src/assets/audio/02-Referencias.mp3',
      title: '02 Referencias',
      tags: ['General']
    },
    {
      url: './src/assets/audio/03-Citas-bibliograficas.mp3',
      title: '03 Citas bibliograficas',
      tags: ['General']
    },
    {
      url: './src/assets/audio/04-Presentacion.mp3',
      title: '04 Presentación',
      tags: ['General']
    },
    {
      url: './src/assets/audio/05-Introduccion.mp3',
      title: '05 Introducción. Una práctica realmente enfocada en soluciones',
      tags: ['General']
    },
    {
      url: './src/assets/audio/06-Cuando-el-problema-no-es-realmente-el-problema.mp3',
      title: '06 Cuando el problema no es realmente el problema',
      tags: ['Sección I']
    },
    {
      url: './src/assets/audio/07-En-blanco.mp3',
      title: '07 En blanco',
      tags: ['Sección I']
    },
    {
      url: './src/assets/audio/08-Alcanzando-suenos-pospuestos.mp3',
      title: '08 Alcanzando sueños pospuestos',
      tags: ['Sección I']
    },
    {
      url: './src/assets/audio/09-La-fortaleza-de-Sandy.mp3',
      title: '09 La fortaleza de Sandy',
      tags: ['Sección II']
    },
    {
      url: './src/assets/audio/10-Explorando-excepciones-y-encontrando-soluciones-milagro.mp3',
      title: '10 Explorando excepciones y encontrando soluciones milagro',
      tags: ['Sección II']
    },
    {
      url: './src/assets/audio/11-Negociando-la-solucion.mp3',
      title: '11 Negociando la solucion',
      tags: ['Sección III']
    },
    {
      url: './src/assets/audio/12-Construyendo-un-camino-dorado.mp3',
      title: '12 Construyendo un camino dorado',
      tags: ['Sección III']
    },
    {
      url: './src/assets/audio/13-Angel-guardian.mp3',
      title: '13 Ángel guardian',
      tags: ['Sección III']
    },
    {
      url: './src/assets/audio/14-La-fraccion-del-hombre.mp3',
      title: '14 La fracción del hombre',
      tags: ['Sección IV']
    },
    {
      url: './src/assets/audio/15-Rosa-y-el-milagro-matematico.mp3',
      title: '15 Rosa y el milagro matemático',
      tags: ['Sección IV']
    },
    {
      url: './src/assets/audio/16-Uso-de-la-TBCS-para-evitar-el-abandono-escolar.mp3',
      title: '16 Uso de la TBCS para evitar el abandono escolar',
      tags: ['Sección V']
    },
    {
      url: './src/assets/audio/17-Organizarte-en-el-caos.mp3',
      title: '17 Organizarte en el caos',
      tags: ['Sección V']
    },
    {
      url: './src/assets/audio/18-La-discapacidad-que-no-identificamos-a-simple-vista.mp3',
      title: '18 La discapacidad que no identificamos a simple vista',
      tags: ['Sección V']
    },
    {
      url: './src/assets/audio/19-Un-granito-de-arena.mp3',
      title: '19 Un granito de arena',
      tags: ['Sección V']
    },
    {
      url: './src/assets/audio/20-Conclusiones.mp3',
      title: '20 Conclusiones',
      tags: ['General']
    },
    {
      url: './src/assets/audio/21-Citas-bibliograficas.mp3',
      title: '21 Citas bibliograficas',
      tags: ['General']
    },
  ]

  return ( 
    <Player
      trackList={tracks}
      includeTags={true}
      includeSearch={false}
      showPlaylist={true}
    />
  )
}

export default Audiolibro