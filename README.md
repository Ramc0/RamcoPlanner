# RamcoPlanner
---
# 🗂️ RamcoPlanner - Aplicación móvil SPA de gestión de actividades

---

## 📌 Descripción general

**RamcoPlanner** es una aplicación web optimizada para dispositivos móviles, desarrollada utilizando un **framework SPA propio en JavaScript vanilla**. El proyecto permite gestionar actividades personales mediante un sistema completo de:

- Creación
- Edición
- Eliminación
- Filtrado
- Búsqueda
- Ordenación
- Estadísticas dinámicas

La aplicación utiliza **localStorage como sistema de persistencia**, garantizando que los datos se mantengan entre sesiones sin necesidad de backend.

---

## 🎯 Objetivos del proyecto

Este proyecto tiene como finalidad:

- Implementar una arquitectura SPA modular sin frameworks externos
- Gestionar estado global manualmente
- Implementar un CRUD completo en entorno móvil
- Aplicar mejoras visuales y microinteracciones
- Demostrar modificaciones funcionales profundas respecto al proyecto base trabajado en clase

---

## 🧠 Arquitectura

Ramco Planner está construido sobre un sistema SPA basado en:

- Grid 2x2 con navegación mediante `transform: translate()`
- Carga dinámica de pantallas (HTML, CSS y JS)
- Estado global compartido
- Modularización por pantallas

### 📂 Estructura del proyecto

```

RamcoPlanner
├── index.html
├── README.md
├── app
│   ├── app.js
│   └── app.css
└── screens
├── principal
├── form
└── stats

```

---

## ⚙️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript 
- localStorage
- Arquitectura SPA personalizada

No se utilizan frameworks externos.

---

## 📱 Funcionalidades implementadas

### 🗂 Gestión de actividades
- Crear nuevas actividades
- Editar actividades existentes
- Eliminar con confirmación
- Marcar como completadas
- Persistencia automática en localStorage

### 🔍 Filtrado y búsqueda
- Filtro por estado (todas / pendientes / completadas)
- Búsqueda en tiempo real
- Ordenación por fecha o prioridad

### 🏷️ Clasificación
- Categorías personalizadas
- Niveles de prioridad con indicador visual (badge)

### 📊 Estadísticas dinámicas
- Total de actividades
- Completadas y pendientes
- Porcentaje de progreso
- Conteo por categoría
- Barra de progreso visual

### 👁️ Vista detallada
- Modal interactivo con información completa
- Microanimaciones y feedback visual

---

## 🎨 Mejoras estéticas y visuales

- Diseño adaptado a móvil
- Tarjetas con sombras dinámicas
- Microinteracciones en hover y active
- Animaciones suaves de aparición
- Formulario moderno con enfoque UX
- Indicadores visuales de prioridad

---

## 💾 Persistencia de datos

La aplicación utiliza:

```

localStorage.setItem("ramcoActivities", ...)

````

El modelo de datos incluye:

```js
{
  id: Number,
  title: String,
  description: String,
  category: String,
  priority: String,
  completed: Boolean,
  createdAt: String
}
````

---

## 🔄 Flujo de navegación

* Pantalla principal → Lista de actividades
* Formulario → Crear / editar
* Estadísticas → Métricas dinámicas
* Modal → Vista detallada

La navegación se realiza mediante:

```
navigate("ruta", params)
```

---

## 🧪 Posibles mejoras futuras

* Modo oscuro / claro
* Exportación de actividades en JSON
* Integración con backend real
* Sistema de autenticación
* Gráficos estadísticos avanzados
* Soporte PWA

---

## 🏗️ Filosofía del proyecto

Ramco Planner no busca competir con aplicaciones comerciales, sino:

* Servir como ejercicio académico avanzado
* Demostrar control total sobre el estado y la arquitectura
* Implementar una SPA sin dependencias externas
* Comprender el ciclo completo de datos en frontend

---

## 👨‍💻 Autor

Proyecto desarrollado como ejercicio final dentro del módulo de Programación multimedia y dispositivos móviles.

---
