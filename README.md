# Proyecto de Diseño de Interfaces

Este proyecto fue desarrollado como parte de la materia de Diseño de Interfaces, utilizando React + Vite con TypeScript como stack tecnológico principal.

## Integrantes del Equipo
- Hiram Castillo
- Rosalinda Gámez

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:
- Node.js (versión 14.0 o superior)
- npm (normalmente viene con Node.js)
- TypeScript (versión 4.5 o superior)

## Instalación

1. Clona este repositorio:
```bash
git clone <url-del-repositorio>
```

2. Navega al directorio del proyecto:
```bash
cd proyecto-interfaces
```

3. Instala las dependencias:
```bash
npm install
```

## Ejecutar el Proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173` por defecto.

## Estructura del Proyecto

```
nombre-del-proyecto/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Tecnologías Utilizadas

- React 18
- TypeScript 5.x
- Vite

##Comentarios finales 

Se observo el prototipo inicial y se analizaron ciertas áreas de mejoras: 

1.⁠ ⁠Barra de Búsqueda 

Observación:
Actualmente, no se ve una barra de búsqueda integrada en el diseño. Esto puede dificultar la búsqueda de elementos specíficos, especialmente en secciones como los cursos, donde hay múltiples elementos con diferentes etiquetas. 

Recomendación:
Incluir una barra de búsqueda en la parte superior de las secciones relevantes (por ejemplo, cursos y grupos) para
facilitar la localización de contenido específico. 


2. Claridad en los Nombres de los Cursos

Observación:
Los nombres de los cursos se superponen con las imágenes o no son lo suficientemente claros, lo que dificulta identificar rápidamente el contenido. 

Recomendación:
Separar los nombres de los cursos de las imágenes, colocándolos fuera de estas en un área dedicada, como la parte inferior de una tarjeta (card). Usar un contraste adecuado entre el texto y el fondo para asegurar la legibilidad. 


3.⁠ ⁠Distribución de las Gráficas

Observación:
Las gráficas están alineadas en una fila horizontal sin suficiente espacio o separación clara entre cada una. Esto genera una percepción de saturación visual, especialmente en dispositivos pequeños o al tener múltiples gráficas en una misma vista.

Recomendación:
Distribuir las gráficas en un diseño de cuadrícula (grid) responsiva que permita adaptarse al tamaño de la pantalla o sección correspondiente que pueda abrirse.
