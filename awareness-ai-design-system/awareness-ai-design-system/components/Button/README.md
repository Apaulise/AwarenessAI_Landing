# Button

Botón de acción; el primario amarillo es la acción principal de la vista y hay uno solo por pantalla.

- `aw-btn--primary`: relleno `signal` con texto `on-signal`. Uno por vista (Generar lista, Nuevo turno, Enviar apertura).
- `aw-btn` (secundario): `surface` + borde `line-strong`. Acciones frecuentes pero no principales.
- `aw-btn--ghost`: acciones terciarias, toolbars y cancelar.
- `aw-btn--danger`: destructivas. Siempre piden confirmación; nunca van en rojo sólido.
- `aw-btn--icon`: 32×32, siempre con `aria-label`.
- Alto 32px (36px en formularios). Texto = verbo + objeto. Sin gradientes, glow ni sombras.
- En shadcn: `Button` con variantes `default` → primary, `outline` → secundario, `ghost`, `destructive` → danger.
