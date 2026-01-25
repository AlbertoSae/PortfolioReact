# 🚀 Mi Portfolio Profesional

Este es un porfolio de alto rendimiento construido con el ecosistema más moderno de React. Diseñado no solo como una carta de presentación, sino como una plataforma gestionable y escalable que combina desarrollo frontend de vanguardia con herramientas de automatización local.

---

## Características Destacadas

### Project Management Suite (Local)
Incluye una herramienta de administración interna para gestionar contenido sin tocar una sola línea de código.
- **`npm run add-project`**: Lanza un **Dashboard Visual** en el navegador.
- **CRUD Completo**: Permite crear, actualizar y borrar proyectos visualmente.
- **Sincronización Automática**: Gestiona assets, traducciones (ES, EN, RU) y registros de datos de forma persistente.

### Soporte Multimedia Avanzado
- **Vídeo & Imagen**: Detección automática y renderizado optimizado de archivos `.mp4`, `.webm` y formatos de imagen.
- **Previews Inteligentes**: Las tarjetas de proyecto muestran vídeos en bucle y silencio para una experiencia premium.
- **Galería Interactiva**: Carruseles optimizados con soporte para teclado (flechas/ESC) y gestos.

### Arquitectura Moderna & Escalable
- **Custom Hooks**: Lógica de navegación encapsulada en `useCarousel`.
- **Componentes Atómicos**: Uso de `MediaRenderer` para estandarizar la visualización de medios.
- **React Compiler**: Configurado para maximizar el rendimiento mediante memoización automática.
- **Vibe Coding**: Desarrollado íntegramente con **Antigravity** bajo la metodología de ejecución fluida.

---

## Instalación y Desarrollo

1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Ejecutar servidor local:**
   ```bash
   npm run dev
   ```
3. **Gestionar Proyectos (Dashboard):**
   ```bash
   npm run add-project
   ```

---

## Estructura del Proyecto

```text
├── scripts/             # Suite de Gestión (Local - Excluido en Git)
├── src/
│   ├── assets/          # Multimedia y Icon Registry
│   ├── components/
│   │   ├── layout/      # Navbar y Estructura
│   │   └── ui/          # MediaRenderer, ProjectCard, Effects
│   ├── hooks/           # useCarousel y lógica de estado
│   ├── locales/         # i18n (Diccionarios multiidioma)
│   ├── sections/        # Secciones principales (Hero, About, Projects...)
│   ├── utils/           # mediaUtils y herramientas auxiliares
│   ├── App.jsx          # Lógica de ruteo y estado global
│   └── i18n.js          # Configuración de idiomas
├── package.json         # Scripts de automatización y dependencias
└── vite.config.js       # Vite + React Compiler
```

---

## Seguridad y Privacidad
Las herramientas de administración y los scripts de servidor local están protegidos mediante `.gitignore`, asegurando que tu entorno de gestión sea privado y exclusivo para tu flujo de trabajo local.
