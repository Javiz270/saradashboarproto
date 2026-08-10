Institución:

# Universidad Tecnológica del Retoño

Fecha:

# 09-Agosto-2026

Versión:

# 1.0

## **Índice de Contenidos**

[Índice de Contenidos 1](#bookmark=indice-de-contenidos)

1. [Introducción 2](#1-introducción)

2. [Diagnóstico 3](#2-diagnóstico)

   2.1. [Análisis de la Situación 3](#21-análisis-de-la-situación)

   2.2. [Empresas con proyectos similares 3](#22-empresas-con-proyectos-similares)

   2.3. [Riesgos y Dificultades Futuras 4](#23-riesgos-y-dificultades-futuras)

   2.4. [Posibles Usuarios finales 4](#24-posibles-usuarios-finales)

   2.5. [Problemática 4](#25-problemática)

   2.6. [Metodología de trabajo 5](#26-metodología-de-trabajo)

3. [Objetivos 6](#3-objetivos)

   3.1. [Objetivo General 6](#31-objetivo-general)

   3.2. [Objetivos Específicos 6](#32-objetivos-específicos)

   3.3. [Resultados Esperados 7](#33-resultados-esperados)

4. [Ingeniería de Requisitos 7](#4-ingeniería-de-requisitos)

   4.1. [Requerimientos funcionales 7](#41-requerimientos-funcionales)

   [Tabla 1. Requerimientos funcionales del sistema 7](#tabla-1-requerimientos-funcionales-del-sistema)

   4.2. [Requerimientos no funcionales 8](#42-requerimientos-no-funcionales)

   [Tabla 2. Requisitos no funcionales del sistema 8](#tabla-2-requisitos-no-funcionales-del-sistema)

5. [Herramientas y tecnologías 9](#5-herramientas-y-tecnologías)

6. [Diseño de interfaz 10](#6-diseño-de-interfaz)

   6.1. [Perfiles de usuario 10](#61-perfiles-de-usuario)

   6.2. [Pain points 10](#62-pain-points)

   6.3. [Usabilidad 11](#63-usabilidad)

7. [Desarrollo de Backend 12](#7-desarrollo-de-backend)

   7.1. [Configuración de variables 12](#71-configuración-de-variables)

      7.1.1. [Variables de entorno 12](#711-variables-de-entorno)

      7.1.3. [Variables utilizadas por el sistema 13](#713-variables-utilizadas-por-el-sistema)

   7.2. [Endpoints de registro y consulta de usuarios 13](#72-endpoints-de-registro-y-consulta-de-usuarios)

   7.3. [Asignación de rol para usuarios 14](#73-asignación-de-rol-para-usuarios)

   7.4. [Definición de eventos con notificaciones 15](#74-definición-de-eventos-con-notificaciones)

   7.5. [Método Creación de notificaciones 15](#75-método-creación-de-notificaciones)

      7.5.1. [Tabla de notificaciones 15](#751-tabla-de-notificaciones)

   7.6. [Comportamiento de las notificaciones 17](#76-comportamiento-de-las-notificaciones)

8. [Justificación 17](#8-justificación)

9. [Marco teórico 18](#9-marco-teórico)

   9.1. [Lista de Conceptos 18](#91-lista-de-conceptos)

   9.2. [Lista de Herramientas 23](#92-lista-de-herramientas)

   9.3. [Desarrollo de la Propuesta 25](#93-desarrollo-de-la-propuesta)

10. [Desarrollo de Diagramas 25](#10-desarrollo-de-diagramas)

    10.1. [Figura 3 Flowchart de Arquitectura SARA 26](#figura-3-flowchart-de-arquitectura-sara)

    10.2. [Figura 4 Diagrama de la página 26](#figura-4-diagrama-de-la-página)

    10.3. [Figura 5 Diagrama de base de datos 27](#figura-5-diagrama-de-base-de-datos)

    10.4. [Figura 6 Diagrama de Gantt 27](#figura-6-diagrama-de-gantt)

11. [Límites y Alcances del Proyecto 28](#11-límites-y-alcances-del-proyecto)

    11.1. [Alcances de Frontend y Diseño 28](#111-alcances-de-frontend-y-diseño)

    11.2. [Límites de Frontend y Diseño 28](#112-límites-de-frontend-y-diseño)

    11.3. [Alcances de Backend y Estructura 29](#113-alcances-de-backend-y-estructura)

    11.4. [Límites de Backend y Estructura 29](#114-límites-de-backend-y-estructura)

    11.5. [Alcances de Base de Datos y Conexión 29](#115-alcances-de-base-de-datos-y-conexión)

    11.6. [Límites de Base de Datos y Conexión 30](#116-límites-de-base-de-datos-y-conexión)

# Índice de imágenes y figuras

[Figura 1. Estructura de componentes del frontend.](#figura-1)  
[Figura 1.1 Interfaz principal (Dashboard) del sistema web.](#figura-11)  
[Figura 1.2 Gestor de base de datos Supabase Database View.](#figura-12)  
[Figura 1.3. Tablero Kanban en GitHub Projects para la gestión del proyecto.](#figura-13)  
[Figura 1.4 Notificación o alerta generada por el sistema.](#figura-14)  
[Figura 1.5. Diseño responsivo/adaptable de la interfaz web.](#figura-15)  
[Figura 1.6 Fragmento de trigger SQL utilizado en Supabase Auth.](#figura-16)  
[Figura 1.7. Operaciones de registro y préstamos (CRUD).](#figura-17)  
[Figura 1.8. Conexión entre la aplicación backend y Supabase PostgreSQL.](#figura-18)  
[Figura 1.9. Inicio de sesión mediante Google OAuth en el sistema.](#figura-19)  
[Figura 1.10. Historia de usuario definida para el desarrollo del sistema.](#figura-110)  
[Figura 1.11. Interfaz de reserva de recursos del Learning Commons.](#figura-111)  
[Figura 1.12. Código fuente desarrollado en JavaScript para hooks personalizados.](#figura-112)  
[Figura 1.13 Estructura de respuesta en formato JSON de la API.](#figura-113)  
[Figura 2 Tablero de organización y seguimiento en GitHub.](#figura-2)  
[Figura 2.1 Entorno de desarrollo del proyecto en Visual Studio Code.](#figura-21)  
[Figura 2.2 Interfaz de la consola de Supabase PostgreSQL.](#figura-22)  
[Figura 2.3 Desarrollo de componentes web reutilizables con JSX.](#figura-23)  
[Figura 2.4 Interfaz de gestión del control de accesos de la biblioteca.](#figura-24)  
[Figura 2.5 Control de versiones del código mediante repositorios de GitHub.](#figura-25)  
[Figura 2.6 Diseño y prototipado del Dashboard SARA en Figma.](#figura-26)  
[Figura 3 Flowchart de Arquitectura SARA (DevOps y Servicios).](#figura-3-flowchart-de-arquitectura-sara)  
[Figura 4 Diagrama de navegación del sitio (Rutas del Frontend).](#figura-4-diagrama-de-la-página)  
[Figura 5 Diagrama Entidad-Relación de la Base de Datos SARA.](#figura-5-diagrama-de-base-de-datos)  
[Figura 6 Diagrama de Gantt del cronograma de actividades de SARA.](#figura-6-diagrama-de-gantt)  

# Índice de tablas

[Tabla 1. Requerimientos funcionales del sistema](#tabla-1-requerimientos-funcionales-del-sistema)  
[Tabla 2. Requisitos no funcionales del sistema](#tabla-2-requisitos-no-funcionales-del-sistema)  

---

1. ### **Introducción**

En los entornos universitarios contemporáneos, la gestión y optimización de los espacios de trabajo y estudio colaborativo, como los de la biblioteca y el área de "Learning Commons", representan desafíos operativos significativos. La correcta administración de estos recursos —que incluyen cubículos de estudio grupal, equipos de cómputo portátiles, libros de consulta y el control de visitantes externos— influye directamente en el rendimiento académico de los estudiantes y en la eficiencia del personal a cargo. Históricamente, estos registros se han llevado a cabo mediante métodos manuales o herramientas informáticas fragmentadas y locales, lo que a menudo resulta en duplicaciones, inconsistencias de datos, baja trazabilidad y tiempos de espera prolongados.

Para resolver esta problemática, se propone el desarrollo e implementación del **S.A.R.A. (Sistema de Acceso y Registro Automatizado)**. S.A.R.A. se presenta como una plataforma web integrada orientada al monitoreo en tiempo real y a la administración ágil de los recursos del Learning Commons. Mediante la centralización de datos clave en la nube (perfiles de usuario, ocupación de cubículos, préstamos de libros integrando catálogos digitales externos, asignaciones de computadoras portátiles y estadísticas de accesos generales), el sistema permite a los bibliotecarios y administradores agilizar los flujos de trabajo tradicionales, mientras ofrece a la comunidad estudiantil una consulta transparente de disponibilidad.

2. ### **Diagnóstico**

   2.1. #### **Análisis de la Situación**
   En el Learning Commons universitario se genera a diario un volumen masivo de datos de uso: estudiantes reservando cubículos a distintas horas, préstamos de libros físicos, uso temporal de equipos de cómputo y el flujo regular de visitantes o conferencistas externos. Toda esta información es vital para justificar decisiones administrativas, evaluar la demanda de recursos y garantizar que el equipo sea devuelto a tiempo. Sin embargo, en el modelo tradicional de trabajo, las bibliotecarias y el personal de staff se ven obligados a usar registros físicos en bitácoras de papel o archivos de hojas de cálculo aislados.

   Este esquema manual tiene severas limitaciones: no permite conocer en tiempo real la disponibilidad de un cubículo sin ir físicamente a inspeccionarlo; propicia errores humanos en el registro de fechas de devolución de libros o computadoras; y dificulta la obtención de reportes consolidados mensuales o semestrales sobre la afluencia de personas y el desgaste de los recursos. Asimismo, la falta de auditoría digital incrementa el riesgo de pérdidas de recursos y limita la planeación estratégica del espacio.

   2.2. #### **Empresas con proyectos similares**
   Se analizaron plataformas comerciales y de código abierto orientadas a la administración de bibliotecas y salas de estudio colaborativo:
   - **Springshare LibCal:** Un estándar de la industria para la reserva de salas y espacios de estudio en bibliotecas académicas. Su interfaz interactiva para el usuario es una referencia estructural importante, aunque sus costos de licenciamiento suelen ser prohibitivos y no integra de forma unificada control de hardware y visitantes externos.
   - **Koha (ILS):** Un sistema de gestión bibliotecaria de código abierto sumamente robusto para préstamos, catálogos y catalogación internacional. Sin embargo, su complejidad de configuración inicial es muy alta y carece de módulos integrados de control dinámico y en tiempo real para cubículos de estudio y acceso de visitantes.
   - **Microsoft Bookings / Google Calendar:** Utilizados en algunos centros para resolver la agenda de citas o salas. Si bien son eficaces para coordinar reuniones, no cuentan con la lógica de negocio necesaria para auditar la entrega física de libros o computadoras ni de controlar políticas específicas del Learning Commons (como penalizaciones por no entrega).

   2.3. #### **Riesgos y Dificultades Futuras**
   Si el control en el Learning Commons sigue dependiendo de metodologías manuales e informales, se prevén cuellos de botella en horas pico de exámenes, lo que resultará en un servicio deficiente y descontento en los estudiantes. Otros riesgos importantes son la pérdida constante de equipo tecnológico de alto valor (como computadoras portátiles) por falta de un control preciso del staff que las prestó, y la inconsistencia en los datos de visitantes para auditorías internas de afluencia de la universidad. Por último, la ausencia de una base de datos centralizada e indexada en la nube hace imposible la implementación de políticas automáticas de seguridad y reserva.

   2.4. #### **Posibles Usuarios finales**
   El sistema S.A.R.A. está diseñado con base en perfiles específicos que interactúan dentro de la institución universitaria:
   - **Estudiante (Usuario base):** Utiliza los recursos, solicita préstamos de libros y reserva cubículos.
   - **Personal de Staff (Bibliotecaria/Auxiliar):** Valida entregas, registra nuevos préstamos físicos de libros y computadoras, realiza el check-in y check-out de visitantes y gestiona el estado operativo diario de los cubículos.
   - **Administrador de la plataforma (Jefatura de Biblioteca):** Configura los parámetros generales del sistema, asigna permisos especiales, gestiona las altas/bajas de usuarios y genera los reportes analíticos consolidados.

   2.5. #### **Problemática**
   El problema central radica en que el proceso actual de control de acceso y registro de recursos dentro del Learning Commons depende de métodos offline y descentralizados. La dispersión de los registros de préstamos de libros, reservas de cubículos, control de computadoras y control de visitantes provoca cuellos de botella operativos, disputas sobre reservas no registradas, pérdida de equipo físico y una completa ausencia de información histórica útil para la toma de decisiones.

   <div align="center">

   **Imagen 1: Problemática de gestión manual de la biblioteca.jpg**
   *(aquí va la imagen de la problemática, representando estantes desordenados y colas de espera)*

   </div>

   Esta falta de automatización ralentiza el servicio y satura las labores diarias del staff, que debe buscar hojas impresas o archivos compartidos de Excel para validar si un estudiante tiene pendientes o si una computadora está en mantenimiento, perdiendo la oportunidad de enfocar su tiempo en actividades de mayor valor de asesoramiento educativo.

   2.6. #### **Metodología de trabajo**
   Para el desarrollo de S.A.R.A. se implementa la metodología **Scrum**, permitiendo estructurar el proyecto en iteraciones de corta duración (sprints) para lograr avances funcionales y modulares en períodos constantes. Esta estructura es idónea para este proyecto debido a que el backend, la base de datos Supabase, y el frontend React pueden construirse e integrarse de manera paralela e incremental.

   <div align="center">

   **Imagen 2: Diagrama de la metodología Scrum.jpg**
   *(aquí va la imagen del ciclo de Scrum con las etapas del sprint)*

   </div>

   El cronograma está delimitado en cinco sprints de desarrollo y validación:
   - **Sprint 1. Planeación y Diseño:** Definición detallada de requisitos, levantamiento de diagramas de base de datos relacional y diseño de interfaz (UI/UX) en Figma.
   - **Sprint 2. Desarrollo Base (Database & API):** Configuración inicial del motor Supabase PostgreSQL, estructuración del esquema relacional base y programación de la API REST backend en FastAPI con sus validaciones y conexión correspondiente.
   - **Sprint 3. Desarrollo Frontend (UI & Business Logic):** Creación del cascarón de React con Vite, implementación del sistema de traducción (i18n), el tema visual dinámico y el consumo de servicios de APIs (incluyendo la integración del API de Google Books para facilitar la catalogación de recursos).
   - **Sprint 4. Integración y Pruebas del Sistema:** Conexión real del frontend con el backend de FastAPI y la autenticación segura mediante Google OAuth integrada en Supabase, verificando la sincronía y la comunicación libre de errores.
   - **Sprint 5. Pruebas de Calidad, Validación y Despliegue:** Realización de pruebas con usuarios finales (estudiantes y personal de staff) en entornos simulados para verificar usabilidad, rendimiento y corrección de bugs previos al lanzamiento.

3. ### **Objetivos**

   3.1. #### **Objetivo General**
   Desarrollar un sistema web integrado e inteligente (S.A.R.A.) para la administración, monitoreo y automatización en tiempo real del control de accesos, cubículos, préstamos de computadoras, libros y registro de visitantes en el Learning Commons universitario, optimizando la productividad del personal administrativo y mejorando los tiempos de respuesta para los estudiantes.

   3.2. #### **Objetivos Específicos**
   - **Diseñar e implementar** un esquema de base de datos relacional robusto sobre Supabase PostgreSQL, aplicando restricciones de unicidad e índices para evitar conflictos de concurrencia en préstamos activos.
   - **Desarrollar una API REST** estructurada en FastAPI (Python) que encapsule las reglas de negocio críticas, administre la lógica transaccional y aplique políticas de acceso basadas en roles.
   - **Construir una interfaz de usuario interactiva** con React 19 y Vite de tipo SPA (Single Page Application), adaptada a resoluciones de escritorio (mínimo 1280px), usando variables de CSS estándar para un soporte nativo de modo claro y oscuro.
   - **Integrar APIs externas** como Google Books API para facilitar al staff la obtención y auto-completado de los datos bibliográficos de los recursos con solo el ISBN o título.
   - **Implementar seguridad perimetral y autenticación** a través de Google OAuth enlazado con Row Level Security (RLS) en Supabase para asegurar que solo los usuarios autorizados tengan acceso a datos sensibles.

   3.3. #### **Resultados Esperados**
   Al finalizar la implementación, la universidad contará con una plataforma administrativa unificada y activa en producción. Se espera reducir el tiempo promedio de registro de un préstamo de libro de 5 minutos (manual) a menos de 30 segundos, eliminar los conflictos por cubículos empalmados mediante la validación transaccional automatizada, contar con reportes de afluencia exportables a CSV listos para auditorías institucionales y resguardar la seguridad física del equipo de cómputo del Learning Commons mediante la asignación explícita de responsabilidades en la base de datos.

4. ### **Ingeniería de Requisitos**

   4.1. #### **Requerimientos funcionales**

   | ID | Requerimiento | Prioridad |
   | :---: | ----- | :---: |
   | RF-01 | El sistema debe permitir el inicio de sesión exclusivo a través de Google OAuth. | Alta |
   | RF-02 | El staff y administradores deben visualizar un dashboard interactivo en tiempo real con métricas (ocupación, préstamos activos y visitantes del día). | Alta |
   | RF-03 | El sistema debe permitir registrar préstamos de recursos bibliográficos (libros), reduciendo los ejemplares disponibles. | Alta |
   | RF-04 | Se debe permitir la consulta de libros mediante integración con Google Books API para agilizar el llenado de información. | Media |
   | RF-05 | El sistema debe gestionar el ciclo de reservas de cubículos (reserva activa, liberación de cubículo y cambio a mantenimiento). | Alta |
   | RF-06 | El sistema debe gestionar el ciclo de préstamos de computadoras (asignación activa de equipo y retorno de este). | Alta |
   | RF-07 | El staff debe poder registrar visitantes que acuden a eventos temporales específicos, con check-in y check-out. | Media |
   | RF-08 | El sistema debe permitir a los administradores e investigadores exportar reportes de uso históricos formateados en CSV. | Alta |
   | RF-09 | El sistema debe permitir el cambio de idioma dinámico (Español / Inglés) en toda la interfaz sin recargar la página. | Media |

   **Tabla 1. Requerimientos funcionales del sistema**

   4.2. #### **Requerimientos no funcionales**

   | ID | Requerimiento | Prioridad |
   | :---: | ----- | :---: |
   | RNF-01 | La interfaz de usuario debe estar optimizada exclusivamente para resoluciones de escritorio con un ancho mínimo de 1280px. | Alta |
   | RNF-02 | Toda la persistencia de datos relacionales debe realizarse en Supabase PostgreSQL. | Alta |
   | RNF-03 | Los datos sensibles de usuarios deben protegerse mediante políticas de seguridad de fila (Row Level Security - RLS). | Alta |
   | RNF-04 | La API REST del backend debe estar desarrollada utilizando el framework FastAPI bajo Python 3.14 o superior. | Alta |
   | RNF-05 | La respuesta a solicitudes analíticas complejas del dashboard no debe superar los 2 segundos bajo condiciones normales de red. | Media |
   | RNF-06 | La interfaz de usuario debe implementar un diseño visual claro/oscuro soportado mediante variables CSS nativas. | Media |
   | RNF-07 | El motor de la base de datos debe validar restricciones de concurrencia exclusivas para evitar reservas empalmadas del mismo recurso. | Alta |
   | RNF-08 | El código fuente del frontend debe estructurarse modularmente dividiendo APIs externas, componentes compartidos y features de negocio. | Media |

   **Tabla 2. Requisitos no funcionales del sistema**

5. ### **Herramientas y tecnologías**

Para el desarrollo del sistema S.A.R.A. se ha seleccionado un stack tecnológico moderno, robusto y desacoplado, lo cual asegura el correcto escalamiento de la plataforma en el contexto universitario:
- **React 19 + Vite:** Se utiliza como el motor principal para la creación del frontend. React permite estructurar la interfaz en una Single Page Application (SPA) modular e interactiva, mientras que Vite optimiza las fases de compilación y recarga en caliente del entorno de desarrollo.
- **CSS Estándar con Custom Properties:** La capa de presentación y diseño de la interfaz se construye utilizando Vanilla CSS. El uso de propiedades personalizadas (variables CSS) permite una implementación limpia, escalable y nativa de temas claro y oscuro directamente sobre la etiqueta raíz `<html>`.
- **FastAPI (Python):** Este framework de alto desempeño y tipado estático opcional se utiliza para estructurar el backend. FastAPI procesa de forma ágil las peticiones REST, expone documentación interactiva de la API y maneja la lógica de validación de esquemas de forma automática.
- **Supabase (Auth, RLS & Database PostgreSQL):** Funciona como la infraestructura base en la nube. Supabase administra el registro e inicio de sesión de usuarios a través de Google OAuth, habilita políticas RLS para segmentar el acceso a los datos, y provee el motor PostgreSQL para almacenar la base de datos relacional relativas a préstamos, visitantes y reservas.
- **Google Books API:** API externa integrada en el backend y consumida por el frontend para autocompletar de manera instantánea el título, autor y portada de los libros físicos con solo proveer su código ISBN.
- **UI Avatars:** Microservicio web externo utilizado de forma nativa para generar imágenes de perfil automáticas y estilizadas con las iniciales de los usuarios que no cuentan con una foto asociada a su cuenta de Google.
- **react-i18next:** Librería especializada integrada en el frontend para gestionar la traducción de todo el sistema a los idiomas español e inglés sin necesidad de recargar la aplicación o duplicar las rutas.

6. ### **Diseño de interfaz**

   6.1. #### **Perfiles de usuario**
   El sistema S.A.R.A. reconoce tres perfiles principales de interacción con sus correspondientes accesos de seguridad:
   - **Administrador:** Acceso ilimitado al sistema. Puede registrar nuevos usuarios o perfiles administrativos de staff, auditar todos los movimientos de préstamos históricos y modificar parámetros globales de mantenimiento de computadoras o cubículos.
   - **Staff (Bibliotecaria / Auxiliar):** Perfil centrado en la operación diaria. Realiza los registros de reservas de cubículos, préstamos de libros y computadoras a estudiantes, control de check-in/out de visitantes y cambio de estado manual de cubículos a mantenimiento.
   - **Student (Estudiante):** Es el consumidor de los servicios. Puede acceder mediante su cuenta institucional Google para actualizar datos de perfil (matrícula, carrera, grado y grupo), ver el estado de disponibilidad en tiempo real de los cubículos y revisar sus préstamos pendientes.

   6.2. #### **Pain points**

   **Administrador**
   - Falta de un registro unificado para auditar qué miembro del staff autorizó la reserva de un cubículo o el préstamo de un equipo informático.
   - Dificultad para generar reportes analíticos consolidados de uso de biblioteca de forma periódica debido a la dispersión de datos.
   - Vulnerabilidades de seguridad en el sistema por compartir una misma cuenta administrativa genérica entre varios operadores.

   **Staff**
   - Demoras de captura al ingresar manualmente toda la información bibliográfica de cada libro (autor, portada, título) en los procesos de préstamo.
   - Pérdida de tiempo resolviendo disputas entre estudiantes por reservas de cubículos duplicadas en hojas de papel u hojas de cálculo compartidas.
   - Imposibilidad de saber al instante qué computadoras portátiles se encuentran operativas o en mantenimiento físico sin realizar una revisión presencial.

   **Student**
   - Desconocimiento del estado actual de ocupación de los cubículos de estudio, lo que genera traslados inútiles y pérdida de tiempo.
   - Incertidumbre sobre la fecha exacta de vencimiento de sus préstamos de libros o equipos de cómputo, lo que provoca recargos accidentales.
   - Proceso lento e ineficiente de registro para poder ingresar al Learning Commons en calidad de visitante externo.

   6.3. #### **Usabilidad**
   Con el fin de garantizar una experiencia de usuario sobresaliente y reducir la curva de aprendizaje, el diseño visual de S.A.R.A. se construyó bajo estrictas directrices de usabilidad:
   - **Consistencia Visual:** Todos los elementos de UI (botones principales, tarjetas de métricas, tablas de datos, alertas e inputs de formularios) se adhieren a una guía de estilos basada en variables de CSS predefinidas.
   - **Navegación Intuitiva:** El flujo de pantallas está regido por una barra de navegación lateral fija (`Sidebar`) que expone los accesos a los distintos módulos (Dashboard, Usuarios, Recursos, Préstamos y Reportes) con base en el rol del usuario conectado.
   - **Retroalimentación Inmediata:** Toda acción transaccional del usuario (como reservar un cubículo o completar un préstamo) genera una alerta visible e interactiva. Asimismo, los botones muestran estados de carga dinámicos para evitar clics dobles.
   - **Legibilidad y Contraste:** Uso de tipografías legibles y combinaciones de colores que respetan altos contrastes para el cuidado visual, adaptándose de forma automática en el modo oscuro.

   <div align="center">

   **Imagen 3: Prototipo UX en Figma del Dashboard SARA.jpg**
   *(aquí va la imagen del prototipo UX de Figma mostrando el dashboard principal)*

   </div>

7. ### **Desarrollo de Backend**

   7.1. #### **Configuración de variables**

      7.1.1. #### **Variables de entorno**

   El sistema requiere variables específicas en su backend y frontend para establecer la conexión con la base de datos Supabase, controlar los orígenes seguros y consumir la API de Google Books.

   | Variable Backend | Descripción | Ejemplo de Valor |
   | :---: | :---: | :---: |
   | DATABASE_URL | Cadena de conexión PostgreSQL de Supabase. | postgresql://postgres:[pwd]@[host]/db |
   | FRONTEND_ORIGINS | Orígenes CORS autorizados para consumir la API FastAPI. | http://localhost:5173,https://sara.utr.edu |
   | SEED_DEMO_DATA | Indica si se deben cargar datos de prueba al levantar. | true |

   | Variable Frontend | Descripción | Ejemplo de Valor |
   | :---: | :---: | :---: |
   | VITE_SUPABASE_URL | URL base del proyecto en Supabase para el cliente Auth. | https://zdxbyrghq.supabase.co |
   | VITE_SUPABASE_ANON_KEY| Clave pública de Supabase para operaciones del cliente. | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |
   | VITE_CORE_API_URL | URL base hacia el backend de FastAPI. | http://localhost:8000/api |
   | VITE_GOOGLE_BOOKS_API_KEY | Token de acceso a los servicios de Google Books API. | AIzaSyD-aL7vN8qP9... |

      7.1.3. #### **Variables utilizadas por el sistema**

   | Variable | Módulo donde se utiliza |
   | :---: | :---: |
   | DATABASE_URL | `backend/app/db.py`, `backend/app/supabase_db.py` |
   | FRONTEND_ORIGINS | `backend/app/main.py` (Configuración del Middleware CORS) |
   | SEED_DEMO_DATA | `backend/app/main.py` (Carga opcional de Seed de prueba) |
   | VITE_SUPABASE_URL | `frontend/src/features/auth/context/AuthContext.jsx` |
   | VITE_SUPABASE_ANON_KEY | `frontend/src/features/auth/context/AuthContext.jsx` |
   | VITE_CORE_API_URL | `frontend/src/apis/coreApi/coreApi.client.js` |
   | VITE_GOOGLE_BOOKS_API_KEY| `frontend/src/apis/googleBooks/googleBooks.client.js` |

   7.2. #### **Endpoints de registro y consulta de usuarios**

   La API web expuesta por el backend de FastAPI provee los puntos de acceso REST para interactuar de forma segura con la lógica de SARA.

   | Método HTTP | Endpoint | Descripción | Tipo de operación |
   | :---: | :--- | :--- | :---: |
   | GET | `/api/health` | Verifica el estado operativo de la API. | Diagnóstico |
   | GET | `/api/profiles/me` | Retorna el perfil del usuario autenticado actual. | Consulta |
   | PUT | `/api/profiles/me` | Actualiza la información del propio usuario conectado. | Modificación |
   | GET | `/api/profiles` | Lista todos los perfiles de la base de datos (Admin/Staff). | Consulta |
   | POST | `/api/profiles` | Registra de forma manual un nuevo perfil (Admin). | Registro |
   | GET | `/api/profiles/{id}` | Retorna el detalle de un perfil específico (Admin/Staff). | Consulta |
   | PUT | `/api/profiles/{id}` | Modifica los datos de un perfil de usuario (Admin). | Modificación |
   | DELETE| `/api/profiles/{id}` | Elimina de forma lógica/física un perfil (Admin). | Eliminación |
   | GET | `/api/users` | Lista simplificada de usuarios del sistema. | Consulta |
   | POST | `/api/users` | Crea un usuario y credenciales asociadas (Admin/Staff). | Registro |
   | PUT | `/api/users/{id}` | Modifica información de un usuario registrado. | Modificación |
   | DELETE| `/api/users/{id}` | Elimina el registro del usuario del sistema. | Eliminación |
   | GET | `/api/cubicles` | Lista de cubículos de estudio y su disponibilidad. | Consulta |
   | PATCH | `/api/cubicles/{id}/status`| Actualiza el estado del cubículo (disponible/mantenimiento).| Modificación |
   | POST | `/api/cubicles/{id}/reservations`| Registra una nueva reserva de cubículo (Autenticado).| Transacción |
   | POST | `/api/cubicles/{id}/release`| Completa y libera la reserva de un cubículo. | Transacción |
   | GET | `/api/cubicles/occupancy` | Obtiene el conteo en tiempo real de la ocupación. | Consulta |
   | GET | `/api/computers` | Lista de computadoras y su estado operativo. | Consulta |
   | POST | `/api/computers/loans` | Registra el préstamo de un equipo de cómputo. | Transacción |
   | POST | `/api/computers/loans/{id}/complete`| Finaliza el préstamo y libera el equipo. | Transacción |
   | GET | `/api/loans` | Consulta el catálogo general de préstamos de libros. | Consulta |
   | POST | `/api/loans` | Registra un préstamo físico de libro a un estudiante. | Transacción |
   | POST | `/api/loans/reserve-book`| Registra la intención de apartar un ejemplar de libro. | Transacción |
   | PATCH | `/api/loans/{id}/return` | Registra la devolución física del libro en biblioteca. | Transacción |
   | GET | `/api/reports` | Consulta los reportes analíticos con filtros de fechas. | Analítica |
   | GET | `/api/reports/export` | Genera y descarga el reporte en formato CSV. | Exportación |
   | GET | `/api/reports/dashboard` | Retorna los KPI generales para las gráficas. | Analítica |

   7.3. #### **Asignación de rol para usuarios**

   El sistema S.A.R.A. implementa control de accesos basado en roles (RBAC) para limitar qué funciones e información puede ver o modificar cada usuario conectado.

   | Rol | Objetivo principal | Nivel de Acceso |
   | :--- | :--- | :---: |
   | **student** | Consultar disponibilidad, ver préstamos personales y realizar auto-reservas de cubículos de estudio. | Básico |
   | **staff** | Operar la biblioteca día a día: realizar préstamos físicos, registrar devoluciones de equipos y libros, gestionar a visitantes temporales y modificar estados de mantenimiento. | Medio |
   | **admin** | Gestión total de la infraestructura: creación/eliminación de perfiles del staff, configuración de políticas y exportación analítica de datos. | Alto |

   7.4. #### **Definición de eventos con notificaciones**
   - **Falla de Autenticación:** Se dispara cuando hay un intento de acceso mediante Google OAuth con una cuenta ajena al dominio universitario permitido, notificando denegación.
   - **Vencimiento de Préstamo:** Se activa al identificar en la base de datos préstamos de libros o computadoras cuya fecha actual supera a `due_date` sin registrarse la devolución, alertando al staff.
   - **Conflicto de Concurrencia:** Ocurre si dos solicitudes de reserva intentan apartar el mismo cubículo o computadora simultáneamente; el sistema cancela la segunda transacción y lo notifica de inmediato.
   - **Cambio a Mantenimiento:** Se genera al registrar que un recurso físico (computadora o cubículo) no está operativo, inhabilitando su botón de reserva en la interfaz para todos los usuarios.
   - **Error en Conexión a Base de Datos:** Notificación crítica de color rojo en pantalla si la API FastAPI pierde comunicación de red con Supabase PostgreSQL.

   7.5. #### **Método Creación de notificaciones**

      7.5.1. #### **Tabla de notificaciones**

   | ID | Tipo | Descripción | Prioridad |
   | :---: | :---: | :--- | :---: |
   | NT-01 | Transacción | Reserva de cubículo completada con éxito. | Baja |
   | NT-02 | Transacción | Devolución física de equipo de cómputo registrada. | Media |
   | NT-03 | Alerta | El préstamo de libro se encuentra vencido (Overdue). | Alta |
   | NT-04 | Estado | Cubículo colocado en modo Mantenimiento. | Media |
   | NT-05 | Evento | Nuevo visitante externo registrado en base de datos. | Baja |
   | NT-06 | Seguridad | Intento de acceso desde dominio no institucional. | Alta |
   | NT-07 | Sistema | Pérdida de comunicación con el servidor API FastAPI. | Crítica |
   | NT-08 | Sistema | Error crítico de concurrencia al reservar recurso. | Alta |

   **NT-01 - Reserva exitosa**  
   **Título:** Reservación Registrada  
   **Mensaje:** Su reservación para el cubículo ha sido procesada de manera correcta. Por favor, acuda a la biblioteca a la hora señalada.  

   **NT-02 - Devolución de computadora**  
   **Título:** Computadora Devuelta  
   **Mensaje:** Se ha registrado la entrega física del equipo de cómputo en buen estado. El préstamo se marca como finalizado.  

   **NT-03 - Préstamo de libro vencido**  
   **Título:** Alerta de Devolución Vencida  
   **Mensaje:** El plazo para regresar el ejemplar ha expirado. Favor de ponerse en contacto con el estudiante para evitar sanciones.  

   **NT-04 - Recurso en mantenimiento**  
   **Título:** Recurso Fuera de Servicio  
   **Mensaje:** El cubículo / equipo ha sido retirado de la lista activa debido a labores de mantenimiento.  

   **NT-05 - Registro de visitante**  
   **Título:** Visitante Registrado  
   **Mensaje:** Se registró correctamente el check-in del visitante externo. Recuerde capturar el check-out al finalizar.  

   **NT-06 - Acceso restringido**  
   **Título:** Dominio No Permitido  
   **Mensaje:** Solo se permite el acceso a usuarios con correos electrónicos pertenecientes a la institución educativa.  

   **NT-07 - Servidor desconectado**  
   **Título:** Error de Conexión  
   **Mensaje:** El frontend no logra comunicarse con la API de SARA. Verifique el estado de su red o el servidor backend.  

   **NT-08 - Conflicto de reserva**  
   **Título:** Recurso Ocupado  
   **Mensaje:** No fue posible concretar la reserva debido a que el recurso fue asignado a otro usuario instantes antes.  

   7.6. #### **Comportamiento de las notificaciones**

   | Evento | Acción del Sistema |
   | :--- | :--- |
   | El estudiante crea una reserva. | Desplegar alerta flotante verde (`Toast`) auto-desvanecible tras 3 segundos. |
   | Se detecta un préstamo vencido. | Agregar badge visual rojo permanente en la vista del staff sobre el registro. |
   | El staff cambia estado a Mantenimiento.| Deshabilitar interacciones del botón en tiempo real y refrescar la vista de red. |
   | Intento de acceso no válido. | Redirigir de inmediato al `/login` y mostrar modal centrado de advertencia de seguridad. |
   | Caída de conexión con la base de datos.| Desplegar banner superior rojo persistente bloqueando peticiones transaccionales. |

8. ### **Justificación**

La implementación del sistema S.A.R.A. se justifica por el alto impacto positivo en la eficiencia operativa del Learning Commons universitario. El método tradicional sustentado en registros manuales y offline no solo es vulnerable a la pérdida de información y equipos, sino que carece de la inmediatez y transparencia que demanda una comunidad estudiantil moderna. Con S.A.R.A., la automatización de accesos y la gestión dinámica en la nube posibilitan un control en tiempo real preciso, donde el personal administrativo puede delegar el seguimiento manual para concentrarse en la atención especializada.

Desde una perspectiva administrativa, S.A.R.A. proporciona métricas estructuradas que justifican la adquisición de nuevo equipo técnico, revelan el flujo real de visitantes por eventos y optimizan el uso de los cubículos grupales de estudio. Asimismo, el uso de las tecnologías propuestas como Supabase, FastAPI y React garantiza un desarrollo ágil y modular con bajos costos de mantenimiento, ofreciendo un retorno de inversión operativa inmediato reflejado en la reducción de tiempos de espera y la preservación del patrimonio físico de la biblioteca.

9. ### **Marco teórico**

   9.1. #### **Lista de Conceptos**

   **Sistema Web**  
   Es un tipo de aplicación informática que se aloja en un servidor remoto y se ejecuta a través de un navegador web estándar mediante internet o una red de área local. La ventaja sustancial de los sistemas web es que eliminan la necesidad de realizar instalaciones o actualizaciones locales en los dispositivos de los usuarios. En el caso de S.A.R.A., este concepto es central ya que permite que cualquier bibliotecaria o estudiante acceda a la administración del Learning Commons desde su computadora o dispositivo móvil simplemente navegando a la URL del sistema.

   **Control de Acceso**  
   Mecanismo de seguridad de software y hardware que determina quién tiene autorización para ingresar a un espacio físico o interactuar con ciertos datos del sistema. En S.A.R.A., el control de acceso se implementa de manera lógica mediante la autenticación con Google OAuth enlazada con las políticas internas de la base de datos para restringir el uso del panel administrativo únicamente a perfiles autorizados (Staff y Admin).

   **Arquitectura de Componentes**  
   Es un enfoque de diseño y desarrollo de software donde la interfaz gráfica se descompone en piezas de código independientes, aisladas y reutilizables denominadas componentes. Cada uno posee su propia estructura, estilos y comportamiento lógico. S.A.R.A. implementa esta arquitectura usando React, estructurando la interfaz en componentes compartidos como `Navbar`, `Sidebar` y `DataTable` que se alimentan de información dinámica dependiendo de la página en la que se rendericen.

   <div align="center">

   **Imagen 4: Estructura de Componentes React.jpg**
   *(aquí va la imagen que esquematiza cómo se anidan los componentes React en la UI)*

   </div>

   **Base de Datos Relacional**  
   Sistema para organizar y estructurar datos en tablas bidimensionales compuestas por filas y columnas, donde las tablas se vinculan entre sí mediante claves primarias y foráneas para representar relaciones lógicas. S.A.R.A. se apoya en Supabase PostgreSQL para asegurar la integridad referencial de los préstamos, computadoras y perfiles de estudiantes, previniendo la inconsistencia y pérdida de datos.

   **Row Level Security (RLS)**  
   Característica avanzada de seguridad integrada en motores de bases de datos PostgreSQL. RLS permite definir políticas de seguridad específicas directamente sobre las tablas de la base de datos, evaluando en cada consulta si la sesión del usuario tiene permiso para leer, insertar o modificar un registro determinado. En S.A.R.A., RLS asegura que los estudiantes solo puedan visualizar o modificar sus reservas personales y no las correspondientes a otros usuarios.

   **FastAPI**  
   Framework moderno de alto desempeño para construir APIs web RESTful en lenguaje Python. Destaca por su velocidad de ejecución (comparable a Node.js y Go), la generación automatizada de documentación interactiva de endpoints y su validación estricta de datos mediante esquemas declarativos. En este proyecto, es el responsable de procesar la lógica de negocio en el backend y comunicar de manera segura al frontend con Supabase PostgreSQL.

   **Google OAuth**  
   Protocolo de autorización estándar que permite a un usuario otorgar acceso a una aplicación web a ciertos datos de su cuenta de Google (como el correo institucional, nombre y foto de perfil) sin revelar su contraseña. S.A.R.A. delega el inicio de sesión a este protocolo para garantizar autenticación rápida, confiable y segura a la comunidad universitaria.

   **i18n (Internacionalización)**  
   Conjunto de técnicas de programación que preparan a una aplicación de software para adaptarse a diferentes idiomas y regiones geográficas sin necesidad de rediseñar su estructura base. S.A.R.A. implementa i18n mediante la biblioteca `react-i18next` en el frontend, posibilitando al staff y estudiantes alternar dinámicamente entre español e inglés.

   **API REST**  
   Estilo de arquitectura de software para construir servicios web que interactúan mediante peticiones HTTP estándar utilizando verbos declarativos (GET, POST, PUT, DELETE). En S.A.R.A., la API REST desarrollada en FastAPI sirve como el puente de comunicación unificado mediante el cual el frontend envía transacciones y obtiene métricas.

   **Google Books API**  
   Servicio web externo provisto por Google que otorga acceso programático a una base de datos global de información bibliográfica de millones de libros. S.A.R.A. consume esta API en su frontend para agilizar la catalogación de recursos físicos, permitiendo al staff rellenar de forma automatizada campos como autores, editoriales y portadas ingresando únicamente el ISBN del libro.

   **UI Avatars**  
   Servicio web gratuito y ligero que genera dinámicamente imágenes de perfil personalizadas basadas en iniciales y colores de fondo aleatorios. S.A.R.A. lo utiliza como un recurso estético por defecto para representar a aquellos usuarios que no tienen una foto configurada en su perfil de Google OAuth.

   9.2. #### **Lista de Herramientas**

   **Visual Studio Code (VS Code)**  
   Entorno de desarrollo integrado (IDE) ligero pero sumamente robusto y extensible. Es el software utilizado para la codificación y estructuración de todo el ecosistema de S.A.R.A., tanto en el desarrollo de la interfaz de usuario en React como en la programación lógica del backend en FastAPI.

   <div align="center">

   **Imagen 5: Entorno de Visual Studio Code.jpg**
   *(aquí va la imagen de la pantalla de VS Code con el proyecto abierto)*

   </div>

   **Vite**  
   Herramienta de compilación rápida para desarrollo web frontend. Reemplaza las configuraciones complejas de empaquetadores tradicionales, ofreciendo un servidor de desarrollo ultrarrápido y un proceso de empaquetado optimizado para producción. S.A.R.A. se inicializa sobre Vite para mejorar la experiencia de desarrollo del frontend de React.

   **Supabase Client / CLI**  
   Conjunto de herramientas que facilitan el desarrollo local y en la nube de la infraestructura de Supabase. Permite interactuar programáticamente con el servicio de autenticación y gestionar las migraciones del esquema relacional directamente sobre el motor PostgreSQL alojado.

   **Git & GitHub**  
   Git es el sistema de control de versiones distribuido utilizado para rastrear cambios en el código fuente. GitHub es la plataforma en la nube que hospeda los repositorios de S.A.R.A., facilitando la colaboración del equipo, la integración de ramas y el resguardo seguro de la base de código.

   **Figma**  
   Herramienta web de diseño y prototipado colaborativo de interfaces de usuario (UI/UX). En S.A.R.A. se utilizó Figma para maquetar visualmente la estructura, colores y comportamientos de las vistas del Dashboard de escritorio antes de proceder con el desarrollo de los estilos CSS en el proyecto.

   9.3. #### **Desarrollo de la Propuesta**
   La solución técnica planteada en S.A.R.A. se basa en un desacoplamiento completo de responsabilidades. Por un lado, la base de datos Supabase PostgreSQL se encarga del almacenamiento seguro y de la aplicación de reglas de integridad perimetrales con triggers SQL y políticas RLS. El backend, desarrollado en FastAPI, encapsula la lógica analítica de generación de reportes transaccionales y el consumo de la base de datos mediante ORM. 

   Finalmente, la interfaz web en React consume los endpoints de FastAPI y Supabase de forma asíncrona mediante hooks personalizados de Javascript. Esta separación por capas facilita el mantenimiento del código, permitiendo realizar mejoras en el diseño de la interfaz sin alterar la estructura de la base de datos o modificar la lógica del servidor API.

10. ### **Desarrollo de Diagramas**

    10.1. #### **Figura 3 Flowchart de Arquitectura SARA**

    La arquitectura de S.A.R.A. se desglosa en una estructura de tres niveles principales: cliente frontend (React), capa de servicios intermedios (API FastAPI) e infraestructura de datos en la nube (Supabase Auth y PostgreSQL), integrando a su vez los consumos de las APIs externas como Google Books.

    <div align="center">

    **Imagen 6: Flowchart de Arquitectura SARA.jpg**
    *(aquí va la imagen del diagrama de arquitectura general del proyecto)*

    </div>

    10.2. #### **Figura 4 Diagrama de la página**

    El flujo de navegación web para los usuarios que acceden al sistema define un esquema seguro donde la autenticación es el nodo central de redireccionamiento. Las rutas administrativas del Dashboard permanecen bloqueadas hasta que el login con Google OAuth es validado.

    <div align="center">

    **Imagen 7: Diagrama de Rutas y Navegación de SARA.jpg**
    *(aquí va la imagen que describe el mapa del sitio y flujo de pantallas)*

    </div>

    10.3. #### **Figura 5 Diagrama de base de datos**

    La base de datos relacional PostgreSQL de S.A.R.A. está estructurada bajo relaciones de clave foránea e índices únicos de concurrencia parcial para asegurar la estabilidad operativa del Learning Commons. Las tablas interactúan relacionando perfiles, recursos, cubículos, computadoras portátiles y el histórico de transacciones correspondientes.

    <div align="center">

    **Imagen 8: Diagrama Entidad-Relación de Base de Datos SARA.jpg**
    *(aquí va la imagen del diagrama de entidad relación de PostgreSQL)*

    </div>

    10.4. #### **Figura 6 Diagrama de Gantt**

    La planeación temporal del desarrollo de la plataforma web S.A.R.A. se distribuyó a lo largo de 5 sprints estructurados, asignando actividades paralelas de frontend, backend e integración de la base de datos en la nube.

    <div align="center">

    **Imagen 9: Diagrama de Gantt del Cronograma SARA.jpg**
    *(aquí va la imagen del cronograma de actividades en formato Gantt)*

    </div>

11. ### **Límites y Alcances del Proyecto**

    11.1. #### **Alcances de Frontend y Diseño**
    - **Dashboard Administrativo:** Implementación de pantallas interactivas que muestran métricas dinámicas de uso para el staff de biblioteca.
    - **Módulo de Gestión de Recursos:** Interfaz para registrar préstamos de libros (conectada con autocompletado ISBN) y visualización del catálogo.
    - **Reserva de Cubículos:** Pantalla interactiva en tiempo real para visualizar, apartar y liberar cubículos de estudio.
    - **Registro de Visitantes:** Interfaz simplificada para check-in y check-out de personas ajenas a la institución.
    - **Internacionalización y Temas:** Configuración completa de traducción a español/inglés y alternador nativo de modo claro/oscuro.

    11.2. #### **Límites de Frontend y Diseño**
    - **Resolución Restringida:** La interfaz del dashboard está diseñada exclusivamente para visualización en computadoras de escritorio (resolución mínima 1280px), no estando adaptada para teléfonos móviles.
    - **Sin Autonomía Offline:** El frontend no posee almacenamiento caché local persistente para operar o capturar préstamos si se pierde la conexión a internet.
    - **Perfil Estudiante Limitado:** Los estudiantes no pueden realizar modificaciones administrativas en catálogos de recursos ni en las cuentas de otros estudiantes.

    11.3. #### **Alcances de Backend y Estructura**
    - **Endpoints REST API:** Desarrollo de servicios CRUD seguros y transaccionales para perfiles de usuarios, computadoras, cubículos y préstamos.
    - **Lógica de Autocompletado:** Conector en backend para validar, consultar y estructurar la información devuelta por Google Books API.
    - **Esquema de Reportes:** Lógica optimizada para compilar métricas analíticas por rangos de fechas de manera dinámica.
    - **Exportación en Nube:** Generación y descarga directa desde el servidor de archivos planos CSV estructurados para auditorías.

    11.4. #### **Límites de Backend y Estructura**
    - **Sin Integración de Hardware:** El backend no cuenta con sockets o interfaces físicas para interactuar con chapas electrónicas de cubículos o lockers de computadoras.
    - **Políticas de Servidor:** La API no realiza notificaciones automáticas vía correo electrónico (email notifications) a los estudiantes al vencerse sus préstamos; la alerta solo es visible dentro de la app web.

    11.5. #### **Alcances de Base de Datos y Conexión**
    - **Infraestructura PostgreSQL:** Creación relacional de 10 tablas interconectadas con restricciones de clave foránea en la nube.
    - **Restricción de Concurrencia:** Índices únicos parciales para evitar que un cubículo, computadora o libro físico registre doble asignación activa de manera simultánea.
    - **Sincronización Automática:** Trigger SQL con permisos especiales que crea automáticamente el registro en la tabla `public.profiles` al completarse el login de un nuevo usuario en Supabase Auth.
    - **Políticas de Seguridad RLS:** Implementación a nivel de base de datos para restringir accesos no autorizados en lecturas directas.

    11.6. #### **Límites de Base de Datos y Conexión**
    - **Dependencia de Supabase Auth:** La base de datos no puede registrar usuarios locales sin pasar de forma obligatoria por la validación perimetral de Supabase Auth.
    - **Sin Respaldos Incrementales Locales:** Los backups y políticas de restauración están delegadas por completo al SLA y panel en la nube de Supabase, no existiendo un servidor local secundario automatizado para replicación instantánea.
