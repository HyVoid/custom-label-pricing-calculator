[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Calculadora de Precios de Etiquetas Impresas Personalizadas y Plantilla Excel de Estimación Paramétrica
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/328f1d5d-4596-4724-a13a-7e4818e30d4f" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE)
![Platform](https://img.shields.io/badge/Platform-Browser%20%7C%20Excel-217346)
![Category](https://img.shields.io/badge/Tool-Print%20Estimating%20%26%20CPQ-2251FF)

**Una calculadora interactiva de precios de etiquetas impresas personalizadas y una plantilla Excel de estimación de costes paramétrica. Diseñada para convertidores de etiquetas, estimadores de imprenta comercial y compradores de envases para automatizar la generación de cotizaciones B2B, modelar los escalones de descuento por cantidad, calcular los costes de sustrato por pulgada cuadrada y comparar precios con proveedores de impresión competidores — disponible como calculadora web gratuita basada en navegador (sin registro) y como libro de Microsoft Excel descargable.**

> **Acceso a las herramientas de precios y cotización de etiquetas personalizadas**
>
> - 🌐 **[Abrir la calculadora de precios de etiquetas personalizadas gratuita basada en navegador](https://hyvoid.github.io/custom-label-pricing-calculator/)** — Ejecuta simulaciones instantáneas de cotizaciones de etiquetas, prueba la sensibilidad del coste a las dimensiones y previsualiza los precios unitarios por tramo de cantidad directamente en tu navegador, sin instalar software ni crear una cuenta.
> - 📥 **[Descargar el libro Excel paramétrico de estimación de etiquetas (.xlsx)](https://theseusworkshop.com/l/whpeug?utm_source=github&utm_medium=GitHub%20README)** — Obtén la plantilla de hoja de cálculo completa para la estimación de costes de impresión sin conexión, la gestión centralizada de parámetros CPQ, la calibración de precios de la competencia y un análisis repetible de márgenes comerciales.



---

## Métricas Esenciales de Cotización de Etiquetas y Desafíos de Estimación de Impresión Resueltos

En lugar de gestionar hojas de cálculo dispersas, este motor de precios paramétrico estructura tu flujo de trabajo de coste a cotización en variables auditables. Así es como el modelo asigna los **puntos de dolor habituales del precio de etiquetas personalizadas** a **métricas de estimación de impresión** automatizadas:

| Punto de Dolor Comercial en Cotizaciones | Solución Paramétrica y Mecanismo de Precios | Métricas Clave de Coste y Margen Monitoreadas |
| :--- | :--- | :--- |
| **Sensibilidad del Precio a las Dimensiones y Desperdicio de Sustrato** | Calcula el área exacta de la etiqueta en pulgadas cuadradas a partir de los valores personalizados de ancho y alto mediante un coeficiente de elasticidad de área configurable. | Área de la etiqueta ($\text{in}^2$), coste del sustrato por pulgada cuadrada, factor de escalado dimensional del precio |
| **Cotizaciones No Rentables de Tiradas Cortas y Pedidos Mínimos** | Separa los cargos fijos de preimpresión/planchas y los cargos de pedido mínimo de los costes variables de tirada e impresión y materiales. | Cargo base de preparación, cargo de pedido mínimo (MOC), ratio coste de preparación/tirada |
| **Escalones de Cantidad y Descuentos por Volumen Irregulares** | Modela la caída del precio unitario a través de 6 tramos de volumen personalizables (desde tiradas cortas hasta más de 10.000 etiquetas) con comprobaciones automáticas de monotonía. | Cotización total del pedido, precio unitario por etiqueta ($/unit), porcentaje de descuento por tramo (%) |
| **Igualación a Ciegas de Precios de la Competencia** | Compara las cotizaciones internas calculadas con las tarifas observadas del mercado (p. ej., Wizard Labels, Consolidated Label) mediante reglas de varianza ponderada. | Brecha de precio del competidor ($ / %), factor de posicionamiento objetivo, tolerancia de varianza de referencia |
| **Lógica Desconectada entre Coste y Precio de Venta** | Vincula los supuestos de coste bruto de fabricación (MSI, ritmo de máquina por cada 1.000 impresiones) directamente con el recargo comercial y el posicionamiento objetivo. | Coste de producción por cada 1.000 impresiones, colchón de margen bruto, precio mínimo comercial |
| **Inversiones de Precio Total en los Límites de Tramo** | Audita las transiciones de límite (p. ej., 100 frente a 101 etiquetas) para evitar que descuentos de volumen agresivos generen ingresos totales menores en pedidos mayores. | Indicador de continuidad de precio en límites de tramo, delta de ingreso marginal en los puntos de quiebre |

---

## Tutorial Paso a Paso: Cómo Generar Cotizaciones de Etiquetas Personalizadas y Calibrar Precios

El flujo de estimación sigue una lógica simplificada de Configure-Price-Quote (CPQ): **calibra tus parámetros de coste de fabricación una vez, introduce las especificaciones de la etiqueta del cliente y genera una cotización comercial instantánea y validada.**

### Paso 1: Configurar los Parámetros de Coste de Producción y los Tramos de Descuento
Abre la pestaña dedicada `Parameter Configuration` para establecer la economía base de tu imprenta y las reglas comerciales:

- **Suelo Fijo del Pedido:** cargo de pedido mínimo (MOC) y cargo base de preimpresión/preparación.
- **Tarifas Variables de Material y Tirada:** coste del material de sustrato por pulgada cuadrada y coste de tirada de producción por cada 1.000 impresiones.
- **Lógica de Escalado y Volumen:** coeficiente de elasticidad de área y seis tasas de descuento personalizables por tramo de cantidad.
- **Posicionamiento de Mercado:** factor de posicionamiento competitivo objetivo, pesos de referencia de competidores, tolerancia de varianza y símbolo de moneda.

*Nota: Los valores predeterminados son marcadores ilustrativos. Sustitúyelos por las tarifas horarias verificadas de tus prensas, los costes MSI del sustrato y los objetivos de margen aprobados antes de cotizar pedidos reales.*

### Paso 2: Introducir las Dimensiones de la Etiqueta Personalizada y la Cantidad del Pedido
Ve a la vista `Quotation Calculator` e introduce las especificaciones de la RFQ (solicitud de cotización) del cliente:

| Entrada de Especificación | Rango de Parámetro Admitido | Función de Estimación |
| :--- | ---: | :--- |
| **Ancho de la Etiqueta** | `0.5 – 24.0 inches` | Determina el aprovechamiento del ancho de bobina y el cálculo del área en pulgadas cuadradas |
| **Alto de la Etiqueta** | `0.5 – 12.0 inches` | Determina la longitud de repetición y el consumo total de sustrato |
| **Cantidad del Pedido** | `1 – 1,000,000 labels` | Activa el tramo de descuento por volumen y amortiza el cargo base de preparación |

El motor de precios calcula automáticamente el área total de la etiqueta, asigna el tramo de volumen activo y calcula tanto la **cotización total del pedido** como el **precio unitario por etiqueta**.

### Paso 3: Analizar la Economía Unitaria y los Referencias de Precio de la Competencia
Revisa el panel de cotización generado para evaluar la viabilidad comercial antes de enviar la propuesta:

- **Resultados Principales de la Cotización:** precio de venta final del pedido, precio unitario por etiqueta y tramo de descuento activo.
- **Inteligencia Competitiva:** comparación directa de la varianza de precios frente a los referencias del sector configurados (como Wizard Labels y Consolidated Label).
- **Matriz de Precios Multi-Cantidad:** comparación instantánea de precios unitarios indicativos entre los escalones de volumen estándar para ayudar a los comerciales a vender a los clientes cantidades superiores.

### Paso 4: Auditar las Reglas de Precios y Exportar a la Plantilla Excel Reutilizable
Cuando los costes de materia prima fluctúen o el posicionamiento de mercado cambie, actualiza tus supuestos centrales y examina la `Model Validation Sheet` para verificar:
1. **Monotonía Cantidad-Precio:** confirma que aumentar la cantidad del pedido nunca dé lugar a un cargo total menor.
2. **Sensibilidad Dimensional:** verifica que el escalado del precio por pulgada cuadrada se alinee con la realidad del troquelado y el rendimiento del material.
3. **Alertas de Varianza de Competidores:** identifica las cotizaciones que se desvían más allá de tu banda de tolerancia aceptable.

> 🚀 **¿Listo para operativizar tu flujo de cotización de etiquetas?** 
> Después de probar escenarios rápidos en la **[Calculadora de Precios de Etiquetas gratuita basada en navegador](https://hyvoid.github.io/custom-label-pricing-calculator/)**, descarga el **[Libro Excel Paramétrico Completo de Precios](https://theseusworkshop.com/l/whpeug?utm_source=github&utm_medium=GitHub%20README)** para guardar tus tarifas de prensa personalizadas, almacenar tablas de precios de competidores propietarias y ejecutar cotizaciones sin conexión repetibles para tu equipo de estimación.

---

## Por Qué Construí Este Modelo Paramétrico de Estimación de Etiquetas

En la impresión comercial y la conversión de etiquetas, la cotización precisa es mucho más compleja que multiplicar `width × height × quantity`.

Un pedido de etiquetas digitales o flexo de tirada corta lleva cargos de preimpresión y preparación que dominan el coste unitario. Una etiqueta personalizada más grande consume más sustrato adhesivo, pero su coste efectivo por pulgada cuadrada rara vez escala linealmente debido a la disposición en bobina, el desperdicio de la matriz de troquel y la eficiencia de la tirada en prensa. Además, aunque los descuentos por volumen reducen el coste unitario en tiradas largas, las tablas de tramos sin calibrar suelen provocar anomalías de precio no deseadas.

### La Trampa del Límite de Tramo: "100 frente a 101 Etiquetas"
Considera dos RFQ de cliente casi idénticas: **100 etiquetas personalizadas** frente a **101 etiquetas personalizadas**.

En una hoja de cálculo rígida y sin validar, cruzar el umbral de 100 unidades puede activar un tramo de descuento por volumen más agresivo para todo el pedido. Sin salvaguardas de continuidad, el pedido de 101 etiquetas puede acabar con un **precio total de factura menor** que el pedido de 100 etiquetas. Las fórmulas de la hoja se ejecutan sin errores de sintaxis, y sin embargo la cotización comercial resultante destruye margen y confunde a los compradores.

La misma fragilidad afecta a la **igualación de precios competitiva**. Intentar precio "un 10% por debajo de los competidores de etiquetas en línea" solo protege la rentabilidad si las especificaciones de referencia coinciden con tus supuestos de sustrato, el cargo de pedido mínimo se mantiene intacto y la economía de cantidades se sostiene entre tramos.

Diseñé esta herramienta como **razonamiento de precios productizado**: un marco transparente y auditable de Configure-Price-Quote (CPQ) que une los impulsores de coste de la ingeniería de impresión, los descuentos por volumen, la comparación con competidores y las reglas de validación matemática. No reemplaza el juicio comercial de un estimador de imprenta experimentado; en cambio, hace explícitos los supuestos de coste, repetibles los cálculos y visibles los casos límite de precios antes de que una cotización llegue a un cliente.

---

## Estimación Manual de Impresión frente a Motor Paramétrico de Precios de Etiquetas

| Dimensión de Estimación y Cotización | Hojas de Cálculo Manuales Tradicionales y Cotizaciones Ad-Hoc | Motor Paramétrico de Precios de Etiquetas Personalizadas (Esta Herramienta) |
| :--- | :--- | :--- |
| **Cálculo Dimensional del Área y del Sustrato** | Los estimadores ajustan manualmente las tarifas por pulgada cuadrada en cada RFQ, generando precios inconsistentes en etiquetas personalizadas grandes o de formas atípicas. | Aplica una fórmula de coste unificada por pulgada cuadrada con un **coeficiente de elasticidad de área** configurable en todas las dimensiones de etiqueta. |
| **Escalones de Cantidad y Descuentos por Tramos** | Los porcentajes de descuento por volumen se ajustan de forma aislada, provocando con frecuencia **inversiones abruptas del precio total** en los umbrales de tramo (p. ej., 500 frente a 501 unidades). | Impone una **validación automática de continuidad en los límites de tramo** para garantizar que los pedidos mayores de etiquetas nunca generen ingresos totales menores. |
| **Amortización del Cargo de Preparación y Precio Unitario** | Los comerciales comparan precios totales planos sin aislar los cargos fijos de preimpresión/planchas de los costes variables por millar de impresiones. | Separa dinámicamente **los cargos base de preparación**, los suelos de pedido mínimo y las tarifas de tirada para mostrar con precisión la economía total y unitaria por etiqueta. |
| **Referencias de Precio de Competidores** | Las cotizaciones de impresores en línea se igualan a ciegas como objetivos aislados, arriesgando márgenes negativos en tamaños personalizados. | Combina parámetros de coste ascendentes con un **factor de posicionamiento competitivo configurable** y reglas de tolerancia de varianza. |
| **Calibración de Inteligencia de Mercado** | Las observaciones históricas de precios de competidores quedan en PDF estáticos o correos dispersos, haciendo imposible una calibración sistemática de precios. | Estructura los conjuntos de datos de referencia (p. ej., Wizard Labels, Consolidated Label) por **ancho, alto, cantidad y tarifa observada** para el ajuste del modelo. |
| **Gobernanza y Auditoría de la Política de Precios** | Actualizar una tarifa MSI del sustrato o un cargo de preparación exige editar fórmulas frágiles en varias pestañas, introduciendo errores de cálculo silenciosos. | Centraliza todos los impulsores de coste y reglas de descuento en una **única hoja de configuración de parámetros** respaldada por comprobaciones de diagnóstico automáticas. |

---

## Para Quién Está Diseñada Esta Herramienta: Roles, Casos de Uso y Flujos de Trabajo

Esta calculadora de precios paramétrica y plantilla Excel están diseñadas para profesionales de los ecosistemas de envases, impresión comercial y comercio electrónico B2B:

- **Fabricantes de Etiquetas Personalizadas y Convertidores Flexo/Digitales:** Estandariza tu flujo de ventas internas y estimación. Usa el **estimador de costes de impresión de etiquetas** para generar cotizaciones rápidas y coherentes entre troqueles personalizados y longitudes de tirada sin esperar la revisión de ingeniería sénior en consultas rutinarias.
- **Estimadores de Imprenta y Equipos de Ventas Internas:** Elimina la reconstrucción manual de fórmulas durante llamadas en vivo con clientes. Usa la **calculadora interactiva de cotizaciones B2B** para comparar al instante precios unitarios entre 6 escalones de cantidad y mostrar a los compradores el ahorro exacto por unidad de escalar su volumen de pedido.
- **Gerentes de Precios, Directores Comerciales y Propietarios de Imprentas:** Centraliza la gobernanza de precios. Ajusta los cargos de preimpresión, los costes de material por pulgada cuadrada, las tablas de descuentos por volumen y los factores de posicionamiento competitivo desde un **único libro de gestión de parámetros CPQ** auditando el impacto en el margen antes de su despliegue.
- **Especialistas en Compras de Envases y Compradores de Marca:** Haz ingeniería inversa de las cotizaciones de proveedores con una transparente **herramienta de modelado should-cost**. Separa los cargos fijos de preparación de los costes variables de sustrato e impresión para negociar escalones de cantidad más justos con proveedores de etiquetas comerciales.
- **Ingenieros de Hojas de Cálculo, Analistas CPQ y Desarrolladores Web:** Examina una **especificación de precios paramétrica** limpia y documentada. Usa las reglas de validación, fórmulas de elasticidad y arquitectura de referencias del libro de Excel como plano para construir motores de cotización de impresión bajo demanda (Web-to-Print) personalizados.

---

## Casos de Uso del Sector y Escenarios de Precios de Cola Larga

Ya sea que gestiones una prensa digital de etiquetas boutique o diseñes un escaparate Web-to-Print en línea, este modelo se adapta a escenarios comerciales de cotización específicos:

### 1. Modelado de Cotizaciones: Digital de Tirada Corta frente a Flexo de Alto Volumen
Calibra tu **cargo base de preparación** y tu **tarifa de tirada por cada 1.000 impresiones** para reflejar el cruce económico entre la impresión digital de etiquetas de tirada corta (preparación baja, mayor coste unitario de tirada) y la impresión flexográfica de tirada larga (preparación de planchas/preimpresión más alta, fuerte caída del coste unitario a partir de 10.000+ etiquetas).

### 2. Prototipado de Cotizaciones Instantáneas B2B Web-to-Print
Antes de invertir miles de dólares en plugins personalizados de ERP o de cotización para e-commerce, usa la **calculadora basada en navegador y el modelo Excel** como entorno de pruebas. Comprueba cómo se comportan tus coeficientes de elasticidad de área y tus tramos de descuento en dimensiones extremas (`0.5" × 0.5"` microetiquetas hasta `24" × 12"` etiquetas de tambor).

### 3. Calibración de Precios Competitiva frente a Impresores de Etiquetas en Línea
Deja de adivinar cómo fijan precios sus catálogos los competidores en línea. Registra las cotizaciones de mercado observadas por dimensión y cantidad, define tu **factor de posicionamiento competitivo objetivo** (p. ej., igualar dentro de $\pm 5\%$ o quedarte un $8\%$ por debajo) y deja que la hoja de validación resalte exactamente qué tamaños de etiqueta y longitudes de tirada se alinean con tu estructura de costes.

---

### Alcance y Aviso Operativo
*Esta herramienta es un modelo paramétrico de apoyo a la decisión y una calculadora de cotizaciones comerciales — no un ERP de planta, ni un sistema de planificación de producción, ni un scraper en vivo de sitios de competidores. No obtiene automáticamente precios MSI de sustrato en tiempo real, velocidades de prensa, porcentajes de desperdicio de troquel ni la rentabilidad neta de la empresa. Los usuarios deben poblar la pestaña de configuración con sus propios estudios de costes de fabricación verificados y observaciones de mercado.*

## Acerca de

Construyo herramientas analíticas ligeras para decisiones empresariales recurrentes que se vuelven difíciles cuando demasiados supuestos, números y excepciones están dispersos en lugares distintos.

La pregunta central es práctica: **¿qué información necesita estar en un solo lugar para tomar la siguiente decisión con más consistencia?**

El Motor Paramétrico de Precios Competitivos aplica ese enfoque al precio de etiquetas personalizadas. Reúne especificaciones del pedido, supuestos de coste de producción, descuentos por cantidad, referencias competitivas y validación de precios en un único marco reutilizable. El objetivo es hacer que una decisión de precios compleja sea más fácil de inspeccionar y mantener sin requerir una implementación de software a gran escala.

## Detalles Técnicos

<details>
<summary>Para revisores técnicos, usuarios avanzados de Excel y colaboradores</summary>

### Arquitectura del Libro

El libro separa el flujo de cotización orientado al usuario de los parámetros de precios, la lógica de cálculo, los datos de competidores y la validación del modelo. Esta separación facilita revisar y mantener los supuestos de precios sin obligar a los usuarios habituales a editar fórmulas.

| Hoja de Cálculo | Responsabilidad | Entradas Principales | Salidas Principales |
|---|---|---|---|
| `01_报价计算器` — Calculadora de Cotizaciones | Flujo de cotización de front-end | Ancho, alto y cantidad de pedido de la etiqueta | Precio total, precio unitario, tramo de cantidad aplicable, comparación con competidores |
| `02_参数配置表` — Configuración de Parámetros | Fuente única de verdad para los supuestos de precios | Tasas de coste, coste de preparación, elasticidad de área, límites de tramo, descuentos de tramo, factor objetivo de competidor | Parámetros compartidos consumidos por la lógica de precios y cotización |
| `03_定价引擎` — Motor de Precios | Capa de cálculo central | Especificaciones del pedido y parámetros configurados | Coste de ingeniería, precio ajustado por cantidad, precio calibrado, precio final |
| `04_竞品对标库` — Referencia de Competidores | Gestión de datos de referencia | Precios de referencia de Wizard Labels y Consolidated Label | Referencias de precios comparativos e insumos de calibración del modelo |
| `05_模型压力测试` — Validación del Modelo | Comprobaciones de límites y consistencia | Dimensiones de prueba, cantidades, límites de tramo y supuestos configurados | Indicadores de validación de monotonía de precios, comportamiento del precio unitario y ajuste a referencias |

#### Cálculo y flujo de datos

```text
Parameter Configuration
          │
          ├───────────────┐
          ▼               ▼
Quotation Calculator   Pricing Engine ◄── Competitor Benchmark
          │               ▲
          └───────────────┘
                          │
                          ▼
                    Model Validation
                          │
                          ▼
                 Review before quoting
```

El flujo previsto es unidireccional: los supuestos configurados alimentan el modelo de cálculo, las especificaciones del pedido activan los cálculos, los registros de referencia aportan puntos de calibración y las comprobaciones de validación ayudan a identificar posibles problemas del modelo.

La hoja de configuración actúa como **fuente única de verdad (SSOT)**. La lógica de precios debe referenciar parámetros compartidos en lugar de duplicar tasas de coste o supuestos de descuento en múltiples fórmulas. Esto reduce el riesgo de precios inconsistentes tras un cambio de estrategia.

La hoja de referencias es un conjunto de datos de mantenimiento manual, no una conexión en vivo con sitios web de competidores. Su utilidad depende de la precisión, actualidad y comparabilidad de las cotizaciones registradas.

#### Gestión de parámetros

La capa de configuración centraliza los supuestos que influyen en el resultado, entre ellos:

- Símbolo de moneda y ajustes de presentación.
- Supuestos de preparación y cargo mínimo.
- Tarifa de coste por área y elasticidad de área.
- Supuestos de ritmo de producción.
- Seis tramos de cantidad, sus límites y tasas de descuento asociadas.
- El factor objetivo de posicionamiento competitivo.
- Comprobaciones internas de la configuración de tramos y del comportamiento de cantidades.

Por ejemplo, cambiar el factor de posicionamiento objetivo puede desplazar el nivel de precio modelado respecto a la línea base de coste de ingeniería. No debe interpretarse como prueba de que el negocio pueda vender de forma sostenible a ese precio: los costes reales de producción, los requisitos de margen y las restricciones comerciales siguen requiriendo revisión.

### Tres Trampas que Atrapan Incluso a Equipos de Precios con Experiencia

#### 1. Tratar el área de la etiqueta como el modelo de coste completo

Dos etiquetas con la misma área no tienen necesariamente las mismas implicaciones comerciales a diferentes cantidades de pedido. Una cotización puede incluir costes de preparación, costes de material sensibles al área y cargos de tirada de producción. Aplicar una fórmula simple de área por cantidad puede ocultar cómo se comportan los costes fijos y variables.

**Respuesta de diseño:** Separa el coste de preparación, el coste ligado al área y el coste ligado a la tirada antes de aplicar los ajustes por tramo de cantidad. Los parámetros permanecen editables para que el modelo pueda calibrarse según la economía real de producción del negocio.

#### 2. Confundir un precio unitario menor con un descuento por cantidad válido

Un pedido mayor normalmente reparte los costes fijos entre más unidades y puede justificar un precio unitario menor. Pero una tabla de descuentos discreta puede introducir comportamientos no deseados en un límite de tramo. Por ejemplo, el total calculado para 101 etiquetas podría quedar por debajo del total de 100 etiquetas si el nuevo descuento de tramo es demasiado agresivo.

**Respuesta de diseño:** Comprueba el comportamiento del precio total y del precio unitario alrededor de los límites de tramo. El modelo incluye un mecanismo de protección de límites destinado a evitar inversiones del precio total al pasar a un tramo de cantidad superior. Las comprobaciones de validación del libro deben revisarse tras cambiar los límites o descuentos de tramo.

#### 3. Tratar los precios de competidores como sustituto del precio basado en costes

La cotización de un competidor es evidencia de mercado útil, pero no revela su coste de producción, margen, alcance de servicio, especificación de material ni condiciones comerciales. Igualar un precio de referencia sin comprender estas diferencias puede producir una cotización atractiva en apariencia pero económicamente insostenible.

**Respuesta de diseño:** Establece primero una curva interna de precio de ingeniería y usa después un factor de posicionamiento competitivo configurable para ajustar el resultado modelado. Compara solo cotizaciones con especificaciones, cantidades y condiciones suficientemente comparables. Los datos de referencia deben actualizarse y verificarse antes de usarse en decisiones comerciales.

### Escenario de Ejemplo

Considera un cliente que solicita etiquetas impresas personalizadas con las siguientes especificaciones:

| Entrada | Valor de Ejemplo |
|---|---:|
| Ancho de la etiqueta | 4 pulgadas |
| Alto de la etiqueta | 6 pulgadas |
| Cantidad del pedido | 2.500 etiquetas |
| Factor objetivo de posicionamiento competitivo | 0.90 |
| Tramos de cantidad | Seis tramos configurados |

Las dimensiones y la cantidad determinan la carga de trabajo física y el tramo de cantidad aplicable. El motor de precios combina entonces el coste de preparación configurado, el coste ligado al área, el supuesto de ritmo de tirada, el descuento de tramo y el factor de posicionamiento competitivo.

El flujo de cotización está diseñado para presentar el precio total y el precio unitario resultantes junto con el tramo aplicable y la referencia de competidor disponible. El usuario comercial puede evaluar entonces si el precio propuesto es coherente con el posicionamiento previsto y si una cantidad mayor ofrece una ventaja significativa en precio unitario.

Un seguimiento útil es comparar la cantidad solicitada con el siguiente tramo configurado. Esto ayuda al vendedor a discutir la disyuntiva entre un compromiso de pedido mayor y un precio unitario menor, en lugar de ofrecer un descuento arbitrario.

El ejemplo describe el flujo de cálculo, no una cotización de mercado verificada. Los precios reales dependen de los supuestos configurados del libro y de la calidad de los registros de referencia. Los valores ilustrativos de este README no deben interpretarse como precios actuales de Wizard Labels ni de Consolidated Label.

### Notas de Implementación

#### Arquitectura de fórmulas

El modelo se organiza en etapas de cálculo diferenciadas:

1. **Línea base de ingeniería:** Calcular el precio modelado del pedido a partir del coste de preparación, el coste sensible al área y el coste ligado a la tirada.
2. **Ajuste por tramo de cantidad:** Aplicar el descuento asociado al rango de cantidad configurado.
3. **Calibración competitiva:** Aplicar el factor de posicionamiento objetivo al precio calculado.
4. **Protección de límites:** Comparar el precio candidato con la referencia del límite del tramo anterior aplicable y con la restricción de precio mínimo configurada.
5. **Validación:** Revisar el comportamiento de cantidades y las comprobaciones del modelo antes de confiar en el resultado para cotizaciones.

Esta arquitectura por etapas facilita rastrear por qué cambia un precio cuando se actualiza un supuesto. También ofrece una ruta de migración más clara si la lógica de cálculo se implementa más adelante en una aplicación web u otro entorno de programación.

#### Compatibilidad con Excel

El libro está diseñado para Microsoft 365 o Excel 2021 y posteriores, incluidos los entornos de Excel basados en navegador admitidos. Se apoya en funciones modernas de fórmulas como `LET`, `LAMBDA`, `MAP`, `XLOOKUP`, `FILTER`, `VSTACK`, `TAKE` y `DROP`.

Las versiones anteriores de Excel que no admitan estas funciones pueden devolver errores de fórmula o no calcular el libro correctamente. La implementación está diseñada en torno a fórmulas nativas de Excel y no requiere macros VBA.

#### Límites operativos

- **Mantenimiento de referencias:** Los precios de competidores deben ser introducidos y mantenidos por el operador; el modelo no establece una fuente en vivo de precios de competidores.
- **Propiedad de parámetros:** Asigna responsabilidad para aprobar tasas de coste, umbrales de tramo, descuentos y cambios de posicionamiento competitivo.
- **Uso concurrente:** La calculadora de front-end usa celdas de entrada compartidas. Varios usuarios editando la misma calculadora simultáneamente pueden sobrescribirse las entradas entre sí; usa un flujo de cotización controlado para archivos compartidos.
- **Escala del modelo:** El diseño de origen recomienda mantener el conjunto de datos del motor de precios dentro de aproximadamente 100.000 filas y archivar o procesar conjuntos mayores por lotes. La capacidad de respuesta real depende del diseño del libro, del hardware y de la complejidad de las fórmulas.
- **Validación de producción:** Antes del uso operativo, prueba el modelo con pedidos representativos, supuestos de coste confirmados, registros de referencia comparables actuales y los requisitos propios de margen y precio mínimo del negocio.

Las fórmulas del libro pueden servir como especificación para un futuro servicio de precios en Python, Node.js o PHP, pero cualquier migración debe verificar de forma independiente la equivalencia de fórmulas, la validación de entradas, el comportamiento de límites y las salidas antes del despliegue.

</details>

### Referencia de Fórmulas

Las fórmulas siguientes describen las etapas de cálculo del modelo. Las referencias exactas de celdas y las implementaciones de fórmulas deben verificarse contra la versión del libro que se distribuya.

<details>
<summary>1. Coste Basado en Área y Sensibilidad Dimensional</summary>

El área de la etiqueta se calcula a partir del ancho y el alto:

\[
A = W \times H
\]

Donde:

- \(A\) = área de la etiqueta en pulgadas cuadradas.
- \(W\) = ancho de la etiqueta en pulgadas.
- \(H\) = alto de la etiqueta en pulgadas.

El modelo usa una relación de potencia basada en área para representar la sensibilidad dimensional. En forma general:

\[
C_{\text{area}} = r_A \times A^\alpha
\]

Donde:

- \(r_A\) = coeficiente de coste por área configurado.
- \(\alpha\) = parámetro de elasticidad de área.
- \(C_{\text{area}}\) = coste modelado ligado al área.

Cuando \(\alpha=1\), el componente de área escala proporcionalmente con el área. Un valor distinto cambia la sensibilidad modelada al tamaño. El parámetro debe calibrarse con el comportamiento real de costes del negocio, no elegirse solo para igualar el precio de un competidor.

</details>

<details>
<summary>2. Coste de Producción y Coste de Preparación</summary>

La línea base de ingeniería combina los componentes de coste fijos y variables del modelo:

\[
C_{\text{base}} =
C_{\text{setup}} +
C_{\text{area}} +
C_{\text{run}}
\]

Donde:

- \(C_{\text{setup}}\) representa el coste de preparación configurado.
- \(C_{\text{area}}\) representa el componente sensible a las dimensiones.
- \(C_{\text{run}}\) representa el coste de tirada de producción bajo los supuestos configurados del libro.

La definición exacta del componente ligado a la tirada depende de las convenciones de tarifa y cantidad del libro. Antes de usar el modelo para precios comerciales, confirma si cada entrada representa un cargo por unidad, por área, por tirada o fijo. Mezclar estas bases puede distorsionar materialmente el resultado.

</details>

<details>
<summary>3. Precios por Tramo de Cantidad</summary>

El modelo usa seis tramos de cantidad configurables. Cada tramo tiene un límite de cantidad y un supuesto de descuento asociado.

Una representación simplificada del ajuste de tramo es:

\[
P_{\text{tier}} = P_{\text{base}} \times (1-d_q)
\]

Donde:

- \(P_{\text{base}}\) es el precio aplicable previo al tramo.
- \(d_q\) es la tasa de descuento configurada para el tramo de cantidad seleccionado.
- \(P_{\text{tier}}\) es el precio tras el ajuste de tramo.

Esta expresión ilustra el mecanismo de descuento; no sustituye a la implementación completa de fórmulas del libro. La base de precio exacta a la que se aplica el descuento debe permanecer coherente con el libro real.

Los límites de tramos de cantidad y las tasas de descuento deben revisarse en conjunto. Una tabla de descuentos que parece razonable al examinar tasas individuales puede aún crear una discontinuidad no deseada del precio total en un límite.

</details>

<details>
<summary>4. Factor de Posicionamiento Competitivo</summary>

El modelo incluye un factor de posicionamiento competitivo configurable para ajustar el precio modelado respecto a su línea base interna.

Una representación simplificada es:

\[
P_{\text{positioned}} =
P_{\text{tier}} \times k_c
\]

Donde:

- \(P_{\text{tier}}\) es el precio ajustado por tramo.
- \(k_c\) es el factor de posicionamiento competitivo configurado.
- \(P_{\text{positioned}}\) es el precio tras la calibración competitiva.

Por ejemplo, un factor de \(0.90\) representa una reducción del 10% respecto al precio al que se aplica el factor. Esto no garantiza una ventaja del 10% sobre un competidor: esa conclusión depende de datos de referencia comparables y de la base de precio real del modelo.

La calibración competitiva no debe anular los requisitos de precio mínimo, margen o recuperación de costes.

</details>

<details>
<summary>5. Protección del Límite de Cantidad</summary>

El modelo incluye un mecanismo de protección de límites destinado a evitar que una cantidad de pedido mayor produzca un precio total inesperadamente menor en una transición de tramo.

A grandes rasgos, el modelo evalúa el precio candidato frente a las restricciones de límite pertinentes antes de presentar el resultado. El comportamiento deseado es que un aumento de cantidad no cree una inversión no deseada en el precio total del pedido.

La fórmula de protección precisa y su interacción con las restricciones de precio mínimo deben verificarse contra las fórmulas reales del libro. Una comprobación general de monotonía puede expresarse como:

\[
P_{\text{total}}(q+1) \geq P_{\text{total}}(q)
\]

Donde \(q\) es la cantidad del pedido. Este es un objetivo de validación, no una garantía de que toda configuración de parámetros conceible lo satisfaga automáticamente.

</details>

<details>
<summary>6. Precio Unitario y Comparación con Competidores</summary>

El precio unitario se calcula como:

\[
P_{\text{unit}} = \frac{P_{\text{total}}}{q}
\]

Donde \(P_{\text{total}}\) es el total del pedido y \(q\) es la cantidad del pedido.

Un precio unitario decreciente a medida que aumenta la cantidad suele ser coherente con la absorción del coste de preparación y los descuentos por cantidad, pero debe validarse en lugar de asumirse. Las comparaciones con competidores también requieren especificaciones, cantidades, materiales, requisitos de impresión y condiciones comerciales equivalentes.

Los registros de referencia de Wizard Labels y Consolidated Label son entradas de referencia mantenidas en el libro. No deben interpretarse como precios actuales en vivo salvo verificación independiente.

</details>

### Reglas de Validación

El libro incluye una hoja de pruebas de estrés del modelo destinada a comprobar escenarios representativos y el comportamiento de precios. El diseño de origen describe 36 casos de prueba. Los resultados reales deben confirmarse en el libro publicado en lugar de inferirse de la mera existencia de la hoja de pruebas.

| Área de Validación | Qué Comprobar | Comportamiento Esperado | Acción si la Validación Falla |
|---|---|---|---|
| Límites dimensionales | Ancho y alto dentro de los rangos de entrada admitidos | Los valores aceptados permanecen dentro de los límites configurados | Corrige la entrada o revisa el rango admitido |
| Límites de cantidad | Cantidad de 1 a 1.000.000 | Las cantidades válidas se asignan a la ruta de cálculo prevista | Corrige la cantidad o revisa la validación de entrada |
| Configuración de tramos | Seis tramos con límites válidos y ordenados | Cada cantidad admitida se asigna al tramo previsto | Resuelve límites ausentes, superpuestos o inconsistentes |
| Tasas de descuento de tramos | Valores de descuento numéricos y aprobados comercialmente | Las tasas siguen la política de precios prevista | Revisa los supuestos y vuelve a ejecutar las pruebas de estrés |
| Monotonía del precio total | Compara cantidades adyacentes, especialmente en límites de tramo | Sin inversión no deseada del precio total | Inspecciona las tasas de descuento y la lógica de protección de límites |
| Comportamiento del precio unitario | Compara precios unitarios entre niveles de cantidad | Los cambios son coherentes con la estrategia de cantidades prevista | Revisa descuentos de tramo, tratamiento del coste de preparación y referencias de fórmulas |
| Integridad de costes | Comprueba los supuestos de coste de preparación, área y tirada | Los componentes de coste usan unidades y bases consistentes | Corrige las definiciones de parámetros y los datos de origen |
| Comparabilidad de competidores | Revisa dimensiones, cantidades, especificaciones y fechas de cotización | Las comparaciones usan ofertas suficientemente equivalentes | Actualiza o excluye registros de referencia no comparables |
| Restricciones de precio mínimo | Prueba cantidades bajas y factores competitivos agresivos | Los precios permanecen dentro de las restricciones comerciales configuradas | Revisa la lógica de precio mínimo y los supuestos de posicionamiento |
| Integridad de fórmulas | Comprueba las salidas de fórmulas tras cambios de parámetros | Los cálculos siguen siendo válidos y vinculados a la fuente de configuración | Inspecciona errores de fórmula, referencias y compatibilidad con Excel |
| Resultados de pruebas de estrés | Revisa todos los escenarios de prueba configurados | Los resultados cumplen los criterios de aceptación documentados del modelo | Investiga los fallos antes de la publicación operativa |

#### Comprobaciones recomendadas antes de publicar

Antes de distribuir el libro:

1. Ábrelo en una versión admitida de Excel y confirma que todas las funciones modernas de fórmulas calculan correctamente.
2. Prueba las dimensiones y cantidades mínimas y máximas.
3. Prueba cantidades inmediatamente por debajo, en y por encima de cada límite de tramo.
4. Cambia un parámetro de coste representativo y confirma que las salidas dependientes responden como se espera.
5. Verifica los registros de referencia de competidores contra cotizaciones actuales comparables.
6. Revisa los 36 casos de prueba de estrés configurados y registra los resultados reales.
7. Confirma que la guía de entrada, la protección de fórmulas y las etiquetas de salida del libro coinciden con la implementación publicada.

</details>

## Lógica de Negocio y Metodología

El precio de etiquetas personalizadas es un problema de equilibrio entre la economía de producción, el tamaño del pedido y el posicionamiento de mercado. Un precio que refleja solo el área física de la etiqueta puede pasar por alto el coste de preparación y producción. Un precio que se basa solo en la cotización de un competidor puede ignorar diferencias en especificaciones, alcance de servicio y la propia estructura de costes del vendedor.

Este conjunto de herramientas separa esas decisiones en una secuencia repetible. Primero, las dimensiones de la etiqueta y la cantidad del pedido establecen las especificaciones a precio. A continuación, los supuestos de producción configurables crean una referencia interna basada en costes. Los tramos de cantidad expresan después la economía prevista de los pedidos mayores. Finalmente, las referencias de competidores aportan contexto de mercado para evaluar si el precio propuesto está bien posicionado.

La separación importa porque estas entradas cambian por razones distintas. Los costes de producción pueden cambiar cuando cambian los supuestos de material u operación. Los descuentos por cantidad reflejan una política comercial. El posicionamiento competitivo responde a la evidencia de mercado. Mantenerlos separados facilita identificar qué decisión provocó un cambio de precio y si ese cambio sigue siendo comercialmente aceptable.

El modelo también trata la consistencia de precios como parte del proceso de decisión. Una tabla de descuentos no debería producir una inversión no deseada del precio total solo porque un pedido cruza un límite de tramo. Las pruebas de límites ayudan a revelar estos problemas antes de que aparezcan en cotizaciones a clientes.

El resultado no es una garantía automática del mejor precio. Es una forma estructurada de hacer visibles los supuestos de precios, comparar escenarios con consistencia e identificar los casos que requieren revisión. La calidad de sus decisiones depende de la calidad de los supuestos de coste, los datos de referencia y la validación realizada por el negocio.

## Otras Herramientas de Esta Serie

Explora otras herramientas ligeras de apoyo a decisiones empresariales de Theseus Workshop en los repositorios GitHub del proyecto. Cada herramienta se centra en una decisión operativa o financiera recurrente concreta.

## Licencia

Este proyecto está licenciado bajo la Apache License 2.0. Consulta el archivo `LICENSE` para el texto completo de la licencia.
