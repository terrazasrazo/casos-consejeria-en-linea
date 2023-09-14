import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

function Audiolibro() {
  const colors = `html {
    --tagsBackground: #a16f24;
    --tagsText: #ffffff;
    --tagsBackgroundHoverActive: #28639d;
    --tagsTextHoverActive: #ffffff;
    --searchBackground: #28639d;
    --searchText: #ffffff;
    --searchPlaceHolder: #575a77;
    --playerBackground: #28639d;
    --titleColor: #ffffff; 
    --timeColor: #ffffff;
    --progressSlider: #a16f24;
    --progressUsed: #ffffff;
    --progressLeft: #151616;
    --volumeSlider: #a16f24;
    --volumeUsed: #ffffff;
    --volumeLeft:  #151616;
    --playlistBackground: #28639d;
    --playlistText: #cccccc;
    --playlistBackgroundHoverActive:  #28639d;
    --playlistTextHoverActive: #ffffff; 
  }`

  const tracks = [
    {
      url: "./public/audio/01-Portada.mp3",
      title: "01 Portada",
      tags: ["General"],
    },
    {
      url: "./public/audio/02-Referencias.mp3",
      title: "02 Índice",
      tags: ["General"],
    },
    {
      url: "./public/audio/04-Presentacion.mp3",
      title: "03 Presentación",
      tags: ["General"],
    },
    {
      url: "./public/audio/05-Introduccion.mp3",
      title: "04 Introducción. Una práctica realmente enfocada en soluciones",
      tags: ["General"],
    },
    {
      url: "./public/audio/06-Cuando-el-problema-no-es-realmente-el-problema.mp3",
      title: "05 Cuando el problema no es realmente el problema",
      tags: ["Sección I"],
    },
    {
      url: "./public/audio/07-En-blanco.mp3",
      title: "06 En blanco",
      tags: ["Sección I"],
    },
    {
      url: "./public/audio/08-Alcanzando-suenos-pospuestos.mp3",
      title: "07 Alcanzando sueños pospuestos",
      tags: ["Sección I"],
    },
    {
      url: "./public/audio/09-La-fortaleza-de-Sandy.mp3",
      title: "08 La fortaleza de Sandy",
      tags: ["Sección II"],
    },
    {
      url: "./public/audio/10-Explorando-excepciones-y-encontrando-soluciones-milagro.mp3",
      title: "09 Explorando excepciones y encontrando soluciones milagro",
      tags: ["Sección II"],
    },
    {
      url: "./public/audio/11-Negociando-la-solucion.mp3",
      title: "10 Negociando la solucion",
      tags: ["Sección III"],
    },
    {
      url: "./public/audio/12-Construyendo-un-camino-dorado.mp3",
      title: "11 Construyendo un camino dorado",
      tags: ["Sección III"],
    },
    {
      url: "./public/audio/13-Angel-guardian.mp3",
      title: "12 Ángel guardian",
      tags: ["Sección III"],
    },
    {
      url: "./public/audio/14-La-fraccion-del-hombre.mp3",
      title: "13 La fracción del hombre",
      tags: ["Sección IV"],
    },
    {
      url: "./public/audio/15-Rosa-y-el-milagro-matematico.mp3",
      title: "14 Rosa y el milagro matemático",
      tags: ["Sección IV"],
    },
    {
      url: "./public/audio/16-Uso-de-la-TBCS-para-evitar-el-abandono-escolar.mp3",
      title: "15 Uso de la TBCS para evitar el abandono escolar",
      tags: ["Sección V"],
    },
    {
      url: "./public/audio/17-Organizarte-en-el-caos.mp3",
      title: "16 Organizarte en el caos",
      tags: ["Sección V"],
    },
    {
      url: "./public/audio/18-La-discapacidad-que-no-identificamos-a-simple-vista.mp3",
      title: "17 La discapacidad que no identificamos a simple vista",
      tags: ["Sección V"],
    },
    {
      url: "./public/audio/19-Un-granito-de-arena.mp3",
      title: "18 Un granito de arena",
      tags: ["Sección V"],
    },
    {
      url: "./public/audio/20-Conclusiones.mp3",
      title: "19 Conclusiones",
      tags: ["General"],
    },
    {
      url: "./public/audio/21-Citas-bibliograficas.mp3",
      title: "20 Citas bibliograficas",
      tags: ["General"],
    },
    {
      url: "./public/audio/03-Citas-bibliograficas.mp3",
      title: "21 Notas sobre formato de audiolibro",
      tags: ["General"],
    },
  ];

  return (
    <Player
      trackList={tracks}
      customColorScheme={colors}
      includeTags={true}
      includeSearch={false}
      showPlaylist={true}
    />
  );
}

export default Audiolibro;
