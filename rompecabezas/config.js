/* =====================================================================================
   PERSONALIZA EL ROMPECABEZAS AQUÍ  (no hace falta tocar nada más)

   - Cada nivel es una foto. Sube tus fotos a la carpeta rompecabezas/fotos y escribe aquí
     su nombre (por ejemplo "fotos/playa.jpg"). Sirve cualquier foto del celular: se usa el
     cuadrado del centro.
   - piezas: 3 = fácil (3x3), 4 = medio (4x4), 5 = difícil (5x5).
   - mensaje: lo que aparece al terminar esa foto.
   - Puedes agregar más niveles copiando un bloque { ... }, (con su coma al final).
   - Cambia lo que está entre comillas. No borres las comas ni las comillas.

   Instrucciones completas: PERSONALIZAR.md (en la carpeta principal)
   ===================================================================================== */
window.ROMPECABEZAS = {

  titulo: "Nuestro rompecabezas",
  para: "Para Emily ❤",
  inicio: "Arma nuestras fotos: cada una esconde un mensaje.",

  niveles: [
    { foto: "../personalizar/fotos/fruta-11.png", piezas: 3, mensaje: "Me encantas, mi amorcito ❤" },
    { foto: "../personalizar/fotos/fruta-07.png", piezas: 3, mensaje: "Cada foto contigo es mi favorita." },
    { foto: "../personalizar/fotos/fruta-08.png", piezas: 4, mensaje: "Gracias por cada risa y cada abrazo." },
    { foto: "../personalizar/fotos/fruta-10.png", piezas: 4, mensaje: "Contigo todo es más bonito." },
    { foto: "../personalizar/fotos/fruta-09.png", piezas: 5, mensaje: "Y lo mejor todavía está por venir." }
  ],

  // Al terminar todas las fotos
  final: "¡Las armaste todas! Te quiero muchísimo ❤",

  // Botón para ir al otro juego (vacío = no se muestra)
  enlaceOtroJuego: "../",
  textoOtroJuego: "← Menú de juegos"
};
