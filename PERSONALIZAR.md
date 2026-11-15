# Cómo personalizar los juegos (sin programar)

Hay dos juegos, y cada uno tiene **un solo archivo** para cambiar textos y fotos:

| Juego | Dirección | Archivo para personalizar | Carpeta de fotos |
|---|---|---|---|
| **Junta nuestras fotos** (las fotos caen y se juntan) | https://cardozapaolo22-prog.github.io/emi-pao/ | `personalizar/config.js` | `personalizar/fotos/` |
| **Nuestro rompecabezas** | https://cardozapaolo22-prog.github.io/emi-pao/rompecabezas/ | `rompecabezas/config.js` | `rompecabezas/fotos/` |

Todo se hace desde la página de GitHub, en el celular o la computadora.

---

## 1. Cambiar una foto

1. En GitHub, entra a la carpeta de fotos del juego (por ejemplo `personalizar/fotos`).
2. **Add file → Upload files** y arrastra tu foto.
   * **Mismo nombre que la que quieres cambiar** (por ejemplo `fruta-03.png`): la reemplaza y listo.
   * **Otro nombre** (por ejemplo `playa.jpg`): después escribe ese nombre en el `config.js`
     (ver el paso 2).
3. Abajo, **Commit changes**.

Cualquier foto del celular sirve (JPG o PNG):
* En **Junta nuestras fotos** se recorta sola en círculo y se ajusta al tamaño de cada fruta.
  `fruta-01` es la más chiquita (la primera que cae) y `fruta-11` la más grande.
  Para que vuelva la fruta original en un puesto, deja sus comillas vacías: `""`.
* En el **rompecabezas** se usa el cuadrado del centro de la foto. Mejor fotos donde lo importante
  esté al centro.

## 2. Cambiar textos (o el nombre de una foto)

1. Abre el `config.js` del juego y toca el **lápiz ✏️** (Edit this file).
2. Cambia solo lo que está **entre comillas**. No borres comas, comillas ni llaves.
3. **Commit changes**.

En el **rompecabezas**, cada foto es un bloque así (puedes copiar uno para agregar más fotos):

```js
{ foto: "fotos/playa.jpg", piezas: 4, mensaje: "Nuestro primer viaje juntos ❤" },
```

* `piezas`: 3 = fácil, 4 = medio, 5 = difícil.
* `mensaje`: lo que aparece al terminar esa foto.

## 3. Ver los cambios

GitHub tarda **1 o 2 minutos** en publicar. Después abre el juego y recarga. Si sigue igual,
el celular guardó la versión vieja: ábrelo en una pestaña privada, o en
`personalizar/config.js` sube el número de `version` (por ejemplo `version: 2`) para obligar a
recargar las fotos.

## Si algo se rompe

* **El juego queda en blanco después de editar `config.js`**: casi siempre falta una coma o una
  comilla. En GitHub, abre el archivo → **History** → el cambio anterior → copia cómo estaba.
* **Una foto no aparece** (sale la fruta o un cuadro vacío): revisa que el nombre en `config.js`
  sea exactamente igual al del archivo, con mayúsculas y la extensión (`.jpg` / `.png`).

> Los repositorios públicos de GitHub se pueden ver por cualquiera que tenga el enlace: las fotos que
> subas aquí también.
