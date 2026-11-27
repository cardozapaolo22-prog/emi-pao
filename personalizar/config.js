/* =====================================================================================
   PERSONALIZA EL JUEGO AQUÍ  (no hace falta tocar nada más)

   - Textos: cambia lo que está entre comillas. No borres las comas ni las comillas.
   - Fotos: sube tus fotos a la carpeta personalizar/fotos con estos mismos nombres
     (fruta-01.png ... fruta-11.png) o escribe aquí el nombre de tu archivo
     (por ejemplo "personalizar/fotos/playa.jpg"). Sirve cualquier foto del celular:
     el juego la recorta en círculo y la ajusta al tamaño de cada fruta.
     fruta-01 es la más chiquita (la primera que cae) y fruta-11 la más grande (la sandía).
   - Para volver a la fruta original en un puesto, deja sus comillas vacías: ""

   Instrucciones completas: PERSONALIZAR.md
   ===================================================================================== */
window.PERSONALIZAR = {

  // Nombre de la página (pestaña del navegador y al guardarla en la pantalla de inicio)
  titulo: "Junta nuestras fotos ❤",

  // De la más chica a la más grande
  fotos: [
    "personalizar/fotos/fruta-01.png",
    "personalizar/fotos/fruta-02.png",
    "personalizar/fotos/fruta-03.png",
    "personalizar/fotos/fruta-04.png",
    "personalizar/fotos/fruta-05.png",
    "personalizar/fotos/fruta-06.png",
    "personalizar/fotos/fruta-07.png",
    "personalizar/fotos/fruta-08.png",
    "personalizar/fotos/fruta-09.png",
    "personalizar/fotos/fruta-10.png",
    "personalizar/fotos/fruta-11.png"
  ],

  // Textos del juego ({n} = el número que pone el juego)
  textos: {
    finDelJuego:  "FIN DEL JUEGO",
    verPuntaje:   "Toca para ver tu puntaje",
    continuar:    "Toca para continuar",
    superaste:    "¡Superaste al {n}% de los jugadores!",
    record:       "Récord:",
    empezar:      "Empezar",
    jugarOtraVez: "Jugar otra vez",
    masJuegos:    "Más juegos"
  },

  // Adónde lleva el botón "más juegos" del final (vacío = no hace nada)
  enlaceMasJuegos: "./",

  // Si cambiaste una foto y el celular sigue mostrando la vieja, sube este número (2, 3...)
  version: 1
};
