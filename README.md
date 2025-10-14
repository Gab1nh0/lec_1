# Blog de Lectura — ¡Tráguese ese Sapo! (Next.js 14)

Proyecto de blog con App Router donde **cada aspecto** exigido es una **página** independiente:

- `/nombre` — Nombre general del blog (y miembros).
- `/introduccion` — Introducción a la lectura.
- `/contenido` — Índice de temas por estudiante y páginas dinámicas bajo `/contenido/[slug]`.
- `/aportes` — Aportes generales (fotos, enlaces, documentos).
- `/conclusion` — Conclusión.
- `/bibliografia` — Bibliografía.
- `/referencias` — Referencias adicionales.

## Ejecutar localmente

```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Personalización rápida

- Edita `/app/nombre/page.tsx` para el **título del blog** y **nombres del grupo**.
- Añade nuevos temas/estudiantes creando archivos MDX o JSON en `/content/temas.json` y usa la UI para generar rutas.
- Sube imágenes a `/public/` y enlázalas en `/app/aportes/page.tsx`.
