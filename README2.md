
## Test finalizado para la postulación a Beetrack

Se finalizo el test propuesto, cumpliendo con los requerimientos descritos en el archivo 'README.md'.

El nuevo proyecto se encuentra estructurado por medio de la arquitectura 'cliente-servidor', en donde se comunican los datos entre la api (json server) y el cliente (creado por medio de la libreria ReactJS) por medio de peticiones del tipo HTTP.

Los componentes de React se encuentran estructurados por carpetas, principalmente dividios en 'componentes' (nodos hijos) y 'contenedores' (nodos padres), ademas se encuentra una carpeta de stylos, donde se encuentran los archivos que proporcionan la apariencia para cada componente.
Nota: se hizo uso del framework Boostrap netamenta para la maquetacion de los elementos por medio del sistema de grillas* 

Para ejecutar el nuevo proyecto es necesario poseer una version de 'nodejs >= 6' (por temas de performance).
Luego desde el directorio del proyecto, ejecutar el comando 'npm install' desde la consola.
Posterior a esto, es necesario ejecutar el cliente y el servidor respectivamente por medio de los siguientes comandos:

1) Servidor --> node server.js
2) Cliente --> npm start

Una vez ejecutados ambos comandos, cada proceso se ejecutara de manera independiente en distintos puertos:

1) Servidor --> http://localhost:3000/
2) Cliente --> http://localhost:8080/

El servidor solo se encargara de recibir y resolver los peticiones desde el cliente, por lo que no es necesario manipularlo directamente, no obstante se debe asegurar que se encuentra ejecutando.
Finalmente, accedemos a la ruta del cliente (http://localhost:8080/) para comenzar a utilizar la aplicación.
