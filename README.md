# Data Lovers
### by Ily + Alex

## Índice

- Definición del producto
- Historias de usuario
- Prototipo de baja fidelidad
- Diseño de interfaz de usuario
- Problemas de tests de utilidad
- Checklist

---

## Definición del producto

LabaNews es un proyecto que diseñamos para usuarios con edad de 13 años en delante, tomando en cuenta que son personas que juegan videojuegos, principalmente en PC, con el objetivo de brindar una plataforma sencilla, intuitiva y eficiente para ver noticias relacionadas con videojuegos, en este caso de Team Fortress 2.
La pagina esta diseñada para que el usuario pueda visualizar rápidamente las noticias disponibles, y que si lo requiere pueda organizarlas por fecha, título, o que pueda filtrarlas por autor.

## Historias de usuario

- El usuario necesita ver un preview de la noticia para poder decidir cuál leer.
  - El usuario puede ver las noticias como módulos en la página príncipal de manera sencilla y ordenada, cada una mostrando el título.

- El usuario necesita poder ver una breve descripción de la noticia para saber de que trata, y decidir si esa es la opción que le interesa leer.
  - El usuario, al hacer hover y colocar el mouse sobre uno de los módulos de noticias, puede ver una breve descripción de la noticia.

- El usuario necesita poder acceder fácilmente a la noticia al hacer click, sin perder la página principal.
  - Al hacer click en uno de los modulos de noticias se abre el URL en una ventana nueva, para que el usuario pueda leer la noticia completa.

- El usuario debe poder subir a la parte superior de la página rápidamente para acceder a botón de "Filtrar".
  - Al usuario se le aparece un botón con una flecha apuntando hacia arriba, el usuario al dar click se regresa a la parte superior si así desea.

- El usuario necesita poder ordenar las noticias por fecha, para poder ver la más reciente primero.
  - El usuario al hacer click en la opción de "Ordenar por fecha", dentro del menú "Filtrar", podrá visualizar las noticias ordenadas de más reciente a más antigüa.

- El usuario necesita poder ordenar las noticias por título alfabético, para visualizarlas de la A-Z.
  - El usuario al hacer click en la opción de "Ordenar por título", dentro del menú "Filtrar", podrá visualizar las noticias ordenadas en base al autor, por orden alfabético.

- El usuario debe poder filtrar las noticias, y visualizar únicamente las que tienen autor.
  - El usuario al hacer click en la opción de "Filtrar noticias por autor", dentro del menú "Filtrar", podrá visualizar las únicamente las noticias que tengan autor.

## Prototipo de baja fidelidad



## Diseño de interfaz de usuario



## Problemas de tests de utilidad

---

## Checklist

- [x] Usa VanillaJS.
- [x] No hace uso de `this`.
- [ ] Pasa linter (`npm pretest`)
- [ ] Pasa tests (`npm test`)
- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y lines y branches.
- [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [ ] Incluye historias de usuario en `README.md`.
- [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en `README.md`.
- [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad) en `README.md`.
- [ ] Incluye el listado de problemas que detectaste a través de tests de usabilidad en el `README.md`.
- [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [x] UI: Permite ordenar data por uno o más campos (asc y desc).
- [ ] UI: Permite filtrar data en base a una condición.

## Checklist (Opcional)

- [ ] Consume data de forma dinámica (`fetch()`).
- [ ] Utiliza Librerías de graficas (`chart.js` ó `google chart`).
- [ ] Cobertura de coverage al 100%.
