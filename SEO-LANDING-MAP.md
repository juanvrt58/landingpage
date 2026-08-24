# Mapa SEO de Roble Pizzas

## Fuente de verdad

Sitio estático HTML/CSS/JavaScript. El estilo compartido vive en `style.css`, la interacción general en `script.js` y el flujo de conversión principal en `cotizar.html`. El servicio verificado en el sitio es pizza napolitana móvil preparada en vivo para eventos en Santiago y la Región Metropolitana, con masa de fermentación lenta, hornos, montaje, servicio y desmontaje.

## Arquitectura y canibalización

| Prioridad | URL | Intención | Keyword principal | Keywords secundarias | Competidora interna | Estado |
|---|---|---|---|---|---|---|
| 1 | `/pizza-party-santiago/` | Comercial local | pizza party Santiago | pizza party para eventos, pizza party a domicilio | Home | Implementada |
| 2 | `/pizzas-para-eventos/` | Comercial servicio | pizzas para eventos | pizzería para eventos, pizza artesanal eventos | `/pizza-party-santiago/` | Implementada |
| 3 | `/catering-para-eventos-santiago/` | Comercial catering | catering para eventos Santiago | comida para eventos, catering celebraciones | `/pizzas-para-eventos/` | Implementada |
| 4 | `/pizzas-para-cumpleanos/` | Comercial producto/evento | pizzas para cumpleaños | pizza party cumpleaños, pizzería cumpleaños | `pizza-para-cumpleanos.html` | Implementada |
| 5 | `/catering-para-cumpleanos/` | Comercial problema | catering para cumpleaños | comida cumpleaños, catering a domicilio | `/pizzas-para-cumpleanos/` | Implementada |
| 6 | `/pizza-party-precios/` | Comercial precio | pizza party precio | precio por persona, catering pizza precio | `/cotizar.html` | Implementada |
| 7 | `/pizza-para-matrimonios/` | Comercial producto/evento | pizza para matrimonios | pizza party matrimonio, pizzas matrimonio civil | `pizza-para-matrimonios.html` | Implementada y consolidada |
| 8 | `/pizza-party-empresas/` | Comercial producto/empresa | pizza party empresas | pizzas para oficina, pizza evento corporativo | `/pizza-para-eventos-corporativos.html` | Implementada |
| 9 | `/catering-para-empresas/` | Comercial catering/empresa | catering para empresas | catering corporativo, comida eventos empresa | `/pizza-party-empresas/` | Implementada |
| 10 | `/pizzeria-movil-eventos/` | Comercial experiencia | pizzería móvil para eventos | pizza preparada en vivo, horno pizza eventos | `/pizzas-para-eventos/` | Implementada |
| 11 | `/pizza-napolitana-eventos/` | Comercial producto | pizza napolitana para eventos | pizza italiana eventos, pizza artesanal | `/pizzas-para-eventos/` | Próxima |
| 12 | `/catering-a-domicilio/` | Comercial logística | catering a domicilio | catering eventos domicilio | `/pizza-party-santiago/` | Próxima |
| 13 | `/pizza-para-graduaciones.html` | Comercial evento | pizza para graduaciones | pizza titulación | Ninguna directa | Existente |
| 14 | `/pizza-para-eventos-en-casa.html` | Comercial logística | pizza para eventos en casa | pizza a domicilio eventos | `/catering-a-domicilio/` | Existente |
| 15 | `/catering-pizza-artesanal-santiago.html` | Comercial servicio | catering pizza artesanal Santiago | pizza artesanal eventos | `/catering-para-eventos-santiago/` | Existente, revisar consolidación |
| 16 | `/que-servir-en-un-cumpleanos/` | Informacional/comercial | qué servir en un cumpleaños | comida cumpleaños, ideas menú | `/catering-para-cumpleanos/` | Próxima |
| 17 | `/comida-para-cumpleanos-adultos/` | Informacional/comercial | comida para cumpleaños adultos | catering cumpleaños adultos | `/pizzas-para-cumpleanos/` | Próxima |
| 18 | `/comida-para-eventos/` | Informacional | comida para eventos | ideas comida eventos | `/catering-para-eventos-santiago/` | Próxima |
| 19 | `/ideas-cumpleanos-adultos/` | Informacional | ideas cumpleaños adultos | celebración adultos | `/comida-para-cumpleanos-adultos/` | Próxima |
| 20 | `/ideas-para-cumpleanos-en-casa/` | Informacional | ideas para cumpleaños en casa | celebración casa | `/pizza-para-eventos-en-casa.html` | Próxima |
| 21 | `/como-organizar-comida-evento-50-personas/` | Informacional/comercial | comida para 50 personas | comida 20/30/40/100 personas | `/pizza-party-precios/` | Próxima |
| 22 | `/cuantas-pizzas-por-persona/` | Informacional/herramienta | cuántas pizzas por persona | cálculo pizzas fiesta, pizzas 20/30/50 personas | `/pizza-party-precios/` | Próxima |
| 23 | `/pizza-party-que-es/` | Informacional/comercial | qué es un pizza party | cómo funciona pizza party | `/pizza-party-santiago/` | Próxima |
| 24 | `/pizza-party-vs-asado/` | Informacional comparativa | pizza party o asado | logística, servicio, limpieza | `/pizza-party-que-es/` | Próxima |
| 25 | `/catering-a-domicilio/` | Comercial logística | catering a domicilio | catering domicilio Santiago, catering eventos domicilio | `/pizzeria-movil-eventos/` | Implementada |
| 26 | `/pizza-para-celebraciones/` | Comercial ocasión | pizza para celebraciones | comida para celebraciones, pizza en vivo | `/pizzas-para-eventos/` | Implementada |
| 27 | `/pizza-para-fiestas/` | Comercial ocasión | pizza para fiestas | pizzería para fiestas, comida fiesta | `/pizza-party-santiago/` | Implementada |
| 28 | `/pizza-para-aniversarios/` | Comercial ocasión | pizza para aniversarios | pizza aniversario, celebración aniversario | `/pizza-para-celebraciones/` | Implementada |
| 29 | `/pizza-para-bautizos/` | Comercial ocasión | pizza para bautizos | comida bautizo, celebración familiar | `/pizza-para-celebraciones/` | Implementada |
| 30 | `/pizza-para-baby-shower/` | Comercial ocasión | pizza para baby shower | comida baby shower, celebración familiar | `/pizza-para-celebraciones/` | Implementada |
| 31 | `/pizza-para-despedidas/` | Comercial ocasión | pizza para despedidas | comida despedida, celebración amigos | `/pizza-para-fiestas/` | Implementada |
| 32 | `/pizza-para-fiestas-familiares/` | Comercial ocasión | pizza para fiestas familiares | comida familiar, pizza familiar | `/pizza-para-celebraciones/` | Implementada |
| 33 | `/pizza-para-graduaciones/` | Comercial evento | pizza para graduaciones | pizza titulación, comida graduación | `pizza-para-graduaciones.html` | Implementada y consolidada |
| 34 | `/catering-para-graduaciones/` | Comercial catering | catering para graduaciones | catering titulación, comida graduación | `/pizza-para-graduaciones/` | Implementada |

## Reglas de consolidación

- Las páginas de producto y de catering se mantienen separadas solo cuando la intención cambia: contratar pizza específica versus resolver el catering del evento.
- No se crearán páginas por comuna ni páginas por cantidad de invitados; el cotizador y las guías cubrirán esas variaciones.
- Las URLs nuevas usarán directorios con `index.html` para que la URL pública termine en `/` en hosting estático.
- Las páginas antiguas `.html` que se solapen deberán redirigir o enlazar a la URL nueva en una etapa posterior; no se eliminarán automáticamente.
