export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  dateLabel: string;
  readingMinutes: number;
  /** Array of section blocks rendered in order. */
  content: BlogBlock[];
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ordenar-contabilidad-pyme-agricola-costa-rica",
    category: "PYMES Agrícolas",
    title: "Cómo ordenar la contabilidad de una PYME agrícola en Costa Rica",
    excerpt:
      "Pasos prácticos para estructurar la información contable de una empresa agrícola y tomar decisiones con datos reales.",
    date: "2026-06-10",
    dateLabel: "10 de junio, 2026",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "Muchas PYMES agrícolas en Costa Rica operan con información dispersa: cuadernos de campo, facturas en cajas, recibos de proveedores en WhatsApp y planillas en Excel sin respaldo. Esa dispersión esconde la rentabilidad real del negocio y dificulta cualquier trámite ante Hacienda, bancos o el INS.",
      },
      { type: "h2", text: "1. Separe las finanzas personales de las del negocio" },
      {
        type: "p",
        text: "El primer paso es abrir una cuenta bancaria exclusiva para la finca o la empresa. Mezclar gastos personales con los del negocio impide calcular el costo real por hectárea, por lote o por cultivo, y genera observaciones en una eventual revisión tributaria.",
      },
      { type: "h2", text: "2. Defina un catálogo de cuentas adaptado al sector" },
      {
        type: "p",
        text: "El catálogo contable de una empresa agrícola debe reflejar la realidad del campo: insumos, mano de obra, fertilización, riego, transporte, empaque y depreciación de maquinaria. Un catálogo genérico oculta dónde se está perdiendo dinero.",
      },
      { type: "h2", text: "3. Registre operaciones por centro de costo" },
      {
        type: "p",
        text: "Asignar cada gasto a un centro de costo (cultivo, lote o proyecto) permite calcular márgenes reales y decidir con datos qué áreas conviene expandir, mantener o reconvertir.",
      },
      {
        type: "ul",
        items: [
          "Costo por hectárea sembrada",
          "Costo de mano de obra por jornada",
          "Costo logístico por entrega",
          "Margen bruto por cliente o cadena de comercialización",
        ],
      },
      { type: "h2", text: "4. Cierre cada mes, no cada año" },
      {
        type: "p",
        text: "Esperar al cierre anual para ver cómo va el negocio es tarde. Un cierre mensual, aunque sea simple, le permite ajustar precios, renegociar con proveedores y planificar el flujo de caja de la próxima cosecha.",
      },
      { type: "h2", text: "5. Documente todo lo que entra y sale" },
      {
        type: "p",
        text: "Toda compra debe respaldarse con factura electrónica autorizada y todo ingreso debe facturarse. Es la única forma de respaldar gastos deducibles, evitar sanciones y poder acceder a financiamiento bancario.",
      },
      {
        type: "quote",
        text: "Una contabilidad ordenada no es un gasto: es la herramienta que le permite saber cuánto gana realmente su finca.",
      },
    ],
  },
  {
    slug: "errores-comunes-declaraciones-iva-renta",
    category: "Impuestos",
    title: "Errores comunes en declaraciones de IVA y renta en Costa Rica",
    excerpt:
      "Identifique los errores más frecuentes en la presentación del D-104 y D-101, y cómo evitar sanciones de Hacienda.",
    date: "2026-06-03",
    dateLabel: "3 de junio, 2026",
    readingMinutes: 7,
    content: [
      {
        type: "p",
        text: "El IVA (D-104) y el Impuesto sobre la Renta (D-101) son las dos declaraciones que más sanciones generan a las PYMES costarricenses. La mayoría de los errores no son por mala fe, sino por desconocimiento o por usar información incompleta.",
      },
      { type: "h2", text: "Errores frecuentes en el IVA (D-104)" },
      {
        type: "ol",
        items: [
          "Acreditar IVA de facturas que no son aceptadas tributariamente (tiquetes simples, facturas a nombre de terceros, gastos personales).",
          "Aplicar la tarifa equivocada: 1%, 2%, 4% o 13% según el bien o servicio.",
          "Olvidar el IVA en autoconsumo o en ventas a partes relacionadas.",
          "No conciliar el IVA declarado con el IVA facturado electrónicamente.",
        ],
      },
      { type: "h2", text: "Errores frecuentes en Renta (D-101)" },
      {
        type: "ol",
        items: [
          "Deducir gastos sin respaldo electrónico válido.",
          "No registrar la depreciación de activos o aplicarla con tasas equivocadas.",
          "Omitir ingresos extraordinarios (venta de activos, intereses, ingresos en el exterior).",
          "No conciliar las ventas declaradas con las facturas electrónicas emitidas.",
        ],
      },
      { type: "h2", text: "Sanciones que se pueden evitar" },
      {
        type: "p",
        text: "Las omisiones generan multas que van desde medio salario base hasta el 150% del impuesto omitido, además de intereses. Una revisión preventiva mensual cuesta una fracción de lo que cuesta una sanción.",
      },
      { type: "h2", text: "Buenas prácticas" },
      {
        type: "ul",
        items: [
          "Concilie cada mes IVA facturado vs. IVA declarado.",
          "Revise los registros del ATV antes de presentar.",
          "Mantenga respaldo digital de toda factura por al menos 5 años.",
          "Solicite una segunda revisión profesional antes del cierre anual.",
        ],
      },
    ],
  },
  {
    slug: "flujo-de-caja-empresas-agroindustriales",
    category: "Agroindustria",
    title: "Importancia del flujo de caja en empresas agroindustriales",
    excerpt:
      "Por qué el flujo de caja es la herramienta financiera más crítica en empresas con ciclos productivos largos.",
    date: "2026-05-27",
    dateLabel: "27 de mayo, 2026",
    readingMinutes: 5,
    content: [
      {
        type: "p",
        text: "En agroindustria, los ingresos no llegan cuando se necesitan: llegan cuando se cosecha, cuando se exporta o cuando el cliente paga a 60 o 90 días. Mientras tanto, los gastos no se detienen.",
      },
      { type: "h2", text: "Por qué un buen flujo de caja salva empresas" },
      {
        type: "p",
        text: "Una empresa puede ser rentable en papel y aun así quebrar por falta de liquidez. El flujo de caja proyectado anticipa estos huecos y permite tomar decisiones con tiempo: refinanciar, postergar inversiones o negociar plazos con proveedores.",
      },
      { type: "h2", text: "Qué debe incluir el flujo de caja" },
      {
        type: "ul",
        items: [
          "Ingresos proyectados por cosecha y por cliente",
          "Costos directos: insumos, mano de obra, transporte",
          "Costos fijos: planilla, alquileres, servicios",
          "Pagos de financiamiento e intereses",
          "Reserva para imprevistos climáticos y sanitarios",
        ],
      },
      { type: "h2", text: "Frecuencia recomendada" },
      {
        type: "p",
        text: "Un flujo de caja semanal con horizonte de 13 semanas es el estándar recomendado en empresas agroindustriales. Permite reaccionar antes de que un problema de liquidez se vuelva crítico.",
      },
    ],
  },
  {
    slug: "calcular-costos-agricolas",
    category: "Costos",
    title: "Cómo calcular mejor los costos agrícolas y conocer su rentabilidad real",
    excerpt:
      "Metodologías prácticas para entender la rentabilidad por cultivo, por lote y por cliente.",
    date: "2026-05-20",
    dateLabel: "20 de mayo, 2026",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "Muchos productores conocen el precio al que venden, pero no el costo real de producir. Sin ese dato, no se puede negociar con cadenas comercializadoras ni decidir si conviene expandir un cultivo.",
      },
      { type: "h2", text: "Costos directos vs. costos indirectos" },
      {
        type: "p",
        text: "Los costos directos son los que se asignan claramente a un cultivo: semilla, fertilizante, jornales, riego. Los indirectos son los que se distribuyen entre varios cultivos: administración, depreciación de maquinaria, electricidad.",
      },
      { type: "h2", text: "Una metodología práctica en 4 pasos" },
      {
        type: "ol",
        items: [
          "Defina la unidad de costeo (hectárea, lote, contenedor, kilo exportado).",
          "Registre cada gasto asociándolo a esa unidad.",
          "Distribuya los costos indirectos con una base razonable (área sembrada, horas máquina).",
          "Calcule el costo unitario y compárelo con el precio de venta.",
        ],
      },
      { type: "h2", text: "Lo que el costeo real revela" },
      {
        type: "ul",
        items: [
          "Cultivos que parecían rentables pero no lo son.",
          "Clientes que pagan tarde y elevan el costo financiero.",
          "Lotes con bajo rendimiento que necesitan reconversión.",
        ],
      },
    ],
  },
  {
    slug: "documentos-conservar-ante-hacienda",
    category: "Cumplimiento",
    title: "Qué documentos debe conservar una empresa ante Hacienda",
    excerpt:
      "Guía práctica de respaldo documental obligatorio para empresas en Costa Rica.",
    date: "2026-05-13",
    dateLabel: "13 de mayo, 2026",
    readingMinutes: 5,
    content: [
      {
        type: "p",
        text: "La Dirección General de Tributación puede requerir información hasta por cuatro años hacia atrás, y en algunos casos más. Tener el respaldo ordenado no es opcional: es la diferencia entre una revisión rutinaria y una sanción.",
      },
      { type: "h2", text: "Documentos obligatorios" },
      {
        type: "ul",
        items: [
          "Comprobantes electrónicos emitidos y recibidos (XML y PDF).",
          "Libros contables: diario, mayor e inventarios.",
          "Declaraciones presentadas (D-104, D-101, D-150, D-151).",
          "Estados financieros firmados por contador público.",
          "Contratos comerciales, laborales y de servicios.",
          "Conciliaciones bancarias y estados de cuenta.",
        ],
      },
      { type: "h2", text: "Plazo de conservación" },
      {
        type: "p",
        text: "El plazo general es de cinco años, contados desde el cierre del periodo fiscal correspondiente. Para operaciones con efectos en periodos posteriores (pérdidas trasladables, depreciaciones, activos), el respaldo debe conservarse mientras tenga efecto fiscal.",
      },
      { type: "h2", text: "Recomendación" },
      {
        type: "p",
        text: "Mantenga respaldo digital en al menos dos ubicaciones (nube y disco externo). Los XML de la factura electrónica son la prueba legal: no basta con tener el PDF.",
      },
    ],
  },
  {
    slug: "buenas-practicas-criptoactivos-p2p",
    category: "Criptoactivos",
    title: "Buenas prácticas documentales para operaciones con criptoactivos",
    excerpt:
      "Cómo respaldar movimientos P2P para revisiones bancarias o tributarias en Costa Rica.",
    date: "2026-05-06",
    dateLabel: "6 de mayo, 2026",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "Operar con criptoactivos en Costa Rica no es ilegal, pero sí requiere trazabilidad. Bancos, SUGEF y Hacienda pueden requerir explicaciones sobre el origen de los fondos cuando detectan movimientos atípicos.",
      },
      { type: "h2", text: "Documentación mínima por cada operación" },
      {
        type: "ul",
        items: [
          "Comprobante de la plataforma (Binance, Bitso u otra) con fecha, monto y contraparte.",
          "Capturas del chat con la contraparte en operaciones P2P.",
          "Comprobante de la transferencia bancaria asociada.",
          "Hash de la transacción en la red blockchain.",
        ],
      },
      { type: "h2", text: "Tratamiento fiscal en Costa Rica" },
      {
        type: "p",
        text: "Las ganancias por operaciones habituales con criptoactivos se consideran renta gravable. Las ganancias eventuales pueden estar sujetas al impuesto a las ganancias de capital. La calificación depende del perfil del contribuyente y la frecuencia de las operaciones.",
      },
      { type: "h2", text: "Recomendaciones" },
      {
        type: "ol",
        items: [
          "Mantenga un registro propio en hoja de cálculo con cada operación.",
          "Concilie mensualmente el saldo de cada wallet.",
          "Separe operaciones personales de operaciones empresariales.",
          "Consulte antes de mover montos significativos al sistema financiero formal.",
        ],
      },
    ],
  },
  {
    slug: "preparar-empresa-revision-tributaria",
    category: "Tributario",
    title: "Cómo preparar su empresa para una revisión tributaria",
    excerpt:
      "Checklist para anticipar requerimientos de Hacienda y minimizar riesgos en una fiscalización.",
    date: "2026-04-29",
    dateLabel: "29 de abril, 2026",
    readingMinutes: 7,
    content: [
      {
        type: "p",
        text: "Una revisión tributaria puede iniciar con un simple cruce de información del ATV. Estar preparado no es paranoia: es gestión de riesgo.",
      },
      { type: "h2", text: "Checklist preventivo" },
      {
        type: "ol",
        items: [
          "Conciliar ventas declaradas vs. facturación electrónica emitida.",
          "Conciliar compras declaradas vs. facturación electrónica recibida.",
          "Verificar que todas las facturas recibidas estén aceptadas en el ATV.",
          "Revisar D-151 y D-150 contra la información contable.",
          "Validar que la planilla CCSS coincida con el gasto de salarios deducido.",
          "Confirmar que los activos depreciados existen físicamente.",
        ],
      },
      { type: "h2", text: "Documentos que pedirán primero" },
      {
        type: "ul",
        items: [
          "Estados financieros y balance de comprobación.",
          "Mayor analítico de cuentas relevantes.",
          "Comprobantes electrónicos en XML.",
          "Conciliaciones bancarias.",
          "Contratos con proveedores y clientes principales.",
        ],
      },
      { type: "h2", text: "Qué no hacer" },
      {
        type: "p",
        text: "No entregue información sin que un profesional la revise antes. No firme actas sin entender lo que está aceptando. No destruya documentación, aunque considere que ya no es relevante.",
      },
    ],
  },
  {
    slug: "indicadores-financieros-pyme",
    category: "PYMES",
    title: "Indicadores financieros que toda PYME debería revisar cada mes",
    excerpt:
      "KPIs esenciales para entender la salud financiera de su empresa sin necesidad de ser contador.",
    date: "2026-04-22",
    dateLabel: "22 de abril, 2026",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "Los estados financieros son útiles, pero no se leen todos los días. Un puñado de indicadores bien escogidos le dice en segundos cómo está su empresa.",
      },
      { type: "h2", text: "1. Margen bruto" },
      {
        type: "p",
        text: "Mide cuánto queda de cada colón vendido después de pagar el costo del producto o servicio. Si baja mes a mes, sus costos están subiendo o sus precios están desactualizados.",
      },
      { type: "h2", text: "2. Días de cuentas por cobrar" },
      {
        type: "p",
        text: "Cuánto tarda en cobrarle a sus clientes. Si crece, su empresa está financiando a sus clientes con su propio capital de trabajo.",
      },
      { type: "h2", text: "3. Días de inventario" },
      {
        type: "p",
        text: "Cuánto tarda en vender lo que compra. Inventario alto inmoviliza efectivo y aumenta el riesgo de obsolescencia.",
      },
      { type: "h2", text: "4. Razón corriente" },
      {
        type: "p",
        text: "Activo corriente / pasivo corriente. Indica si puede pagar lo que debe en el corto plazo. Por debajo de 1 es señal de alerta.",
      },
      { type: "h2", text: "5. Punto de equilibrio" },
      {
        type: "p",
        text: "Cuánto necesita vender para cubrir todos sus costos. Conocerlo le permite negociar con base en datos, no en intuición.",
      },
      {
        type: "quote",
        text: "Lo que no se mide, no se gestiona. Cinco indicadores revisados cada mes son mejores que veinte revisados una vez al año.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}