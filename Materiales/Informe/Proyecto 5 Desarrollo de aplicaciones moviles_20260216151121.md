# Reporte de proyecto

## Estructura del proyecto

```
D:\Arcon\Clase\TAME\Programación multimedia y dispositivos móviles\000- Actividaddes\Proyecto 5 Desarrollo de aplicaciones moviles
├── Compilador PHP - Clon Spoty
│   ├── Ramon.jpg
│   ├── api
│   │   ├── favoritos.json
│   │   └── lista.json
│   ├── compilado.html
│   ├── compilador.php
│   ├── componentes
│   │   ├── footer.php
│   │   ├── pantalla_inicio.php
│   │   ├── pantalla_lista.php
│   │   ├── reproductor.php
│   │   └── templates.php
│   ├── css
│   │   └── estilo.css
│   ├── img
│   │   └── placeholder.png
│   └── index.php
├── Framework pantallas animadas CSS para moviles
│   ├── Pantallas animadas CSS.html
│   └── framework
│       ├── app
│       │   ├── app.css
│       │   └── app.js
│       ├── index.html
│       └── screens
│           ├── album
│           │   ├── screen.css
│           │   ├── screen.html
│           │   └── screen.js
│           ├── config
│           │   ├── screen.css
│           │   ├── screen.html
│           │   └── screen.js
│           └── principal
│               ├── screen.css
│               ├── screen.html
│               └── screen.js
├── Informe
└── Poligonos a partir de mapas
    ├── 007-Guardar poligonos.html
    ├── exports
    └── save_polygons.php
```

## Código (intercalado)

# Proyecto 5 Desarrollo de aplicaciones moviles
## Compilador PHP - Clon Spoty
**compilado.html**
```html
<!doctype html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>TAMEify</title>
  <style>
    /* GLOBAL */
    body {
      margin: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background: #121212;
      color: white;
    }

    /* HEADER */
    header {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    header button {
      background: linear-gradient(135deg, #1DB954, #1ed760cc);
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
      transition: all 0.3s;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    header button:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    }

    /* FAVORITES SECTION */
    #favoritas {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 15px;
    }

    section article {
      display: flex;
      align-items: center;
      gap: 15px;
      background: #1e1e1e;
      border-radius: 15px;
      padding: 15px;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
    }

    section article:hover {
      background: #292929;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    }

    section article img {
      height: 50px;
      width: 50px;
      border-radius: 10px;
      object-fit: cover;
    }

    section article p {
      font-weight: bold;
      color: white;
      font-size: 14px;
      margin: 0;
    }

    /* MAIN SCREEN */
    #pantalla_inicio {
      display: flex;
      flex-direction: column;
      gap: 20px;
      background: #121212;
      min-height: 100vh;
      padding: 20px;
      box-sizing: border-box;
    }

    /* PLAYLIST SCREEN */
    #pantalla_lista {
      display: none;
      background: #121212;
      color: white;
      padding: 20px;
      min-height: 100vh;
    }

    #pantalla_lista img {
      width: 100%;
      border-radius: 15px;
      margin-bottom: 20px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
    }

    .cancion {
      display: flex;
      gap: 10px;
      padding: 12px;
      background: #1e1e1e;
      margin-bottom: 12px;
      border-radius: 12px;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      transition: all 0.3s;
    }

    .cancion:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
      background: #292929;
    }

    .cancion .datostexto h4 {
      margin: 0;
      font-size: 16px;
    }

    .cancion .datostexto p {
      margin: 0;
      font-size: 12px;
      color: #b3b3b3;
    }

    /* REPRODUCTOR */
    #reproductor {
      width: 91%;
      background: linear-gradient(135deg, #282828, #3a3a3a);
      height: 70px;
      border-radius: 15px;
      padding: 10px;
      position: fixed;
      bottom: 60px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 15px;
      color: white;
      transition: all 0.3s;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    }

    #reproductor img {
      height: 50px;
      width: 50px;
      border-radius: 10px;
      object-fit: cover;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
    }

    #reproductor h3 {
      margin: 0;
      font-size: 16px;
      font-weight: bold;
    }

    .pantallacompleta {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
    }

    /* FOOTER */
    footer {
      display: flex;
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;
      background: #181818;
      border-top: 1px solid #282828;
      box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.5);
    }

    footer button {
      width: 100%;
      border: none;
      background: none;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5px 0;
      cursor: pointer;
      transition: all 0.3s;
    }

    footer button:hover {
      color: #1DB954;
      transform: translateY(-3px);
    }

    footer button .emoji {
      font-size: 26px;
      margin-bottom: 2px;
    }

    footer button p {
      margin: 0;
      font-size: 12px;
    }
  </style>
</head>

<body>
  <div id="pantallas">
    <div id="pantalla_inicio">
      <header>
        <button>R</button>
        <button>Todos</button>
        <button>Música</button>
        <button>Podcasts</button>
      </header>
      <section id="favoritas"></section>
    </div>

    <div id="pantalla_lista">
      <img src="" onerror="this.onerror=null; this.src='img/placeholder.png';" alt="Miniatura de la lista">
      <h3>Titulo de la lista</h3>
      <div id="contienecanciones"></div>
    </div>

    <section id="reproductor">
      <img src="Ramon.jpg" alt="Artista">
      <h3>Artista</h3>
      <audio src="RenaiCirculation.mp3" controls></audio>
    </section>

    <footer>
      <button>
        <div class="emoji">🏠</div>
        <p>Inicio</p>
      </button>
      <button>
        <div class="emoji">🔍</div>
        <p>Buscar</p>
      </button>
      <button>
        <div class="emoji">📚</div>
        <p>Tu biblioteca</p>
      </button>
      <button>
        <div class="emoji">➕</div>
        <p>Crear</p>
      </button>
    </footer>

    <div id="templates">
      <template id="elemento_lista">
        <article>
          <img src="..." onerror="this.onerror=null; this.src='img/placeholder.png';" alt="Miniatura de la lista">
          <p>...</p>
        </article>
      </template>
      <template id="plantilla_cancion">
        <article class="cancion">
          <div class="datostexto">
            <h4>Titulo de la cancion</h4>
            <p>Titulo del disco</p>
          </div>
          <p>...</p>
        </article>
      </template>
    </div>
  </div>

  <script>
    // Cargar favoritos
    let contenedor = document.querySelector("#favoritas")
    fetch("api/favoritos.json")
      .then(respuesta => respuesta.json())
      .then(datos => {
        datos.favorites.forEach(dato => {
          let plantilla = document.querySelector("#elemento_lista")
          let instancia = plantilla.content.cloneNode(true)
          let articulo = instancia.querySelector("article")
          articulo.querySelector("p").textContent = dato.artist
          articulo.querySelector("img").setAttribute("src", dato.image)
          contenedor.appendChild(instancia)
          articulo.onclick = function () {
            document.querySelector("#pantalla_inicio").style.display = "none"
            document.querySelector("#pantalla_lista").style.display = "block"
          }
        })
      })

    // Cargar canciones
    let contenedor_canciones = document.querySelector("#contienecanciones")
    fetch("api/lista.json")
      .then(respuesta => respuesta.json())
      .then(datos => {
        datos.forEach(dato => {
          let plantilla = document.querySelector("#plantilla_cancion")
          let clon = plantilla.content.cloneNode(true)
          clon.querySelector("h4").textContent = dato.song
          clon.querySelector("p").textContent = dato.album
          contenedor_canciones.appendChild(clon)
        })
      })

    // Reproductor pantalla completa
    let reproductor = document.querySelector("#reproductor");
    reproductor.onclick = function () {
      this.classList.add("pantallacompleta")
    }

    // Botón de Inicio en el footer
    let botonInicio = document.querySelector("footer button:first-child");
    botonInicio.onclick = function () {
      document.querySelector("#pantalla_inicio").style.display = "flex";
      document.querySelector("#pantalla_lista").style.display = "none";
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  </script>
</body>

</html>

```
**compilador.php**
```php
<?php
  ob_start();                  // Start capturing output
  include "index.php";        // Execute the PHP file
  $html = ob_get_clean();      // Get the generated HTML
  file_put_contents("compilado.html", $html);
?>
```
**index.php**
```php
<!doctype html>
<html lang="es">
  <head>
    <title>TAMEify</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="css/estilos.css">
  </head>
  <body>
    <div id="pantallas">
      <?php include "componentes/pantalla_inicio.php";?>
      <?php include "componentes/pantalla_lista.php";?>
    </div>
    <?php include "componentes/reproductor.php";?>
    <?php include "componentes/footer.php" ?>
    <?php include "componentes/templates.php" ?>
  </body>
</html>
```
### api
**favoritos.json**
```json
{
  "favorites": [
    {
      "artist": "Arde Bogotá",
      "image": "https://example.com/images/arde_bogota.jpg"
    },
    {
      "artist": "IZAL",
      "image": "https://example.com/images/izal.jpg"
    },
    {
      "artist": "Vetusta Morla",
      "image": "https://example.com/images/vetusta_morla.jpg"
    },
    {
      "artist": "Leiva",
      "image": "https://example.com/images/leiva.jpg"
    },
    {
      "artist": "Extremoduro",
      "image": "https://example.com/images/extremoduro.jpg"
    },
    {
      "artist": "Lori Meyers",
      "image": "https://example.com/images/lory_meyers.jpg"
    },
    {
      "artist": "Supersubmarina",
      "image": "https://example.com/images/aupersubmarina.jpg"
    },
    {
      "artist": "Viva Suecia",
      "image": "https://example.com/images/viva_suecia.jpg"
    }
  ]
}

```
**lista.json**
```json
[
  {
    "song": "Los perros",
    "album": "Cowboys de la A3"
  },
  {
    "song": "Nuestros pecados",
    "album": "Cowboys de la A3"
  },
  {
    "song": "Escorpio y Sagitario",
    "album": "Cowboys de la A3"
  },
  {
    "song": "Clávame tus palabras",
    "album": "Cowboys de la A3"
  },
  {
    "song": "Cowboys de la A3",
    "album": "Cowboys de la A3"
  },
  {
    "song": "Que vida tan dura",
    "album": "Cowboys de la A3"
  },
  {
    "song": "Cariño",
    "album": "La Noche"
  },
  {
    "song": "Antiaéreo",
    "album": "El Tiempo y la Actitud (EP)"
  },
  {
    "song": "La Torre Picasso",
    "album": "Singles / Fuera de álbum"
  },
  {
    "song": "Hogar",
    "album": "Hogar (IZAL)"
  },
  {
    "song": "Tramontana 7:44 Am",
    "album": "Hogar (IZAL)"
  },
  {
    "song": "Meiuqèr",
    "album": "Hogar (IZAL)"
  },
  {
    "song": "Inercia",
    "album": "Hogar (IZAL)"
  },
  {
    "song": "Fotografías",
    "album": "Hogar (IZAL)"
  },
  {
    "song": "El hombre del futuro",
    "album": "Hogar (IZAL)"
  },
  {
    "song": "Copacabana",
    "album": "Copacabana (IZAL)"
  },
  {
    "song": "La mujer de verde",
    "album": "Copacabana (IZAL)"
  },
  {
    "song": "El baile",
    "album": "Copacabana (IZAL)"
  },
  {
    "song": "Pequeña gran revolución",
    "album": "Copacabana (IZAL)"
  },
  {
    "song": "Los seres que me llenan",
    "album": "Copacabana (IZAL)"
  }
]

```
### componentes
**footer.php**
```php
<style>
  footer{
    display:flex;
    position:fixed;
    width:100%;
    bottom:0px;
    left:0px;
  }
  footer button{
    width:100%;
    border:none;
    background:black;
    color:white;
  }
  footer button .emoji{
    font-size:32px;
  }
</style>
<footer>
  <button>
    <div class="emoji">🏠</div>
    <p>Inicio</p>
  </button>
  <button>
    <div class="emoji">🔍</div>
    <p>Buscar</p>
  </button>
  <button>
    <div class="emoji">📚</div>
    <p>Tu biblioteca</p>
  </button>
  <button>
    <div class="emoji">➕</div>
    <p>Crear</p>
  </button>
</footer>
```
**pantalla_inicio.php**
```php
<style>
  header button{
    background:magenta;
    color:white;
    padding:10px;
    border:none;
    border-radius:30px;
    min-width:40px;
   }
  #favoritas{
    display:grid;
    grid-template-columns:auto auto;
    gap:10px;
  }
  section article img{
    height:40px;
  }
  section article{
    gap:20px;
    display:flex;
    align-items:center;
    background:#292929;
    border-radius:10px;
  }
  section article p{
    font-weight:bold;
  }
  #pantalla_inicio{
  display:flex;
  flex-direction:column;
  gap:20px;
}
</style>

<div id="pantalla_inicio">
  <header>  
    <button>R</button>
    <button>Todos</button>
    <button>Música</button>
    <button>Podcasts</button>
  </header>
  <section id="favoritas">
    
   
  </section>
</div>

<script>
  let contenedor = document.querySelector("#favoritas")
  
  fetch("api/favoritos.json")
  .then(function(respuesta){return respuesta.json()})
  .then(function(datos){
    console.log(datos)
    datos.favorites.forEach(function(dato){
      let plantilla = document.querySelector("#elemento_lista")
      let instancia = plantilla.content.cloneNode(true)
      let articulo = instancia.querySelector("article")
      articulo.querySelector("p").textContent = dato.artist
      articulo.querySelector("img").setAttribute("src",dato.image)
      contenedor.appendChild(instancia)
      articulo.onclick = function(){
        console.log("Has hecho click en un articulo");
        document.querySelector("#pantalla_inicio").style.display = "none"
        document.querySelector("#pantalla_lista").style.display = "block"
      }
    })
  })
</script>
```
**pantalla_lista.php**
```php
<style>
  #pantalla_lista{display:none;}
  #pantalla_lista img{
    width:100%;
  }
  .cancion{
    display:flex;
  }
  .cancion .datostexto{flex:7;}
  .cancion>p{flex:1;}  
</style>
<div id="pantalla_lista">
  <img 
    src=""
    onerror="this.onerror=null; this.src='img/placeholder.png';"
    alt="Miniatura de la lista"
  >
  <h3>Titulo de la lista</h3>
  <div id="contienecanciones">
    
  </div>
</div>
<script>
  let contenedor_canciones = document.querySelector("#contienecanciones")
  
  fetch("api/lista.json")
  .then(function(respuesta){return respuesta.json()})
  .then(function(datos){
    datos.forEach(function(dato){
      let plantilla = document.querySelector("#plantilla_cancion")
      let clon = plantilla.content.cloneNode(true)
      clon.querySelector("h4").textContent = dato.song
      clon.querySelector("p").textContent = dato.album
      contenedor_canciones.appendChild(clon)
    })
  })
</script>
```
**reproductor.php**
```php
<style>
  #reproductor{
    width:91%;
    background:#541010;
    height:50px;
    border-radius:10px;
    padding:10px;
    position:fixed;
    top:80%;
    box-sizing:border-box;
    transition:all 1s;
    overflow:hidden;
  }
  .pantallacompleta{
    position:absolute !important;
    top:0px !important;
    left:0px;
    width:100% !important;
    height:100% !important;
  }
</style>
<section id="reproductor">
      <h3>Artista</h3>
      <img src="Ramon.jpg">
      <audio src="RenaiCirculation.mp3" controls>
    </section>
<script>
  let reproductor = document.querySelector("#reproductor");
  reproductor.onclick = function(){
    this.classList.add("pantallacompleta")
  }  
</script>
```
**templates.php**
```php
<div id="templates">
  <template id="elemento_lista">
    <article>
      <img 
        src="..."
        onerror="this.onerror=null; this.src='img/placeholder.png';"
        alt="Miniatura de la lista"
        >
      <p>...</p>
    </article>
  </template>
  <template id="plantilla_cancion">
    <article class="cancion">
      <div class="datostexto">
        <h4>Titulo de la cancion</h4>
        <p>Titulo del disco</p>
      </div>
      <p>...</p>
    </article>
  </template>
  
</div>
```
### css
**estilo.css**
```css
body,html{
  background:#121212;
  color:rgb(61, 61, 61);
  font-family:sans-serif;
  padding:5px;
  }
body{
  display:flex;
  flex-direction:column;
  gap:20px;
  }
```
### img
## Framework pantallas animadas CSS para moviles
**Pantallas animadas CSS.html**
```html
<!doctype html>
<html lang="es">
  <head>
    <title>Spotify Mockup</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
      }

      body, html {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        overflow: hidden;
      }

      .contenedor {
        width: 200%;
        height: 200%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        left: 0;
        top: 0;
        transition: all 0.5s ease;
      }

      .pantalla {
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
      }

      /* --- Pantalla Principal: Lista de Álbumes (Azul) --- */
      #pantalla-principal {
        background: #4285f4;
      }

      .lista-albumes {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .album {
        display: flex;
        align-items: center;
        padding: 15px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        cursor: pointer;
      }

      .portada-album {
        width: 60px;
        height: 60px;
        border-radius: 5px;
        margin-right: 15px;
        object-fit: cover;
      }

      .info-album h3 {
        margin: 0 0 5px 0;
        font-size: 16px;
      }

      .info-album p {
        margin: 0;
        color: #e0e0e0;
        font-size: 14px;
      }

      /* --- Subpantalla: Detalles del Álbum (Rojo) --- */
      #subpantalla {
        background: #ea4335;
      }

      .detalle-album {
        text-align: center;
        padding: 20px;
      }

      .portada-grande {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        margin: 0 auto 20px;
        object-fit: cover;
      }

      .titulo-album {
        font-size: 24px;
        margin-bottom: 10px;
      }

      .artista-album {
        color: #e0e0e0;
        margin-bottom: 20px;
      }

      .boton-reproducir {
        background: white;
        color: #ea4335;
        border: none;
        padding: 12px 30px;
        border-radius: 25px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 20px;
      }

      .lista-canciones {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 15px;
        text-align: left;
      }

      .cancion {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }

      /* --- Pantalla de Configuración (Verde) --- */
      #pantalla-configuracion {
        background: #34a853;
      }

      .opcion-config {
        margin-bottom: 20px;
      }

      .opcion-config label {
        display: block;
        margin-bottom: 8px;
      }

      .opcion-config input {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.1);
        color: white;
      }

      .opcion-config input::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      .boton-guardar {
        background: white;
        color: #34a853;
        border: none;
        padding: 12px 30px;
        border-radius: 25px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 20px;
      }

      /* --- Botones de Navegación --- */
      .boton-navegacion {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        color: #333;
        border: none;
        padding: 12px 30px;
        border-radius: 25px;
        font-weight: bold;
        cursor: pointer;
        z-index: 100;
      }
    </style>
  </head>
  <body>
    <div class="contenedor">
      <!-- Pantalla Principal: Lista de Álbumes -->
      <div id="pantalla-principal" class="pantalla">
        <h1>Tus Álbumes</h1>
        <div class="lista-albumes">
          <div class="album" onclick="abrirDetalleAlbum('Álbum 1', 'Artista 1')">
            <img src="https://via.placeholder.com/60" class="portada-album">
            <div class="info-album">
              <h3>Álbum 1</h3>
              <p>Artista 1</p>
            </div>
          </div>
          <div class="album" onclick="abrirDetalleAlbum('Álbum 2', 'Artista 2')">
            <img src="https://via.placeholder.com/60" class="portada-album">
            <div class="info-album">
              <h3>Álbum 2</h3>
              <p>Artista 2</p>
            </div>
          </div>
          <div class="album" onclick="abrirDetalleAlbum('Álbum 3', 'Artista 3')">
            <img src="https://via.placeholder.com/60" class="portada-album">
            <div class="info-album">
              <h3>Álbum 3</h3>
              <p>Artista 3</p>
            </div>
          </div>
        </div>
        <button class="boton-navegacion" onclick="abrirConfiguracion()">Ir a Configuración</button>
      </div>

      <!-- Subpantalla: Detalles del Álbum -->
      <div id="subpantalla" class="pantalla">
        <div class="detalle-album">
          <img src="https://via.placeholder.com/200" class="portada-grande" id="portada-detalle">
          <h2 class="titulo-album" id="titulo-detalle">Título del Álbum</h2>
          <p class="artista-album" id="artista-detalle">Artista</p>
          <button class="boton-reproducir">Reproducir</button>
          <div class="lista-canciones">
            <h3>Canciones</h3>
            <div class="cancion">
              <span>Canción 1</span>
              <span>3:45</span>
            </div>
            <div class="cancion">
              <span>Canción 2</span>
              <span>4:20</span>
            </div>
            <div class="cancion">
              <span>Canción 3</span>
              <span>3:10</span>
            </div>
          </div>
        </div>
        <button class="boton-navegacion" onclick="volverPrincipal()">Volver</button>
      </div>

      <!-- Pantalla de Configuración -->
      <div id="pantalla-configuracion" class="pantalla">
        <h1>Configuración del Mockup</h1>
        <div class="opcion-config">
          <label for="titulo-album">Título del Álbum:</label>
          <input type="text" id="titulo-album" placeholder="Ej: Mi Álbum">
        </div>
        <div class="opcion-config">
          <label for="artista-album">Artista:</label>
          <input type="text" id="artista-album" placeholder="Ej: Artista Ejemplo">
        </div>
        <div class="opcion-config">
          <label for="canciones">Canciones (separadas por coma):</label>
          <input type="text" id="canciones" placeholder="Ej: Canción 1, Canción 2, Canción 3">
        </div>
        <button class="boton-guardar" onclick="guardarConfiguracion()">Guardar Mockup</button>
        <button class="boton-navegacion" onclick="volverPrincipal()">Volver</button>
      </div>
    </div>

    <script>
      const contenedor = document.querySelector('.contenedor');
      const anchoPantalla = window.innerWidth;
      const altoPantalla = window.innerHeight;

      function abrirDetalleAlbum(titulo, artista) {
        document.getElementById('titulo-detalle').textContent = titulo;
        document.getElementById('artista-detalle').textContent = artista;
        contenedor.style.left = `-${anchoPantalla}px`;
      }

      function abrirConfiguracion() {
        contenedor.style.top = `-${altoPantalla}px`;
      }

      function volverPrincipal() {
        contenedor.style.left = '0';
        contenedor.style.top = '0';
      }

      function guardarConfiguracion() {
        const titulo = document.getElementById('titulo-album').value;
        const artista = document.getElementById('artista-album').value;
        const canciones = document.getElementById('canciones').value.split(',');
        alert(`Mockup guardado:\nTítulo: ${titulo}\nArtista: ${artista}\nCanciones: ${canciones.join(', ')}`);
        volverPrincipal();
      }
    </script>
  </body>
</html>
```
### framework
**index.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Spotify Mockup</title>
  <link rel="stylesheet" href="app/app.css" />
</head>
<body>
  <!-- Viewport (framework) -->
  <div id="viewport">
    <div id="grid" class="grid"></div>
  </div>

  <script type="module" src="app/app.js"></script>
</body>
</html>
```
#### app
**app.css**
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f5f5f5;
}

#viewport {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

/* 2x2 grid */
.grid {
  width: 200%;
  height: 200%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.5s ease;
}

/* Each “screen slot” fills one quadrant */
.screen-slot {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

/* Screen wrapper (IMPORTANT FIX HERE) */
.screen {
  width: 100%;
  height: 100%;
  padding: 20px;

  position: relative;   /* FIX: anchor absolute buttons */
  padding-bottom: 90px; /* FIX: leave room for bottom buttons */
}
```
**app.js**
```js
const grid = document.getElementById("grid");

const state = {
  album: {
    titulo: "Título del Álbum",
    artista: "Artista",
    canciones: [
      { nombre: "Canción 1", duracion: "3:45" },
      { nombre: "Canción 2", duracion: "4:20" },
      { nombre: "Canción 3", duracion: "3:10" },
    ],
    portada: "https://via.placeholder.com/200",
  },
};

const routes = {
  principal: { x: 0, y: 0, path: "screens/principal" },
  album:     { x: 1, y: 0, path: "screens/album" },
  config:    { x: 0, y: 1, path: "screens/config" },
  // (x:1,y:1) free slot if you want later
};

const loaded = new Map();

function moveTo(routeName) {
  const r = routes[routeName];
  if (!r) throw new Error(`Unknown route: ${routeName}`);
  const xPx = window.innerWidth * r.x;
  const yPx = window.innerHeight * r.y;
  grid.style.transform = `translate(${-xPx}px, ${-yPx}px)`;
}

function ensureSlotElements() {
  // build the 2x2 slots once
  if (grid.children.length) return;
  for (let i = 0; i < 4; i++) {
    const slot = document.createElement("div");
    slot.className = "screen-slot";
    slot.dataset.slot = String(i);
    grid.appendChild(slot);
  }
}

function slotIndexForRoute(routeName) {
  const r = routes[routeName];
  // 2 cols: index = y*2 + x
  return r.y * 2 + r.x;
}

async function loadScreen(routeName) {
  if (loaded.has(routeName)) return;

  const r = routes[routeName];
  const slot = grid.children[slotIndexForRoute(routeName)];

  // 1) HTML
  const html = await fetch(`${r.path}/screen.html`).then(res => res.text());
  slot.innerHTML = html;

  // 2) CSS (inject once per screen)
  const cssId = `css-${routeName}`;
  if (!document.getElementById(cssId)) {
    const css = await fetch(`${r.path}/screen.css`).then(res => res.text());
    const style = document.createElement("style");
    style.id = cssId;
    style.textContent = css;
    document.head.appendChild(style);
  }

  // 3) JS (module import)
  const mod = await import(`../${r.path}/screen.js`);
  if (typeof mod.init === "function") {
    mod.init({
      route: routeName,
      root: slot,
      navigate,
      state,
      setState: (patch) => Object.assign(state, patch),
    });
  }

  loaded.set(routeName, true);
}

async function navigate(routeName, params = {}) {
  await loadScreen(routeName);

  // If screen module exposes onShow, call it
  const r = routes[routeName];
  const mod = await import(`../${r.path}/screen.js`);
  if (typeof mod.onShow === "function") {
    mod.onShow({ route: routeName, params, state });
  }

  moveTo(routeName);
}

// Boot
ensureSlotElements();
await loadScreen("principal");
await loadScreen("album");
await loadScreen("config");
navigate("principal");

// Keep movement correct on resize
window.addEventListener("resize", () => {
  // Re-apply current transform by reading last route from hash (or track it)
  // Minimal approach: go back to principal; you can improve this.
  navigate("principal");
});
```
#### screens
##### album
**screen.css**
```css
.album {
  background: #ea4335;
  height: 100%;
}

.detalle-album {
  text-align: center;
  padding: 20px;
}

.portada-grande {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 0 auto 20px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.2);
}

.titulo-album {
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
}

.artista-album {
  color: #e0e0e0;
  margin-bottom: 20px;
}

.boton-reproducir {
  background: white;
  color: #ea4335;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
}

.lista-canciones {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  text-align: left;
  color: #fff;
}

.cancion {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* FIX: was position: fixed */
.boton-navegacion {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #333;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
}
```
**screen.html**
```html
<div class="screen album">
  <div class="detalle-album">
    <img class="portada-grande" id="portada-detalle" alt="Portada" />
    <h2 class="titulo-album" id="titulo-detalle">Título del Álbum</h2>
    <p class="artista-album" id="artista-detalle">Artista</p>

    <button class="boton-reproducir" type="button">Reproducir</button>

    <div class="lista-canciones" id="lista-canciones">
      <h3>Canciones</h3>
      <!-- Songs injected by JS -->
    </div>
  </div>

  <!-- IMPORTANT: this button must exist -->
  <button class="boton-navegacion" id="btn-volver" type="button">Volver</button>
</div>
```
**screen.js**
```js
let rootRef = null;

export function init({ root, navigate, state }) {
  rootRef = root;

  const btn = root.querySelector("#btn-volver");
  if (btn) {
    btn.addEventListener("click", () => navigate("principal"));
  }

  // Optional: render once in case you land here first
  render(state);
}

export function onShow({ state }) {
  render(state);
}

function render(state) {
  if (!rootRef) return;

  const portada = rootRef.querySelector("#portada-detalle");
  const titulo = rootRef.querySelector("#titulo-detalle");
  const artista = rootRef.querySelector("#artista-detalle");
  const lista = rootRef.querySelector("#lista-canciones");

  if (portada) portada.src = state.album.portada || "https://via.placeholder.com/200";
  if (titulo) titulo.textContent = state.album.titulo || "Título del Álbum";
  if (artista) artista.textContent = state.album.artista || "Artista";

  const canciones = Array.isArray(state.album.canciones) ? state.album.canciones : [];
  const cancionesHtml = canciones.map(c => `
    <div class="cancion">
      <span>${c.nombre}</span>
      <span>${c.duracion}</span>
    </div>
  `).join("");

  if (lista) {
    lista.innerHTML = `<h3>Canciones</h3>${cancionesHtml}`;
  }
}
```
##### config
**screen.css**
```css
.config {
  background: #34a853;
  height: 100%;
  color: #fff;
}

.config h1 {
  margin-bottom: 20px;
}

.opcion-config {
  margin-bottom: 20px;
}

.opcion-config label {
  display: block;
  margin-bottom: 8px;
}

.opcion-config input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.opcion-config input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.boton-guardar {
  background: white;
  color: #34a853;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
}

/* FIX: was position: fixed */
.boton-navegacion {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #333;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
}
```
**screen.html**
```html
<div class="screen config">
  <h1>Configuración del Mockup</h1>

  <div class="opcion-config">
    <label for="titulo-album">Título del Álbum:</label>
    <input type="text" id="titulo-album" placeholder="Ej: Mi Álbum">
  </div>

  <div class="opcion-config">
    <label for="artista-album">Artista:</label>
    <input type="text" id="artista-album" placeholder="Ej: Artista Ejemplo">
  </div>

  <div class="opcion-config">
    <label for="canciones">Canciones (separadas por coma):</label>
    <input type="text" id="canciones" placeholder="Ej: Canción 1, Canción 2, Canción 3">
  </div>

  <button class="boton-guardar" id="btn-guardar">Guardar Mockup</button>
  <button class="boton-navegacion" id="btn-volver">Volver</button>
</div>
```
**screen.js**
```js
export function init({ root, navigate, state }) {
  const inputTitulo = root.querySelector("#titulo-album");
  const inputArtista = root.querySelector("#artista-album");
  const inputCanciones = root.querySelector("#canciones");

  // Pre-fill from state
  inputTitulo.value = state.album.titulo ?? "";
  inputArtista.value = state.album.artista ?? "";
  inputCanciones.value = (state.album.canciones ?? []).map(c => c.nombre).join(", ");

  root.querySelector("#btn-volver").addEventListener("click", () => navigate("principal"));

  root.querySelector("#btn-guardar").addEventListener("click", () => {
    state.album.titulo = inputTitulo.value.trim() || "Sin título";
    state.album.artista = inputArtista.value.trim() || "Sin artista";

    const nombres = inputCanciones.value
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    state.album.canciones = nombres.length
      ? nombres.map((n, i) => ({ nombre: n, duracion: ["3:45","4:20","3:10"][i % 3] }))
      : [];

    alert("Mockup guardado");
    navigate("principal");
  });
}
```
##### principal
**screen.css**
```css
.principal {
  background: #4285f4;
  height: 100%;
}

.principal h1 {
  margin-bottom: 15px;
  color: #fff;
}

.lista-albumes {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.album {
  display: flex;
  align-items: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
}

.portada-album {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 15px;
  object-fit: cover;
}

.info-album h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #fff;
}

.info-album p {
  margin: 0;
  color: #e0e0e0;
  font-size: 14px;
}

/* FIX: was position: fixed */
.boton-navegacion {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #333;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
}
```
**screen.html**
```html
<div class="screen principal">
  <h1>Tus Álbumes</h1>

  <div class="lista-albumes" id="lista-albumes">
    <!-- Filled by JS -->
  </div>

  <button class="boton-navegacion" id="btn-config">Ir a Configuración</button>
</div>
```
**screen.js**
```js
const albumsDemo = [
  { titulo: "Álbum 1", artista: "Artista 1", portada: "https://via.placeholder.com/60" },
  { titulo: "Álbum 2", artista: "Artista 2", portada: "https://via.placeholder.com/60" },
  { titulo: "Álbum 3", artista: "Artista 3", portada: "https://via.placeholder.com/60" },
];

export function init({ root, navigate, state }) {
  const lista = root.querySelector("#lista-albumes");
  const btnConfig = root.querySelector("#btn-config");

  lista.innerHTML = albumsDemo.map(a => `
    <div class="album" data-titulo="${a.titulo}" data-artista="${a.artista}" data-portada="${a.portada}">
      <img src="${a.portada}" class="portada-album">
      <div class="info-album">
        <h3>${a.titulo}</h3>
        <p>${a.artista}</p>
      </div>
    </div>
  `).join("");

  lista.addEventListener("click", (e) => {
    const item = e.target.closest(".album");
    if (!item) return;

    state.album.titulo = item.dataset.titulo;
    state.album.artista = item.dataset.artista;
    state.album.portada = item.dataset.portada;

    navigate("album", { from: "principal" });
  });

  btnConfig.addEventListener("click", () => navigate("config"));
}
```
## Informe
## Poligonos a partir de mapas
**007-Guardar poligonos.html**
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>OSM Buildings → Send to PHP → Save as SVG</title>

  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  />
  <style>
    html, body { height: 100%; margin: 0; }
    #app { height: 100%; display: flex; flex-direction: column; }
    #toolbar {
      padding: 10px;
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      background: #0b1220;
      color: #e7eefc;
    }
    #toolbar input {
      width: 120px;
      padding: 6px 8px;
      border-radius: 8px;
      border: 1px solid #2b3550;
      background: #111a2f;
      color: #e7eefc;
    }
    #toolbar button {
      padding: 8px 10px;
      border-radius: 10px;
      border: 1px solid #2b3550;
      background: #17244a;
      color: #e7eefc;
      cursor: pointer;
    }
    #toolbar button:hover { filter: brightness(1.1); }
    #status { margin-left: auto; opacity: .9; font-size: 12px; }
    #map { flex: 1; }
    .hint { font-size: 12px; opacity: .85; }
  </style>
</head>
<body>
<div id="app">
  <div id="toolbar">
    <button id="btnLocate">Geolocate</button>

    <span class="hint">BBox (lat1,lon1,lat2,lon2):</span>
    <input id="lat1" placeholder="lat1" value="39.4700">
    <input id="lon1" placeholder="lon1" value="-0.3790">
    <input id="lat2" placeholder="lat2" value="39.4755">
    <input id="lon2" placeholder="lon2" value="-0.3715">

    <button id="btnLoad">Load buildings</button>
    <button id="btnSend">Send polygons → PHP (SVG)</button>

    <span id="status">Idle</span>
  </div>

  <div id="map"></div>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
/* ---------------------------
   Basic map
---------------------------- */
const map = L.map('map').setView([39.4712, -0.3768], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

const buildingsLayer = L.geoJSON(null, {
  style: { weight: 1, opacity: 0.9, fillOpacity: 0.25 }
}).addTo(map);

let lastPolygonsGeoJSON = null;

const statusEl = document.getElementById('status');
function setStatus(msg){ statusEl.textContent = msg; }

/* ---------------------------
   Overpass helpers
---------------------------- */
const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.nchc.org.tw/api/interpreter"
];

// Simple retry with backoff and endpoint fallback
async function fetchWithFallback(urls, fetchOptions, retriesPerEndpoint = 2) {
  let lastErr = null;

  for (const url of urls) {
    for (let attempt = 0; attempt <= retriesPerEndpoint; attempt++) {
      try {
        const res = await fetch(url, fetchOptions);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
      } catch (e) {
        lastErr = e;
        const backoff = 600 * (attempt + 1);
        await new Promise(r => setTimeout(r, backoff));
      }
    }
  }
  throw lastErr || new Error("Failed to fetch");
}

// Build Overpass query: buildings ways/relations in bbox
function buildOverpassQuery(bbox) {
  // bbox: [south, west, north, east]
  const [s, w, n, e] = bbox;
  return `
[out:json][timeout:60];
(
  way["building"](${s},${w},${n},${e});
  relation["building"](${s},${w},${n},${e});
);
out body;
>;
out skel qt;
`.trim();
}

function getBBoxFromInputs() {
  const lat1 = parseFloat(document.getElementById('lat1').value);
  const lon1 = parseFloat(document.getElementById('lon1').value);
  const lat2 = parseFloat(document.getElementById('lat2').value);
  const lon2 = parseFloat(document.getElementById('lon2').value);

  // Normalize to south, west, north, east
  const s = Math.min(lat1, lat2);
  const n = Math.max(lat1, lat2);
  const w = Math.min(lon1, lon2);
  const e = Math.max(lon1, lon2);

  return [s, w, n, e];
}

/* ---------------------------
   Convert Overpass JSON → GeoJSON polygons
   - ways with node lists
   - relations (multipolygon) simplified: outer rings only
---------------------------- */
function overpassToGeoJSON(data) {
  const nodes = new Map();
  const ways = new Map();
  const relations = [];

  for (const el of data.elements || []) {
    if (el.type === "node") nodes.set(el.id, [el.lat, el.lon]);
    else if (el.type === "way") ways.set(el.id, el);
    else if (el.type === "relation") relations.push(el);
  }

  function wayToRing(way) {
    const coords = [];
    for (const nid of (way.nodes || [])) {
      const ll = nodes.get(nid);
      if (!ll) continue;
      coords.push([ll[1], ll[0]]); // GeoJSON uses [lon,lat]
    }
    // Need closed ring
    if (coords.length >= 3) {
      const first = coords[0], last = coords[coords.length - 1];
      if (first[0] !== last[0] || first[1] !== last[1]) coords.push([...first]);
    }
    return coords.length >= 4 ? coords : null;
  }

  const features = [];

  // Ways directly tagged as buildings
  for (const way of ways.values()) {
    if (!way.tags || !way.tags.building) continue;
    const ring = wayToRing(way);
    if (!ring) continue;

    features.push({
      type: "Feature",
      properties: {
        osm_type: "way",
        osm_id: way.id,
        building: way.tags.building || "yes",
        name: way.tags.name || null
      },
      geometry: {
        type: "Polygon",
        coordinates: [ring]
      }
    });
  }

  // Relations (multipolygon) - take outer rings
  for (const rel of relations) {
    if (!rel.tags || !rel.tags.building) continue;

    const outers = [];
    for (const m of (rel.members || [])) {
      if (m.type !== "way") continue;
      if (m.role !== "outer") continue;
      const w = ways.get(m.ref);
      if (!w) continue;
      const ring = wayToRing(w);
      if (ring) outers.push(ring);
    }
    if (!outers.length) continue;

    // If multiple outers: MultiPolygon
    const geom = (outers.length === 1)
      ? { type: "Polygon", coordinates: [outers[0]] }
      : { type: "MultiPolygon", coordinates: outers.map(r => [r]) };

    features.push({
      type: "Feature",
      properties: {
        osm_type: "relation",
        osm_id: rel.id,
        building: rel.tags.building || "yes",
        name: rel.tags.name || null
      },
      geometry: geom
    });
  }

  return { type: "FeatureCollection", features };
}

/* ---------------------------
   Actions
---------------------------- */
document.getElementById('btnLocate').addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert("Geolocation not supported.");
    return;
  }
  setStatus("Geolocating…");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      map.setView([latitude, longitude], 17);
      L.circleMarker([latitude, longitude], { radius: 6 }).addTo(map);
      setStatus(`You: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
    },
    (err) => {
      setStatus("Geolocation error");
      alert(err.message);
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
  );
});

document.getElementById('btnLoad').addEventListener('click', loadBuildings);
async function loadBuildings() {
  buildingsLayer.clearLayers();
  lastPolygonsGeoJSON = null;

  // IMPORTANT: keep bbox SMALL to avoid Overpass timeouts
  const bbox = getBBoxFromInputs();
  const query = buildOverpassQuery(bbox);

  setStatus("Loading buildings from Overpass…");

  try {
    const payload = new URLSearchParams({ data: query }).toString();
    const data = await fetchWithFallback(
      OVERPASS_ENDPOINTS.map(u => `${u}?${payload}`),
      { method: "GET" },
      2
    );

    const geo = overpassToGeoJSON(data);
    lastPolygonsGeoJSON = geo;

    buildingsLayer.addData(geo);

    // zoom to layer
    const b = buildingsLayer.getBounds();
    if (b.isValid()) map.fitBounds(b.pad(0.05));

    setStatus(`Loaded polygons: ${geo.features.length}`);
  } catch (e) {
    console.error(e);
    setStatus("Overpass error (try smaller bbox)");
    alert("Overpass failed (often 504). Try a smaller BBox or retry later.\n\n" + e.message);
  }
}

document.getElementById('btnSend').addEventListener('click', sendPolygonsToPHP);
async function sendPolygonsToPHP() {
  if (!lastPolygonsGeoJSON || !lastPolygonsGeoJSON.features.length) {
    alert("No polygons loaded yet. Click 'Load buildings' first.");
    return;
  }

  // Area name used as filename prefix on server
  const areaName = "valencia_centro";

  setStatus("Sending polygons to PHP…");

  try {
    const res = await fetch("save_polygons.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        area: areaName,
        geojson: lastPolygonsGeoJSON
      })
    });

    const out = await res.json();
    if (!res.ok) throw new Error(out.error || `HTTP ${res.status}`);

    setStatus("Saved SVG: " + out.file);
    alert("SVG saved on server:\n" + out.file);
  } catch (e) {
    console.error(e);
    setStatus("PHP save error");
    alert("Error sending to PHP:\n" + e.message);
  }
}
</script>
</body>
</html>
```
**save_polygons.php**
```php
<?php
// save_polygons.php
// Receives: { area: "name", geojson: FeatureCollection }
// Saves: exports/name_YYYYmmdd_HHMMSS.svg

header('Content-Type: application/json; charset=utf-8');

function fail($msg, $code = 400) {
  http_response_code($code);
  echo json_encode(["ok" => false, "error" => $msg], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
  exit;
}

$raw = file_get_contents("php://input");
if ($raw === false || trim($raw) === "") fail("Empty body");

$data = json_decode($raw, true);
if (!is_array($data)) fail("Invalid JSON");

$area = $data["area"] ?? "area";
$geo  = $data["geojson"] ?? null;

if (!is_string($area)) $area = "area";
$area = preg_replace('/[^a-zA-Z0-9_\-]+/', '_', $area);

if (!is_array($geo) || ($geo["type"] ?? "") !== "FeatureCollection") {
  fail("geojson must be a FeatureCollection");
}

$features = $geo["features"] ?? [];
if (!is_array($features) || count($features) === 0) fail("No features");

// Collect all lon/lat points to compute bounds
$all = [];

function push_coords(&$all, $coords) {
  // coords could be:
  // Polygon: [ [ [lon,lat], ... ] , [hole...], ...]
  // MultiPolygon: [ [ [ [lon,lat], ... ] ], ... ]
  if (!is_array($coords)) return;

  // Detect depth by checking first items
  // We will recursively walk arrays until we find [lon,lat]
  $stack = [$coords];
  while ($stack) {
    $x = array_pop($stack);
    if (!is_array($x)) continue;

    // Candidate point: [lon, lat]
    if (count($x) === 2 && is_numeric($x[0]) && is_numeric($x[1])) {
      $all[] = [(float)$x[0], (float)$x[1]];
      continue;
    }
    // Otherwise expand
    foreach ($x as $y) $stack[] = $y;
  }
}

foreach ($features as $f) {
  $g = $f["geometry"] ?? null;
  if (!is_array($g)) continue;
  $type = $g["type"] ?? "";
  $coords = $g["coordinates"] ?? null;
  if ($type === "Polygon" || $type === "MultiPolygon") {
    push_coords($all, $coords);
  }
}

if (count($all) < 3) fail("Not enough coordinates to build SVG");

$minLon = $maxLon = $all[0][0];
$minLat = $maxLat = $all[0][1];

foreach ($all as $p) {
  $lon = $p[0]; $lat = $p[1];
  if ($lon < $minLon) $minLon = $lon;
  if ($lon > $maxLon) $maxLon = $lon;
  if ($lat < $minLat) $minLat = $lat;
  if ($lat > $maxLat) $maxLat = $lat;
}

// SVG canvas size
$W = 1400;
$H = 1000;
$pad = 20;

// Map lon/lat to x/y (simple equirectangular projection)
$lonSpan = max(1e-12, $maxLon - $minLon);
$latSpan = max(1e-12, $maxLat - $minLat);

function proj($lon, $lat, $minLon, $minLat, $lonSpan, $latSpan, $W, $H, $pad) {
  // x: left->right is lon increasing
  // y: top->bottom is lat decreasing (invert)
  $x = $pad + (($lon - $minLon) / $lonSpan) * ($W - 2*$pad);
  $y = $pad + (1.0 - (($lat - $minLat) / $latSpan)) * ($H - 2*$pad);
  return [$x, $y];
}

// Build SVG paths from GeoJSON Polygon/MultiPolygon (outer rings only)
function ring_to_path($ring, $minLon, $minLat, $lonSpan, $latSpan, $W, $H, $pad) {
  if (!is_array($ring) || count($ring) < 4) return "";
  $d = "";
  $first = true;
  foreach ($ring as $pt) {
    if (!is_array($pt) || count($pt) < 2) continue;
    $lon = (float)$pt[0];
    $lat = (float)$pt[1];
    [$x, $y] = proj($lon, $lat, $minLon, $minLat, $lonSpan, $latSpan, $W, $H, $pad);
    $cmd = $first ? "M" : "L";
    $d .= $cmd . " " . round($x, 2) . " " . round($y, 2) . " ";
    $first = false;
  }
  $d .= "Z";
  return trim($d);
}

$paths = [];
foreach ($features as $f) {
  $g = $f["geometry"] ?? null;
  if (!is_array($g)) continue;
  $type = $g["type"] ?? "";
  $coords = $g["coordinates"] ?? null;

  if ($type === "Polygon" && is_array($coords) && isset($coords[0])) {
    // coords[0] is outer ring
    $d = ring_to_path($coords[0], $minLon, $minLat, $lonSpan, $latSpan, $W, $H, $pad);
    if ($d !== "") $paths[] = $d;

  } elseif ($type === "MultiPolygon" && is_array($coords)) {
    foreach ($coords as $poly) {
      if (is_array($poly) && isset($poly[0])) {
        $d = ring_to_path($poly[0], $minLon, $minLat, $lonSpan, $latSpan, $W, $H, $pad);
        if ($d !== "") $paths[] = $d;
      }
    }
  }
}

if (count($paths) === 0) fail("No valid polygon paths to write");

// Prepare folder
$dir = __DIR__ . "/exports";
if (!is_dir($dir)) {
  if (!mkdir($dir, 0775, true)) fail("Cannot create exports directory", 500);
}

// Filename
$ts = date("Ymd_His");
$file = "{$area}_{$ts}.svg";
$full = $dir . "/" . $file;

// SVG content
$svg  = '';
$svg .= '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
$svg .= '<svg xmlns="http://www.w3.org/2000/svg" width="'.$W.'" height="'.$H.'" viewBox="0 0 '.$W.' '.$H.'">' . "\n";
$svg .= '  <rect x="0" y="0" width="'.$W.'" height="'.$H.'" fill="#0b1220"/>' . "\n";
$svg .= '  <g fill="#e7eefc" fill-opacity="0.18" stroke="#e7eefc" stroke-opacity="0.7" stroke-width="1">' . "\n";

foreach ($paths as $d) {
  $svg .= '    <path d="'.htmlspecialchars($d, ENT_QUOTES, 'UTF-8').'"/>' . "\n";
}

$svg .= "  </g>\n";
$svg .= "</svg>\n";

if (file_put_contents($full, $svg) === false) {
  fail("Cannot write SVG file", 500);
}

echo json_encode([
  "ok" => true,
  "file" => "exports/" . $file,
  "count" => count($paths),
  "bounds" => [
    "minLon" => $minLon, "minLat" => $minLat,
    "maxLon" => $maxLon, "maxLat" => $maxLat
  ]
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
```
### exports