

Institución:

# Industrial El Retoño

Fecha:

# 21-Junio-2026

Versión:

2.1

## **Índice de Contenidos**

[Índice de Contenidos	1](#bookmark=id.gaqfhlqkzm7w)

1. [Introducción	2](#introducción)

2. [Diagnóstico	4](#bookmark=id.oavl67amgqx9)

   1. [Análisis de la Situación	4](#bookmark=id.kbydzio4uuyb)

   2. [Empresas con proyectos similares	4](#bookmark=id.fwax5i3lkb75)

   3. [Riesgos y Dificultades Futuras	4](#bookmark=id.y6y0picbobnp)

   4. [Posibles Usuarios finales	4](#bookmark=id.yd8zsdmv4qd)

   5. [Problemática	5](#bookmark=id.3sbrg9p54m5t)

   6. [Metodología de trabajo	5](#bookmark=id.1hiwqcmaigsy)

3. [Objetivos	6](#bookmark=id.7i23ycuhgkc8)

   1. [Objetivo General	6](#bookmark=id.hkbvwc1pwb69)

   2. [Objetivos Específicos	7](#bookmark=id.2q9jyfxm1tzb)

   3. [Resultados Esperados	7](#bookmark=id.mubbhxhnkaqr)

4. [Ingeniería de Requisitos	7](#bookmark=id.2j3479wu4is5)

   1. [Requerimientos funcionales	7](#bookmark=id.x330d47e54la)

   [Tabla 1\. Requerimientos funcionales del sistema	8](#bookmark=id.391zoaxqm1f3)

   2. [Requerimientos no funcionales	8](#bookmark=id.kbx55qbxq2sx)

5. [Herramientas y tecnologías	8](#bookmark=id.ib4y52yo2x04)

6. [Diseño de interfaz	9](#bookmark=id.tseffkxv7w40)

   1. [Perfiles de usuario	9](#bookmark=id.11z88umwpzlo)

   2. [Pain points	9](#bookmark=id.5i6r0hed7ayv)

   3. [Usabilidad	10](#bookmark=id.pyhgetgdkfi)

7. [Desarrollo de Backend	11](#bookmark=id.eimutj592wsb)

   1. [Configuración de variables	11](#bookmark=id.viwge7f329u0)

      1. [Variables de entorno	11](#bookmark=id.nmnh5hkvror6)

      3. [Variables utilizadas por el sistema	12](#bookmark=id.jhb7sxuxqdsx)

   2. [Enpoints de registro y consulta de usuarios	13](#bookmark=id.r6q4bpsl5xa0)

   3. [Asignación de rol para usuarios	13](#bookmark=id.u2r448i81p5w)

   4. [Definición de eventos con notificaciones	14](#bookmark=id.il82tf9pu50l)

   5. [Método Creación de notificaciones	14](#bookmark=id.vvo2fe1pwpfh)

      1. [Tabla de notificaciones	14](#bookmark=id.c8jq4yfwnbr7)

   6. [Comportamiento de las notificaciones	16](#bookmark=id.zhaf4b4psjhf)

8. [Justificación	16](#bookmark=id.lbr08mbtlkr7)

9. [Marco teórico	17](#bookmark=id.dq41sux5dbz6)

   1. [Lista de Conceptos	17](#bookmark=id.hm45gtocrbyd)

   2. [Lista de Herramientas	30](#bookmark=id.fcaoue51d5vt)

   3. [Desarrollo de la Propuesta	34](#bookmark=id.3l9uysydonl)

10. [Desarrollo de Diagramas	34](#bookmark=id.9x0wiy1jrg6p)

    1. [Figura 3 Flowchart de DevOps budgetary	35](#bookmark=id.f6ynq84cr80g)

    2. [Figura 4 Diagrama de la página	35](#bookmark=id.9zo8s9pjs6y0)

    3. [Figura 5 Diagrama de usuario	36](#bookmark=id.yr2gedsvn5u5)

    4. [Figura 6 Diagrama de Gantt	37](#bookmark=id.7ure6ftkpo5y)

11. [Límites y Alcances del Proyecto	38](#bookmark=id.lktt22ydg68v)

    1. [Alcances de Frontend y Diseño	38](#bookmark=id.i0cheye7eeph)

    2. [Límites de Frontend y Diseño	38](#bookmark=id.ehw87yyqam24)

    3. [Alcances de Backend y Estructura	38](#bookmark=id.d5rq46nloyf)

    4. [Límites de Backend y Estructura	38](#bookmark=id.dpjz8sfl7ids)

    5. [Alcances de Base de Datos y Conexión	39](#bookmark=id.3t53k9iyfuke)

    6. [Límites de Base de Datos y Conexión	39](#bookmark=id.kz99rq5m8uuv)

# Índice de imágenes y figuras

[Figura 1\. Estructura de componentes básicos del sistema web.	18](#bookmark=id.bzricouky9ee)

[Figura 1.1 Interfaz principal del sistema web.	19](#bookmark=id.i8abvkezwacf)

[Figura 1.2 Gestor de base de datos MySQL Workbench.	20](#bookmark=id.9p302rmx7kk5)

[Figura 1.3. Tablero de trabajo en Trello para la gestión de actividades del proyecto.	21](#bookmark=id.1krqjt7fosz3)

[Figura 1.4 Notificación o alerta generada por el sistema.	22](#bookmark=id.qh543lecuiur)

[Figura 1.5. Diseño responsivo de la interfaz de la aplicación.	23](#bookmark=id.b77t4dnqvn1v)

[Figura 1.6 Fragmento de código SQL utilizado para la gestión de la base de datos.	24](#bookmark=id.f17ea482f2f0)

[Figura 1.7. Operaciones CRUD implementadas en el sistema.	25](#bookmark=id.tc6nbz8yjgv2)

[Figura 1.8. Conexión entre la aplicación y la base de datos.	25](#bookmark=id.n48m4ayuzanf)

[Figura 1.9. Inicio y gestión de la sesión de usuario en la aplicación.	26](#bookmark=id.z1a4qjz3tpkd)

[Figura 1.10. Historia de usuario definida para el desarrollo del sistema.	27](#bookmark=id.llwu9kxg29qw)

[Figura 1.11. Interfaz del frontend de la aplicación.	27](#bookmark=id.gv28kjiapcg)

[Figura 1.12. Código fuente desarrollado en JavaScript.	28](#bookmark=id.cxt80u2i73rz)

[Figura 1.13 Estructura de datos en formato JSON	29](#bookmark=id.7r2n2q5b6s0j)

[Figura 2 Tablero de organización y seguimiento de tareas en Azure DevOps.	30](#bookmark=id.z8v4ow45sy9a)

[Figura 2.1 Código del sistema desarrollado en Visual Studio Code.	31](#bookmark=id.97v0sryn35nk)

[Figura 2.2 Interfaz de gestión de la base de datos MySQL utilizada en el proyecto.	31](#bookmark=id.akhq08llrem6)

[Figura 2.3 Desarrollo de componentes de la interfaz con React / JSX.	32](#bookmark=id.m3es3lde0ypg)

[Figura 2.4 Entorno de desarrollo utilizado para la programación de la interfaz del sistema. 32](#bookmark=id.172v6lr9srhc) [Figura 2.5 Pruebas de servicios y endpoints con Postman.	33](#bookmark=id.6c688hyz8l4e)  
[Figura 2.6 Control de versiones y colaboración del proyecto mediante GitHub.	33](#bookmark=id.tfaqcsoypvf4)

[Figura 2.7 Diseño y prototipado de la interfaz en Figma.	34](#bookmark=id.nng2mrtnez4)

**Índice de tablas**

[Tabla 1\. Requerimientos funcionales del sistema	8](#bookmark=id.391zoaxqm1f3)

1. ### Introducción {#introducción}

En los entornos industriales y de automatización, el monitoreo de los procesos es fundamental para garantizar la eficiencia, la seguridad y la continuidad operativa. En este contexto, los sistemas controlados por PLC, generan una gran cantidad de datos que, cuando son correctamente visualizados e interpretados, se vuelven un papel importante para tomar decisiones. Sin embargo, cuando estos datos no se presentan de forma clara y centralizada, puede ser más difícil supervisar el comportamiento de los equipos, detectar fallas y dar seguimientos a los eventos operativos.

Por ello se propone desarrollar un sistema web para la visualización de datos de PLC aplicado al monitoreo de elevadores automatizados. Este sistema permite concentrar en una sola plataforma información relevante como el estado de operación, la posición del elevador, las alarmas, los tiempos de recorrido y los registros de fallas, facilitando así el análisis del funcionamiento del equipo en tiempo real.

2. # Diagnóstico

   1. ### Análisis de la Situación

En un elevador automatizado controlado por PLC se generan constantemente datos sobre su funcionamiento, como la posición en cada piso, el estado de las puertas, los tiempos de recorrido, las paradas y las posibles fallas. Toda esta información es útil para comprender cómo está trabajando el sistema y para saber si está operando de forma segura y eficiente. Sin embargo, cuando estos datos solo se pueden ver directamente en el PLC o en pantallas locales, su aprovechamiento se vuelve limitado y poco práctico para quienes necesitan supervisar el equipo.

Al no contar con una herramienta que concentre y muestre esta información de manera clara, se dificulta detectar a tiempo los comportamientos anormales. Además, la falta de un historial ordenado complica analizar el comportamiento del elevador a lo largo del tiempo, identificar patrones de fallas repetitivas o justificar decisiones de mantenimiento con base de datos reales.

2. ##### Empresas con proyectos similares

Se analizaron diferentes plataformas relacionadas con la visualización y monitoreo de datos:

**Sensata:** Su enfoque en la representación de información mediante paneles interactivos sirve como inspiración para desarrollar una experiencia de usuario clara e intuitiva.

**FactoryTalk View:** Plataforma utilizada para la supervisión de procesos industriales cuyas herramientas para visualizar variables en tiempo real sirven como referencia estructural.

**Siemens WinCC:** Considerada por su capacidad para integrar información proveniente de PLC mediante interfaces HMI (Human-Machine Interface).

3. ##### Riesgos y Dificultades Futuras

Si el monitoreo del elevador continúa dependiendo únicamente de interfaces locales, podrían presentarse retrasos en la detección de fallas, dificultades para analizar tendencias del historial y poca capacidad de respuesta ante eventos críticos. Otro riesgo importante es la falta de una estructura organizada para almacenar la información del historial; sin un registro centralizado, sería complicado detectar patrones de fallas repetitivas y generar reportes confiables.

4. ##### Posibles Usuarios finales

Se analizaron a los usuarios que se estima que sean los destinados al uso del proyecto en cuestión, de los cuales describimos su funcionalidad dentro de la empresa y su relación con su posible aplicación con el programa.

* **Operador del elevador:** Supervisa el funcionamiento en tiempo real.

* **Técnico de mantenimiento:** Consulta el historial de fallas y eventos para atender incidencias.  
* **Supervisor de operaciones:** Verifica el estado general del sistema y revisa indicadores.  
* **Administrador de la plataforma:** Gestiona usuarios, roles, permisos y la configuración general.  
* **Ingeniero de automatización:** Analiza las variables generadas por el PLC y evalúa la lógica de control.  
* **Jefe	de	mantenimiento:**	Utiliza	la	información	registrada	para	planificar mantenimientos.

  5. ##### Problemática

En el monitoreo de elevadores automatizados controlados por PLC, los datos operativos como la posición del elevador, dirección de movimiento, estado de puertas, tiempos de recorrido, eventos de paro y señales de seguridad a menudo quedan disponibles solo en las interfaces locales del PLC o en registros dispersos, sin una visualización centralizada ni acceso histórico adecuado. Esto dificulta la supervisión en tiempo real, retrasa la detección y diagnóstico de fallas, y complica la planificación de mantenimiento preventivo.

**Figura 1\.** monitor de elevadores automáticos

Como consecuencia, los tiempos de respuesta ante complicaciones se alargan, la coordinación entre personal de operación y mantenimiento es menos eficiente, y se pierde la oportunidad de explotar análisis históricos que podrían detectar patrones de falla o tendencias de rendimiento que permitan optimizar la disponibilidad y la seguridad del sistema.

6. ##### Metodología de trabajo

Para el desarrollo del sistema de monitoreo de datos del PLC aplicado a elevadores se emplea la metodología Scrum, debido a que permite organizar el trabajo en iteraciones cortas denominadas sprints, facilitando el desarrollo incremental del sistema y la entrega progresiva de sus funcionalidades.

Esta metodología resulta adecuada para el proyecto porque favorece la planificación de las actividades, el seguimiento continuo del avance y la detección temprana de posibles inconvenientes, permitiendo realizar los ajustes necesarios antes de continuar con la siguiente etapa. Además, Scrum promueve la integración gradual de los módulos desarrollados, lo que contribuye a reducir riesgos durante la implementación y garantiza que cada componente cumpla con los requerimientos establecidos.

**Figura 2\.** Diagrama de metodología Scrum

Aunque el cronograma del proyecto se organiza en las fases de Planeación, Diseño, Desarrollo base, Construcción, Integración y Cierre, las actividades se distribuyen en cinco sprints, con el propósito de facilitar el control y la organización del desarrollo.

* ###### **Sprint 1\. Planeación y diseño**

  En este sprint se realiza la planeación del proyecto, donde se definen los objetivos, el alcance, los requerimientos y el cronograma de trabajo. Asimismo, se desarrolla el diseño de la interfaz del sistema, estableciendo la estructura visual que sirve como base para el desarrollo de la aplicación.

* ###### **Sprint 2\. Desarrollo base**

  En esta etapa se implementa el backend y se realiza la gestión de la base de datos, desarrollando la lógica del sistema y la estructura necesaria para el almacenamiento y administración de la información generada durante el monitoreo.

* ###### **Sprint 3\. Construcción de funcionalidades**

  Durante este sprint se desarrollan los módulos de la interfaz y se implementa el consumo de servicios para establecer la comunicación con el PLC, permitiendo la recepción, procesamiento y visualización de los datos obtenidos.

* ###### **Sprint 4\. Integración del sistema**

  En este sprint se configura el servidor y se integran todos los módulos desarrollados en las etapas anteriores, verificando que funcionen correctamente como un sistema único y que exista una comunicación adecuada entre sus componentes.

* ###### **Sprint 5\. Pruebas y validaciones**

  En la última iteración se realizan las pruebas funcionales y las validaciones necesarias para comprobar que el sistema cumple con los requerimientos definidos y opera correctamente en el entorno de trabajo.

De manera paralela a todos los sprints, se elabora la documentación del proyecto, registrando las actividades realizadas, las decisiones de diseño, el desarrollo de cada módulo, las pruebas efectuadas y los resultados obtenidos.

Al finalizar cada sprint se revisan los avances alcanzados para verificar el cumplimiento de los objetivos establecidos y, en caso de ser necesario, se realizan los ajustes correspondientes antes de iniciar el siguiente sprint. De esta manera, la metodología Scrum permite mantener un control continuo del desarrollo del proyecto y favorece la entrega de un sistema funcional, organizado y alineado con los requerimientos definidos.

3. ### Objetivos

   1. ##### Objetivo General

   Desarrollar un sistema web para la visualización y monitoreo de datos generados por un PLC en un sistema de elevadores, con el fin de centralizar la información operativa, facilitar su análisis en tiempo real y apoyar la toma de decisiones técnicas.

   2. ##### Objetivos Específicos

* Identificar las variables principales generadas por el PLC que serán relevantes para el monitoreo del elevador, como posición, estado de operación, dirección de movimiento, alarmas y eventos de falla.

* Diseñar una interfaz web que permita visualizar de manera clara y organizada los datos del PLC en tiempo real.

* Implementar módulos para mostrar el historial de eventos y registros operativos del elevador.

* Permitir el acceso a la información desde una plataforma web centralizada para mejorar la supervisión y el seguimiento del elevador.

* Validar el funcionamiento del sistema mediante pruebas que confirmen la correcta visualización de los datos y la estabilidad de la plataforma.

  3. ##### Resultados Esperados

Al finalizar el proyecto, se cuenta con un sistema web funcional que permite visualizar, consultar y administrar de manera eficiente la información generada por el PLC del elevador. La implementación de esta solución facilita el acceso a datos actualizados, mejora la supervisión del sistema y brinda una herramienta tecnológica útil para el análisis técnico y la toma de decisiones.

Entre los principales se encuentran la disponibilidad de información operativa en tiempo real, el acceso a un historial ordenado de eventos y fallas, la agilización del diagnóstico técnico, la mejora en la organización de los datos y el apoyo a las actividades de mantenimiento preventivo y correctivo. Además, el sistema contribuye a incrementar la confiabilidad de la información y a optimizar el tiempo dedicado a la supervisión del elevador.

4. ### Ingeniería de Requisitos

   1. ##### Requerimientos funcionales

Dentro de lo que el programa satisface, se cumplen una serie de requisitos establecidos como funcionales, los cuales se establecen como las acciones, tareas y servicios específicos que el sistema debe realizar.

| ID | Requerimiento | Prioridad |
| :---: | ----- | :---: |
| RF-01 | Se debe mostrar en tiempo real los datos enviados por el PLC del elevador. | Alta |
| RF-02 | Se debe visualizar la posición actual del elevador. | Alta |
| RF-03 | Debe mostrar el estado de operación del elevador (activo, detenido, mantenimiento, etc.). | Alta |
| RF-04 | El software debe registrar y mostrar el historial de eventos y fallas. | Alta |
| RF-05 | Genera gráficas para analizar el comportamiento del elevador. | Media |
| RF-06 | Se permite consultar registros por fecha y hora. | Media |
| RF-07 | La base de datos debe almacenar la información. | Alta |
| RF-08 | El acceso al sistema se permite mediante inicio de sesión. | Media |
| RF-09 | Se deben mostrar alarmas cuando exista una falla en el sistema. | Alta |

**Tabla 1\.** Requerimientos funcionales del sistema

2. ##### Requerimientos no funcionales

A su vez, el sistema también cumple con un listado de requisitos no funcionales, cuyo propósito es establecer las reglas de calidad que definen cómo debe funcionar un sistema y no lo que debe hacer. Generalmente establecen los requisitos para que el software sea útil en la vida real.

| ID | Requerimiento | Prioridad |
| :---: | ----- | :---: |
| RNF-01 | La interfaz debe ser sencilla e intuitiva para el usuario. | Alta |
| RNF-02 | El tiempo de respuesta del sistema no debe superar los 3 segundos. | Media |
| RNF-03 | Todo el sistema debe proteger la información mediante autenticación de usuarios. | Alta |
| RNF-04 | El sistema debe funcionar en los navegadores Chrome, Edge y Firefox. | Media |
| RNF-05 | La información almacenada debe mantenerse íntegra y sin pérdidas. | Alta |
| RNF-06 | La conexión debe estar disponible durante la operación normal del elevador. | Alta |
| RNF-07 | El código debe estar organizado para facilitar su mantenimiento. | Media |

| RNF-08 | La programación debe permitir futuras ampliaciones sin modificar su estructura principal. | Baja |
| :---- | :---- | :---: |

**Tabla 2\.** Requisitos no funcionales del sistema

5. ### Herramientas y tecnologías

Para el desarrollo de este sistema web de visualización de datos se emplearán tecnologías correspondientes al entorno de desarrollo que se ha estado trabajando previamente, utilizando React más específicamente usando su dominio **JSX** para el desarrollo de la interfaz de usuario, MySQL como sistema de gestión de base de datos y uso de HTML5 para la estructura de la página, React permite desarrollar un dashboard dinámico para la visualización de variables del PLC, como la posición del elevador, estado de puertas, alarmas, registro de operaciones, etc. MySQL se utiliza para almacenar de forma estructurada los datos históricos y los eventos generados por el sistema y HTML5 se usa para estructurar toda la página (esqueleto de la página).

También se contempla el uso de Node js y Express como tecnologías de backend para poder gestionar la comunicación entre la interfaz web y la base de datos, para poder desarrollar todo esto también se utilizan herramientas como VScode (**Visual Studio Code**) para la programación, Postman para las pruebas de servicios, GitHub para el control de versiones y librerías de gráficas compatibles con React y también algunas implementaciones de APIs para la conexión entre los datos de PLC con la base de datos del sistema.

6. ### Diseño de interfaz

   1. ##### Perfiles de usuario

* **Operador:** Supervisa el funcionamiento en tiempo real (posición, alarmas) sin modificar configuraciones críticas.  
* 

* **Técnico	de	mantenimiento:**	Revisa	eventos e historial para diagnosticar incidencias.  
* 

* **Supervisor de operaciones**: Consulta indicadores de desempeño general.

* 

* **Administrador del sistema:** Gestiona permisos, roles y configuraciones globales.

* 

* **Ingeniero de automatización:** Analiza variables técnicas del PLC y tendencias de la lógica de control.  
* 

  2. ##### Pain points

###### **Operador**

* Dificultad para identificar rápidamente el estado actual del elevador cuando la información está dispersa o no se actualiza claramente.

* Confusión al interpretar alarmas o eventos si no existe una jerarquía visual de prioridad.  
* Pérdida de tiempo al tener que revisar varias pantallas o interfaces para conocer posición, dirección y estado de puertas.  
* Riesgo de reacción tardía ante fallas por falta de alertas visibles e inmediatas.

###### **Técnico de mantenimiento**

* Complicación para diagnosticar fallas cuando no existe un historial ordenado de eventos y alarmas.  
* Dificultad para detectar patrones repetitivos, como paros frecuentes o errores de comunicación con el PLC.  
* Falta de datos históricos por fecha y hora para justificar acciones correctivas o preventivas.  
* Retraso en la atención de incidencias si el sistema no indica claramente la causa, prioridad o momento de la falla.

###### **Supervisor de operaciones**

* Limitación para evaluar el desempeño general del elevador si no cuenta con indicadores claros y centralizados.  
* Dificultad para validar si la operación se mantiene dentro de parámetros aceptables.

* Poca visibilidad sobre tiempos de recorrido, frecuencia de fallas y periodos de inactividad.  
* Dependencia de reportes manuales o comunicación verbal para conocer incidencias del sistema.

###### **Administrador del sistema**

* Dificultad para controlar accesos y permisos si no hay una gestión clara de usuarios y roles.  
* Riesgo de accesos no autorizados o mal uso de la plataforma si no se registran intentos fallidos de autenticación.  
* Complejidad para mantener la configuración general del sistema sin una estructura organizada.  
* Problemas para auditar cambios o accesos si no se almacenan eventos administrativos relevantes.

###### **Ingeniero de automatización**

* Dificultad para analizar el comportamiento técnico del elevador si las variables del PLC no están bien organizadas.  
* Limitación para detectar anomalías en la lógica de control cuando no existen tendencias, gráficas o registros históricos.  
* Complicación para validar el rendimiento del sistema en tiempo real y compararlo con eventos anteriores.  
* Falta de visibilidad sobre fallas de comunicación entre PLC, servidor y base de datos.

3. ##### Usabilidad

1. ###### **Facilidad de aprendizaje**

El sistema debe ser sencillo para que un usuario pueda aprender a utilizarlo rápidamente, aunque sea la primera vez que lo usa.

2. ###### **Claridad de la información**

Los datos del PLC, como la posición del elevador, estado, alarmas y gráficas, deberán mostrarse de forma clara y organizada para facilitar su interpretación.

3. ###### **Consistencia**

Todos los botones, colores, iconos y menús mantendrán el mismo diseño en todas las pantallas para evitar confusiones.

4. ###### **Navegación sencilla**

El usuario podrá acceder fácilmente a las diferentes secciones del sistema (Dashboard, historial, gráficas, alarmas y configuración) mediante un menú simple.

5. ###### **Retroalimentación inmediata**

Cada acción realizada por el usuario mostrará una respuesta del sistema, por ejemplo mensajes de carga, confirmaciones o alertas cuando ocurra algún evento.

6. ###### **Prevención de errores**

El sistema validará la información ingresada y mostrará mensajes claros cuando exista un error, evitando acciones incorrectas.

7. ###### **Accesibilidad y legibilidad**

Se utilizarán colores con buen contraste, texto de tamaño adecuado e iconos fáciles de comprender para mejorar la lectura de la información.

8. ###### **Eficiencia**

La información más importante, como el estado del elevador y las alarmas, estará disponible desde la pantalla principal para reducir el tiempo de búsqueda.

7. ### Desarrollo de Backend

   1. #### Configuración de variables

      1. ### Variables de entorno

| Variable | Descripción | Ejemplo |
| :---: | :---: | :---: |
| PORT | Puerto donde se ejecutará el servidor | 3000 |
| DB\_HOST | Dirección del servidor MySQL | localhost |
| DB\_PORT | Puerto de MySQL | 3306 |
| DB\_NAME | Nombre de la base de datos | plc\_monitor |
| DB\_USER | Usuario de MySQL | root |
| DB\_PASSWORD | Contraseña de la base de datos | \*\*\*\*\*\*\*\* |
| JWT\_SECRET | Clave utilizada para generar tokens JWT | \*\*\*\*\*\*\*\* |
| NODE\_ENV | Entorno de ejecución | development |

| Variable | Valor | Descripción |
| :---- | :---- | :---- |
| PORT | 3000 | Puerto donde se ejecuta el servidor Express. |
| DB\_HOST | localhost | Dirección del servidor MySQL. |
| DB\_PORT | 3306 | Puerto utilizado por MySQL. |
| DB\_NAME | plc\_monitor | Nombre de la base de datos. |
| DB\_USER | root | Usuario de acceso a la base de datos. |
| DB\_PASSWORD | 123456 | Contraseña de la base de datos. |
| JWT\_SECRET | MiClaveSecreta | Clave utilizada para generar y validar tokens JWT. |
| NODE\_ENV | development | Entorno de ejecución de la aplicación. |

      2. ### Variables utilizadas por el sistema

| Variable | Módulo donde se utiliza |
| :---: | :---: |
| PORT | Servidor Express |
| DB\_HOST | Conexión a MySQL |
| DB\_PORT | Conexión a MySQL |
| DB\_NAME | Base de datos |
| DB\_USER | Base de datos |
| DB\_PASSWORD | Base de datos |
| JWT\_SECRET | Autenticación |
| NODE\_ENV | Configuración general |

   2. #### Enpoints de registro y consulta de usuarios

Los siguientes endpoints corresponden al módulo de usuarios y permiten registrar y consultar la información de los usuarios del sistema, considerando los diferentes roles definidos para la plataforma.

| Método HTTP | Endpoint | Descripción | Tipo de operación |
| :---- | :---- | :---- | :---- |
| POST | /api/users | Registra un nuevo usuario en la plataforma, asignando sus datos personales, rol y permisos correspondientes. | Registro |
| GET | /api/users | Consulta el listado de usuarios registrados en el sistema con su información básica y rol asignado. | Consulta |
| GET | /api/users/{id} | Consulta la información detallada de un usuario específico mediante su identificador. | Consulta |

3. #### Asignación de rol para usuarios

   1. Tabla de asignación de usuarios

| Rol | Objetivo principal | Nivel |
| :---- | :---- | :---- |
| Operador | Monitorear estado en tiempo real y alarmas | Básico |
| Técnico de mantenimiento | Revisar fallas, historial y diagnóstico | Medio |
| Supervisor de operaciones | Consultar indicadores, reportes y desempeño general | Medio |
| Ingeniero de automatización | Analizar variables PLC, tendencias y comportamiento técnico | Medio-alto |
| Administrador del sistema | Gestionar usuarios, roles, parámetros y seguridad | Alto |

   4. #### Definición de eventos con notificaciones

* Cuando ocurra una falla, el sistema mostrará una notificación visual de alta prioridad y registrará el evento en el historial.

* Cuando se pierda la comunicación con el PLC, el sistema mostrará una alerta crítica persistente hasta que la conexión sea restablecida.

* Cuando la condición anormal desaparezca, el sistema podrá generar una notificación de retorno a normalidad para informar que el estado fue corregido.

* Cuando un usuario ingresa credenciales incorrectas, el sistema mostrará un mensaje genérico de error sin revelar información sensible y almacenará el intento para fines de seguridad.

* Cuando el elevador entre en modo mantenimiento, se mostrará una notificación informativa a los usuarios conectados para indicar que algunas funciones estarán limitadas.

* Cuando se registre un nuevo evento operativo, el sistema lo almacenará y podrá mostrar una notificación breve de carácter informativo.

* Cuando exista una alarma crítica, el sistema deberá destacarla visualmente mediante color, prioridad y permanencia hasta su atención.

  5. #### Método Creación de notificaciones

     1. ### Tabla de notificaciones

| ID | Tipo | Descripción | Prioridad |
| ----- | ----- | ----- | :---- |
| NT-01 | Estado | El elevador inició su operación correctamente. | Baja |
| NT-02 | Estado | El elevador se encuentra detenido. | Media |
| NT-03 | Alarma | Se detectó una falla en el sistema. | Alta |
| NT-04 | Mantenimiento | El elevador ingresó a modo mantenimiento. | Media |
| NT-05 | Evento | Se registró un nuevo evento en el historial. | Baja |
| NT-06 | Seguridad | Intento de acceso con credenciales incorrectas. | Alta |
| NT-07 | Sistema | Se perdió la comunicación con el PLC. | Crítica |
| NT-08 | Sistema | La conexión con la base de datos presentó un error. | Alta |

NT-01 – Inicio de operación

**Título:** Elevador en funcionamiento

###### **Mensaje:**

El elevador inició su operación correctamente y se encuentra disponible para su monitoreo.

NT-02 – Elevador detenido **Título:** Elevador detenido **Mensaje:**  
El elevador ha detenido su operación. Verifique el estado del sistema para determinar la causa.

NT-03 – Falla detectada **Título:** Alarma de falla **Mensaje:**

Se detectó una falla en el sistema del elevador. Se recomienda revisar el historial de eventos y realizar una inspección.

**NT-04 – Modo mantenimiento Título:** Mantenimiento activo **Mensaje:**  
El elevador ha sido colocado en modo mantenimiento. Algunas funciones permanecerán deshabilitadas mientras dure esta condición.

NT-05 – Nuevo evento registrado **Título:** Evento registrado **Mensaje:**  
Se registró un nuevo evento en el historial del sistema.

NT-06 – Error de autenticación **Título:** Inicio de sesión fallido **Mensaje:**  
Se detectó un intento de acceso con credenciales incorrectas.

NT-07 – Sin comunicación con el PLC **Título:** Error de comunicación **Mensaje:**  
No se ha podido establecer comunicación con el PLC. Verifique la conexión y el estado del controlador.

NT-08 – Error de base de datos **Título:** Error del sistema **Mensaje:**  
Se presentó un problema al acceder a la base de datos. Intente nuevamente o contacte al administrador.

6. ### Comportamiento de las notificaciones

| Evento | Acción del sistema |
| ----- | ----- |
| Se detecta una falla | Mostrar una notificación de alta prioridad. |
|  Se pierde la comunicación con el PLC | Mostrar una alerta crítica hasta que se restablezca la conexión. |
| Se registra un nuevo evento | Mostrar una notificación informativa. |
| Un usuario inicia sesión correctamente | Mostrar un mensaje de bienvenida. |
| Un usuario ingresa credenciales incorrectas | Mostrar un mensaje de error sin revelar información sensible. |
| El elevador entra en modo mantenimiento | Mostrar una notificación informativa para los usuarios conectados. |

8. ### Justificación

Este proyecto se realiza porque actualmente los datos operativos del elevador pueden encontrarse dispersos, limitados a interfaces locales o presentados de una forma que dificulta su interpretación. Con un sistema web de visualización y monitoreo se puede llevar un mejor control del comportamiento del elevador, consultar la información de manera más rápida y detectar eventos o fallas con mayor claridad.

Esta situación afecta la organización de la información y hace que las actividades de monitoreo y mantenimiento dependan en gran medida de revisiones manuales o locales, las cuales requieren más tiempo y aumentan la probabilidad de pasar por alto eventos relevantes. Una plataforma centralizada contribuye a reducir estas limitaciones y mejora la disponibilidad de datos para distintos perfiles de usuario.

De esta manera, la opción de desarrollar un sistema web hace posible automatizar la visualización de variables, el registro de eventos, la consulta del historial y la supervisión general del elevador, proporcionando información más clara, organizada, accesible y confiable. El uso de modularidad también favorece la reutilización del código, la organización del proyecto y la adaptabilidad de futuras mejoras.

9. ### Marco teórico

   1. Lista de Conceptos

###### **Sistema web**

Es una aplicación informática que se ejecuta total o parcialmente en un servidor remoto y a la que los usuarios acceden a través de un navegador, ya sea por internet o por una red local, sin necesidad de instalar software adicional en su equipo. A diferencia de las aplicaciones de escritorio, su lógica y sus datos suelen residir en el servidor, mientras que el cliente solo se encarga de mostrar la interfaz y enviar las acciones del usuario.  
Este tipo de proyectos requiere un sistema web porque permite que operadores, técnicos y supervisores accedan a la visualización de datos del PLC del elevador desde cualquier computadora o dispositivo con navegador, facilitando el monitoreo remoto del estado, alarmas, posición e historial del equipo.

###### **Arquitectura basada en componentes**

Es un enfoque de desarrollo de software en el que la interfaz y la lógica de una aplicación se dividen en partes independientes y autocontenidas llamadas componentes. Cada componente agrupa su propia estructura, comportamiento y, en muchos casos, su propio estilo visual, lo que permite construir interfaces complejas a partir de piezas pequeñas y manejables.  
Se requiere en este tipo de proyectos porque el sistema maneja varias vistas distintas, como dashboard principal, historial de eventos, panel de alarmas y gráficas de tendencias, que comparten elementos similares como tarjetas de estado, tablas y widgets de monitoreo. Como se aprecia en la **Figura 1**, el sistema organiza su interfaz en componentes independientes, facilitando la reutilización del código y el mantenimiento de la aplicación.

###### **Figura 1\. Estructura de componentes básicos del sistema web.**

**Reutilización de componentes**

Es la práctica de diseñar componentes de forma genérica y desacoplada, de modo que puedan emplearse en distintas partes de una aplicación sin necesidad de duplicar el código que los genera. Un componente reutilizable recibe información variable para adaptarse a diferentes contextos sin perder su estructura base.  
Suele ser necesaria porque elementos como indicadores de estado, tarjetas de variables del PLC, alertas, tablas de eventos y gráficas pueden repetirse en distintas secciones del sistema. Reutilizarlos reduce el tiempo de desarrollo, evita inconsistencias visuales y facilita el mantenimiento del frontend.

###### **Interfaz de usuario (UI)**

Es el conjunto de elementos visuales e interactivos a través de los cuales una persona se comunica con un sistema informático. Una UI bien diseñada organiza la información de forma clara y guía al usuario en las acciones que puede realizar.  
Resulta indispensable porque los usuarios del sistema necesitan interpretar rápidamente datos como posición del elevador, estado de puertas, alarmas activas, tiempos de recorrido y fallas registradas. En interfaces HMI para PLC se recomienda jerarquizar la información, mantener consistencia visual y reducir pantallas saturadas para mejorar la supervisión.

Como se aprecia en la **Figura 1.1**, la interfaz principal del sistema web permite al usuario visualizar de forma clara la información del elevador, como su estado, posición y alarmas, facilitando su monitoreo.

###### **Figura 1.1 Interfaz principal del sistema web.**

**Gestión de pagos**

La gestión de pagos es el conjunto de procesos administrativos y tecnológicos relacionados con el registro, seguimiento, control y verificación de pagos realizados por una persona o entidad, incluyendo el estado de cada transacción y su trazabilidad en el tiempo.  
En el contexto de este proyecto de elevadores no es un concepto central, por lo que podría sustituirse por gestión de eventos o gestión de alarmas. Si decides mantenerlo como concepto general, conviene aclarar que no forma parte principal del sistema de monitoreo del PLC, ya que el enfoque real está en registrar estados, fallas, recorridos y eventos operativos del elevador.

###### **Base de datos**

Es un conjunto organizado de datos almacenados electrónicamente, estructurados de tal forma que puedan ser consultados, insertados, actualizados y eliminados de manera eficiente mediante un sistema gestor de bases de datos. Generalmente organiza la información en tablas relacionadas entre sí.  
En proyectos como éste se requiere porque toda la información del monitoreo debe almacenarse de forma persistente: variables del PLC, estados del elevador, historial de

eventos, alarmas, usuarios y registros de fallas. Sin una base de datos no sería posible conservar históricos ni generar consultas o reportes confiables.  
Como se aprecia en la **Figura 1.2**, se muestra el entorno de gestión de la base de datos utilizado para consultar y administrar la información almacenada por el sistema.

###### **Figura 1.2 Gestor de base de datos MySQL Workbench.**

**Control de información**

El control de información es el conjunto de mecanismos, reglas y procesos orientados a garantizar que los datos manejados por un sistema sean precisos, estén actualizados y sean accesibles únicamente por las personas autorizadas, evitando alteraciones indebidas o accesos no permitidos.  
Es relevante en este tipo de proyectos porque la información operativa y técnica del elevador debe mantenerse íntegra y confiable. Controlar quién puede consultar históricos, modificar configuraciones o administrar usuarios ayuda a proteger el sistema y a conservar la validez de los registros obtenidos desde el PLC.

###### **Metodología Scrum**

Scrum es un marco de trabajo ágil para la gestión y desarrollo de proyectos, que organiza el trabajo en ciclos cortos y delimitados llamados sprints, en los cuales un equipo multidisciplinario planifica, desarrolla y revisa avances de forma incremental, adaptándose continuamente a los cambios y prioridades del proyecto.  
Se utiliza en este proyecto porque permite dividir el desarrollo del sistema de visualización del PLC en entregas manejables, por ejemplo: diseño del dashboard, desarrollo del backend, integración con la base de datos, visualización en tiempo real y pruebas del sistema.

###### **Herramienta Trello**

Trello es una plataforma de gestión visual de proyectos basada en tableros, listas y tarjetas, que permite organizar tareas, asignar responsables, establecer fechas límite y dar seguimiento al estado de avance de cada actividad dentro de un equipo de trabajo.

Se utiliza como apoyo práctico a la metodología Scrum, permitiendo que el equipo visualice qué tareas están pendientes, en proceso o terminadas, como “diseño del login”, “vista de alarmas”, “conexión a base de datos” o “integración de variables del PLC”.  
Como se muestra en la **Figura 1.3**, se presenta el tablero de Trello utilizado para organizar y dar seguimiento a las actividades del proyecto. Mediante esta herramienta se administran las tareas, se visualiza el avance de cada una y se facilita la coordinación del equipo de trabajo durante el desarrollo de la aplicación.

###### **Figura 1.3. Tablero de trabajo en Trello para la gestión de actividades del proyecto. API (Interfaz de Programación de Aplicaciones)**

Una API es un conjunto de reglas, funciones y protocolos que permite que dos programas o componentes de software se comuniquen entre sí, exponiendo ciertas funcionalidades sin necesidad de que cada parte conozca los detalles internos de implementación de la otra.  
En este proyecto, la API permite que el frontend consulte la información procesada por el backend, como el estado actual del elevador, los eventos registrados, las alarmas activas o los históricos de operación. De esta forma, la interfaz no accede directamente a la base de datos, sino a servicios estructurados.

###### **Autenticación de usuarios**

Es el proceso mediante el cual un sistema verifica la identidad de una persona que intenta acceder a él, generalmente a través de credenciales como nombre de usuario y contraseña, confirmando que efectivamente es quien dice ser antes de otorgarle acceso.  
Es indispensable en este tipo de proyectos porque el sistema contiene información técnica, registros históricos y configuraciones que no deben estar disponibles para cualquier persona. La autenticación permite restringir el acceso solo a operadores, técnicos, supervisores o administradores autorizados.

###### **Roles de usuario**

Los roles de usuario son una clasificación de los distintos tipos de usuarios que puede tener un sistema, definida según los permisos, funciones y nivel de acceso que cada uno tiene autorizado, permitiendo que un mismo sistema se comporte de manera distinta dependiendo de quién haya iniciado sesión.

En este proyecto se requieren roles porque no todos los usuarios necesitan ver o hacer lo mismo. Por ejemplo, un operador puede supervisar estados y alarmas, un técnico consultar fallas e históricos, y un administrador gestionar usuarios, configuraciones y parámetros del sistema.

###### **Notificación / Alerta del sistema**

Una notificación o alerta del sistema es un mensaje generado automáticamente por la aplicación para informar al usuario sobre un evento relevante, ya sea una confirmación, una advertencia, un error o una situación que requiere atención inmediata.  
En el sistema de monitoreo se utilizan para informar eventos como falla detectada, pérdida de comunicación con el PLC, activación de alarmas, entrada a modo mantenimiento o restablecimiento de operación. La gestión adecuada de alarmas y su prioridad es un principio importante en HMIs industriales para evitar saturación y permitir una respuesta rápida.  
Como se muestra en la **Figura 1.4**, se presenta una notificación del sistema utilizada para informar al usuario sobre un evento o cambio en el estado de la aplicación. Estas alertas permiten comunicar situaciones importantes, como fallas, advertencias o confirmaciones, facilitando una respuesta oportuna y el correcto seguimiento del funcionamiento del sistema.

###### **Figura 1.4 Notificación o alerta generada por el sistema.**

**Responsive Design (Diseño Responsivo)**

El diseño responsivo es una técnica de desarrollo web que permite que una interfaz se adapte automáticamente a distintos tamaños y resoluciones de pantalla, ajustando la disposición de los elementos visuales para que la aplicación se vea y funcione correctamente tanto en computadoras como en tablets y teléfonos móviles.  
Es importante en este proyecto porque el monitoreo del elevador puede consultarse desde distintos dispositivos dentro del entorno de trabajo. Un diseño responsivo garantiza que alarmas, estados, tablas y gráficas sigan siendo legibles y utilizables en diferentes tamaños de pantalla.  
Como se muestra en la **Figura 1.5**, se presenta la adaptación de la interfaz a diferentes tamaños de pantalla mediante un diseño responsivo. Esta técnica permite que los elementos de la aplicación se ajusten automáticamente para ofrecer una visualización clara y un correcto funcionamiento tanto en computadoras como en dispositivos móviles y tabletas.  
![][image1]

###### **Figura 1.5. Diseño responsivo de la interfaz de la aplicación.**

**Backend**

El backend es la parte de un sistema que se ejecuta en el servidor y que el usuario no ve directamente; se encarga de procesar la lógica de negocio, validar información, comunicarse con la base de datos y responder a las solicitudes que recibe del frontend a través de la API.  
En este proyecto, el backend es responsable de recibir, organizar y procesar los datos provenientes del PLC o de los servicios intermedios, almacenarlos cuando sea necesario y devolver al frontend la información lista para ser visualizada en el dashboard.

###### **Servidor**

Un servidor es un equipo físico o un programa que permanece a la espera de solicitudes provenientes de los clientes, las procesa y devuelve una respuesta; puede alojar tanto la lógica de la aplicación como la base de datos del sistema.  
Dentro de este proyecto, el servidor mantiene disponible la plataforma web para que los usuarios consulten el monitoreo del elevador en tiempo real, además de procesar solicitudes de consulta de eventos, históricos, alarmas y estados operativos.

###### **Arquitectura cliente-servidor**

Es un modelo de comunicación en el que el cliente realiza solicitudes de información o servicios, y el servidor las procesa y devuelve una respuesta; ambos se comunican generalmente a través de una red, usando protocolos como HTTP.  
Este proyecto se basa en este modelo porque separa la interfaz que usa el usuario para monitorear el elevador de la lógica y los datos que se gestionan en el servidor. Así se facilita el desarrollo, mantenimiento y escalabilidad del sistema.

###### **SQL (Structured Query Language)**

SQL es un lenguaje de programación especializado, utilizado para comunicarse con bases de datos relacionales, permitiendo consultar, insertar, actualizar y eliminar información almacenada en sus tablas mediante instrucciones específicas.  
En este proyecto, SQL se utiliza para almacenar y consultar registros de eventos, fallas, estados del elevador, alarmas y usuarios. También permite realizar búsquedas por

fecha, hora o tipo de evento para apoyar el análisis histórico del comportamiento del sistema.  
Como se muestra en la **Figura 1.6**, se presenta una parte del código desarrollado en SQL, el cual se utiliza para realizar operaciones sobre la base de datos. Mediante estas instrucciones es posible consultar, insertar, actualizar y administrar la información almacenada, permitiendo el correcto manejo de los registros necesarios para el funcionamiento de la aplicación.

###### **Figura 1.6 Fragmento de código SQL utilizado para la gestión de la base de datos.**

**CRUD (Crear, Leer, Actualizar, Eliminar)**

CRUD es el acrónimo de las cuatro operaciones básicas que un sistema puede realizar sobre los datos: crear nuevos registros, leer los existentes, actualizar su información y eliminar aquellos que ya no son necesarios.  
En el sistema de visualización del PLC, estas operaciones se aplican en módulos como usuarios, configuraciones, registros de eventos o administración del sistema. Por ejemplo, crear un nuevo usuario, leer el historial de alarmas, actualizar parámetros del sistema o eliminar registros de prueba.  
Como se muestra en la **Figura 1.7**, se presenta la implementación de las operaciones CRUD dentro de la aplicación. Estas funciones permiten crear, consultar, actualizar y eliminar información de la base de datos, facilitando la administración de los registros y el correcto funcionamiento de los diferentes módulos del sistema.

###### **Figura 1.7. Operaciones CRUD implementadas en el sistema.**

**Conexión a base de datos**

Es el enlace lógico que se establece entre el backend de una aplicación y el motor de base de datos, permitiendo que el primero envíe instrucciones y reciba resultados, generalmente a través de un driver o controlador específico para el lenguaje utilizado.  
En este proyecto, esa conexión permite almacenar de forma permanente los eventos capturados del elevador y recuperar la información necesaria para mostrar históricos, gráficas y reportes dentro de la plataforma.  
Como se muestra en la **Figura 1.8**, se presenta la conexión establecida entre la aplicación y la base de datos, la cual permite almacenar, consultar y recuperar la información necesaria para el funcionamiento del sistema. Esta conexión facilita el acceso a los registros y garantiza que los datos puedan ser utilizados para mostrar información actualizada dentro de la aplicación.

###### **Figura 1.8. Conexión entre la aplicación y la base de datos.**

**Sesión de usuario**

Una sesión de usuario es un mecanismo que permite que un sistema reconozca que una persona ya inició sesión mientras navega por la aplicación, manteniendo su identidad activa durante un periodo de tiempo sin que tenga que volver a introducir sus credenciales en cada acción.  
En este proyecto, la sesión permite que el operador, técnico o administrador navegue entre dashboard, historial, alarmas y configuración sin tener que autenticarse nuevamente en cada pantalla.  
Como se muestra en la **Figura 1.9**, se presenta el proceso de inicio y mantenimiento de la sesión de usuario dentro de la aplicación. Este mecanismo permite que el usuario acceda a las diferentes funciones del sistema sin necesidad de iniciar sesión nuevamente, facilitando una navegación segura y continua entre los distintos módulos.  
![][image2]

###### **Figura 1.9. Inicio y gestión de la sesión de usuario en la aplicación.**

**Sprint**

Un sprint es un periodo corto y delimitado de tiempo, generalmente de una a cuatro

semanas, dentro de la metodología Scrum, en el cual un equipo de desarrollo se compromete a completar un conjunto específico de tareas o funcionalidades previamente planificadas.  
En este proyecto, los sprints permiten dividir el desarrollo del sistema en etapas como diseño del dashboard, implementación del backend, integración de datos del PLC, desarrollo de gráficas y pruebas de funcionamiento.

###### **Historia de usuario (User Story)**

Una historia de usuario es una descripción breve y sencilla de una funcionalidad del sistema, redactada desde la perspectiva del usuario final, que normalmente sigue el formato “Como \[tipo de usuario\], quiero \[acción\], para \[beneficio\]”.  
En este proyecto ayudan a definir claramente los requerimientos, por ejemplo: “Como operador, quiero ver la posición actual del elevador, para supervisar su estado en tiempo real” o “Como técnico de mantenimiento, quiero consultar el historial de fallas, para identificar patrones de error”.  
Como se muestra en la **Figura 1.10**, se presenta una historia de usuario utilizada para definir una funcionalidad de la aplicación desde la perspectiva del usuario final. Estas historias permiten identificar las necesidades del sistema, establecer los requerimientos de cada módulo y facilitar la planificación durante el desarrollo del proyecto.

###### **Figura 1.10. Historia de usuario definida para el desarrollo del sistema.**

**Frontend**

El frontend es la parte de un sistema con la que el usuario interactúa directamente desde el navegador; comprende todos los elementos visuales de la interfaz, así como la lógica encargada de mostrar la información y capturar las acciones del usuario para enviarlas al backend.  
En este proyecto, el frontend corresponde al dashboard de monitoreo, gráficas, alarmas, tablas de históricos y pantallas de acceso, desarrollados para presentar de manera clara la información generada por el PLC.  
Como se muestra en la **Figura 1.11**, se presenta una parte del frontend de la aplicación, donde el usuario puede interactuar con las diferentes funciones del sistema. En esta interfaz se visualiza la información generada por la aplicación y se permite el acceso a los distintos módulos, facilitando una navegación clara e intuitiva.

###### **Figura 1.11. Interfaz del frontend de la aplicación.**

**Componente**

Un componente es la unidad básica y reutilizable de código que encapsula su propia estructura, comportamiento y, en muchos casos, su propio estilo, representando una parte específica de la interfaz, como un botón, una tarjeta o un formulario.  
En este proyecto, elementos como tarjetas de estado, paneles de alarmas, gráficas, encabezados y tablas de eventos pueden construirse como componentes independientes para facilitar la organización y mantenimiento del sistema.

###### **Renderizado**

El renderizado es el proceso mediante el cual una librería como React traduce los componentes definidos en código a elementos visuales reales que se muestran en el navegador, actualizando automáticamente la interfaz cuando los datos que dependen de ella cambian.  
En este sistema, el renderizado permite que al cambiar una variable del PLC, como la posición del elevador o el estado de operación, esa información se actualice en pantalla de forma dinámica y sin necesidad de recargar la página.

###### **JavaScript (JS)**

JavaScript es un lenguaje de programación interpretado ampliamente utilizado en el desarrollo web, que permite agregar interactividad y comportamiento dinámico a las páginas, tanto en el navegador como en el servidor mediante entornos como [Node.js](http://node.js/).  
En este proyecto, JavaScript se utiliza para construir la lógica del frontend en React, manejar eventos de usuario, actualizar la interfaz en tiempo real y, si se emplea Node.js, también para desarrollar el backend y la comunicación con la base de datos.  
Como se muestra en la imagen 1.12, se presenta parte del código desarrollado en JavaScript, el cual se utiliza para implementar la lógica de la aplicación. Este código permite controlar el comportamiento de la interfaz, responder a las acciones del usuario y ejecutar las funciones necesarias para el correcto funcionamiento del sistema.

###### **Figura 1.12. Código fuente desarrollado en JavaScript.**

**JSON (JavaScript Object Notation)**

JSON es un formato ligero y legible de intercambio de datos, basado en pares de clave-valor, ampliamente utilizado para representar y transportar información estructurada entre distintos sistemas.  
En el proyecto, JSON se usa para intercambiar información entre el frontend y el backend, por ejemplo al enviar el estado del elevador, los eventos registrados, las alarmas activas o los datos históricos que luego serán visualizados en la plataforma.  
Como se muestra en la **Figura 1.13**, se presenta una estructura de datos en formato JSON utilizada para intercambiar información entre el frontend y el backend de la aplicación. Este formato permite organizar y transmitir los datos de manera clara y eficiente, facilitando la comunicación entre los diferentes componentes del sistema.

###### **Figura 1.13 Estructura de datos en formato JSON**

**Framework**

Un framework es un conjunto de herramientas, librerías, convenciones y reglas que facilita el desarrollo de software al proporcionar una estructura base predefinida.  
En este proyecto, React proporciona la base para construir una interfaz modular y dinámica orientada a la visualización de datos del PLC. Su enfoque por componentes facilita el desarrollo de dashboards, tablas y paneles de estado de manera ordenada y mantenible.

###### **Usabilidad**

La usabilidad es el grado en que un sistema resulta fácil de entender, aprender y utilizar por parte de sus usuarios finales, considerando la claridad de la interfaz, la consistencia de los elementos visuales y la facilidad para completar tareas sin errores.  
En un sistema de monitoreo industrial, la usabilidad es clave porque los operadores deben interpretar rápidamente alarmas, tendencias y estados del sistema. Las guías de HMI destacan que la información debe ser clara, jerarquizada y fácil de localizar para reducir errores de operación.

###### **Escalabilidad**

La escalabilidad es la capacidad del sistema para crecer y soportar más usuarios, más datos o más funcionalidades sin perder eficiencia de manera significativa.  
Aunque el proyecto tenga alcance académico, este concepto es relevante porque en un caso real el sistema podría ampliarse para monitorear más variables, más elevadores o más usuarios conectados al mismo tiempo.

###### **Mantenimiento de software**

El mantenimiento de software es el conjunto de actividades realizadas después de que un sistema ha sido desarrollado y puesto en funcionamiento, con el objetivo de corregir errores, adaptarlo a nuevos requerimientos o mejorar su rendimiento y funcionalidades.  
En este proyecto es importante porque, una vez implementado, podrían añadirse nuevas variables del PLC, nuevas pantallas de monitoreo, más reportes o mejoras en alarmas y visualización según las necesidades del usuario.

###### **Validación de datos**

La validación de datos es el proceso de verificar que la información ingresada o recibida cumpla con el formato, tipo y reglas esperadas antes de ser procesada o almacenada, evitando errores o inconsistencias.  
En este proyecto, la validación es necesaria para asegurar que los datos recibidos del sistema, los filtros de consulta, las credenciales de acceso y las configuraciones ingresadas por el usuario sean correctos. También ayuda a evitar inconsistencias en históricos, alarmas o parámetros visualizados en la plataforma.

2. ##### Lista de Herramientas

**Scrum:** Es una metodología ágil que organiza el desarrollo de software en iteraciones cortas llamadas sprints, lo que permite una gestión flexible, incremental y colaborativa del proyecto.

En este sistema, se emplea para dividir el trabajo en etapas pequeñas, facilitar la planificación de actividades y dar seguimiento continuo al progreso del desarrollo.

**Azure DevOps:** Es una plataforma integral de gestión de proyectos y colaboración que permite organizar tareas, planificar *sprints* y dar seguimiento al trabajo mediante tableros visuales (Kanban), listas de trabajo continuo (*backlogs*) y tarjetas de elementos de trabajo.

Dentro del proyecto, se utiliza para asignar responsabilidades, monitorear el avance del equipo y mantener un control estructurado de las actividades pendientes, en proceso y finalizadas. En la **Figura 2** representa la planeación y el seguimiento del proyecto, permitiendo visualizar el flujo de trabajo, el cumplimiento de los requerimientos y el estado actual de las tareas asignadas a cada integrante.

###### **Figura 2 Tablero de organización y seguimiento de tareas en Azure DevOps.**

**Visual Studio Code:**es un editor de código fuente ligero y extensible que permite desarrollar aplicaciones en diversos lenguajes de programación.

En este proyecto, funciona como el entorno principal donde se escribe, prueba y depura el código del frontend y backend, en la **Figura 2.1** se observa la programación de componentes de la interfaz en React .

###### **Figura 2.1 Código del sistema desarrollado en Visual Studio Code.**

**MySQL:** es un sistema de gestión de bases de datos relacional que permite almacenar, organizar y consultar información estructurada mediante SQL.

En este sistema, se encarga de gestionar datos como registros históricos, configuraciones, usuarios y la información proveniente de los dispositivos, la gestión de la base de datos y la estructura de las tablas.

###### **Figura 2.2 Interfaz de gestión de la base de datos MySQL utilizada en el proyecto.**

**React / JSX:** es una librería de JavaScript orientada a la construcción de interfaces de usuario dinámicas mediante componentes reutilizables, utilizando JSX para definir la estructura visual.

En este proyecto, permite desarrollar dashboards interactivos que muestran la información procesada de manera clara y en tiempo real. En la **Figura 2.4** se observa cómo se organiza la interfaz de manera modular, lo que permite que el sistema sea dinámico, ordenado y fácil de mantener.

###### **Figura 2.3 Desarrollo de componentes de la interfaz con React / JSX.**

**Node.js y Express:** es un entorno de ejecución para JavaScript en el servidor, complementado por Express como framework para la creación de aplicaciones web y APIs. En este sistema, se utilizan para implementar la lógica del servidor, gestionar solicitudes, validar datos y establecer la comunicación con la base de datos. En la **Figura 2.5** se observa cómo se desarrolla este entorno mediante Visual Studio Code.

###### **Figura 2.4 Entorno de desarrollo utilizado para la programación de la interfaz del sistema.**

**Postman:** es una herramienta diseñada para probar y validar APIs mediante el envío de solicitudes HTTP.

Durante el desarrollo del proyecto, se utiliza para verificar el funcionamiento de los endpoints, analizar respuestas del servidor y asegurar la correcta integración entre los componentes del sistema. En la **Figura 2.6** se observa la validación de solicitudes y respuestas del servidor, lo cual es importante para asegurar que la comunicación entre frontend y backend funcione correctamente.

###### **Figura 2.5 Pruebas de servicios y endpoints con Postman.**

**GitHub:** es una plataforma de control de versiones que permite gestionar el código fuente y colaborar en equipo mediante Git.

En este proyecto, facilita el seguimiento de cambios, la organización del desarrollo y el trabajo colaborativo entre los integrantes, en la **Figura 2.7** se puede observar la organización del repositorio y el seguimiento de cambios, lo que facilita la colaboración entre los integrantes del equipo.

###### **Figura 2.6 Control de versiones y colaboración del proyecto mediante GitHub.**

**Figma:** Es una herramienta de diseño y prototipado de interfaces que permite crear representaciones visuales de sistemas antes de su implementación.

En este caso, se utiliza para definir la estructura visual del sistema y mejorar la experiencia del usuario antes de desarrollar el frontend. En la **Figura 2.8** se observa el diseño visual del sistema antes de su implementación.

**Figura 2.7 Diseño y prototipado de la interfaz en Figma.**

3. ##### Desarrollo de la Propuesta

En el sistema web se utilizan componentes reutilizables en elementos como formularios, tablas, gráficas, dashboards, menús de navegación y alertas. Esto permite optimizar el desarrollo, mantener una interfaz consistente en todo el sistema y facilitar futuras modificaciones o ampliaciones.

Para este proyecto se usa Scrum porque ayuda a organizar el trabajo por tareas, revisar avances y hacer cambios si se necesitan. Además, la arquitectura basada en componentes permite dividir el sistema en módulos independientes, como usuarios, historial, eventos, alarmas y gráficas, facilitando el desarrollo, mantenimiento y entendimiento del proyecto.

10. ## **Desarrollo de Diagramas**

    1. ##### Figura 3 Flowchart de DevOps budgetary

El diagrama de flujo presenta la arquitectura funcional del sistema **Budgetary**, describiendo el flujo de ejecución de sus principales módulos y la interacción entre ellos. Se representan los procesos relacionados con la autenticación de usuarios, la gestión de proyectos, la administración de presupuestos, el registro y seguimiento de actividades, la gestión de partidas y las operaciones de edición y actualización de la información. Además, se incluyen los puntos de decisión que controlan la navegación y validan las acciones realizadas por el usuario, permitiendo comprender de manera estructurada la lógica de funcionamiento del sistema y la secuencia de operaciones que soportan el proceso de administración presupuestaria.

2. ##### Figura 4 Diagrama de la página

La imagen muestra la **estructura jerárquica de una página web**, representada mediante un árbol de elementos HTML. En este diagrama se observa cómo se organizan los diferentes componentes del sitio, comenzando con la etiqueta principal **\<html\>** y el **\<body\>**, que contiene todo el contenido visible de la página. A partir de estos elementos se distribuyen las secciones principales, como el **encabezado (header)**, el **contenido principal (section)** y el **pie de página (footer)**. Cada una de estas áreas incluye diferentes elementos, como títulos, imágenes, menús de navegación, botones, tarjetas de información y enlaces, mostrando la relación entre ellos y la forma en que están organizados dentro del documento. Este tipo de representación permite comprender la estructura general de la página y facilita su desarrollo, mantenimiento y organización.

3. ##### Figura 5 Diagrama de usuario

   4. ##### Figura 6 Diagrama de Gantt

11. ### Límites y Alcances del Proyecto

    1. ##### Alcances de Frontend y Diseño

* Interfaz web responsiva para escritorio y consulta en otros dispositivos.

* Interfaz desarrollada con React, con arquitectura modular y separación por componentes.

* Mensajes de alerta y retroalimentación visual ante acciones o eventos del sistema.

* Pantallas principales como dashboard, historial, alarmas, gráficas y configuración.

* Validaciones del lado del cliente antes de enviar datos al backend.

  2. ##### Límites de Frontend y Diseño

* No se usan librerías de manejo de estado global complejas si no son necesarias para el prototipo.

* No se garantiza soporte para navegadores antiguos o sin soporte de JavaScript moderno.

* No se contempla optimización avanzada de rendimiento visual o gráfico.

* No se incluye soporte multi idioma.

  3. ##### Alcances de Backend y Estructura

* Lógica de negocio para gestión de usuarios, historial, alarmas, eventos y reportes.

* Autenticación básica de usuarios y diferenciación por roles.

* API o endpoints sencillos para comunicar frontend con backend.

* Generación de notificaciones simples ante cambios de estado o fallas.

  4. ##### Límites de Backend y Estructura

* No se implementa autenticación avanzada de nivel empresarial.

* No se contempla arquitectura de microservicios; será una arquitectura simple y académica.

* No se manejan altos volúmenes de concurrencia ni balanceo de carga.

* No se desarrollan mecanismos avanzados de respaldo o recuperación ante desastres.

  5. ##### Alcances de Base de Datos y Conexión

* Base de datos relacional simple con tablas principales para usuarios, roles, eventos, alarmas, variables históricas y notificaciones.

* Relaciones básicas entre tablas para vincular usuarios, eventos y registros.

* Conexión backend-base de datos mediante drivers o herramientas compatibles con la tecnología elegida.

* Consultas para generar historial, reportes y visualizaciones por fecha y hora.

  6. ##### Límites de Base de Datos y Conexión

* No se contempla una base de datos distribuida ni replicación.

* No se manejan grandes volúmenes de datos, ya que el proyecto trabajará con datos de prueba o simulados.  
* No se implementan procedimientos almacenados complejos ni mecanismos avanzados de auditoría.

* La conexión será local o en un servidor de pruebas, sin garantía de disponibilidad de producción 24/7.

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAACAAElEQVR4Xuy9B3Qcx5WoPYwSJQdJDgq2mAAwiEqWxJwziJyJnDEzyGFmkIhIxEndPQkAqUAxSBRzQM7MBJFBkVS0/931ep+961377Xn+f+/u2+V/q29PTU8PCJKyJMuWz/lOnUmARM7He2/drqqW3TFrb3F1wE2mZsJYPW7Qjuq0w3rtDa3uWr32qlZ/pV53uVZ/sVp/oUrXX63rq9L2Vmr79hp6K41dFYbOcn1HmaG91NC2x9iyx3C+lD27x0g5U2I8vcdwsshwspA5VcCeKWRPFzAnNQbklMYMnFSbkBPOfJDvxAkNe0JjBE4XcoR8VsyZAk7C2UKTE0WcmHPFJjEtxdyktO4xEUpYJ/BFO81FLII/IvnNwPlCjgL/6dPwl1DInuEfnIK/jXyAOwl/DwTrcY0FOKY2I++rzEdUpsN53LsqxHwgz/ROLofszzU15XKN2abGbLMtk7Nmm8zZrCmL5TI4Jo1j0m2AIcOmS7fWpVtq08zVaWylkt2baipXmkuVpuJUS6HClK/gVAo2L4XLTbHlJFvTk6xpiTZlglWZYEtJsCYnNCUkNMbHNUXHWaNibeEx1rAYa1CUNTDa6h9l84ts8Ips2BVh277btnW3dXOYbUNYw7rQxrUhVtnHVv1HFh3oddtU/yFbe5PRTxgNo0b9sMF4Q28Y0BmBa/XGq7XMlRrjhRo9cWuvrr/K2LeX6RbcMnaUGdtLmNYSY0spd34PQzlXwoBep4uM/N8m+WsFt07lG5HT+SbglIZD7H+5ZsGtfLMY8rdPvgNG0OvBxHI8/UJitZWYgXuJhe9KfuS+Yp2xg2LxfxzW/s+JWDWpWAfVJmBqsSxZHIjFZTLmLLMp0+IqVk06tzeVo2LtSbUUKUwFSt4tuUklt+amWDKTbOgWr5ctJb4hKb4xPr4hNt5id8sWGm0JjrahWz5RDd4RDTsirNvDLbxbjbxbNpmzVRC0dOMG/YhBN6jTX9fqrmsN1+r1V+sMl6sNl6r0l2oMxK0q/YVqBsTqEdxiOsuZjlIW3Govc/r33VzCnis2ni1iyNdZSP6WMWghZwstAOpFDMu3IPi3fLLAgpwqtBIKTBDzKA8o1rkiM/LFxELuJRa+i3pRw+4rFsgEULH4Pw79s9vuJdaBPBaYWixbjtmSA25xpkwTl2F2Fas2w1SVZqJilSqJWEVKM7qlVljyUiwQtNCt9KQGcIsErThbYlxDfLwV3YqIte2OtobEWO1uNXpH2iBogVvbwm1bdjdsCrVuCOMjFogFeqFbVCyIWAM6/Y16w0Cd/nqt4VqNEQCxLtUZL1QbJGJ1VbCdZRzvFoe07WFb9jAInylM5wpIuBIjkYOKJYQue4o8nQ/yWaYWC90ShyiEioXfsUSs83vMiKtMglIokP0PgmJJ37U/xYQoMRiAPzv/x2fPYTHgDIpFU+GJfEc2/EBlArHeUxMwFYJVCIr1Zp55X56pKcfclGNpyDLRVHiviCURq1xpLVGYi5VmErfknEZuUiebeLfM2UmW9ERTWrxZEW9RxFuT4y2J8ea4OFNMnDkq1hJJEqIF4lZQlDkgyuIXafWKMHvxQQvcgri1Kcx8H7EG6w036vQDNYbr1UbgvmJ17uGQjmK2tdj+fZC/fXNzkVkqlj10IRKx0CfKFxPLAf9fpF+25On5QmZShOKJ/gspNgISkyQfdhULlfrmiFWdbqlMs5anWSoV1lK5GdwCsQrlHLiVn0LcyiVimcCtjCRzWqIlNcFK3Eq0JCVY4uPN6FZEnGV3rFBvoVvekZZdEVaSE0m9ZZbdsuo+Mmk/Zutvs3VjbM1Ng25Crx/T60b0xkEqVq0OuF6jvV6tv1aluwI5scrQX2ngS3h9T4Whu8zYXcYA4BYCaRHKeZo+hG/F/g+X/i076eXiykMhEUvy/UnA/zTNVq42iKGBTZrj+BdpzSTg/I/H1SScfNB/ISegzMrnjmtMPJajGjPwQT558L7adFRtAasgG0KBBanwHZWJ8lYuC6kQ2ZfDNWYxkBDBLai0SLGVSUp4SIhshtWQYQG3tGmW+gxrTTqU8EQvoFJprlCYSuXcHjlLxFJYNSnmvBRTTgqXmczmJLFZiRzErdQEszLelJIAYplBLJIQY4hY4bHmsBhTcAwXGMP6R5v8ojivKMvOSHDLsiX8GyCW4wtwceWh+AJiuTo0KRKfJHyzxeLYTPO9xNqbagG3yhSmEgVXpGALFRYNKeEhG3I5KWxuMpedzGYkcWm8W/IkM3ULghYptni3QmKJWwExZnDLJ8oMbu2KNG+N+AaIRb8/V1ceii8gFsVVpkmRKIUvSsRy/W+58HWJlckAbCZnyDDpMszadJNErKo0c6WSK0/lSpVssZKBhJifwgrdBznD6wWhy5SezLuVZLK7ZSHFFinkzRFxpt1xXGgMw8ctE7oFYm2PtEjFmtBrQSxSZrmIda26XiIW33QgDa2ecqarlLjVVW4Spoc81Cp7FU/KWDpFknypDidcpHlwaOPK5et0wjWuTIHEJIlekt98qkjgdDGHoHA4GbRPA1lsnQDH843HNaxELFAKeS/PBFYBhzR8maWxHFCbwaq38ziAikWmh9msi1hGgM1kDJmsPtOkz7RoM221GRbiFs/eVK5SyVakcWVp7J5UFhIixK0CBZOvYDRyY26KMTvZADkxI4UFt1ITGWU8K49nkuPNifEmvpDnouLY8Fhmd4wRxCJxK5qDhOgdadoZ6RKx/tLFcuAi0xcWiyL8fzq/6CrWiWLC8SIGESn15xLLqOfdkohVlc7uTWMq0piyNOOeNAbEAoqVXKES4haTJzfkgFsKLlPOEbcSWeJWIpeSaAK3+GLLBAhuxXGQE4NiSUIkbkWbHX0sbL5DKrxpMIxpteNa40i9QywYSSrk+w5Xqw3Axb26C3uNJCFWGPsq2N4yFrMh0avUCNDuQ9seFhFPpvj5lKPBI2bSCszxRU5W6dPMIuFMkQkR+vXOiN7lbXNkNOH1qaH/lZOFk3AKohQPSXZOGAn5HIJKHVNzyGGN6T01AR8cUnPAQQ3hgIp5R8Uib+cxgDgVkmyYbbLlECxZLGDKYkgXPos1ZjH6LKMug4GcCAkR5oagFxrG90s5CFrl6RwUWxi0CuVMvtxoL7ZIIZ+ezGQmGsEtyInKRHNyAhefxMUlsjEJXHQ8h2KFxbKYEHmxuKnEGq3TD9dJxGKoWJf36i46i9VT6iQW8GcXy1WmeyAJPK4fmIQprBIzpVhmV7HEoFJfVCz+8g4VK9MAOVGbztYRtwSxqpzFghkiRCx7QjSDW7lyLkvOZqYwWUkMFPKQEzFoJSax4FZsoikynouAoBVPii0IWkKlFfvXLtbUhone5bOYc7aiuLryILj4NLlYeCX0qIZDvmKxjNp0Y10Gywctk0SsijRTmZIUW1DIFyqN9DJirpwhORGCFl9vpSVz8iQuJZlBt+ISTNHxLOpF3fKLZWXUKioWqbF0OhRrpN7oNDG0iwUjVFpUrP5Krq+co9kQlOosgakiM7VYkpJLgqP2chYLXvmyxBIxVcQ6XsROyoliDrivSS7OwSsMX1exoNT7+RxwtIA8eE/D3kusd9UsQMVCJGI15ZjBKms2h5h5TNkck80asolbhkwDjPWZTF0mV5dphqCFM8TKdFNFholU8UqGFFtpTFGqkRZbKoUR6i3QK0tuzEhh0lIYRTIrTzYkJxmTEg2QEGMTmOg4Q1QcqeIhIcIkMTCO+baIRYvle2B0xundY0XspHxQyACk+uZxVQqhH7BjINjFOpLPAe8VkAeHvyaxDHVZxC0XsZgypaE0gylJNxanGzAn4gyRiKUwoFjpclYpZ0CslCQ9iJWQyKBbMfFGcAvqLXArKBbEsug/4nQfs9qPmPoJphbF+tBonNAxY/UGEAuy4VAtyYmDNTr+2g5MDA3X9hqBq1XGK3sNlyuNFyoYkg3Lmd4KjpbwvGEs0FnCdPKTRNSrtZhBWopYMa5uIQ+SGScxacooIuFYoRGADIWjy7tOI2jxQQHB/sD4UBzVMDxC7kOxeKUmQSpWvultDfeWmhVQmd4kc0MWacrlbDmsNZtB+AvSpITnsgVAL102A2LxMPUZZL0DUJ3B7c3gKtPZ8lQjdh/4zpZTxFIp9HlyXY5cn5liSEsipCYSt1IS2cQEIwla8caIeCY8ng2JMwpifcLpPmG+gFgscavyQcXq/MaLRXGJMa7wUYfHVZ1JOZpvIIiUAt7nrfqqxUI43iqJWLVpglhAZYYRxSpP5fhiy1SUyhUoWbWSuKVR6ECs3BQiVkayPj3ZmJZkVCYZUhKNyQlMfIIxJtEQmQBVPFRaTAipsb4lYtmn95MCcUiMPahMjtSYAvZBeE9jRLCoovz5xAK42nSmJp2pziBUZujL0/SQEMtTWSi2ylI5KOSLUpmCVGO+0kDFgoRI3JIbwK3UZAPJiYnGhCQotvQxCQy4BXErNJ6R3SLdUS0V60OjHmaF4BaKNaplqFsAiMXDoFhgFXBlL3OxkiVlFrhVwQE95SzSXQaecahXl0tbq7WYA6hYWHLdq+pyVWpqsSQxyd6BnJwP8qHcYY8VcIjku3eBEYNm/IlQk/DpITWDTC0WWIWgWPvyTA28W4g114RuIaYcVs+jzTIiJGhBIZ/F1GQaqzMMezMNFek6cAviFnELEmIqU6Q0FCj0YFW+Uq9WGiB65ShZUmzJdekpekGsJH1iMrpltCfEb4lYpA8pLM6cFMmc/0i+eUqcnSgwPyScGIlYVKmvRSwSt+qyDDVZ+upM3d4sXUVGfXma1u6WkdTyqYbiVH1hqqtY9ekp2tQUnSIF3NInk0JeF5+oj00w8G4ZZDfN2ju8WB8b6z801N401k/otaDXhN44ptVTsWgqpEBChIkhYS9x63IlCwnxQgXXX872lTEIzBORnlKSFrtLzXTBFkBzoh3iGVVNIhZeqnP4ZEfSeaJTOVzQTK+WSFbQYzeSRixyFUVjPppvea+AcCjfJOZ9/t0pANvoiNlNMoqfSsRCDmqYSXkXlOI5oGYPEJkYMftVAm+qwSpjo4q15Rob8hgYCXmcNZe15DDmbCMCbhlhbpitN2QbCWSSaKjP0tdm6moytGAY6FWVoa3M1FZk6knLlA9aSKE9dEEVn5uizeKreAhaaXK9PFmbklSfnFiXmFgfn6iNidcSsSa+uFjkoqFYrEsVzKVy7mIZe6GUASRidZcYJWJJSq6vRiya7CYRi4JigRkYVCRi4TWWB0XDTgGJSfmT4KrUVyEWwGbpjUQsHhexajKoWFqJWMWpRupWnkIrtLXkBhBLmaxFt5KStCBWbGJ9ZIL+zykWZsY/i1jCpEzNIijWYY2TTw74C3YPjFMuc8XVnin4s4pFLk5DKkSwawpuQU5UKXV5SmO2wpCpgIilVSbXKVJ04FZysi4hSReXpI1KnCxi8Vd1dBKxYBTVWFOJhYBeVCywCkGfukpMyL3EQiQll6RfKm6Un8w3TiqWONlJxML0RAMJWUfAX/eVKEVLHEQq3GSfcZXjT2Fqsd7ScKCUWCwE3AKoVTBSuGwDk2MwIiQtGrXZUGYRt2ozYdRDvUWKLeKWsTzDUJqmQyBiFfGAWBCxqFgZSuIWFSsxWU/EStJ9rWKhT5KIJanlv1Kx7tWWlIglcYV+uw9EPjM1rvZMAf21fw6x9OUZoFQ9QsUqSDXwEUufrdRlKrQZSm2avE4p14NbKSl6u1j1YrF0HxrqXcQSWlko1mC1k1hX904lFp8NncSCVAiTxJ4yS0+5CUYUi/JQYondchGLO8lf35WIRa7HqYUQJRELraJi4RQMkIiF3y7lXX7EDzhGF5P+EsUS6vfJxBKCllKXq9BmKeozlfVpitpUpQ7cksshYkEqrI9JrJfdtOjusHqw6iO9/pbBKBWrToA0S2t12HcAvYZqjDeqyL4dmBterTTwrQfuSgV7ucIESsGIbl0qZTF0kehVLuhFSy5JABOFLpIZ6SXFlmKO3wZjL7acFzfzvQb7hd4C3OaKe12IT1hmQYh6r8AEOGb1ksgEj/NNDmOEbccCMMMXQ7WbFMcvsTuBv5w+lYK2FbAIPj2gMSJva1gx9xILAbeQplwDAGWWNY9gyTVQzLkgls6YS9DnGgBdjl6bravPghpLj1Sn1wOCXhn15el1ZWm1JekslFmgF6niFXqh0lJos5XaTHldeoqWFFsKbUpKXUJyTXyy9tsiFlVqUrEkoeiAmhMjEcvlw5PzDlnlQsCnUp+cxaImvaM2AN9IsYx70khPi7S1FNqpxYpJ0ZJUeJvRfWTQfmwwfKg3fMhoeau0KBbpkdbpQSkUC9ukYJVErKuVDIgFgFJolYCzWH3lHE2LriVXRykp513Fsm/cm0osUSPUZG97CkkQEiJkQMEn58aja5ixS2BCUCzakJSIJVWEx9Ww+2B3aFK+mFgIyYa8VagXPgax2Fw9k0dAsRxuZRvq7WkRJokgltit0gxDSbp+T5oOKFLWk35pKiEnVUcSokKfrtCBWAqFNkleFyvni/e/iSX5smlwEhrcUMTw2A0TvlfJt45IvbkvLjJ9Q8XK1JVkaPek1wNFqbVTi5WQoiOd9y9DLMGthxOrlP3TxeLzoOMys0QsnAlKxOLr4qnEclwz4X3an2dEqGFvquCxUfo180i9uS8uMn0NYqFbUL//KWKhW1DF82Jp0xX1SkUdyYbyGijhZbc440dGAxRYt/W6CSNWV8JCP2BCx43WGcfqGWCkVrhiCFZBmTVYzYBbyPVKPQ8UWyZSaZUzCOol6ZeKxDLwSwKF/paY9iKpWJJZIW4hJDPBIrI2gcYncaAiNbu9qHLU6UJR5QQ1SXINTkBtQvarOIDqJY5qIqSqTco7+RziGvOcMTrjZBg+QMsBiWGkX6oibrlCDMvRm3KIYXyxRQC9oNIS6q3M+posXXWmFqjKqN+bXkdaphn1ZVBvpdeVpNZg34FUWql6mB7iDDFDUZcqr1GmVKek6P8mlkMsR2RyFmtfHotIxHLOjw8nFsXFpL8QsdL0BeTKtFaVps1V1lGxSOtBXkPEusno7xj0VCzcV0jc4sVCpahYwkoHPhUO1bBUrIG9Bh4jiiXMEO1i4QxRfIVHMEzYjUh68Q8rFm4/PJnPSMQ6Zr/894GKXKt5j09/B1VGSe6TrPGVpDy6wsm+asCJyTKjOIBJ1ZkaF5O+BLEwP5JrOyon7iWWIQ9SYT2IhaBbIBaCblXyXVN0ixdLW5BWn59ap06vz0utzZHXk7mhvDZdSYJWCswK/ybWlyXWNydiff1iQdDCiIViQQlPxLplFMSyl+1fiVi0EU/HnnL2qxMLry5PKtaBScQillBjIIkIDgliQWZhG1X4OnksyoyMeOT1ejhcTPq6xWJydGSG+NBi1RVCCZ9ao0mvzUutzkutz1bWZSqFMouINcYaYTJ4W6u/oyOzwpsGBuaD4zoDQq2CSgsBvYZrjIRqFsosqheIBWWWfQEgd7XCDFypNDtmiPZii9JTCpNErruERSRi4ZlmVCzp6ga6vq/QfKLIeqyAbNATryUXLtHYdxJjLSUJUZT9ebp9KgNgF0u4PNKQzTTlmK05BpuatRWZuTwDvMhm6OCpNUcHH4MfoR/mg5kBvlSEfs2TQj/mqtqDaAdVP/lAPvumhtmvNk4K/z9GaMgzIDYVwZqnR8z8JNFkN8xeaUGZVV+fVVebrQVqsuqrM+uqMmorsuqR8sy60vSaPem1Rek1hWnVBWnVqtS96rQa0Cs7tSZTWQsJUfk3sRAMTm/lGnkMb2XV78/WW3NNjMpqLHibKTu0t2BfcY5Zk2ao0jRVqS3MnkaLhgWr3s6tfydH93YuPAApDXwkE2b7rjJ9u8QaZYhPYNUXEwt5QLEkbj2gWHhJB60CmSRinSxwWraAXasjpF/lWCNFkqDGBD6hW2QPMS2nMESprfvzrOZULbkMomKM+ZyhpDFdXv2Dn65/yt3ze+67HvfwnO2+Y7bb9kfnb/vBooAn53v/4EfrVKmGeo3NpGLf0nD7suvezNU25HL2dHkfqGEoiqtSUxv2IGI1qRm0ihr2gGIhKBZ1qzJbi1bBWJZRW5JRV5xB3AKxNOnVVKys1DrIhgp5/d/EIkBq25drYTOMRk1jVWHT6m3JM3+4/KkXfGYt9pK5e8oW+cpeCJS9GEDGxX4y92CZe8ijbgHfdw+c89z21eviDJUHjCpDg0oPYomD1hRQsVwdmpS/LLH+FrEErGrihCHLHBuU//0frZzj7j97gc93lgZPd/Ob5u73qFvQTLfAaW4BM9wDZy0ImOXhN8PDe7q7l2z+jlmLfR5fFvTE3M2xIdlmNSnIHlYsrLtdTfqLFitVqZNNGJnbOuaOjrkF00CDQymJWNQtsVhQYNE26eRiVbDO/VLThVKWgm1SsmSZh1oFk0RyNi5/JvF5+6Gx0hrLvrP+ZCH7QYERZ4JYXcE0UNwR5ZsLDG1g8qW6Yb+qvlFtIHOlPK4JlEosZqsPPeOx87se3o/M3TkdvPHwlXn4yzyCZB4h8NiJRSQtznHbMRvcWuQNwIuz3XyfWbijOp+1FhlMah1JiDnMPn6VQZOaA+hiKfo1I9LaSzMVYBLydgEnft3VKmBfPtOkgSxvoEjEsuTqzHk6NlcLMHlaQx5MCbW0zKrL0YnFwulhZSYps0pEYhWm16jTqoC8tL3ZqVVZaTUZihqFvPbbKRbEDBPpI+QwTbnErfI9DT9auG363O2PLg2Szd+FYvH4T3cPlC3yd2KxLyTHme6A9/RFXjM8vODzMyDIPb/zyZ9sYEv2G7OM+9QW+OVYL+Oyu2+VWKnKehnIBErd1ho/rDeM6UVKafX8RWiHWKAUFWuklvnSxcKtFrSnhSeI0ENEphYLO1j2JOhYvzCpWJCtGnItb2ZzhwpsDQUNtSrLk0t2PkJkAm8CSaBaRKya4e4rm7djxnyvmR6ejyzxfvK10Dkv+E532/HYy0FzXgl7/NVo8hkPTxQLfgrcemSh75xHXjHsOcDlcmgV5EcUSwSZoFGxJJnR1Q/EVTKJcK4/AlYhDrc0DHULrILRlKvl8nQAqyJtUlDKQFY9ELdALHTrXmLtyayDWSGKBdlQlV6Vk1admVoNE8NvtVhvZTO2DEONuuGZuVtmL/aa5u5jD04kCfLSeMue2zRz7tbvzlsp+96SyIzqgPhi2SPz5i33fWLZLtk8LxQLghafEIUIN2furucX7NibrbeoCCZS5fxNrG+RWNzb2fpGtTkmouTZ5TFQLZGS3J23agmIIog1Y9422ZMrfvfvd/svTXh6R4ZHpX382T//9g93Zd9fNGO+J4pFfmQRPCA5EX5k9kthT78UpIgtYlX4nQmp8NsnFn/phiI2acx5MuiornixhsgCZUEs+yUdw/UqRlj0N5lYF8s4gIrVX8L04hpl/vg/EEt8bad1j6612NBqPzukuchJLLp7Au/ZRGssKhbuiTigYviD8BjxbnRSV2VpG7NNtSXvfM9j52zeDClLgme5bX99rd8f7t59bsHaOXPXPrbMa9aind9buvOJhSv+ePfu0uXes5fAx7xFBRnh0YXBM5eFzFm0TV+835ahs+Xq8SqK5OoKRVJywVROzP30Moi5r1gNPDaVHsGYCmWWmXfLqDLgxFAgS6fN1tXZ54bgFrA3C2aFtSWZ1bTGKsqoBasK0sjlHRWZGFZlKirTlXXfUrGgiDbnWLZsTpo+b/M9xAqa7bZ1/pK1s59a8uwLnj982f97r4VB1nt0kees+Wu/95MXZ3zfA8yDGaJErEfcgmTufnMW7wrxzbKqzHxsIIvNJQtX/ibWX6dYMBO0lR587AdrZD/dPGdZoNQqYHHAnIWbb33+uxfWBH9nScA0t10yj12yxX4zF/v+YHn400s39137+Y9e8n908Q7S0xKLtSRYtsB79iKfWd9/rV5jIb2iHD1AtzMg3yKxxqDGIjgphT7xSul5BLGIVdUGrK6+IrHaSvQgVkuRke64F69uuK9YB/nTYKlYb6mE/gK2GLg8pjDD/Li7j2ypH5n9OVsFhfyMRX7PvOT5b//v3ade2MEX9b7YsiIP3LzcVgb94b/uPrF4p2zuZolYMlLFkxnidxbtUmUx5lxOopQkgEl8kjyVuOJimJNYVLivVKzK7LrSrJrSzHqoscAtqLHyM2rAKkCdVgNlVpZy77dXLDaPe/qpNTMWBcheDkUbnHDzBl2e9Nhw4+Yvn30jSOYRBJ+ZsWjHTA+IT14yt13zXvG8ev3z73rsmga/QZgP2sVaQnpa091D4MHzi7azOfcRC4owgF4n/usR64aeaHSzjjCqleY+SHZixNdweJ+kEKX4xVgIvZIjXuiHx+CS+aDz6VlUqU7+ko5kVohbos8VsGfzGQDXJeNNb4+ryD0jP1CZ3lNxwBEVuYzzrop7J5dByDUcFQc+UYyF++Y8t50Em0U7pFYBSwJmunt9d/4m2YznZY/8RPbjVXMWej29Mv67L4XJnt/65AsbZv7IY84zr3zPbQu5sCP5WdI+JZ2taQsCnnp2a1UOw+YaTTkE4WSOXEaMcIAHhc+PDWoW2acREDxz7qbSfqnEJMEn5yRL4GeFkgbpA84K92ZpgcpsbVkWKFULYoFV4BamQjordDRI/8rEQqtIuFJzeBg6QLrtIrFgzl+X3/DcS7tJ3T2ZWKRx4O4/0933uZf9/+Pu3bmv7Fq0NvJxjx2z5m360cs+TyxY9r/v3v2ux87pC3fNXMx3KO4h1o/nedZozEyuEd36AmJJSy5nse4Vov4m1kOIRftYwuXnInLAOr/li1iF95+hVr3LLz93WsrnLJah/O3ve/iRy3yTiTUbpnukrgqdPX/rY0/89De//cP4nX/c6B0FfPjZr//9P/979o/dZM9tknkE8gUWX3iJmM6LNXNp2JPzdtQXNRjyjNQtopezWJPOFqlYDWojAk4AUs+c8+M3VKyJWuNIvbSokijlUlQJPl2vNCCSokq8omGyXTpOR99igdVRzIJV4qXJLXR1A49wLFYROdf/WAHHHyNjwZP1wKrDBWY8KOEtDVkrTHfeoVKg1748snelqrjxUXfv6Ut8p3lsl3n4SMx4+vXIH74SOWvujhk/fuP23//rf//n3SvXPpRnFNca3urpG/rD3bs3PvvN4nURj7lD0CLtBlexSJnvEfTEvB0V+Sa9ykjdAtAnlIz3jCwxsKoYAbteYFWjhrNpjGKa8llKg0vhRWspARexpr5WSKsrvFaIpZVErLKMWhTr/tcKv/li4foZegclPGntOH9+/9ECGM0fFFiP5luO5Asn8fHhiiy+o0uE+e62sFC9iQ8SZcW2RyBbLZ1crDkv7P7py0FPPfPa7//j7vSnX/jx0p2PL9z2xAv+j7nv+vHLAU+8vGPGM0t//S//+dTzrz+6cKtr7W+/yBP03QU7SgtMujxhX6gxh5z0IgQqFYeYVEYxGLGoW9Z8RkyDMxCWvrliDejYkTp2rJYdqcYtEmSXBL9zEExyzPsQ/oqNA0x8k+Y+ewZ0TAP7yH0rnHJfl/MW++YSFqzqLGZbCwyni/Qniwwn9zAnK0xX3jwxeKR58HDrsJ2hQy3wdOBwy8DBluuHCJcPtV46TLh4qAXoP9TSd/h83+GWnoM877b1vNPWfaC1792O3oPt3Yc6mk/d+P6SneTqzWIyiSNCkDV9u2Tzd8xZEvLcz4KXrfD519/9z4zH589ZvAs+wE/0AgHy4YWec9x2POu+6d//8+6jJCeufPyVwJkv+MsW+xHJFvuRjtci79kvhT+7zL+zZejcu83A+YMtze8SWg62Aq2H2pD2gzC20rHjcFvHoXYCPjjcQh4cbul6rwPofLe1/Z3mtrfPN5SaDap6m8Zgzq6DRA85zlLANWg4PmNyvECO5j5NrKgyHyMZHLk84jo5JiTHAJFVm6uHfwYw1ufoqrLrgeocLYwwGSzLIsf8wQiAVbgruiitriCtVqOsVqfX56Zps9Pqs1K1MCVUwKzwmpYZrmXItb8a441atGqSEHVPsbCtUG5C/hSx2vYQsYAzhfpzNdbPz136l0s3P++49nnPjY97Bj7vGfp5N+EXPcOfdw3C00+7Bz/puoHc7rrxYbczvcDgRBcwzDMKjHeOEDpGx6/9P8//zEe2xBNqbbtYEGO8Hl3iP2vBLtmsn/z2j3fdXveVPb1i+vwdZPGMMzPcfR9fsOOJ+av/z927skfnTl+wSbZgOxVrmsdO+FWzXwp7drHX0OVPB7qGgBvdw2LwRWC4e0TMUNcwMNIzKtA9hIz2DANjvSMTPSPwAMYPL06MdQyaNXootkAai4a12QUSW0WBPGvJYwEMmVwema4CvFgkmqJSaFVdNvEJIS2GzFpUCiCNhvRasKqY36gDYqlSq1VpWnKIQ6o2M40XS6GVXa0nUQq7Uw8gFisGrfqyxOopJFadK2NvvHv65/03fn5xBPj0wtBHFwZv9Q982jf8eS/h530jn/UMfdQ/fLt/6FbfIAIOIbf6hpCJ3oGJ3htjXcAQMN49KuZK6/Dsp16c6UEqd4hDMAEkq2Xm75jx/Ibvz9/wP/9995kXd05fEvrIzxLmLJXO+0jvyj1AttBL9pO1s37y+m/v3p2/wnfmwh3Y05ItDpjuvhPmldMWeMlmL77SOni9kyBRij5FkygSz0Z7nRjsGxjqvzF8YRAewDjUOzjcPXS28aRVjW0wqUmIJc8IQJ4FmShsHiMcv8YDmRqUAp/QqtosUAqClo4U7Jn1FRkkYtFwVZxG9hUWppJ9hZo0sq8wT6kj5xkp61GsFKWLWJJ5HwWLKt4nE4X6hG5dLnPMARHaCMVeqEMp0TQQoxRwNre2tcx048CpX14e/fzi4McXh8R8emEE+aR/+BO06gLhw/5BniEJ4/03xvsGx3qH4F85oWcMGO0eHeXFGuka9Q5Mh4xGYox74Gw3f5jiydy8f7jMKygyt6ic/Z7HtmlLgmWLwshqPg/SLxWPuGZrhvvORxds3Hf0/OJVnj980Y9fzkUAq2a6e81c6BmftPd6y3UUaLBnZFJQIEeIcma4b0TMUP+QMzcA+DOeYN/bX0AO8hOUws2DvExiYAIhBkKUGFSKUpUtHO2H8OlPACJWYZpek6YD+FhVr8JjZ1K1GankgL8vIJbpWqUFoEp9iWJ1VljOlLN/f2Ho55eGPu8bsPsk8PGFEQRilRCuvrhYwxDDOjrGv7/Ic5q7D0zfHllIViHD45+84nX743+RzZ4/Z+76R913gVXAbDcnHnEji/tkS7ynQaX1apBsxqOf/PJ3c+ZvmWFfawpWzXb3fNzdp6/v09H2P0msof4RMRLPRvuGholbQ7cvTNQoy2hbH69O4pEyYmByCtCNqWCSGAxUNZl1iNgqsVhgFUSsglQDHjUDPkGsyuVPYMtQ1KFYiYo62UAde6NWSH/w4Ho1OZyIQrPe9SoOQKsAzICXSO4jXK4wI5LcJ94u0UXubm/Cs4qEQ0fxHvfF5HbRMHbW7vvtxZv/eGXis/4hQBSryIg+UUAsREiFdp9u9g0ivFJ2q3rhmxumQI0C38TtoV/O+M4y2Y83ytxD+MuF/k++FvrSusA//vHuvFc3LXht26KVu9xXei5c6eXxxi4xi5Z7ua/wWrjSZ8HrO91e27nAY8l/3L274LWAR9xgHuA7DYr3hZ6yZ9fJpi+4evHjkQs3ByD9uXCjZwRxVQ0Y6h19EEb6BQY7h641X4P63aIxQRUFmQ6qKCyhKBCijDkMRZ/L6HJAMnIGqZY/wKg221CdQ84ghQwIY2WWAcCTSMvStXugWs/Qw1icriNJMF2vTifhCmr2rFSyvx7PbgCxlCCWUicDmZCBGgaYTCxH7pMUVVQsytRF1aRi0VuRH9HU/bp/7LPeG2CSWCzk4cUSlHIVCxjuHL7aMazVvf+d+dtlc/Hqsv8sD+/nlu38j/+5+3/+5+7//q+7//ZH8gD4//7biT/Y+T//lwBW/eHu3cfmbpztRlYzz1gSJFuwa96K8Ma32/vab1yHisrFqi9LrOG+MWSkf/zmldu6HC0IRKtyh1K0POdNotADsciZWNngEwGPxdpLNtTrqVXkcNt0HUJObVDWYRIkO+vJTBDE0mbI69PkdalKckpWAhTvVCxBpipGjEMpbCvYcx9kPT7xOfkE9JcT+uwHNNxHLH67hKPDXtf0Sevlz/sGvwaxhjqGhnrGLvV99MMFm7+3yEdGOk/+sgXeTy4LmP9q0OIV3i+s9gPgAbBopdO4dLmvmGWrw5550XfOIj9SpS3ynbk0FNLl9CdfvXzxzuil8cGu665WfVliUfBHjCpycZ3JZTEmwQNEuMFJNpjkRC0fpSA4ITREIaUZBno8ZHGqFooqpCBVp1EIRRWkP6yr+IPXhBP95PL6eHm9zBGcqsjtcSTzPolY6BOFiiXKfaTziY1QQFJUSe5xQpVCBo80/6Jv6LOLwyDWz0ViwayQYFfqTt/QHTLvE+aDU4uFs/RRZ6uAMX6ef6Vn4tS5wafdt33n5eA5L4Zgm0oIPCLEixfIMgcPUnhRHiGFly+xCmIVTAkXev/AY9eJU9eugEBg1T3EchjmDBXlQZCI9QF3nFGbIBRBmqOZjqLNYeqzWYDcXjWLqeVv+kWpyjKWZzFIWaaRKJXJ7Mngb7XKk59uRDRppLrK4clO1WcotRCiMpTCUZFgVZK8Ll6ucxXLPuOz9zydmul2pS6WMAD6ROFzn9PNxoVAtceIuIhlBugZkNePtnzaN/hJP4lYX4NYI91D5FsZ+KSlbUT24y1PLQshkcbl+gw/+5N4hsuRBdA8bDTM8Ah6ZrFfS+vE6OVboNS17qHLPaPXOgcBV6UmFWvqSv9eYg10DcHTk7ZzBpWJF4gEpLoscmcvEWASC+DdCfkbFBopFZlGMIkCShWlM4Vp5Ng+RCUiT6nPVBDIbSlS9RCllHI9kJKiTZJrE1LqiVhXq1gxVyrJ9mUATxOlJmEGxEznSHbl5GRRcs52mZFgP6+W+MQ/aINkV8K2l5jbSrm2EnPrHguf+8x8iDLTWwQgA++3fd47/MnF0Y9I+0qY/d0r993qc5oDgknjhGFHwd436iwTP3t36hKRZhJ8tdd7RnJy2SeX+Ux/KWD6i0GzSezxJI34xd4w9SMdVGGjhIBsqQ9hCW4q5GeIxD//R5cFTpu7qaVl+Frv+ED3CMh0tWsIGOgcFnO9ywnJuze6RpyQOCd5V8Rg9+ipfS2Q0epzuFoSkDhXqrJYYG8mg1Sls+R2velMaQYBZBKHKLAKIPGJh1qVq9AB2QomU2FMVxjSlEZQir9xoT45WZeUok9I0sakELFMYu4lFkKU4hGu+jnuS2i/paqo50mrKAqGKMktJyiD7znEom2Fe4kltgrgrUKxhM7C1GLhv3j6hbWfvfTs4i1kT86PNsmedyxjxxAlLBx1Gvm3+JyI4Qqe/uilwLlLd17pHr/aASFqiPI1iIU/eLKpGcXis5sJ45MY9MkRpdIYcoPxNCM5w92uVFGaHilINWpSjYJMaYYcpRHJkut5hFt/pSoM/P1OBLESk3XxydroZP19xBL10ElfykUsE4JFOqnTebGwL0WynqQ8d/aJLmBH/oxiXe4eGOj7JCSo4NllgbOXkFankPiIOl5kF6uIae5ePD4z8AIifMbD87sLtqXnGAcvfSqxCpCYNDUQ6pyRpE6nd6lY1zuIvicamysz9DU5JiJQhnkvfwtxMRUZLAAhCilLI7dRJfebSGMw8YlzH7kVdCqDMmWnGrOUDAI+EVKYtBQj+KRQGOVygzzFmJJsSEzWxyfrYvEmTVf2csjlShagYqFP/eUsIhypLTrokU76XK/SULHEC6r4BTBOEQt9wvVVwMDhFrxWc+eCo5YCbvcO3ibXaiYvqm5dGOYrqhs8fB7kxXK2SnqpRBIJBnoGRztGRno/vj7wT7LHlz3xs5DZi71mLto1fanXrJf9oHICgcihIB5BgMzdc+YrgbK5W773Rrhsoee8NeGyxzyuDv3yctfYjY4h+I4lYmFCpEjkuNY9PCVDzji964iCvFjHGs6DWNVZqJS5Mt0kpiLDVJrBASXpLFKWypWkccVpbFE6IT+NATR8oOJjlSAWsSrNIRZkQBKrUiADEsCqZLkhJZlJTjLGJxnikgkRiUapWEIGtMcqolQFQSin7EoJe01LzYhQWtmT4L3EkkQs5xsOfkGxAHJN8E8Ta6hzbKgLSuahiYHPLvXe+uDkdZnsp08s2Pj88t2y5zfNWug1e4HPI+4+j7r5wTjDjVyueWKJ18LXgmWPejQeaGtpH7g5/Om1roGrXdJwBVzucgBiSUIUTB6nomfICed3SYQTifWBrbk8w7A3ywIOVaSby9NMEvakcwCYhOxJNRWnmQpTufw0gjqNBdAnXimW3KUXTEpl0lOZDAWLpMsxVhnlPEkphkS5gdwTOpGJTTJG8xCxLjmLJbmKjFYRsbBUF8Qy0b3LErGoUpOKdZ7fEIEH/58jJ2kT+NvgkJvhXDvS8knvEFj1EGL1jZCyvWfA3mf/wmJ9eL1n+FL35YGegfHeiYneO/1nBi/1fFxc+o5s5uLHn9/8k2X+Ty/1hfHZZf5PzN0uk3loNI3X+n9xoW3iQs8IfOVXu68BF3oEezBQ4SgW67LzW4DUpIcUS6CD+Pqe7TxUS+VZZhKZ0k0QjcRQpYpSGTscWFWgZDWpBPQpT2lEhMSnNAJQoacqWAqxKomBKJWUwiSAUskQq5i4RGNMoiGKJyKBlfVWmS5WCj3PCxXSnic4hFVUb4UZIHeE4xE04hueAL2/EppEq/VzxQTcXXOWLP4k0A02pwrNwMkCE3L5SMtHPVBFQTk1/HEvGRFcrWC/JigA5dR43yggaYRK+gsw9bNDfKKLCKSpkM9K9Hu61jGGXG0fhfFi762BKz+/evHja5c+g/FK/51rfbcvd9+81DUBXO4akajzJXKpW8KImKudDq50DL9nbSlO1ZdlmsCq0nQLRCNkT7oZKUozFfEhClGnmsTkpnIABiogU8khGKVQKaWCTZYbkxRQUTnEik8hYhG3khliVaI+LIGRinWhwoRgW4GKJa7NKdQniVg0RLmIZQZOFZgQyd117yeWpFonVn1VYnWOIJfbBscu3RnoHx/su9nfdv1S2+DVnpHr/beu9Ex0Nw9c6hoDvmKxnEySwP+nBS51Dh+ynC9UGkoyeJ9SLUVpAoWpZkSTagLUSg7JUZrEZCk4IFPOIjQ+KeUMn/hYIFnOokmQ+ACQCdNfTAIDRCUykATDEg2hiaysZy/xibTRS0mRPnV5Lsl9rmLZi3RhGijeCUj21eRbgJMaM2K//xve+sYiEYuurBLE6htBbvYOA/fy6V5iSZY9uYrlXBgJYgl0DYgh3yKvlF0sJxWkuewheSixxFzsGj7Y0KZR6PMVDB+QrPlpZgR9AlRKjsIHJ+JTtoLL5pWSiKWQcwD6BKQkc0nJXGIKF5/CAgmJXHwSF5fERSexQGQCATIgxKrQRCYYIpZELNqasjeonOd9zkU69Yk200V1OsFFLBtwUmNFjqsJx1QW5AHEGgNu9o4CX7FYztV396AYSUpyDTNfIlTfi52jhK5hMf3dDvq6ht61tefJDSoFSzRSWtUKs0rphEuIImTKOSRDQUiXs0hyiglI4n0iSiWZEpJN8cmmmGQOiEswxSaaopNMkYkcEB7PAmEJbEgCsSogwSjrq+T6hftWktw3tVjY9hQrxWPC/cqieR+5WRexqtB0pojc9IavrszEqgIiFgQqGI+p+f2AeWRLIIwg1u1e0j4ABLF6R+iIVn0pYkmschWLn9wN4gi4FDpOSFWAzz8cw+KR/yWY3cgDKtaFjhFC55AE8AmAt3o7B9+xtuWm6PPkDCilVlhy5aZsuQnGHIU5T2GGMZt/BWTCMVNuBjJSTEB6iilVTlCmcIjdJxaB+ERDVFQyG5XIRfFKQZTanciGxjNIcLwxKN7oH2+Q9ZWbESinCHyRTup0vrSi5Tki6qFjsiN9KTFgEgWUOllgAbCWIhsAC6xi6Fm0yIUjzbd6Bif6hwAwjJqE0KJKUlrZNZIukZt6Gig0GHtGsbSShihp5HCqZiRhQ4JrkpoUagaGIsGbjhHJ0/6uUTESq/rbh/vbR4ELHWMwgliZ8vrMFEOu0pKrbMxWWrOVZgAjE5ABGolI531KS+YAMEkhNwPyFBOSmGIGIEoh8YmWuCRCVAJEKVN4kml3IkcJjmORkHgOCIg3ScWShCjJvO9eYtHWFCrlOBVtMrGOasj+UuAIv3H5Pf4O8sBfh1iuQWVqeDmGqUkSejuGxfS13xCDVlGx3rS2pifVZyQb+chkw4AkjklpyWYxqUkmAB8rU8xJyQRIeUhckhmAfCcQb4pJMIFVmPJAJhgdgcouVlAsA/jFsrL+Cgtahas9HT100UIXCq3KxQ1PCkwAT/MId2guZNEndOs4uS2lhWwuVZuQ9wqshzVmCoh1s2tgvG/w5oXhO33DmPIoEqVcEt/kPt0r/Qldb5dyamqx+IT1xR1C+jsGneDFuhcSsVwYpfR1ju2ztqQl69KTGeJTSkN6ikWCIsUKyJMtYlKSzEhCkgWJTzRDCRWTZIlONFMi4wkRCeaweFNoggMMUUHxpgA7YJVvHB+xqFVisXAT6dRiSa4iQ1F1ikciFlrFnwYj7IVHjmhsh9XWQyoLQsXCiPVXJpbUpy8kVk/n6KR0d4zA2GhpUSZrU5NYolFyozLFCnFIjMQkJDnRBCQSnwTiEswQn6KSrJGJFkpEnCWcJyTeDAQnCIBSgH+cmeIXa/KJMcnQqu4SYX26MPUr5Tc42FdQYYXuKhbtoQtjAXe80CSGbyiAVZZj5D5vkO/MfNYTxkMa67sqM+XC4dabXdj5HP6wd3AysUhTlFjVy2+LAKVw5MUa6iViDfLbE+iKJVzw5HIp9z5iYUlOC3N+6sfXRiKr7iUWVtOu9HTcQEAmKLTpeD+TnJ92jDlhF6urfRjcslpaU5L08iSOKJXcIE+2SYJTUrIVAIcoJEQlmuN5Yu1AyouO54hMCSREIbtjzaFxhOA4YhKNT/5xHOAba6Z4R3OArKfMQrtTQHuJAG+SsNCFgg1PCpnx8WBLHeZ92JoiUz+eExrbMZWFzPvyzO+riEli3lXbgHfyLEj/wc5b3RMTF26O9AsOiUMU/wpZwgBzPXBovJtsQKV7UGHeN9jj4Ebv0EDPoBjXpSa4KACRXCeWcKVjGMEe9+X2IQRfpE8RNGYKLrQ7gA+DOlPQ3SW41dM+0tM+2u1MV4eDjrZhm7UlOVEnT7QqEpsUSSCWQEqSDUhKsiUkWcXEJNmA6EQrAiFKHKV2J1iBsHgLsjvWGhpnDYm3BsVZgIB4AYhPgH8cPDBDoNoVw3nGcjDKJMed3UssTHbniswIBCf+ICGhh06OE+KR9DyP5duOqi2gFIAhShylqFIPJFb34Hi3kPIgROG+UxBrrGsEGO4eHeweHe4axxGejnaMiBnuHBvupOPIYPvIjY4hOooumJCRt42MV9sI19qHr7WPwni1bYR/BUfhweUW4AYdL7UNX2obdBkdTy+3Dl+2jxcg0nSOdnYNd7YPt3cMwtjXOtjXMkzgH7S3jyHd7eNisTpbhwGQCelsH2lvHbKYW5Li9cnxlpT4BiAx0YokJFgAyHE0JiFRCTDFs9DiCQmPNyEYn0JiTUhwjBkIijUHxBCToIpyItoCeEabPGPMwI4oF7HQJ4pELN4nsMp8ttByOt+EnXQxVCmEz3oODqotwBRiTXSMQj003AcmOS7aYLKb6Bokmz/7P75x5bOhy58OXwI+G734GYyEy78YvPJ3wMClX/B8frH/9rUrn1659DFy8TLhwqWPkJ6Lt4HeS3fEdF+4hfRcviOm++JHSNeFO2I6+m4Bnf23xbT3ftjWNxUdF26LaesjdFz4CGm76ERH/2dt/b9o6/+7y9d+dfrYBfSJIhYLRpOpNTZOHx9vTkzYn5jYlJBgi08kxCVYESEy8T4RpRJsQES8FaHBCYHgBATHWZCgGFtgLAEE8omxeMU64R1t3RVt9Yyx7oixANsiLfcUq7WYa7UvzaNrXdAqBMSiF2coQqDiO59Qp6NPR1Qm4JDahD4dyDMh6NPbuWZEIpakoTDcenX88kfPLtw69+WAuS/7z0NeChAevBKI/GSZL7I1TL09PB9Ggd15lC1ApHpzlHpTeN7GiDwYt4cRduxWIRvCcsSsD81FNoTlidm4WwVsClcj+Jm1wdlTsCYke11Y7tqwXDpuDlEDm4JVyLpQJ+CV9SH560IKd4TmX7782dRicVxbTKwhLs6WEL8PiItvQGLjbEBMPNFIbNLuhAYgLN6GoEmUoDhCYKwFCYixAn4xVrRqV4xZjGeUBdgZbdkebd4abd4SZb2nWPTkTzG8UlbgNMQnjfmE2iIBxSKddBWZ92Ef4aCKQwSfcjkBXqy3ckyIRCzJvG+s89r1/lvPvRbO77Lib0zCn8+BD6Yt9pu22IdsFnXfJXP3nua2a0PIni3h5RtDS5AtIcVbQgo3BxdtDi7YFFKwIaRofWjBxtDiDWGFMK4NLySEFq4Oy4cRvsv1wWSEt8hnQorgt5EfCS4mrwuj8GBdUNG6oAI6rgkoWBOgWefvNIqfrg0uWhNSgOOakKJVIXtWhRS9EVDwRoAGxpX+mpV+BQT+wYrA7FeDCl4NLF4VoD566urUYhnZ1qhYfUysNY5Y1QQmIdFxViDS7hNO7oCwuAYgNNaGoEkU/1gb4MfLBPhHQayy+cTYvHjAITE7oqzA9ijrlijL5mjLlsgGWXsJuT7TWszgXj9JiHK00fmi6kyh7XRBA73ehxf7xOBVP1qtS3LfAZWVxidgf64FeDPPui+HPO4+0DbROTbef3OkZ2y8a2yka8SJHpjf3XrmhQDZYmLSbDdv2dJg2dKgaYu2yp7fgkcqzHAPnO4WMGuR/3S3HWvD1Bt2568LVm0IQjSUdcHw7U7CmiA1sj4wb20QYXUIgb4uYXWgypVVQQ9JcC4hSMNT4Mp6vyJ4a01oXkvLeFv78CS0jba1jbe2TpgsnbEJTGy8JTauEUJUVHwjEhnXAETEO4KTEKLiCMGxViQorgHAfBfIWyUWC30CdvFZD00CdkaDZDbIfcjWCDOwKcrsEMt+FXkqsfhCSnoVWQyU6uJq/asT69EF5JjQ6e67fvzC1qdfJccl3E8sB/Di2hAn4BXyIi8T8M0RawVEOB8YVZOK1dI6SGgZbm0da24e46ydMQkchKiomIaoWFt4nABM6IQ5XayFQkyKsZHKKdoKkEwX3QBAZEIgOAFQPCEoEGAPTjZkW6QV2AQy8WyOtACboMa6X+4TwAs1fCFFlMLERxcmUN7XELCoAhxK8RlQbBUVC6xCet5tH20bhgkdioVneFCxhruHBro+fHqpP4r1HfeAxxYHyn7w2u/+eLfz+t8/vtR3OrjlItaawNyXNieu8sncGKJaH5S7xj/rjV3KzeEFa0PyNkcWbgzPh/EN3/Rlm+IWr4uCd9cF5iz3St0YrAbPNoblb4srddsQ/SA+fVlirQzMl7DOt3BloFoiVmvbEEDFamkZBbEMpvbdsYbd0ZaI2KaI2IZwkumagNDYRiQ4tkGMf2wj4BfTgPjGNAE+0Y3IrugGMTvsoE9boxqRzRE2YFOkwMYIK7AuwiJrLTIjLYUm4F5ikRUK9xMLYtWk1fpXIdbMBeSOgbKZz9/++O8/+bt//9FrIbKFnjM9giRibQ4v3Lq78M2zY+GZup3RRSu8lT/bkbTCL+2lnYkrAzNWB2e95qPYFlsUpKhmDl/YGJK7ITjn7fNj8CMFzOmwTOM7nR95bIr9GsQCdXikVknEQp8cSjmLpec6QmMModGW3TGNAJgUEkegJtE0hwg+RQvFE/rkHdWAeEbZxFCToH4CNkc1IZsiG4H1kQ3IuggbsDbCJmspNIu5l1jkorKGua9YIJOYr04s2QJv2fNbZz33yj/9r9+U1nCzFm6ZucgHrJKIBVEH8tr+M6Nq7fvgjfnoFffVYcXm0zA7W7hut3dKhfuGCDDM9sG1fScHNwblbAjMbjw+sClEE1/QuD5E7b4xBsrnr0EsSHY8mqnFojI1t9wAJGLp2PaQaGNIlDksuiksuiE4pikolhAY04jQ4IRITNpFolSjJ1GKsCPSJgZ9IkoJIYr4REGZgDXhVoCIdX6PGcFFebQFKpRW96jW0aQP8qzI0VwL8F4eqagkRZW4rnozj7A/14Q05ViQhixTYzaI1TnaNsqLRY6wklz1G+xxEusRj4inlgT+5vd3/+GXv/q7X/2mzvz+D5bsJIdduQeCWLMWboPJHcz4IBVu2Z1fbDq7KVKzMUJdf6gXZvhv+KUu2x4/d0VQEXPiyUVbV3opbcevskcuQroEpdjDV1b4Z6aUvbXcL6Nyf8fqoByJUlIzvhArA/PsSE0SsxzqPP/85YH5q0JV585PtLSNIOdbhoDm5hHC+Ynmc3cALdcXGseRWiqmIQSsim7EKooirqJ8iVX7Ae+ofYhnZJMYiVhYSwFbws0ApjwK5D4xa8IbZBKTzhZaEKFZVWCdtFoXKiqVFQGlgCMqqViSTtWXKNb3FwfLpi38u3/8/a9++Y//8Mv/NfjJvz2xxGu6G4hFItasBTtQLIg6IJZP0l4ITuCWV3L5luiC132Vr3qlQEL0jCleH5T9s22JAcpq76Ry+PCGUI1fSh1UYAGpdZ4J5Ys2xgSm1X9zxGpuHUXOt4BbvFUiserZXtIlj7EGR9uCo/YRsXgCoxoQ/6hGCoi1K2rfLpFPOyIbxWyLbBCDgYrEqnArsDGiAdkQbgPWQpQSQcSi8z777M/R/+R76/yCT7Xli4klyX0wAQQwAwJ/iliPLwqW/XjN69uj1vlErfONWxecJ3tuo+zZLTJ3v1mLfWcu9ESxtkQUgVgrfDPAlXWhqjXBua95p8L4iqd8lX8W1Ok7oorXB+RsCMvbFlUMBdnqgLwVvtkrA7LXh2kgk8KEcVtMyTdHLPRJSvPE+fN3gDq2LyiWC4qx8BrtC4zZhxnQHqJsPlENACjFhyvBp50RjQCYtD2iQczmiEYx1CRkfUQTsnZ3A7B6t82JiAYZNckeqEj/07UFimLRcgo7VSgTcDjPDBzME3zCogqQipVr259j3ZdtQUAmMd0HOsbax6DAAo3wmCExQ71O7QbZwqBpi4JnvxhIjijmb23Ktxt8IWiRGssuFmk3BOeBdpL+wppgoa0AbAjMg6cEYk/+mqDCqYsqV0seBJFJEqQyTSrW6jD12XPj55vHxJxpHuYZP9t858z52zXsBb5LbiNKRb/lF73PL6YJQJMkuQ9i1c6oJoCGKPEsj0SmiH1iqEmCTxH7kDXhTcCq3Y3I6vAmYFW4TSY2iciktlJOqkQtdRV/yxpnsY7Yl1Id5K2iYgmleg7rLJZ1f07Dvmwb5U8Ra/ZCr0c8vGcv8Z6+xGf64kDSjscDF9y8QKxpbrukYrn0QteSRihhQ4Ca9KuC1auD81cHFwK8Xg6+SWJNiDnTPHq6Zfh08/iZ5junz9+u5i75x1n8Yxt9o5p8o97iBYLavNErsgGRhCjMcdujGhGqlFisDbsbkXWRTQikOULEfmR1+D5gRXgTsnx3I0DEwp0zFGrSpPM+LNVJ7lNbD6ut76qkSIqqt1Q2gOa+fblWgJoEGVBMxzvdI+2juO5lpIusVhAz1ktWMj292Hv2XK+Z83fOnicwZ6GXmFlzd8CLs+Zt2xCRvzIoGyZTCKRCAJIgQnuhk8JfnCGsDcwH1gfkIhswvAXmrg5yIO21hqr5y3xqqPrh3VXBOTjvWx2Si+1We2dBwN7BEhD/ZmBFSM7rIarXQjXrgwtPnbl9hjjk4Nx5YOLM+Q/BqlPnblVxPX6xZt6q/TDSqpyGqO2RTmyNItBkN2mIWhfeiNAQhaza3YSgWPTpitAG4I2wBodY4j7CfcXCWHVfsSYtqr6YWB9eHBu6MOHln7k9IGtHQDplZ2CGmO3+afDiNj9FSk5tUlZ1bGo5Eq8kxCnKBOQVYqKVhBiFMMbJ9yKxKZVAtLxcTITSiajUKiRSuZeniqdmd0rF7pS9YfKKMBhT9oYr94YrqoHQ5EoAX7wH1TzkQURyRai8OkhRG5Wmb2m9dS+xTjXfPnn+1l622zfG5BPZ6BO5D0aUSVyeS8TaEtkESMTaGN6EUKUQTHkUahKCgQoApRCHWBKlphbLXlHdRyyqFCLJfQ8l1nDXAGTDnuaBi13DVzpv0HXDkg2flzoH4cWLHTdwNTBdZcWvLR7CXVZk/Sdu07PT1+2EY5MMv6qzp3sE6e4iK+/aOwbFdHSOIJ1do0BHx3hHx02grW2cXMJrt9N5s73zZmvXOGkWtA81tw6faxs81zZ8vmXobCvpHeB4pmXiLA8+aDs/RGqplpsnzo50dd2UiEU4P3G6mYh1vPlWJdftE815RzR4RzTBiFaRWoqW585iScpzSe7DqpyKtXq3E1SplWGNAPUJeR3FEgcqrKUoWEuJIC2rI7lCqX4gzyIBfUK33soxOZJgjrkpm0z9JhXLlslZM9jOAz0g1kDXjUnFGuoaGeIPIoMPDHRdv9Et3OsBb/SAd3+gXOscFO8tvkJecV58jKvXO4bEiNZ2Dojp7RpCujtuAD2dg2K6O+D1EaCzbQjoahvpahsDOltHgY62UbpYj9Ax0tY+BLS03hAg7U0H51pvAugWEatlsPX8GESms+dGzp6/Tn06fX4MOEUYP3n+5omW20fP39xr6vGOYmnEQpmcOggRTcDW8EZE8Cm8AaFKCUUVBqowGyIRC30CaO57nee1UBvws91/OWLd6BoDBviTMMjG9u6bwJWuD/FkjksdExc7x8Xjhe4JoL9nrL9rvK9zBF4hW/PaR3FzS0/XeFf3WHfnGMQYGHtbh4GLneQHYezoHOrqHMIRaOscJkLYx47OUQxR/GW7Ibs0E62tI62tYxio+OUGY0BL2xhGLNqCglf4Dic2OUfON9/kK3FhPN1KONUygZxuG4La/PQ59IlMACVinWweP95883irk1he4YCNhCh7YY58dWKBUiAT8GqYjRDeIKN7s5CjJP2R9cR8yjMfVduwTQUyEZ9yrQfzCJj4qE8kCeYSz2CkuKZC0mLINDVlmRGXVNjOp0KyCWLEfowHZaLv5mj/nfLCxoryA+XlB8vLDyOVle9VlR4oK3u3pJxQWnEQ2FN5sMZyWms9W8UcrzYerzUer2dOU2rZ09XsKSeMJ4EqwwmkghEoMxwjGI8jFexJgD4V0J/gOVVuOFluOM2PhBLtMWCP7lixnpCvPVqoPQpjifFEsfEEHUv1p4E92pOIhnBaXX9KXX8Cxjzdyfz60yrt6SLuzLHjN042o0zCCBznxTp2/sNjLbfKmU6vKBZnfzsibUSmKXMf1lISkzAD8q2ph8h9r4Y1viKCRCy6NwuhPU9x8xOtAqhSX6FY3cQtV7GGe8cv9tx8YXnwd+ZumTNv23cW7gQedyM8tnDbI/M2I4/O30JYsGljSO6WUNUG/0xko38OsCkgF8GnlA1+2WLWBgisC8wBVgZkrfLPgnF1QPaqwGx8TF9cF5CLrPHLFrPWPwdZHUBY6Zd1D+CtnFX+uchyfzVA2w2vw2NfGPNXhWpOnRJkohxvcYgFNRaK5RnVsDOqiaxBcLbqTxSLhqipxXo5tAGAoCXDlcS45pPs0OJ76ABahc3PQ7kmbIFKSvWvU6wrrYNX+j7+obvnLA8f2eIAGZ7677FLtsRHtizEfuysN7+O1GfGYm+Y3q8PU/OdBR57XxShNiC4TmtjsBpZHSawPCgHWBmSh6wKVQH0KbIiOBfBdyn4s8CqgDwxqwM1lFVBmuXBzgSSrhW/mpQnKH+Vf+EbQYVvBOcdOznyZxQLUx4wtVgvhdiAV0KtMkh84gvJNFAJUcreAn031wSIyykxYp/QMPJinpNVhBwrtQqQVFqdBzpArKGesUnFmugcG+i6NW+xz2MLfGe6Bc5aFPy9FwLdVux2Xxn+o5fDZi7wnuHmM2uhz0x339luvrPdveCrXR+mIQ6RheTqNSEavgUqMGlLnbI8xIkVwZOzPCgPeCM4Z2qWB6mdCCwU81pwvhgwSQy8sjKg8LWgwhW780+em5harDJjx65IZie5ZtxIluDxFdUURdW9xCIVVahVyIBhDYhrtY68HmoDXuEDlYPdNhkq9X6OGcWiWQ/hZRIjVWpSsd7OMb3NL2P/EsUa6h2+1DvxkxfInSDIHQYXBT/1YuDTbuv/8F93C6renrPYexq/iBTXKM9094L4tCFUA1atD4T4pFoXUggRwtFMJ032fElzkiKJIq4fQLDDeT+38jAI2QGZisSANGIkYr0Kv98v/9WA/OXh+Sf+ssR6L9cm5pBK4N1ciFJSge7lE5rEy2SZAlx3BdNDRDJJ7D7QNtw2NMRvEhzrlG6WB9uu9dx6dpn/tKW+5C7O83yeXLD15kf/8uyCN375b3d/tGzrzIWej78UBdlwhofXbDfvNSEF60MLwC3P6NK8uvcVJfte91S8ui0FJNsRWf66d+bPvDMgMW2MKF5L1FGt3124JbIExq1RpVuiS5f7Zq8MzPNJrn1hS/LL21PmrQgjxRC5AqN2uSZzH5zFQrfESN51SoWvB2pW+Bf8LLDgjd2a42fHiUkijjUPf9Ay/EHzGEwJP2j+sMTYuTOKIUtcIpq2RDZsjSItUHHum7oFujZi30MVVQgoxVvVhLwUsu+lkMaXwhpkR3KsYlzrpyn40sUaaZ1KrBvdt59dFihb6i/z8HrU3ee9M4P//Os//NNv/zjx6S9//3/vPr3Mb8ZCqL1IuHrELtbrXmlr/LOKmFM7IgqOtN/2T6zgDl/eGl6gO3ix+s0ueJd9/+qSjXFLN8VxR6/tjC3LqjmSUXW4rLF12bak8qa27PqjBdyZ7OrDr+xIWeVPVPsyxLo/YrFW+glifXBOKhaxqmXwg5ZRu1jdO6M47Fd91WLRCaA9Su1HeLH2vRTWJDuUYxHjas8U/BnFmjN/06nmi7//59/qtMyvf/Ov//y7P/z0he0/eDEU70ECZRaKtWl3AUzruPeuMIcvxalNL2+NtR6/6LE2iDnUG5tnDJJXHm6/uSNSYzzY89qOhOde3uWxOuT1nYlv+CkC0qqazg95Ju7ZFKlyXx2+3Cf9b2I9nFiY8gBxg+oB4xb16QHFEuaG9rXIErF6D3aMtY8MdpLVyZOKBcU7WY/FiyV7duXZtiv//I+/Liiu/Idf/fbXv/3Dgle8vuPhJxHrZ55KiE/ad3o3huVv2p1f0dSSXXfgmVc9tW93GN7trmo8X2Y+FaKsis3nlvsqPuj9eFVAmu341fSad5ZujWY+uLghPLfYeqrC1rJsS8KawFxelK9WLMd80Fms18PUYrGONY8CVKz3z02AWyDW9ghme0QDiiVWCrlXUTXpNBB9opNBqhQWVU4VVWiD4BMldL+MRh1Xbw64VOUS/oxiPfFy0MGz1//+l7//1b/enfj89//2X3efedFfNtdHkgqheN8Uql7pkw61PFRUUDPBSDaphuVvCFVvjSxe4ZsB4+rdqkXb4jdGFm6MKdoeX7bcL2NlQLa/svY177Q3fDNe2yn3jCtb7pPBi/I3se4v1osh+2UOJ7I54ECOWczb2VI5psbJM/KzVhEWuukZacqyiul6p/Vm1/hY3/gwvx5Lsq9wrOvGQM9NsIfcQYncdovcd3mO27bHFu8CZrt7zSR3vwnE2+BA8b4uOA/UcextJ6tl8oTlKIGqNc6sCNas4Gd/OEo6T3bUyGp/J+CtlUE5FPtn8u2jC/6FKwMKcST4a8geCueRPuB3SBe+HliwMkR9pGUU6nQxR5tHCOfHwSpwq4jp3bybA6VIyiM7sZzWfAKS3IfrFKhJkgULktwnqdZJhY51Oj++GLLvhVCeoMYlwY1LQ/bJ6Nf8ZjYHPFQEcuV+P+4kFl1KilCxRshhMoOuYl3rvfnjFwPxblv2u3P5y9y8CWShnwN4C0IU38fifcJ1fCF5ZM0d2cQnbVyhWJTlQXyk4Uf+AbYVHKOwlCpAeIX0FEjTgYwYeMgaPdEoekraDW8AoAsPhiXJKHoK4aoQWBmSf7B1fBKxzo+KxdoYzpEtWRH7NkR9QbEesKhyCVGCWGCVIBZtMmF6ejPbCRcz7oOLWFMh6XJRsUZ7RybIdWgnsUa6h6723oKIRWRaFMQf3yBGOMQBAbEgFa4LK8J+FbAyuBBYEVRA4PsLYiSNq/+/vfd+jiPLFvT4B0jaDa1+2VjFatzrHtMzb6an2ZZs7y09DAkQ3lYBqEJ5bzIrTXkLS3hvC947kiDhAZrunpk3s+9ptVJotZIiNqRV6LfWuXmzEllZBRBks3v6Pb2OL05k3UwW2cTHc8696UCRJEAdEZIFTxh5/uIhkoWoVPB61W/PodUp4HdInSMBvX4LB19Af/j2yYffg1ipte8JxRI6nrRiHUWqUhhpE5YOiVjCb73cMXfAPRQEi4We1idie2nv5vz+z3796b969uN/8YvP/+tnP/1vnvkY+Jc//1QMHvwXz3z43mXNG1/UvHVeyXNJ/eYl9dnEOZyzF6qBM+erMPi0z6vna3guVInhTwolDpB+5K5NhQSJLxk9HiQx0hFlwURMAjITIHx88aKCc1175pKuLX7veLG0ngUQCzmUWX82W3ojDYB9EpoqiVhpmyrcUUmaqucuRg6VulgP4Aooov6UpIMWr4wDqUo9nljKQBLJhknuBpOIxb92kLttFdhZ3l+duI2uy1t+sLTy1dzyQzELS18tLgJ/mJt7MDf35ew8OmZ2/t7cwn1gZvH+9PwDYHL2HjAxBzwAxmfvY0anEfEpIR6Iic88wIzNPgSG5x5gBmfuAcMwgvhqcPr+4PTD3qmDtPRN38N0TdwHuicfJPhSHPtmvuqb+YPwsW16t2X6oGXq4Y3hvd54klVPIJag1PchVqQqLKZOnkRTdTjVqqPFCiaLBTL5RPBi4atM0QOMahHYsBvc87FEYu0eLB1gsFj3bj3cWdi+t7a3vbCxubDFvcMNcWv2ztrcHe4dOHsAelgeenbe1tL0xsrslvBoUPw8T+6iPMTczC5+9E8CdEXe9OQOJukG9sStxvjZG1NTu2PTO5jRyS1AuGdmbHwPGJlMz+D4ztD4Dorc2ZjB8b0E+2L6kze6p7e6pve6pu61j6KbJh5HLP6ed1QBs7h0lcVfWfVqJrbqEWKJL9x7nherHsfnLsaeS1RAsOpXF+uTreLEEk7VReUBQPgoSWC4v26qigqqiYuagPDsq1Ylur9e+kCs5HwmYbVz7v4cuqcestSD+X1wS4xQE8WN1w73AHf0sNrEW3GF17hJn8TPXWS8PLeL9ZqfBau2BcRP2kBPRkgwMbWFmDzATE7dA8am9gS3EJxPAuDQMMfI1D5GsqqJGZw6wOCFA4G+yWSSTeqfPMBwPu11T+x2T253T+x1jz/smfgKzQozfShFcUsJr2UdAhrh2/2S4G7begmdB0QISmGS1z9jv77ciEEyCXPARFP1c+TWIc9eqj8VkgUxYXkIiMj8GOzZ0xbrOFY7Z+7P7UCTfm9l/8vFv65Y/J3sE1M7iIRYyXfzCeyJEcQamtjFpFolLESlcrxY2CcBQazO+P2usYda7+LrGV7cS4mtOkossVUvJbfqQrf+pGLVnQrKwwFZKFQVwWCfBOrkQQzfconEaqoOiJXia1yyK8lXRkgNkwyudEw+XNy5v4qebIs2Eg/ixmJBTRT6LUEvQSz8wu07ohdPphVrcYYvhRKxsE/YLfTIjcRlxDwJsXBOkpg0OrWPGZ7YHU7IJOb4FHW8WJIUJYA96xrf6ZrY6hrfhYwFYml8i2cyPNzzOepezUYySXg5Mwq8lBHhEVl1OkNa+yRiYZ8EUmsfr9SFOuCZi7FTflnEVxkOyKMYScaKyXiwXt9SrFal/xhWOscfLqLXUhwsb6GNv6JYySlK0kVJ7pNJTVFpxXpkrkor1lG5CpMq1quZHvTIl+y6lx9frKSL1q98S7EipzyysLciAnr5ZTEgXBnAROUh5FalH4P14qx6YrH8baokWmt9gPBxrUMiFk5aO5xY20eKNc+/zz1ZrJS3HXHP5n9csST9U1qxUk1KK1aqQ2mRiJUqE6ZnbBdAYiH204oFxU5sFap9yWKBTGKOFav+scViK6PuCoSvIuaviAUrYiFZNCyHGIbGS6iJfEdfFaivDgorT2Kr+BlfslhtIJPSLzzcVkJbMjc7Jx7ObTxAr3/e/npx+/7ylhh+9YGbMO7Pbx/MbeLTPlsLe3fnDrhrH7bucs/7519PIryKbXYXt1biWaH4mbAzU3xTxXdUUztjUwcYXOyEm7HwvTES+AvuHtWVH6XO8SahxpwD0hLHvpjOid1OiOP3uiYedo4/0HiWXs8KQIMFXfmL2agxlyDW6IXM2POZdWL+NiMq5tdXIsBzl+sQoqbqF5fqAUlT9czFOszfXIgBP7sUk4oVKI8GKyPAdyFWpzIJiWcSsfCLCwHercVNxMI2AFYdzN/l3VrY3ppDd4w9RbEkXRR3+96RSMRKNel7E0vtXjyb6Uenkx9HrMMU9R2J5S2P+sqjIFagIgwEK0NBVBCTxBIupQIaFWjhSiKWpKmSqNOtDIoRHlWKAbG+WkBWYbEkL4H+cnnj4dLd+4sb+/Obe4tb+0vbX966tzO/cbCwtTd/Z3t+C8SCZksiFq6GeBGLnw/ObM1Nb2KxQCkM9gm7hW5HFqZ447uA5IJggeHJAyBVnePBAvVP7WP4E8kCokrHFTsJ6cUCqzrG7kPGeu2KF4t1OktqVapY0trH+fSbKxHMc5fDwK+v1INYv7qIZBJ49kJMUvuwTwI/vRA7xVRE2HLEdycWfmxkF7oF6MnFeri89WD57t7y9vbSzsbS3uby/u2ZjdWJ2+g1qvNoyfTbi4WtGpvYOqFYmFR1jkeaov5pilV/ylURpsvDTFkYi+WvAA7FCuMW/oRiKZO69TZ00xiXqFToNQIQexXBXmVAiBLPbnU8QiwoiDvL+4pyy7/5N6f/9b/+/X/3L5/dWnu4tbSHX+h1dxFIvKZrgRcLvZV0dh/d+jy3tzC3Bz373MxO0sIVun15F615co/JG5vYiY9vC8vleAVBMq17ZNVDCWl8X4hpSTJJFKHqYbFAo8cVS+1deiXDi/p0TqwXM5Osgo+CUmnFwm49NbGI8ghAloeYirC7MuSujHgrQgAWCy1xycIwQ4Tuimuw/AKNiqD0VKBS2lQlqVMb6Kv1J8PfzIi53TH+9cLml0tbwB8WwbAk0EvI0bvmdmpk5H/74w//q3/77tl382Gutz5zZ3flq/Wl+yzZUB/ti4+utbVPjMZvjo/e9LKti7P7fV1LE2ObwyO3NDp/R89KpH5s+fafm1sm5pbvRxrHOwbWmMAAWDK78nej3PNbxlOuAE5VJ0mjxIpAd3wHVBic+8oRGPbfmKdjEy1Dm419623xLTI6mltFNw/dyVe4+6bv9c/cD7cvNg+s904daIj2zrE9pm6ybWTb7h9qj++yDdNaV6eaaB+c/zrUttQ6vNUR55XiNDoEqwZidYw/aB+7X+NZeCXTB7O/l7J4sTDwEaK4W8c+ScR6/jKKv+FaK667QmIhqy7FfnmhTrAKTwOFpgoDJmF+cr6OI3ooFl0eYiuC369YSRwvFnTxD1a2dld2dBr3+Mrff5Lj/Le/+Ght6eH67Obu8r3u5tHd9T811w32dE6v3/yyoX4gGupurBuam97e3/73g73LDNtqd9TNLdwvLneMjG/PL94bn9wcim9WqTzR5uliGe0Lx/HyAbj1ZGJBptHYbwzMfrmw+b/IjfU3Bjfqe24Z6G4t1Y6tahnZKNUG6dhYjaWhse8WiDW88FWJKmhie/tnHsIvhOgIjsxt/M/NgxsdY3vuxpmeSbDwIfCPUixnWRgKIlUWBLGY8pCnPAhi+csDYrFicr9YrIaaANCs8INMLbXIMIitqlCrwic0VR3oNar8i8QxWCDhdv5+lU+MINZXy9t/XEK1TwxYdW91a3dtt0Zu+ekv3vhX//3ZH/303Z27/24bXXG6jV7tvLC/vrh/e2kf6uDa0t7a0s7Kwg6UwuU5VArn+Be47c/MHUzPoqe+oIWr2XsTMwdjM/fGptATgoSJ3gmVkojFL5FDP87RPrpJhIboWLxncl8MnuUJVz10TyTBGzNxwCOpfUeIBfNpcEsQ6+XsBpgVCmLhIvj7jKhglZgTioXng8LClWQaKBHrZxfrkFiO0hBkLBCLKQ88VbEO31B/ErHWOycgUYFVacXCbh2s7u6s3Xuw8+f7G/9w79afN+f3oevaXdjcnudfmsq1Wdu3FncA/j2o3OoodO7QtnNPEdqBpmpuBok1NXMwOb0/NoUewSiINSRaPpA4JMlkGEEsTM/kHqZrfKd/5h5E3IYLKwi4W+qIb2OgDibBGQPpCvOPVCw0KwSr7CVBoizoKg3QZf6nLZZXjFQstUfMna5J8OnrlZ20Yn3Nlch7K+gtc1vzd/+4vHt/ZuNPt77cX9rdWURi4Rc/cxPDrduL28DNuS3uIVicWOjRVtsL6AlEe+DW/DR6cyR6BQ307BP70FfFx6RWpYrVN76bhuSzLvyJ4cntromt/tn91pH1vrE9oDe+C4BhnWM7wJH9uFSd4/f+QMVCpdBeWmcvjjrLos4SSFoodUFZxI28TxYE/PJQUB6MyHyxKu5iBzQlxGL5GhX+JqSUvwWdnPG0KQFfF7RWtQE071Oi90BzJnE5Se0ZULmB/loWgz8Oqj2Yja7xv1va/Hp168u1LYgCX61sAlgsJNnq9v3lzf0lDHqtIXduZw9d4MBlLPywtXX0XL/ElVgz2zhjLczuglKz03v4HM44SlfcWeSJgxF0ciZ9EsJmCAjqYPomd/onRKBLqe4BfWMHQO/4I8rZt0HSY1X7Fl/M8HJzwEZ0kXFmFHManb2JvJAZeR61WSBTFPPbzBiGnwxmRLlpIC/WL69Ef3lF8OlQKWTV+ahErJ9dbMBW/fhcDHPKUhKzFkM1jIBYYJUgFvRb3srAdyGWgKCURKyvfmBiCVXsMCeJSLcQhXzqGdvH/P9ULFNJ1FQctpSGoSA6y4KCWNBvpYqFrp9Bp3RQHRSLdUPpBbHaa73ttf5OpZ+bAAYTT0c6FAsLJBFrWOvDrDb2fz1z+8uFO39Y2/67lW2xW8AfuN7rS7SmxTXyK9sHy2j9HYuFniLJnY2WiIVe/Z14HTyINT+D3h85M8U1WNPbYFV8cndkEp0NRA3WJJoPivvxhEmS8yrHIzXpqYh12M5z4A6Mq6qwcdA8tNs0uFPqmnyroP7M1SYsFvZJ4CixfpdVx7uVTqzEZPDwrPOzF2JAaikUW/WjL6JILCMnlq0UiUVwbtHloe9OLIEhjRcQxJp0N/3D8s6fV3f+tPrDEqtrkgctSE5I1UmVQOrEYx5/EiRitcXvtYzsv5pFnckJv5Hb8oMQy1CKxDKXgVtBR3nQWRoAt/AM8TsSC/skVgrTpnb9r7fvg1Ig1l9+SGJ1TvJ0TOx2pBOrY+JIOp+SWMI8UYwgFlgF1fCFi3YohS9dif3VxYLtU/rimKEobC6JWItD9lK09OAsC+OkBf07disgC/BiVflici/usdAdEDX+FoUPX6bXVhto52aCXSofmgCq3EC/GjGg8WCGNW4xIxq/mFGT94/x5a8X1/+wtvmn1c2vbiVY2/h6dePL1U3Mw5UNANosALu1s7AtnhXeWdi+tYAexI2fyM1ficWJNYdfTIoeiL0LDdb4NHq5A15owGf98PkWSRf1VMw4hEt7h6QeIKJ9fC+ZAzGt3Jmc7vhOQ/+uq3nv5cxwclOFNEpFIlbSFQ2cWL/KQHBiIX5xOfLzS+FnL9VhnrkY40gSC1l1AfGj8zEA9Vjfv1gjWk8CXxJquk/P/KetL8Gqr28eAmIB369YSTxlsR6HFLF2xBEnLYi9S//h9EXqxawfilh/nYw1qvNiRIYhlqyRGVt4wd/y98ubOGkBsPHXECtpNfxpi3UvmdQDDkkn1iGdY9sd4ztNkw+ydF1nCxpSpoFSpb43sVCPpSuK6gtDMDHEYoFV6CRPaSCtWKAUuIV7LBCLu5rPh91KKxb2aVDrxaRkLBYY1bkxYxzDBvec/8Yf527//crWv1vd+uMKsopjS7DqGLHuzm+DWGh19FFiQXeVuDwGrTUMjnNLoFis8fuYrrF7iGPFEmZqqVocwQMR9yTTPXyM0EWliLXHFUEU28Z2uyYeNgzvIatyw7/P4NMVFuuFK+HHFQtf1CARC5QCsZ69GDpGrJ+ei0CPdWgVLoU/HLFAKYjjWvegiurSUfdH5v/9zd2vFm6jBuvmD0Ksjvgu0J7MYSstFSgt9zrHHgId8QeIsfuSflzynVKrxr5sj38NsWX4Yc/0nzzte798X/Orc9QrOQ2nL0W5a2N+MGJpi6O64rCuGNwKotWsspCjHNwKuSpCtAzcCnjQxDAQkvsi1YFIdTAq50/p3FAGmhUebj7oa1P6YDLYha5o8HarvT1CBVS50QRQ6x7SMgA2SWBUz4gZ17Nihs3eQaN72OKb9TTNB1rm/W2TvhvjofaJYMeUr3Pc3zka6BjxdfZ7OnrdHR1sVxvTeYPpusF0N9E99XR31NUZdnUFyE4f2eUmuhmyhyZ6nc5eh6PH4ujT2Xq11h61pVdp6VOY+hXm3mpTT5Wpv9LUV2HsLzUOlxiGCo2DBYaBPONAgbELk2/ofAKEXw7kGXsKLCNAvnmYY6jA2ivmuqlLTI4J/gA9eabObEPnZUPvNfNArmX4qnHo9dzg8xdIoVvnfcqK/j4b8XxWBJGi1G8zo2L+NiMihr8SKyPKWYV8wmC9QKmfX65PWIWuEcX85HwU+PGF6I/OR/6Hc2GImL++WHEDi5GINWrw9CvJEaMHZouDJs+A3tOlYwaJ2IAzNmiv67VFO22Rdlu0zVbXaq2LWWIRc13QXA/4TfUeUwNjaHLpmhzaBpumwaxu1KkatMpGVW1TrbK5WtlUXtNcVt1UUtVcWNVcILtxXd54VdaYLWvOkDVdqWi+VNl6ofzGuYobn1c0fwqUt39e1g7xs9K2T8racBQ2JDF18NOSVuDjUi6WtbxXWPduUd27BbF3ChHvFTS+W9j4Tl792/n1ED8qQ0cCeOPDsnb0sazlk4r201l1py+xL1xkTl9yv3TFf/qS92WRVf8sllSsMaMbIxELaiLME0c1zLCGGdGjln9Q5552t0wwNyaoljG2dZRpGWJaB+i2Xqq1jW5roVubqLYGsq2OaIsQ7UFHp8/W6bF1sbZuytpFWHudlh6zCaEz9qhNfSpjf42uV67tk2l6yw09JbqeIn1fobY/X9t/XTNwVd2XrenLUPde0fRmqPsz1IMQr6gGrqj6ElHYkMTjBwcuc1yq7cegj+q+DM1QhnYAImzjA/DGBU0fbFxR9VzWDEHxeu1q7JWsyJlrDS9ejqLnLKATzD9gsdQFAX1JGItlKw2CW9y5nSBVGRTECsq84So/iIXnhuBWs8IvFqsL3YTj74AGS+Pr1Xj4+SAn1rDOM6xjAd6nRFMlyVgTBncSOs+4HgFHglhx+E4NsxjuXqzrn4/0z0b7p6N9k5H+eLh/JNTfH+ztDfZ0BXs7Az3t/t4WX3+zd6jRO1jnGYq6h0PuYR877GVGaHqIpkec1LDVFbeQo0ZiVE+MaR2jGuewyjlSax+pccSrbPFK+3iFbbzMFi+xjQFF9v5ie78kph0sTvmYMjhYZBsvsMdxLLCPFtr68u19sLfAgY7B8fCjs6fIgbhuGXg5J8gJhH2qfzGj8YRiiZqqND5JxOKWRsGqEPbpqFmhRKyfXIxhq8AwvPHDFQuUioNVBg809cCI3tunZddaR1fa4kst8YWW+FzL6OyN+ERzfLwxHm8aGW0cHmoYHqwf6a8b7akb6a6Ld0RHW6PxG5HRxki8LjIWC4+HwuPB4IQ3NE4HJin/BOmfcPgm7d4pp2fCzk5Y3VNmdtrETOnZWS09raGnVcx0LTutZKZq6SlJTDsI8ZGDSnpGwczgqGCmFPRkDT0J4wruO3EUNqrdcSUbVzLjNdTcyxmB01lhsAeRWX8avSr3ByyWqiiqKghpikOGopCpJAJiAQS6zCGNWOEaqIa+WLWvrsbbqPSCVS3oVmZvu8oNFbBLxUIRBHo1CBBrUIN8EpB063EDDYwZGcyEIQlBuFEOKI4DWtdG1/h6/9Ttvum17omV7vHlzvGl7qn5TsRcx+RMx9RUx/RE+0y8fXqobbq/daavbba7da6rZba9eb61eaGlcaGpcb6ucSHaOBtumAvEZj2xOU8E4jwdnWXqFqnYkiu67Igu+Vq3qMabzI2bltCUxjNRy8T1/mlLZMkaXdb7Z02hOUf9EoxoPTOm4KIptJCKObz4BMD3A/AbYUxRiHO2yJwxuHomsf6ZyuFJG6wUh+DTCcUSTuY8dzn8q0shrJeAVKyLUcxPLkQAMOxHX4R/fC4ikBCrKHIysXycWJ50Yrk5sRBYrF4NM6ihv71YfD7T04Ma127/1NbI/N3h2Y2h2buDM+uDszcHZlf6gPmlvrn53vn53oXZnsWpnoWx7oWRrsXh7qWBruX+zqW+zrXejtWu9tX2ttXWtpXm1uXG1qWG1pW6trXojbVgy2rgxqqv5aa3+RbbfNPdtHjr/v8V7FglwvE//+/ftE3uMo2T/s7lf/jP30T7NpqGtuzRkZGbf2Kbprxta1TTKtl0MxWice0JkH5J8yrZvEg1LVrr185cDaUq9c9ifWuxDAxkrAfjS/tTqztTKzvjS9tjixvxpY3xlTtjq+vxtZvx1dXRtdXRm0sjtxZGbs4Nr00NrU0O3RobuhUfvDkysDbcf3Oo/3Z//3pv353u/judfettvbdv9Kw3d99p7l1v6rlT33031nU30nWnsXvhP/0/3zT1zA7O3B2YvtM8MNXYN/Hgf/w/gy0jq7t/aRtZYOo6Ztb3bh78pTO+5u+46etYT8XfeeeJCXTdxfi61wPdN33dt8n2zVeuRVKV+h7FimKeuRgBHi2WujimLgxDpwViGYvD1pIAiOUoDaQVK1TtjXB1sF7ha+AaLCxWWy3bWcuAWN0qBpTCbkFLhCeDAGqw9O4RHZ2sy3FijZs8MFWEwyCChSM6V5+B+uPc7YO5W3tzN/dnb+7NrO1M39yeubUxffvO1Pr65O2bk+s3J+6sTtxdHr+zPHF7fuz23Pjt6bH1qfidifit8dHbY6PrIyN3hkbW+4c3eofv9gxvdg5tdgxudAzdbRtYbx3YaB6429i/0dK/8l+++eY//t/f1HVO/Mf/8s3/9v9+c2Nw9uAv/8d/+M/fTKw+mLr5Zcvgwu37f+kaW+ud2GzoW6/vv1vft8nHxEbDwEZD/xYf+7fq+u7U9W4Ikd+VOEbYJfmS2AB8+a3w4N3o2B9PH10KMRKxjuqxBH5zJQwIYv2Gu8BB0AvEErv17OWwmJ9dQvfRA7xeuNOC6eE/OrHiJqZT7fjjwvqDxTv3FtfvL6G4v3Bnf+Hu1vzdrbnNzdmNO7Ob67Nbt2a2b85srE3fWZ66szS9MT+1OTe5MTt1Z2by7tTExvjERnz87sj49tD4zsAYumi9Z3Snb3Sze3Sjc2SrfXSrdRg9kr9jZGNgeq8rvlHfNd8W34z1rDYO3L4xtM09GvRez/R+78xetHslBtluePskQAEV88jxBHebR+40jGw62zZeyTs8G5iWxxVLksAeJVZQzEnEikDnrikOolJYGjKXBCxoYhggKoIuWZCVBdzyoLcq4K/yhqoPxcKlsKnW26zytaphYsi2qZkONdupQfRowSpPv849qGOAIT2LGYHEA0Uw0Y9LxBoz0kmYWZBp1EhjBo1Ur5FuNzNfLYJGa/dWtw5WNu8tbQBIr/nNnfmtrTnuxeOz26DXzbmtlVn+ZeDcbfXoTeCz0+gWnYmpnfjM1sjk1vDU1sAUumh9cGKjd3yjZ3yjawLRPrbFsc2ftxE2BGAkMdg2ttsyvg3cGNsC8LZAGz4yAXyUHCDhxuSdlomN5vhG0xjEzZbhm63xrYb4/fdKwi/l1p3ODKUFXdfAgbJaIj6fFeKIJGKiRGaGMb9NhtMrJMRfZ4SB566EMIJhP78UBCBpPXMp9DcXgxhJZfzx+bBIrOIAiGUqfRKxWlS8WB3a71CsfiPdbWQORha3p1fur21jt4C9pbt7ixvcvTpbG4v4mTNbawuby/MIcAu9Mxxf5TeDbv+anEb31Mcn90e5F3oP4avdIXuNofvcuycSd2LFDzrj9zvjD7iN4+gYQ7E9vt8xui98xDEtwgHiI/kv4S6Gge32sfsd8Qc3hu92TH3VNPmX589T4IQg0El4IROLJeZ4sUJiHiVW8JlLgb+56Mf89GJYLBbwj0asEQM1rKPh2zr0zMPJta9Wd3i3Vrf2ljd2Vja2l+9uLt3dWN5cX9q6vbh5a2ED3FpZ2Fqe3+byFrr9a352F92qim4tRDd+jU0doKdeTdzjT0KP85ePck8zS1zAnnJ1gwThponu+B7Abe+KY+JIvJG0S3KkcOdFx+g9jvvRwfu+7nsvnHO8khF+/nL0pexIWlKt+muIhfjJhRAAG0gsdVFQWxLCYpnLglZ0Vif4uGK1a9h2FSMRa0BLA2DDsAFJllYsAYlYYJUAWIXQ0dCu9endLWpyqqH3f9r+w/3FDXBrH5LWMoi1sbW4ubu2v716sLWyvz6/jW4qnNtbmkXMc/cSzs3sT08foMcVTW/GpzbGprdGpreHp3YGJne5Fx7tdE1ud05sdU5tdk5utE9sdoyjC57aJncx0jLHDYorHQfU0A0xUNoE2saTdqWBu4ivZXQXZazxB9eMA2/mBl7LDnI3zjekKpUWvkRmhX+fjZCIdVgTOQSTJHpJxMItl9B1/fwK6rrALcxPUTVM4nsVC1KOYNUjM5ZErGEjNaRHYvVqmHYd3Wpw12tcnUR4url/umN4uXdusXd+oXt+om16rHVmpHV6vGtptGNxqGNpoH25t32pp32lq3Wpo3W5tWW5qWWloWU52rKCV7BCzau+5lvuxjWmCS1KuRpXnA2rjvo1e92qPbZmj92y1q0fg7k+mYY1c8OqOFrr1zjwBj9oqgdWOPAGH42Im9We2Xfz/C9esJ8tiL2UHXjmI+srWZFXM2OpDqUFZ6wTinVU3no8sS75JZzSlEShFOpKw8aSoLksbC7zW8sDjnIohX6XzI/EqvJ6q7yBah9YFa5CYkUVXqCOswpoUXlEpZAGOnVMF0e33gUdN/RGAwYEyCFmlCNuotMyauYZMVHAkJnCbVaPgeky0OBWi45q1jL1aiaqYoK1bp/Szda4GYWbVHicNR5rtccg82plPlWFt6bMW13ul5d6y0t9RSXe/CLvtaJwdkH4Sl74Ul7owvXwZ7mxj65FPsyJvX8tht7/fjX69tUIfoHW2ax6yaOtJQ+1Ro+5FvFqtpTX0GOM+Q1uhHuk8ZGEOfhf+2KW/8Ws4MuZwcT4cbyUHRJzOjPwQlYA4unsIHwJ55nohA/f1B/yu2zEb7OCGKzXb64EMYkbo3l+cSUo8Owlv2AYroyw8UixfAmxPCcQixHEQuipLoOrx4TEwm49FbGgf+fEcmGxGlVMrNYdrnX7FUgsWuEmlEliKSv8YBUgK/OWlSGx8or9nFjBK3lBJFZe8PPr0Y9zoiKxIpxY4bPZsTPZMWwGAI0OIispPbyamUyKWCmkypQqFs8rWSFMqkapSMQCmcSAXt9KrETq4luuf3pigVXwzU9XrC/yIp9ch4wVef8asuoosbA6IJYYYa+Qmb4dUl1OjkQsiWGcWJLK+FhiBcQ8hljclDB0lFj+KjdusBA1HixWo9IDbRaI1ap2d2jdIFa7huKtEonVZ0BCDBoZ7NOIicacUCxg2OgaNLkGDGjxHTKWWKxmjbtO5QGxAkqPR+lllB4Qy1HtFsSqrQwoKoOCWMWlvoLSYE5x5GphKLMgfDk/nBAr9FFu+INc5Na72eG3ssNvZIVev1p39mrdGU4vQJKcJErxWS1ZOwFBndeuxlIRHcmnqCfg5athMakZCwuE9QJ+lxlMghNLAPdbgli/zuDBYv0yI4QBsX5+OSAsnP6zWMli5Yc/uR786Hrwg9zQ+zlhIWNJxMLqnEnmcTPWa1cjqaSmnydAIpY0b10FpYJi0mYsiViHvXymH/Nchg8QxMJuCWLhvAUbIFb45GLhk9CcWOjHyYnlFsRq16QXq4cXi6+ATyxWv9HVkxCrVZ8ohVp3TM0GVay/FonFKj3QvGOxjJxY6hSxCkv8ucVhQayL10GsoEis4Ls50XeuRd+6GgGxXufEwjVRHBEpViFSshFGqHRnroZeuxbCUdg4jCnOnRzsljhKc9jVAHA6248RUhefwCRicdUQTRWhMmaGf53pxTyX4QHAJzRV5CaPiaSFAb0CMGfEYgW1JQFjiR+sspQHbBVBZ0UQi0XLfUyV11Pt9Va7gzXekMIDhBUstDWNKnejkgWxmtVss5q+oaFbtEy7joX5GtChpzoNqB8Cuo1Ur5nqMRLgFmbIRA+bGdw8iQRyYeIWChi20BjorlCDZSEHzESviewyUR0Gss3AtBjoJj1Tr6XrdGxI7faqWFaJgDaLqmHtVay5youSlhzE8ldX+qoqvOXlXJtV5rteEsgpCmTlhzLyI1fyoiDWp/mBj/OCH+WFPrwefic3/HZOBMR662oMgOkh5o2sCHDm6rfibLaEkBhwS8wr107EqzlhQPhVr2UHgVevBl9O5pXsgMBL2SAZSmNQIjGJNBbA/DbLL+ZvMwOY32T4gV9fDoj51WX/L64gfn7Zh7gSPKUtjWhLQvqy0D8xsRw1IJbbIHdr5X5FpbdGhtw6FKvUl1Pkw0kL3LpQEAa3PoOCmB/++Hrk/bzwe7kRyFvv5sSAt69FMZxqkTeuPVVywsdwNvdEnMkJAa/nhDFnr4UAPCjmtWtBMVhKQbuXriFwVgN+f9UvRhDud5l+QPAMIymUYNgpXVkU6qChPIxO5pQjsFhkZYCSByRiBWvcIFZE6Y4q2YZaViwWWAVupYrVY2JBrB6Tq8/sEqzCHCUW5iixus10p9HVqqdbjQyI1aBjohoaxPKp3R6Vx12LJoauasZRQ5urGWOVB8SqrfIp5AGxWPnlAZS0isNZRZC0QiDW+fwQdFqf5iGx3rseQiTcguyFeetaGHgzN4JJ9eCJCB7D67mPwdmcQFrOXPNjXkvm1asBMS9fQ7x01Y95keN0tg/zQhbP7zO9wFFi8WQE/wmL5TJX08YqVlvlFcSqqAC3/MXl/vxyLmmVBLOKghkFgcuFkUvIrQhMDz/Ni354PciBJokf5MSgMmLezgkBb10LYvDHx+XNXAkBMW8nI9l7PK/n+sW8kcPz+jUfcDbHdyY3mYRwYu1everDvHwN8dJVL+bFbB/mdJYXSCmUPjG/yQqc0pVHkFgVQV6sCr+tIuCs9JOVPqrKd4xYdSrOLdXjiTVgQmINmh9DrEGwihOrz0z0mHmxWgyuZLEYTiw2RSxaW+VWyT0KuQ/EklV6wa3Scn9hufd6qSenxI/FyigMg1gXCqLn8qPgFjRbH+eFIHV9lBv+8Hr03esRjGDYt+Gt6xKCYt5JRrL3eMCtN64jw3AU4PXK9Z+9nowksXEI+eyVHATWizMskck4vX4nIcsrBlQ7pa8I6ssDxsqAudxnrUTYZV5C5nPJ3QBV5aGrPWwNOmHiV7hDNe4wJ1ZEycJcDKhXu5vUbJOG67F0VIsOuh80ZYPYzi1mCmL1WpBbYobMJDBscSXgTUrgGrIi+qwk0G8hey1Et5nsNNPtkLGMFLjVpKca9K6Y1hXWsD417VbRrJKmlQyloAkla1WwxmpKW02pqujaKo9C5pGXs5UVnrIyT2Ju6L9a6s8qCVwpDFwu8F8sQjXxXAEkrRC49WFe4P18xHvXed7N9QPvXH8S3s0LiJHsfS8/iJGMv50fEPNunl/MW3k+MYe/KtcHvJHrlfC6hBzPISilJdVN7BPWC5HtFXPYe2X7gN8imcT8VcWCJARgewCRYTxPIJa7lmFqWQCLZaqhdTW0pobFYlVXenDSKinzQ6eVV+a/VhbILg1mFCG3EmKFuC4+BHxcEPqwMPRBPs/7eUGM4MHTItUwzPFivVMQECP8KuzuW8i8JN6UcN0nBvIcIFRSXC5fy/Gm5SXoxjhwK/b7q75k/KcMlSFUB2VBVARlCIfcR8r9pIzlrPIyNV63wuNVsAGlh7PKG631RGvdURVzlFgCeFaIlrJMLqhi2Kd+C5UA6TJgdWGGLQRmyOwEJGJBHYTYZSIkYjUaqDodBWL5NYxXw0I1ZFVuQSyzgtErGBBLVe1Vyr0JsTxQDYvKUDW8WurNKvVkFvuvFELGClwo9J8rCIBbeAHik/zAxwVoGQLz0fUAgNPY0+K9PD+QOs7vTfB+QRBR6Me8V+BLQ+JgiXaSxPbmdS9G8hHbJuSzszkeMa/luDGvXmMBUYnkOrBrPKevehDZvh+iWAmevlg1Mq9c5qus9JZWeIvK3Hll3mvlnuwycMuXUeS7VAxJK3C+yH+hMAh6fZHv/7QQ8QlnGJIszw98lP80+TDPB6SOYz4o4PmwMAB8UOTDvF/oBT4oSELi2TsJ3s73Yt7leCfPg3krmTfzfcAbeV6eXI+YM7luzGs5LCCUyEPDchC8YUdnLG+qWP5aFi1iScViOLGodGKRnFjc4ns6sbAxoFS/jRPL6sCM2JzAkJUY4oQ7QixSLFZIS2Ox3GokFqU6FMtQcyiWospbJffKZL7SCjeIlV/uzanAbvkzS7wZJX5w6wKnF3Kr0Pd5YeCzosBnBUEM5DCcxp4iWNbUcX5vAc8nhUHgw2LvR8VeiB8WeT4o8kD8uPCQ9/M9WCkhq72TMEwsHNYLwD4J2qHslc/lMByFTMZx9roHkzCMn1riyvhKgpeveTggY8lQg2Ws9KPuqgrhrPK6qlCPBd0VU81Cg+VWsG4l7UWnTdiAyg1z+4iKqdOga6EaNGyjjmnQUo069GO+oacgl3CQbUZnp5EAutAagavHQkGbJQb3WMM2CjNkdWBG7ATQb3f02wiAEwtZ2GN1dFqdHVZXm5lotZDNRqLJ6GowklE9GdYxfh3t1blZNU2paLKWcarcNqXbonAbFR5DjVtdzaiqWKXcXSP3yOTuskpPSaW7sBy5BXkLCmJ2iQ/EyigJgluXC0Mg1nlUEwPgFs5bqXxS4HsKwPeI+LjAd3I+5NwSkCQwARAO814B4t18d1qETIZ587pbzOvXWczZXAaRg9YvBF7Jdb+Syx6S48Vi+ZFYMs+hWNUel5z9lmK1mh4hFi6FAgM2h5jHFIvixGLcGoZWM5QmIZaSNSpYnLTALU4sVi5zl8uQW8WV3qIKH7iVW+pDbpUGM0sD4NaVouBl1Muj7HWuOPBFUTAt4Ny3RyIrSpAn5tNi38clh3xU5E/Lh4U+jLiMpiKppEImw7yZ78G8kedGoGb/ECGfJbKa55RRHjDKvOYqLycWwDqr3a5qN1XNMAqGs8rjUaITJoCPW4cMqNigholwV28eLxYkrQ4zKSAVy4bgKx3M++ycTGKOFqvFTNwwkUli6V1eHQWwWpbWMoSatqtoay1jQm4xWiy7lSYAABARSURBVCWjrqFqq2lFFVNVxXJJi8V5q6jCk1/uyy3zXCvzQU3MKglklwRQO1/su1SCuFgSwJwv8om5UOx/YvA3fFH8hHxe5EXARolH4LMi7zF8Wuz9uARqqFvCB4Ush5uXT8hzydq9U+gR81Y+iyppPovyWR4j0Q4S2ylTld8k91mqfTa521GNIGrcVI2HqqZSxfKq3V7kFi8WJK3jxQLaLSQmVaxeGymmz+4Q83hi6V1+PekFQCwdTWspEMuhZmwq2qxCbmmVtEZBq2oYZQ1dXc1A0qqUsZC3SmWekgpvQYUPCuJ1tPqA3Lpa6ofKyHVd3sul3kulQYxg2LdHMOxcyZNwvjQAnCvxflF6CPLsWMCtT4o8RwN7vULHJqmz7xe6xbxXwGLezWeAtwvcGCQcgj5lrvGhdFXjRblK4Xaia8a587hILCpVLI8GiQWdMrQ1jxTrBrhlITHtaCEqSaweKwE8JbEIXiw9yepcIBappZ0a2q5mLGoW3NLVUuCWWkHXKpiaGhaSllzOyOQeoSaiZqvCh93iK2OJJ7MMcaUskJbLpf4nBudCLh0+CReKvcD5Uo8Y8Ox4UFYrdkuQJLxPCz0YiXYfFLvT8n4RC7xTyPN2AUjGvFPIHIrlrPFgqxBK2lVLAe5aNwfjUQMULoWcWO6gzg0FKGKgYgZXvcHVaEA/5maOGyaKA7klZCygk6PbRmG6bATQ43Bh+mx2DK6D3XZ7MmSX1dVhJVutBHDD4mw2OxtNRL2ZiBqJkJEMGAmfgfQZXG49xehdlIZ2qii7ygXV0KKkjbW0QclwSYvik1Y1XVHFlMnZUhlTIgO33PkVTF4lkytjcsqRXuAWRCCr3Csmo9SdBJfVgCtlviPwnJyLpayYS2XeZNzHcKE8iXOljIQvSmjg8CPH5yV0AjYtnxUznxbRn5YwmI+LKOCjYhbzQSENfFhMYd4vJBFF7CmrMmCp9tiUyCqnghHEgrkVhRayjxKLCeqZJxML/ODhxAJjML02OwZnrG8pFqqGGsqhpmyo06JMKgbcSiQtqga5RcmrWOxWmdwLbhVUskC+jM2t9OFlCIjA1XKPmOwytxiJdulwn5wr5WwSEvMke5O5nMylMgZzsZRO5XwZz7lSKoFUREHHz4spwb/Piing41IG81EJncAFfFhMApDJTtlqvWCVQ+VFVtUeigXpCqZXYJVH5YEK6FbRXg0NSnHQAR0dMtCpYjUZyIRVR4olyVgCKSbxdNlsgESsFuQW0WQmsVhhkytoIv1Gl99IeQw0a0BukVqXU0PZNZRN7TKpSUMtCQVRU0urlZRKSStrXKBXVQ0DelVWe1DqqmJL5EyhnC6s8hTIvWBYvswD5FZ605JTAeZ5rlUmcbXCLUFywCOOh5FKT1Y5i8mucCdRSWVXMocxMQ5HZpTSGRXsSbhSzgCXK3guldM8CRHFXCihMIKImC/KKMznpS4xn5WQwMclvFhuTiwKxHIp3QjYSBYLMhaIBYkKoaUCOlfIQD2ZWJKMdYjDLuZbi0WQWoLQuRxacAuJZVQRerVLq0q4VUMpUL+F3Kqq9lZUucur3Nit4ip3kZwtlDEYrNdRXJezYqCSSql0n5wcGeJaJZuATkLmSgINosOyy9EGZ9ujyaqgMVcqkxBUS8uFclrM+UoX5lwFiSinMF+UuYDPy0AsFdRBxqFyI7FUFFXrQahYiVheDevTMpCoOFzfRiwBiVgdTruYpyIWqSednFtmLYmSlobScW5plS6ct7Bb1TUeLm+x5dVMaRVdVs0bhimUedNSJPcB+dWe/GpWIK+KkXAd5DsxufIkcuRUMq4koB3kRMQuXpWdCMGwTI4sGYtJzW3A5TKaJ9mzSzIX5mIliahgMFi7c2UsiEXbaqEXYQglTSRaKwCsAlg17dYwHi2Nl4hg5oUJGFwAdDYhoxMIm4iImawzu5pMBNBsJjmc0AlhwINWG9lmcyaDRtrtDoTD1mnnwRmrk3BgYBfQardy2FtsDmSVzdFstTdYHfVWZ8TsDJttQZPdb3IEzE6viXAbSY+RhGro0pGQtJxakquJLrMK8pbLoKR0KhK7Vatw1ShcMgWFqaxxVVST5TVsGWcYpkjuwRTK3E9AgfzRcGUXIcl/j4UkUyLb5GlIGEZflbnEZMkRmTIyLRkVtJgrMgJzudKJqKCS0xtzyqFh7SqYmbOowaplBLEYDQtwVrFeHYNn8o8UC7ppABIJImHVk4klpK6TiBWx2ENmZFWyWIRL7yR0BIiFa6KFa7bALb2aALc0tS6VklIoXdUKnqoaUl5NVCqYihq6vJrCQALDQBpLRUhsaSmqYgqrH4O8Kvrbc11OAblVdFpSsiDPNQ6JbQLZlaSYQ+EqCUSydpC6Tjm0NEydCC3jUtMudKKNwrBaFuByFePT05xYaK3ouxNLQOyTwPFiRa2OsMUZtBAisZyM3pkQy0nqKYeWtGpdZq7fMmhIncqpVZFqlUtZS9XUujDVSrJKQciUdKWCqoDshVG4MZDJUhES21EUVz+aUgWLKaymnpiiGhpTUOUCUoUTa5dKbhVCWm0TXJORYrLkPJkygiMpvV2pdJ1y6iBdUaQOxKIoDU1rXBhWR7Po7BuqgGAVN5N3Yp+AoJECoLMBpbBVGOh4gAYLySEVq9UKDhESsdpsdoTd2uawiXkysaAaglKsEaIdokvvIPVgFejlcOicNh1p1aN+y6gFtwidhtBqXCo1paolMbVKQqlwymudciXJRyUJkok5FO5klCvSUFZDpqVEcRzFNcTJKawmHwXSkbewOj3Xq8gETjG5VaSYHDkhJktOg1ioBYF/0JTGxSCZXGJwBYRcBVb5jPZHilVnIYB6Kwk8rlitTpuYJxML8JlJj5nwmm1uk502OigTAYBbTr3DYSBtBhe4ZdITRp3ToHPptKRa69KoKUCroSGiHKYmxFSrKDHYNqCq1gUc/xGNqNJQqSTSUlGLqFSRacF7BcqVzrTgvalelipdYkoUFFBc4wKKalyFSiqV/BoSU6AgxOQrXWLyFKSYnGrqFMyboMMFGC2C1REYt54EuHnWIYJYIRMNwM8ybLVjIjZH1I5+wEDM5gTqrehnD4AEGHCizUG02p0JsCtSJKkLD7Y4eG7YLUCjw1Fnh98FxSj87lYiZAWxHAJeEwLylttgYwx2yki6DARhcNoNDpvebte7IHtZdAQyDNDSgF7twkCJFFOrcmGUtWQqaFx9iEJFJUNiamoJMcJ4lYoQg9KkmISmEll51JQYWS2JSfUVK1umJgXKAQUhpkJJApJBgcJa50koUDqAPKXrFPx1Uxy8TwYeD9f/+o0EJmAigWCCkNkFPFKsRpsdaLI7MOBWq4NosTt5Eq5IkKQuYbzZiWhyWIBHiuUzO32o38I10caYSNpIkEYnYXCAW4SBtOsJq94JmA1Ok84FGLkSCei1BEancQJaVDERGrUzFZUmCcHCQ9SOY1BqklCo7Ukk/JPYmVbKajWJkYzzyqogEToBmZrgSYh4EspUxEkorXUChSrXKfinTHPgFAUNCgZaYABaFgyuMiFzEseLBT/1pygWtkoQq96ZLJbNEbLagxabgN/qAHwWO9REj8kKxZEriw7SZCeMNtJIQGVE2cuIsOpJMZDGMAatA6EjMYJwYrRaZxISCzUOjOQwYVylc4qp1TqScYpR60kMthBGFOmo0TjSotATQJXGzgMKapx81DjBPLnakTQIMbEh0ziQizgKG4ko15ByrRNA7qrtpVoQy+SAv3HAbUDAv28xnFU2gM8EJjsGKWVxwo9TAlaqzk5wOBvsdgCyC0YwDNNoNwNYFEBQJy1NCRpRurLUOezw/UC9g4ghpx1huz1kswFBqzVgsfgsVsBrtnDYUE2ElstkAyiISDIbGOYwWRwmm51LYwLYNiScwQ6Y9I5jMBp4DHo7ArVuyeDxZPQ6G6B7FFqt/RjUOh6twQkIH9OiSkGhcwBKvTMteO9R1GjtaanW2IAqHXGKsRCsGYFTlKAULiXi4gJgnwQOfYKfLiZZLPTjd9ghu2AEw3jPRKIAgjppaSB46p2QrlLFsoXt1pDNgiMQsNkBv9WGwf87HrODtTgYC4qAy2wDCAskMKcYh5nHbnIAFuNxmE08JqOdw5kCHk/CaLBhDMbj0IOCR6M18Kh1VkD4eELUegeQKhwG7z2K1OMxtVobUK11nIK/X/in7LU4MVA7xOCCIhC28UDdASIOhxhIG/VomuZosDl5uIwl0OiwcQ7xsY6wAMgSLkoNIyxi8GEibJiY0wpEHDbJHyZotwN+qzWBA+kFldFq9VrsrNUJ0GY7hrG4ANpMYiiLHYPNg5TmMDqE6LQQdqsDsFmcNovdanZYzTYhWkx2DDeCEEYwNmMSkr0mo02C2YAGIQIgokmPdOQjCGri4ARFcpuR4kb0PZy+3Mbhx4TNvNOQZY2JiCU2WI1GJ/pCo5PflThGZ7TpjEJ0aA3YYz4mdtk0esCiNDpOgUzw79hnJTASkwI2pxhBLIzkZwnEUDVEfY+QrkTwyUYgWZTDcT45kRYxkoMFYk4zkCpWiCNgsyU4TGA+m81tdwCszS4GiiNltqBCaU2CtNolELZDnFbb8Qj5D+M0JSHZK+iYlqOSJcZidmJOOC5BIp90rzkJXugUQE1AZXac8lkd8C/Yb3Ni8A9AIGh3iIE+BpP4+dkkQEkCYg47gsslYlK1SEs9aeWwiEk9DJMQyyL5k4QJOxB0WHm4BCZ45nUk4bEbAa/DhGFtFozbbuWwiWGsFtqGYOxWAG8L4EHxeCL/WdNFK2fqYSQsFijNHGjDabVwduJoc1isDrNdiFyOtACQOG0WqxC5QVtir81utXEp1sYdkHSkKPLfho/k8jHelfhO9J8Q7Rb0n02IZrPVzP+HNvQW+6mAw+GHv3Euoo3Df+JJ4ARw+GOzWwHux4mIOq0YyccoYQYiThMmRlrESBVJ3hsjzWJSlRJz+DsmCBOIoMOcIGEYjzCOMQIBuwHjd5iSsFvEeOxmjNdhAXxOK0YYl+AGQcVwsgruMvZkrGYxLnsSpC0J4mQ4rSZM6q6T47A/Bhab9VTQ6QSrIGJCTtsxSEwSJMACAZKPdS4LIPLjOxMr8TsKhKXwqiVIszfktGCChEmMMM7vdZgDTgTWzmc3YvBgKmm9xFICHmcyyXvdBA/rNAMSCymHxeV8NBRhxRw1nnavBJKwYgjoMR/10W63nvK7KB/p8hIkRMDvJENOV5CkwgQFMUQQAQ68EUoQJsm0RCmXmBDhDJNExEVipHsdjrDTGSEIDDoyEQHJwUGnA74NomQcjsdR+H7YiNEUP8hQsC2JJxkUAyMY+AMgaFeQQfgpgoPE+FyEGGHcSzo9hIMh7G6nHSLGQxEYt8vJkg7hI0MSLEF4nAivk6AJJ+V0wKDLYQdYFwkjAIzgSLkQsO0i0TiOToeNtCPwhngXfBsehIh/OXwnRNgrgSQcSR9FUfhCMgHh4jfwn8fudPx/x371dGYk3QsAAAAASUVORK5CYII=>