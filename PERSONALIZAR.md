# Cómo cambiar fotos y textos

## La forma fácil: el panel con clave
Entra a **https://cardozapaolo22-prog.github.io/emi-pao/admin/** (o toca «🔒 Fotos» en el menú) y escribe tu clave.

* **Rompecabezas:** agregar, cambiar, ordenar o quitar fotos; cambiar el mensaje y la dificultad de cada una.
* **Junta fotos:** cambiar la foto de cada puesto (1 = la más chiquita, 11 = la más grande) o volver a la original.
* **Textos:** título, dedicatoria, frase de inicio y mensaje final del rompecabezas.

Los cambios se guardan en este repositorio y se ven en los juegos 1 o 2 minutos después.

### La clave (se crea una sola vez)
Es una «llave» de GitHub que solo puede tocar este repositorio:
1. https://github.com/settings/personal-access-tokens/new
2. Nombre: «Panel emi-pao». Expiración: la más larga.
3. Repository access → Only select repositories → **emi-pao**.
4. Permissions → Repository → **Contents: Read and write**.
5. Generate token → cópialo y pégalo en el panel.

Si la pierdes o vence, crea otra igual. Para quitarle el acceso, bórrala en esa misma página de GitHub.

## A mano (sin panel)
* `rompecabezas/config.js` y la carpeta `rompecabezas/fotos/`
* `personalizar/config.js` y la carpeta `personalizar/fotos/` (Junta nuestras fotos)
* Las piezas de **Petris** están en `petris/mascotas/` (y su portada es `petris/portada.webp`).
