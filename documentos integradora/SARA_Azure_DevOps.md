# Estructura del Azure DevOps — Proyecto S.A.R.A.

Este documento presenta la organización de las tareas de **S.A.R.A. (Sistema de Acceso y Registro Automatizado)** dentro de **Azure DevOps**. 

### **Equivalencia de Elementos en Azure DevOps:**
- **Epics:** Elementos principales con numeración (ej. `01 Planeación y análisis`) y Capítulos de documentación (ej. `Capítulo 1`).
- **Features / Tasks:** Las subcarpetas representan *Features* de negocio, mientras que los elementos de tareas individuales (documentos representados por el emoji `📄` y carpetas de temas específicos) son *Tasks* o *Issues* asignados al equipo.
- **Iconos:**
  - `(done)` representa tareas completadas en base al código fuente actual y la documentación final de integración.
  - `⏳` representa tareas que están en progreso o que corresponden a las validaciones y pruebas finales previas al despliegue.

---

```text
Proyecto integrador sara/
│
├── 📁 01 Planeación y análisis/ (Epic) (done)
│   ├── 📁 Investigación preliminar/ (Feature) (done)
│   │   ├── 📄 ✅ Definir problema (done)
│   │   ├── 📄 ✅ Investigar proyectos similares (done)
│   │   ├── 📄 ✅ Analizar información recopilada (done)
│   │   └── 📄 ✅ Identificar usuarios finales (done)
│   │
│   ├── 📁 Planeación y listado/ (Feature) (done)
│   │   ├── 📄 ✅ Definir objetivos generales y específicos (done)
│   │   ├── 📄 ⏳ Enlistar requerimientos funcionales y no funcionales (done)
│   │   ├── 📄 ✅ Definir metodología trabajo (done)
│   │   ├── 📄 ✅ Crear diagrama gantt (done)
│   │   └── 📄 ✅ Determinar recursos necesarios (done)
│   │
│   └── 📁 Revisión y modificación/ (Feature) (done)
│       ├── 📄 ✅ Revisar objetivos propuestos (done)
│       ├── 📄 ✅ Retroalimentación equipo y stakeholders (done)
│       ├── 📄 ⏳ Identificar inconsistencias o vacíos en investigación (done)
│       ├── 📄 ⏳ Actualizar documentación con cambios aprobados (done)
│       └── 📄 ⏳ Validar versión final etapa (done)
│
├── 📁 02 Diseño de interfaz/ (Epic) (done)
│   ├── 📁 Experiencia de usuario ux/ (Feature) (done)
│   │   ├── 📄 ⏳ Elaborar diagrama semántico (done)
│   │   ├── 📄 ✅ Definir perfiles usuario (done)
│   │   ├── 📄 ⏳ Hacer diagrama de flujo interacción (done)
│   │   ├── 📄 ⏳ Identificar pain points (done)
│   │   ├── 📄 ⏳ Definir principios usabilidad (done)
│   │   └── 📄 ⏳ Validar flujo con equipo (done)
│   │
│   ├── 📁 Diseño principal página/ (Feature) (done)
│   │   ├── 📄 ✅ Definir identidad visual (done)
│   │   ├── 📄 ✅ Diseñar estructura navegación (done)
│   │   ├── 📄 ✅ Elaborar mockups pantallas principales (done)
│   │   ├── 📄 ✅ Definir componentes reutilizables (done)
│   │   ├── 📄 ✅ Seleccionar herramienta diseño (done)
│   │   └── 📄 ⏳ Presentar propuesta diseño (done)
│   │
│   ├── 📁 Diseño layout/ (Feature) (done)
│   │   ├── 📄 ✅ Definir retícula sitio (done)
│   │   ├── 📄 ✅ Diseñar distribución elementos (done)
│   │   ├── 📄 ⏳ Adaptar diseño distintos tamaños (done)
│   │   └── 📄 ✅ Exportar assets y especificaciones (done)
│   │
│   ├── 📁 Revisión y modificaciones diseño/ (Feature) (done)
│   │   ├── 📄 ✅ Revisar consistencia visual (done)
│   │   ├── 📄 ⏳ Verificar accesibilidad (done)
│   │   ├── 📄 ✅ Recoger feedback equipo cliente (done)
│   │   ├── 📄 ⏳ Ajustar diseños observaciones (done)
│   │   ├── 📄 ✅ Validar diseño dispositivos (done)
│   │   └── 📄 ⏳ Documentar y entregar diseño final (done)
│   │
│   └── 📁 Diseño css/ (Feature) (done)
│       ├── 📄 ⏳ Crear estilos base mockup (done)
│       ├── 📄 ⏳ Agregar animaciones y transiciones (done)
│       ├── 📄 ⏳ Verificar animaciones y transiciones (done)
│       └── 📄 ⏳ Optimizar jerarquía visual intuitiva (done)
│
├── 📁 03 Desarrollo backend/ (Epic) (done)
│   ├── 📁 Diseño y documentación apis/ (Feature) (done)
│   │   ├── 📄 ⏳ Listar endpoints por módulo (done)
│   │   ├── 📄 ⏳ Definir parámetros y respuestas (done)
│   │   ├── 📄 ⏳ Validar necesidad de documentación (done)
│   │   └── 📄 ⏳ Verificación y testing api (done)
│   │
│   ├── 📁 Definición y configuración entorno/ (Feature) (done)
│   │   ├── 📄 ✅ Configurar estructura carpetas (done)
│   │   ├── 📄 ✅ Configurar variables entorno (done)
│   │   ├── 📄 ⏳ Verificar estructura correcta (done)
│   │   └── 📄 ✅ Testear funcionalidad inicial (done)
│   │
│   ├── 📁 Manejo sesiones/ (Feature) (done)
│   │   ├── 📄 ✅ Crear login (done)
│   │   ├── 📄 Implementar manejo sesión activa (done)
│   │   └── 📄 ⏳ Asignar acciones por rol (done)
│   │
│   └── 📁 Módulo usuarios y roles/ (Feature) (done)
│       ├── 📄 ⏳ Crear endpoints registro y consulta (done)
│       ├── 📄 ✅ Implementar asignación rol (done)
│       └── 📄 ⏳ Restringir accesos y funciones (done)
│
├── 📁 04 Gestión base de datos/ (Epic) (done)
│   ├── 📁 Requerimientos datos/ (Feature) (done)
│   │   ├── 📄 ✅ Listar entidades almacenamiento (done)
│   │   ├── 📄 ✅ Definir atributos entidades (done)
│   │   └── 📄 ✅ Validar datos a guardar (done)
│   │
│   ├── 📁 Modelo entidad relación/ (Feature) (done)
│   │   ├── 📄 ⏳ Identificar relaciones (done)
│   │   ├── 📄 ⏳ Crear tablas de relación (done)
│   │   ├── 📄 ⏳ Crear y guardar diagrama er (done)
│   │   └── 📄 ⏳ Validar relaciones con compañeros (done)
│   │
│   ├── 📁 Modelo relacional/ (Feature) (done)
│   │   ├── 📄 ⏳ Crear tablas columnas tipos (done)
│   │   ├── 📄 ⏳ Definir llaves primarias y foráneas (done)
│   │   └── 📄 ⏳ Comprobar relaciones correctas (done)
│   │
│   ├── 📁 Script sql/ (Feature) (done)
│   │   ├── 📄 ✅ Crear queries creación tablas (done)
│   │   ├── 📄 ⏳ Definir restricciones adecuadas (done)
│   │   └── 📄 ⏳ Comprobar consultas antes de usar (done)
│   │
│   ├── 📁 Conexión backend bd/ (Feature) (done)
│   │   ├── 📄 ✅ Configurar credenciales acceso (done)
│   │   ├── 📄 ✅ Establecer conexión desde backend (done)
│   │   └── 📄 ✅ Crear consultas de prueba (done)
│   │
│   └── 📁 Revisión base datos/ (Feature) (done)
│       ├── 📄 ⏳ Verificar todas las relaciones (done)
│       ├── 📄 ⏳ Verificar información consultas (done)
│       └── 📄 ⏳ Evaluar inconsistencias o duplicados (done)
│
├── 📁 05 Módulos de interfaz/ (Epic) (done)
│   ├── 📁 Componentes reutilizables/ (Feature) (done)
│   │   ├── 📄 ✅ Crear botón reutilizable (done)
│   │   ├── 📄 ✅ Crear tarjeta card reutilizable (done)
│   │   ├── 📄 ✅ Crear sección reutilizable (done)
│   │   └── 📄 ✅ Validar integración componentes (done)
│   │
│   ├── 📁 Revisión general módulos/ (Feature) (done)
│   │   ├── 📄 ✅ Revisar funcionamiento módulos (done)
│   │   ├── 📄 ✅ Validar diseño y consistencia visual (done)
│   │   └── 📄 ✅ Verificar integración módulos (done)
│   │
│   ├── 📁 Navegación interfaz/ (Feature) (done)
│   │   ├── 📄 ✅ Definir rutas principales (done)
│   │   ├── 📄 ✅ Implementar barra navegación (done)
│   │   └── 📄 ⏳ Validar funcionamiento rutas (done)
│   │
│   └── 📁 Validaciones interfaz/ (Feature) (done)
│       ├── 📄 ⏳ Validar campos obligatorios (done)
│       ├── 📄 ⏳ Revisar validaciones formato entrada (done)
│       ├── 📄 ⏳ Verificar mensajes de validación (done)
│       ├── 📄 ⏳ Probar comportamiento formularios (done)
│       ├── 📄 ⏳ Documentar incidencias validación (done)
│       └── 📄 ⏳ Validar funcionamiento botones (done)
│
├── 📁 06 Consumo de servicios/ (Epic) (done)
│   ├── 📁 Revisión general consumo/ (Feature) (done)
│   │   ├── 📄 ⏳ Revisar consumo servicios api (done)
│   │   ├── 📄 ⏳ Validar manejo respuestas y errores (done)
│   │   └── 📄 ⏳ Verificar integración servicios frontend (done)
│   │
│   ├── 📁 Conexión frontend api/ (Feature) (done)
│   │   ├── 📄 ⏳ Implementar consumo endpoints (done)
│   │   ├── 📄 ⏳ Integrar envío datos backend (done)
│   │   ├── 📄 ⏳ Gestionar respuestas y errores (done)
│   │   ├── 📄 ⏳ Integrar datos api en vistas (done)
│   │   └── 📄 ⏳ Validar integración front back (done)
│   │
│   └── 📁 Cliente http/ (Feature) (done)
│       ├── 📄 ⏳ Configurar cliente http (done)
│       ├── 📄 ⏳ Configurar url base api (done)
│       ├── 📄 ⏳ Implementar servicios consumo (done)
│       ├── 📄 ⏳ Implementar manejo errores solicitudes (done)
│       └── 📄 ⏳ Validar consumo servicios (done)
│
├── 📁 07 Configuración servidor/ (Epic) (done)
│   ├── 📁 Instalación y configuración/ (Feature) (done)
│   │   ├── 📄 ⏳ Descargar e instalar servidor (done)
│   │   ├── 📄 ⏳ Configurar entorno desarrollo (done)
│   │   └── 📄 ⏳ Verificar inicio correcto (done)
│   │
│   ├── 📁 Servicios y dependencias/ (Feature) (done)
│   │   ├── 📄 ⏳ Instalar dependencias proyecto (done)
│   │   ├── 📄 ⏳ Configurar librerías requeridas (done)
│   │   └── 📄 ⏳ Verificar compatibilidad (done)
│   │
│   ├── 📁 Pruebas funcionamiento/ (Feature) (done)
│   │   ├── 📄 ⏳ Iniciar servidor (done)
│   │   ├── 📄 ⏳ Verificar acceso desde navegador (done)
│   │   └── 📄 ⏳ Comprobar conexión base datos (done)
│   │
│   └── 📁 Revisión y ajustes/ (Feature) (done)
│       ├── 📄 ⏳ Corregir errores detectados (done)
│       ├── 📄 ⏳ Optimizar configuración (done)
│       └── 📄 ⏳ Confirmar operatividad servicios (done)
│
├── 📁 08 Integración sistema/ (Epic) (done)
│   ├── 📁 Integración frontend backend/ (Feature) (done)
│   │   ├── 📄 ⏳ Configurar comunicación api (done)
│   │   ├── 📄 ⏳ Verificar envío datos (done)
│   │   └── 📄 ⏳ Probar flujo completo información (done)
│   │
│   ├── 📁 Implementación y pruebas api/ (Feature) (done)
│   │   ├── 📄 ⏳ Crear endpoints faltantes (done)
│   │   ├── 📄 ⏳ Implementar métodos crud (done)
│   │   ├── 📄 ⏳ Validar respuestas api (done)
│   │   └── 📄 ⏳ Manejar errores solicitudes (done)
│   │
│   ├── 📁 Validación funcionamiento completo/ (Feature) (done)
│   │   ├── 📄 ⏳ Ejecutar pruebas funcionales (done)
│   │   └── 📄 ⏳ Verificar navegación entre módulos (done)
│   │
│   └── 📁 Corrección y optimización/ (Feature) (done)
│       └── 📄 ⏳ Corregir errores reportados (done)
│
├── 📁 09 Pruebas y validaciones/ (Epic)
│   ├── 📁 Pruebas finales backend/ (Feature)
│   │   ├── 📄 ⏳ Definir casos prueba (done)
│   │   ├── 📄 ⏳ Realizar pruebas unitarias
│   │   ├── 📄 ⏳ Realizar pruebas integración servicios
│   │   ├── 📄 ⏳ Probar manejo errores excepciones
│   │   ├── 📄 ⏳ Verificar seguridad básica (done)
│   │   └── 📄 ⏳ Documentar resultados y corregir
│   │
│   ├── 📁 Pruebas finales frontend/ (Feature)
│   │   ├── 📄 ⏳ Definir casos prueba (done)
│   │   ├── 📄 ⏳ Probar funcionalidad componentes
│   │   ├── 📄 ⏳ Validar diseño responsivo (done)
│   │   ├── 📄 ⏳ Probar compatibilidad navegadores
│   │   ├── 📄 ⏳ Revisar mensajes error y validaciones
│   │   └── 📄 ⏳ Documentar resultados y corregir
│   │
│   ├── 📁 Pruebas finales integración/ (Feature)
│   │   ├── 📄 ⏳ Definir escenarios e2e (done)
│   │   ├── 📄 ⏳ Probar comunicación front back (done)
│   │   ├── 📄 ⏳ Validar flujo completo usuario
│   │   ├── 📄 ⏳ Probar manejo datos tiempo real
│   │   ├── 📄 ⏳ Identificar y corregir errores
│   │   └── 📄 ⏳ Validar rendimiento general
│   │
│   └── 📁 Monitoreo y documentación pruebas/ (Feature)
│       ├── 📄 ⏳ Registrar casos de prueba
│       ├── 📄 ⏳ Documentar bugs encontrados
│       ├── 📄 ⏳ Seguimiento estado corrección
│       ├── 📄 ⏳ Elaborar reporte final
│       ├── 📄 ⏳ Monitorear estabilidad
│       └── 📄 ⏳ Documentar aprendido
│
└── 📁 10 Documentación/ (Epic) (done)
    ├── 📁 Portada e Índices/ (Feature) (done)
    │   ├── 📄 ✅ Definir portada y versiones del documento (done)
    │   ├── 📄 ✅ Elaborar índice general de contenidos (done)
    │   ├── 📄 ✅ Registrar índice de tablas y figuras (done)
    │   └── 📄 ✅ Revisar y verificar formato de los índices (done)
    │
    ├── 📁 Capítulo 1: Introducción/ (Feature) (done)
    │   ├── 📄 ✅ Definir contexto general del Learning Commons (done)
    │   ├── 📄 ✅ Redactar problemática de administración de recursos (done)
    │   └── 📄 ✅ Validar redacción y extensión de la introducción (done)
    │
    ├── 📁 Capítulo 2: Diagnóstico/ (Feature) (done)
    │   ├── 📄 ✅ Elaborar análisis de la situación actual (done)
    │   ├── 📄 ✅ Investigar empresas con proyectos similares (done)
    │   ├── 📄 ✅ Identificar riesgos y dificultades futuras (done)
    │   ├── 📄 ✅ Describir posibles usuarios finales (done)
    │   ├── 📄 ✅ Redactar problemática y consecuencias (done)
    │   └── 📄 ✅ Definir sprints de metodología Scrum (done)
    │
    ├── 📁 Capítulo 3: Objetivos/ (Feature) (done)
    │   ├── 📄 ✅ Definir objetivo general del proyecto (done)
    │   ├── 📄 ✅ Redactar objetivos específicos de desarrollo (done)
    │   └── 📄 ✅ Describir resultados esperados e impacto (done)
    │
    ├── 📁 Capítulo 4: Ingeniería de Requisitos/ (Feature) (done)
    │   ├── 📄 ✅ Elaborar tabla de requerimientos funcionales (done)
    │   ├── 📄 ✅ Elaborar tabla de requerimientos no funcionales (done)
    │   └── 📄 ✅ Definir prioridades de requerimientos (done)
    │
    ├── 📁 Capítulo 5: Herramientas y Tecnologías/ (Feature) (done)
    │   ├── 📄 ✅ Describir stack tecnológico del frontend y backend (done)
    │   └── 📄 ✅ Justificar uso de Supabase y Google Books API (done)
    │
    ├── 📁 Capítulo 6: Diseño de Interfaz/ (Feature) (done)
    │   ├── 📄 ✅ Mapear perfiles de usuario y accesos (done)
    │   ├── 📄 ✅ Identificar pain points por perfil (done)
    │   └── 📄 ✅ Definir directrices y usabilidad del dashboard (done)
    │
    ├── 📁 Capítulo 7: Desarrollo de Backend/ (Feature) (done)
    │   ├── 📄 ✅ Detallar variables de entorno y del sistema (done)
    │   ├── 📄 ✅ Listar endpoints de la API FastAPI (done)
    │   ├── 📄 ✅ Definir roles y niveles de acceso (done)
    │   ├── 📄 ✅ Catalogar eventos y mensajes de notificaciones (done)
    │   └── 📄 ✅ Definir comportamiento de notificaciones (done)
    │
    ├── 📁 Capítulo 8: Justificación/ (Feature) (done)
    │   └── 📄 ✅ Redactar justificación operativa y administrativa (done)
    │
    ├── 📁 Capítulo 9: Marco Teórico/ (Feature) (done)
    │   ├── 📄 ✅ Definir conceptos clave del sistema (done)
    │   ├── 📄 ✅ Describir herramientas de desarrollo sin Postman (done)
    │   └── 📄 ✅ Detallar la propuesta de integración (done)
    │
    ├── 📁 Capítulo 10: Desarrollo de Diagramas/ (Feature) (done)
    │   ├── 📄 ✅ Crear flowchart de arquitectura general (done)
    │   ├── 📄 ✅ Diseñar diagrama de rutas y navegación (done)
    │   ├── 📄 ✅ Generar diagrama entidad relación de base de datos (done)
    │   └── 📄 ✅ Elaborar diagrama de Gantt del cronograma (done)
    │
    ├── 📁 Capítulo 11: Límites y Alcances/ (Feature) (done)
    │   ├── 📄 ✅ Definir alcances y límites del frontend (done)
    │   ├── 📄 ✅ Definir alcances y límites del backend (done)
    │   └── 📄 ✅ Definir alcances y límites de la base de datos (done)
    │
    └── 📁 Tareas Transversales de Revisión/ (Feature) (done)
        ├── 📄 ✅ Cambiar tiempo gramatical a presente (done)
        ├── 📄 ✅ Realizar revisión ortográfica completa (done)
        └── 📄 ⏳ Validar formato de versión final con el docente
```
