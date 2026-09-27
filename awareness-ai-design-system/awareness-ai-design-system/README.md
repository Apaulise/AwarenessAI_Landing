# Awareness AI — design system

**Señal y humo.** Awareness AI construye agentes y automatizaciones de IA para pymes. Sus herramientas tienen que verse como instrumentos de precisión: sobrias, densas y confiables. El humo es la base (grises cálidos, capas, líneas finas); el amarillo es la señal y aparece poco, siempre con un significado. Este sistema cubre el Gestor de Leads y todo producto interno o de cliente de Awareness AI.

## Principios

1. **La señal se gana su lugar.** El amarillo (`signal`) marca solo cuatro cosas: la acción principal, el lugar donde estás (ítem activo, día de hoy), el foco de teclado y el dato más importante de la vista. Si hay dos cosas amarillas compitiendo, una sobra.
2. **Líneas antes que cajas.** Agrupá con espacio, alineación y divisores de 1px (`line`). Una card (`surface` + `radius-lg`) solo cuando el bloque es realmente independiente y movible.
3. **Datos primero.** Los números van en `mono` con cifras tabulares. Lo que está en 0 se atenúa o se colapsa; no ocupa el mismo espacio que lo que tiene datos.
4. **Cada vacío indica un siguiente paso.** Un estado vacío es una línea de texto y una acción, no una card entera vacía.
5. **Herramienta, no vidriera.** Densidad media-alta, sin decoración. Se usa ocho horas por día.

## Voz y microcopy

Español rioplatense con voseo, directo y corto.

- Hacé: "Generá la apertura", "Pegá lo que respondió", "Sin actividad todavía. Registrá la primera llamada."
- No hagas: referencias internas en la UI ("SPA §8", "Plan §1.17", "No evaluativa"). Si un dato necesita contexto, usá un tooltip en lenguaje de usuario.
- No uses signos de exclamación, emojis ni superlativos ("¡Increíble!", "potenciá tu negocio").
- Verbos en los botones: "Generar lista", no "Aceptar". Un botón dice lo que va a pasar.
- Números con unidad y contexto: "25 contactados · 13 %", no "25".

## Color

Tema principal **oscuro** (uso diario prolongado); el claro es para presentar o compartir pantallas.

- **Base / humo:** `bg` → `surface` → `raised` → `overlay` es la escala de profundidad. No hay otra forma de elevar algo, salvo `shadow-pop` en popovers.
- **Texto:** `ink` para lo principal, `ink-2` para lo secundario y `ink-3` para eyebrows, placeholders y ejes. Todos cumplen ≥4.5:1 sobre `bg` y `surface` en ambos temas.
- **Señal:** `signal` como relleno siempre lleva texto `on-signal` (nunca blanco). Como texto sobre fondo neutro usá `signal-text`, que en el tema claro se oscurece a #7d5c06 para dar contraste. `signal-soft` es el fondo de estados activos.
- **Semánticos:** `success` (salvia), `danger` (ladrillo) e `info` (gris azulado) están desaturados a propósito para no competir con la señal. Se distinguen por luminosidad y por etiqueta, no solo por tono.
- **Gráficos:** serie principal en `signal`, comparaciones en `smoke-5` → `smoke-2`. Nunca un arcoíris.
- **Prohibido:** gradientes en botones, glow/neón, glassmorphism, fondos amarillos grandes, crema + amarillo pastel (la "pastelería").

## Tipografía

- **Hanken Grotesk** (Google Fonts) para la interfaz: grotesca seca, pesos 400/500/600. Nunca 800.
- **JetBrains Mono** (Google Fonts) para datos: KPIs, teléfonos, fechas, costos, contadores. Siempre `font-variant-numeric: tabular-nums`.
- Escala corta: `display` (uno por vista), `title`, `heading`, `body`, `body-sm`, `eyebrow`, `data-lg`, `data`.
- `eyebrow` va en MAYÚSCULAS con tracking amplio y en `ink-3`: se usa sobre títulos de página y en encabezados de tabla.

## Forma y espacio

- Grilla de 4px; escala `space-1` (4) a `space-8` (64). Márgenes de página `space-6`, padding de paneles `space-4`.
- Radios chicos: `radius-sm` (4px) en controles y `radius-lg` (8px) como máximo en contenedores. Nada tipo píldora salvo puntos de estado.
- Bordes de 1px siempre. Inputs y controles con `line-strong`; divisores con `line`.
- Layout de app: sidebar de 240px (64px colapsada) + contenido con ancho máximo de 1280px. Detalle de lead en tres zonas: 320px / flexible / 360px.

## Iconografía

Un solo set: **Lucide**, trazo 1.5px, 16px en controles y 18px en navegación, monocromo (`ink-2` en reposo, `ink` en hover, `signal-text` en activo). Sin íconos de colores ni ilustraciones.

## Movimiento

Transiciones de 120–180ms con `ease-out`, sin rebotes. Un único gesto de marca: el **shimmer de humo** en los estados de carga de la IA (un gradiente gris que se desplaza lento y se disipa al llegar el contenido). Respetá `prefers-reduced-motion`.

## Estados del pipeline

Los estados se leen por etiqueta + punto de color; el color solo agrupa temperatura:

| Grupo | Estados | Estilo |
|---|---|---|
| Frío | Nuevo, Listo para contactar | punto `smoke-4`, texto `ink-2` |
| En curso | Contactado, Autorespuesta | punto `info` |
| Caliente | Respondió, Diagnóstico, Calificado, Interesado, Reunión propuesta/agendada/realizada, Propuesta enviada | punto `signal`, fondo `signal-soft` |
| Ganado | Cerrado ganado | punto `success`, fondo `success-soft` |
| Pausa | Ahora no, En seguimiento | punto `smoke-3`, texto `ink-3` |
| Salida | Cerrado perdido, Descartado | punto `danger`, texto `ink-3` |

## Implementación (Next.js + Tailwind + shadcn/ui)

Los tokens se exponen como variables CSS (`tokens.css`, tema por `data-theme="dark|light"`). Para shadcn, mapeá sus variables a las del sistema en `globals.css`:

```css
:root, [data-theme="dark"] {
  --background: var(--bg);        --foreground: var(--ink);
  --card: var(--surface);         --card-foreground: var(--ink);
  --popover: var(--raised);       --popover-foreground: var(--ink);
  --primary: var(--signal);       --primary-foreground: var(--on-signal);
  --secondary: var(--raised);     --secondary-foreground: var(--ink);
  --muted: var(--raised);         --muted-foreground: var(--ink-2);
  --accent: var(--signal-soft);   --accent-foreground: var(--ink);
  --destructive: var(--danger);   --border: var(--line);
  --input: var(--line-strong);    --ring: var(--focus-ring);
  --radius: 4px;
}
```

Reglas para desarrollo:

- Restilizá los primitivos de shadcn con estos tokens; no importes temas ni estilos de terceros.
- Si usás componentes de **21st.dev / Magic MCP**, adaptalos siempre a estos tokens y quitá sus gradientes, sombras y radios propios. Si no, la app vuelve al "look IA" genérico.
- Nunca pegues valores hex en componentes: siempre `var(--token)` o la clase de Tailwind mapeada.
- Clases de referencia de cada componente: prefijo `aw-` en `components/bundle.css`.

## Anti-patrones

Botones con gradiente cian-violeta · cards con título + subtítulo para todo · 19 filas de embudo en 0 · emojis en la UI · bordes laterales de color en cards · amarillo pastel sobre crema · sombras difusas en todo · texto blanco sobre amarillo.
