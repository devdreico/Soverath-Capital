# Soverath Capital

Sitio institucional de **Soverath Capital** — sociedad privada interna de Soverath Holding S.A.S.
enfocada enteramente en la administración de recursos privados que se le sean otorgados.

Landing de una sola página (`#/`) + área de acceso por invitación (`#/acceso`).
Todo el sitio se maneja en escala de grises y usa el logo real de `assets/soverath-logo.png`.

## Requisitos

- Node.js 18+ y npm

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo en http://localhost:5173
npm run build      # producción en dist/
npm run preview    # sirve dist/ en http://localhost:4173
```

`vite.config.js` usa `base: './'`, así que `dist/` funciona en cualquier hosting estático
(GitHub Pages, Netlify, Vercel, un directorio de Apache/Nginx…) sin configuración extra.
Como las rutas son hash (`#/`, `#/acceso`), no hacen falta reglas de rewrite.

## Editar textos y cifras (sin backend)

Todo el contenido vive en **`src/data/site.js`**:

| Sección | Variable | Qué se editita |
| --- | --- | --- |
| Datos generales | `site` | nombre, descriptor, línea legal |
| Enlaces | `links` | destino de `soverath.presentto.online` |
| Hero | `hero` | titular, descripción, CTAs, sellos y cifras laterales |
| Métricas | `metrics.items` | `value`, `unit` y `note` de cada cifra (ahora van con valores de ejemplo `000`/`00`) |
| Metodología | `metrics.method` | criterios de medición |
| Opciones de ingreso | `incomeStreams.items` | tarjetas: título, texto y etiquetas |
| Presupuesto | `budgetRanges.ranges` | nombre, descripción y `allocation` (%) por rango |
| Proyectos | `projects.items` | área, impacto, riesgo y estado |
| Acceso e invitación | `invite` | textos del modal, pasos, ventajas, requisitos y página `#/acceso` |
| Códigos de invitación | `inviteCodes` | códigos válidos (frente a `.env`) |
| Footer | `footer` | enlaces, aviso legal y copyright |

Si cambias los porcentajes de `budgetRanges.ranges`, mantén la suma en `budgetRanges.total` (100)
para que las barras y el total sean coherentes.

## Códigos de invitación

1. Opción rápida: editar `inviteCodes` en `src/data/site.js` (p. ej. `['MI-CODIGO']`).
2. Opción por entorno: copiar `.env.example` a `.env` y definir
   `VITE_INVITE_CODE=CODIGO1,CODIGO2` — tiene prioridad sobre el archivo de datos.

Con código correcto el modal guarda la sesión en `sessionStorage` y abre `#/acceso`.
Sin código, esa ruta redirige al inicio y vuelve a abrir el modal.

> **Nota:** la validación ocurre en el navegador; es un filtro de conveniencia, no seguridad real.
> El contenido del área de acceso es público en el bundle: no subir información sensible.

## Estructura

```
assets/soverath-logo.png        logo real (se importa desde src/components/Logo.jsx)
index.html                      fuentes Montserrat, favicon y meta
src/
  App.jsx                       rutas (HashRouter) + header/footer/modal
  data/site.js                  TODO el contenido editable
  lib/invite.js                 validación y sesión de código
  lib/nav.js                    navegación a secciones
  components/                   Logo, Header, Hero, Metrics, IncomeStreams,
                                BudgetRanges, Projects, InviteSection, InviteModal, Footer
  pages/                        Home, Acceso, NotFound
  styles/                       tokens.css, global.css, sections.css
```

## Despliegue

```bash
npm run build
```

Sube el contenido de `dist/` a cualquier hosting estático.

---

© Soverath Holding S.A.S. · Soverath Capital
