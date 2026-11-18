# App Mey-Ko Prototipo

Abre `index.html` desde esta carpeta. En una computadora, la propuesta conserva el ancho de una app móvil. Puedes mover la carpeta completa: incluye los datos y las imágenes que necesita la demo.

El archivo de entrada está en la raíz. La estructura del prototipo es la siguiente.

```text
index.html
css/estilos.css
js/app.js
js/data/catalogo.js
js/data/sucursales.js
assets/images/
  marca/
  productos/
  categorias/
  banners/
  especialidades/
  sucursales/
docs/fuentes-imagenes.md
```

Las categorías se mantienen en `js/data/catalogo.js`. Tienda muestra todas en tres columnas y cada categoría define su imagen relativa a `assets/images/`. Inicio presenta las primeras tres. El menú inferior contiene Inicio, Tienda, Carrito y Cuenta. Promociones se encuentra en el menú hamburguesa.

**Tesis visual:** una tienda de salud cercana y tranquila, con blanco, azul Pantone, luz natural y curvas amplias reservadas para las imágenes y los accesos principales.

**Contenido:** bienvenida e ingreso, inicio personalizado con búsqueda y accesos a atención, tienda por categorías, ficha y carrito. Promociones, especialidades y sucursales complementan la compra; Cuenta reúne deseos e historial.

**Interacción:** entrada breve de texto e imagen en portada, menú lateral deslizante, botón de compra anclado en la ficha. Ajustes permite reducir el movimiento; también se respeta la preferencia del sistema.

**Color:** `#004B87` para marca, botones y estados activos; `#FFFFFF` para superficies; `#0C216D` para títulos y texto de alto contraste. `#3EB1F1` se mezcla con blanco para tintes de apoyo. `#FC1A1C` se reserva para avisos de error, con texto oscuro para legibilidad. No se necesita negro puro en esta propuesta.

Prueba como invitado o usa la cuenta de ejemplo. Busca «tensiómetro», guarda un producto, abre su ficha, ajusta la cantidad y prueba una compra hasta la confirmación. El navegador conserva el carrito, los deseos y el historial de prueba cuando permite almacenamiento local. No se guardan contraseñas, datos de entrega ni datos de pago. No hay autenticación, cobros ni envíos reales. Precios, promociones, imágenes de producto y existencias son ilustrativos. El logotipo se reutilizó de los recursos de la maqueta anterior, sin cambios. La foto de portada se generó para esta propuesta con ImageGen: una fotografía editorial vertical con un tensiómetro genérico, brazalete azul, tela blanca y luz natural en un hogar, sin texto ni marcas.

Busca «botiquín» y abre **Botiquín para medicamentos** para probar la alternativa portátil. Para simular un cambio de existencias, agrega el tensiómetro y el oxímetro al carrito y pulsa **Simular que se agota un producto**. Quita el oxímetro y continúa con el tensiómetro. El primer intento de pago mostrará un error de prueba y el segundo confirmará el pedido.

**Consultar por WhatsApp** abre un mensaje editable con la referencia del producto. **Simular envío** confirma la acción dentro de la demo. La página de privacidad se tomó del [sitio de Mey-Ko](https://www.meyko.com/). Las otras referencias son [Especialidades](https://www.meyko.com/especialidades) y [Sucursales](https://www.meyko.com/sucursales).
