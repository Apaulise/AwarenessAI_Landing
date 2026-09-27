# Field

Campo de formulario con label arriba, control y una línea de ayuda o error debajo.

- Label en `ink-2` 13px; placeholder en `ink-3`; fondo del control `raised` con borde `line-strong`.
- Foco: borde `signal` + halo `signal-soft` de 3px. Error: borde `danger` y hint en `danger` explicando cómo corregirlo.
- Los valores numéricos (cantidad, costo, teléfono) van en `aw-mono`.
- Nunca dos labels iguales en un mismo formulario (ej. "Qué buscar" vs "Categoría", no "Rubro" dos veces).
- El consumidor provee el label, el hint y el mensaje de error.
