# Requisitos mínimos

## Módulo gestor de Peñas

### Variables
* id_club
* Nombre peña
* Fecha creación peña

### Pantallas
* Creación de peña.
* Edición de nombre o poder eliminarla.
* Gestión de peñas. Donde se enlazarán con el resto de módulos.

## Módulo gestor de integrantes( fundamental)

### Variables
* id_integrante
* Nombre
* Apellidos
* Fecha nacimiento
* Categorias de posición en el campo. Portero, defensa, centrocampista, delantero
* lateral extremo medio centro defensivo y tal para más adelante
* Número de socio.
* Fecha de alta.

### Pantallas
* Añadir uno nuevo
* Editar uno nuevo con opción de eliminar.
* Clasificación global de integrantes, por nivel, puntos,puesto



## Módulo gestor de equipos

### Variables
* id_equipo
* Nombre equipo
* Integrantes que lo forman
* Fecha de creación

### Pantallas
* Creación de equipos, Con opciones de azar o nivelado. Donde se seleccionen previamente a los integrantes que van a participar.
* Editar equipos, por si se quiere cambiar el nombre,eliminarlo o quitar a algun jugador y añadir otro.


## Módulo de partidos

### Variables
* id_partido
* Equipo 1 que juega
* Equipo 2 que juega
* Fecha
* Duración
* Goles de quipo 1
* Goles de equipo 2
* Integrantes que han recibido una tarjeta amarilla
* Integrantes que han recibido dos tarjetas amarillas
* Integrantes que han recibido una tarjeta roja
* Integrantes lesionados
* Otras incidencias. Para añadir otros comentarios.

### Pantallas
* Creación de partidos, donde asignar equipos creados.
* Editar partidos para poder añadir resultados y opción a eliminarlos.

## Módulo gestor económico.

### Variables
* id_apunte
* ¿Ingreso o gasto?
* ¿Es una cuota?
* ¿Es una multa?
* Otro tipo de ingreso
* descripcion del gasto.
* Cantidad.
* Fecha de cuando se hizo.
* Fecha de cuando se apunta

### Pantallas
* Añadir apunte contable.
* Eliminar apunte contable.
* Ver resumen contable.


## Módulo Backup.

### Pantallas
* Guardar base de datos en un fichero
* Cargar base de datos desde un fichero.

