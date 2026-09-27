# Pipeline

Embudo horizontal único que reemplaza los dos embudos anteriores ("por estado" y "de prospección").

- Seis etapas principales con número, barra y conversión respecto de la etapa anterior.
- Las etapas calientes llevan la barra en `signal`; las frías, en `smoke-3`. Las etapas en 0 bajan a 45 % de opacidad.
- Las salidas (Ahora no, Perdido, Descartado) van abajo como contadores secundarios, no como etapas.
- Todos los números salen de UNA sola fuente de verdad: el KPI de Contactados y la etapa del embudo tienen que coincidir siempre.
