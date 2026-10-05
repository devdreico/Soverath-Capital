/* ------------------------------------------------------------------
   SOVERATH CAPITAL — CONTENIDO EDITABLE A MANO
   Todos los textos, cifras, rangos y enlaces del sitio viven aquí.
   No hace falta ningún backend: modifica este archivo y vuelve a
   construir (`npm run build`) o recarga en desarrollo (`npm run dev`).
   ------------------------------------------------------------------ */

export const site = {
  name: 'Soverath Capital',
  wordmark: ['SOVERATH', 'CAPITAL'],
  holding: 'Soverath Holding S.A.S.',
  legalLine: 'Sociedad privada interna de Soverath Holding S.A.S.',
  description:
    'Administración analítica de capital privado: métricas, intereses, divisas, ingresos y gastos de todas las áreas, divididos en rangos de acción para operar con criterio.',
}

/* Enlaces externos -------------------------------------------------- */
export const links = {
  soverath: 'https://soverath.presentto.online',
  soverathLabel: 'soverath.presentto.online',
}

/* Navegación (se desplazan con scroll dentro de la landing) ---------- */
export const nav = [
  { id: 'metricas', label: 'Métricas' },
  { id: 'ingresos', label: 'Ingresos' },
  { id: 'presupuesto', label: 'Presupuesto' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'acceso', label: 'Acceso' },
]

/* Hero -------------------------------------------------------------- */
export const hero = {
  eyebrow: 'Capital privado · Solo por invitación',
  title: 'Administración analítica de capital privado',
  highlight: 'capital privado',
  description:
    'Soverath Capital opera como la sociedad financiera privada de Soverath Holding S.A.S.: aquí se miden, registran y deciden las métricas bajo las cuales se despliega el capital otorgado —desde la inversión en bolsa hasta la construcción de proyectos aprobados por el consenso central.',
  primaryCta: 'Solicitar información',
  secondaryCta: 'Conocer el modelo',
  badges: [
    'Sociedad privada interna',
    'Ingreso solo por invitación',
    'Bases privadas, ambición global',
  ],
  facts: [
    { label: 'Operativa', value: 'Analítica' },
    { label: 'Rangos de acción', value: '05' },
    { label: 'Criterio de proyecto', value: 'Alto impacto · Bajo riesgo' },
    { label: 'Acceso', value: 'Por invitación' },
  ],
}

/* 01 · Métricas -------------------------------------------------------
   EDITAR CIFRAS AQUÍ: cada item tiene `value` (la cifra mostrada),
   `unit` (unidad) y `note` (nota metodológica). Dejar '' para ocultar. */
export const metrics = {
  eyebrow: '01 — Métricas',
  title: 'Métricas | Opciones de ingreso | Asociación e inversión',
  description:
    'La base conjunta mide y recopila el resultado de todas las operaciones: intereses, divisas, ingresos y gastos de cada área. De esas cifras nacen las decisiones de asignación y las opciones de ingreso disponibles para quienes se asocian e invierten con nosotros.',
  items: [
    {
      id: 'aum',
      label: 'Capital bajo administración',
      value: '000',
      unit: 'USD',
      note: 'Suma de capitales otorgados en cartera. Actualizar manualmente.',
    },
    {
      id: 'operaciones',
      label: 'Operaciones registradas',
      value: '000',
      unit: 'ops',
      note: 'Movimientos medidos y archivados en el registro interno.',
    },
    {
      id: 'cobertura',
      label: 'Áreas de ingreso y gasto',
      value: '00',
      unit: 'áreas',
      note: 'Ingresos y gastos auditados por área de acción.',
    },
    {
      id: 'horizonte',
      label: 'Horizonte de operación',
      value: '00',
      unit: 'meses',
      note: 'Ventana mínima de análisis por rango de acción.',
    },
  ],
  method: {
    title: 'Metodología de medición',
    points: [
      'Recopilación continua de ingresos, gastos, intereses y divisas de todas las áreas.',
      'Cada operación se clasifica por rango de acción y nivel de riesgo asignado.',
      'Las cifras se consolidan antes de liberar cualquier nueva línea de inversión.',
    ],
  },
}

/* 02 · Opciones de ingreso ------------------------------------------- */
export const incomeStreams = {
  eyebrow: '02 — Opciones de ingreso',
  title: 'De la métrica a la opción de ingreso',
  description:
    'Cada línea de ingreso nace de una medición. El presupuesto se divide en rangos para diferentes bases de acción, y según el rango se elige la vía de participación: asociación, inversión directa o ambas.',
  items: [
    {
      id: 'bolsa',
      title: 'Inversión en bolsa',
      text: 'Posiciones construidas sobre datos históricos, volatilidad medida y límites de exposición definidos por el comité.',
      tags: ['Análisis de datos', 'Rango medio'],
    },
    {
      id: 'divisas',
      title: 'Intereses y divisas',
      text: 'Gestión activa de tasas de interés y paridad entre divisas, con registro de cada movimiento y su efecto en el resultado.',
      tags: ['Renta fija', 'FX'],
    },
    {
      id: 'areas',
      title: 'Ingresos y gastos por áreas',
      text: 'Consolidación de todas las áreas de operación: cada ingreso y cada gasto se mide antes de liberar presupuesto.',
      tags: ['Auditoría interna', 'Control'],
    },
    {
      id: 'asociacion',
      title: 'Asociación e inversión',
      text: 'El asociado pone y cuida su capital en nuestro entorno, con acceso a las ventajas internas y a la misma disciplina de medición.',
      tags: ['Acceso interno', 'Invitación'],
    },
    {
      id: 'proyectos',
      title: 'Proyectos financieros',
      text: 'Construcción de proyectos aprobados por el consenso central, marcados como de alto impacto financiero y poco riesgo.',
      tags: ['Alto impacto', 'Bajo riesgo'],
    },
    {
      id: 'reserva',
      title: 'Reserva y contingencia',
      text: 'Una porción del presupuesto permanece en reserva para cubrir volatilidad sin detener las líneas activas.',
      tags: ['Preserva', 'Liquidez'],
    },
  ],
}

/* 03 · Presupuesto por rangos de acción ------------------------------
   EDITAR AQUÍ: `allocation` es el porcentaje del presupuesto (la suma
   debe dar 100 para que las barras sean coherentes entre sí). */
export const budgetRanges = {
  eyebrow: '03 — Presupuesto',
  title: 'Rangos de acción sobre el presupuesto',
  description:
    'El presupuesto no se reparte a ciegas: se divide en rangos y cada rango recibe una asignación fija. El consenso central reasigna sólo cuando las métricas lo justifican.',
  total: 100,
  ranges: [
    {
      id: 'r1',
      name: 'Rango conservador',
      allocation: 35,
      description: 'Liquidez e instrumentos de baja volatilidad. Base de sostén de la operación.',
    },
    {
      id: 'r2',
      name: 'Rango de mercado',
      allocation: 30,
      description: 'Inversión en bolsa con límites de exposición y salida programada.',
    },
    {
      id: 'r3',
      name: 'Rango de divisas e intereses',
      allocation: 15,
      description: 'Posiciones en divisas y captación de interés según ciclo.',
    },
    {
      id: 'r4',
      name: 'Rango de proyectos',
      allocation: 15,
      description: 'Proyectos financieros aprobados por el consenso central.',
    },
    {
      id: 'r5',
      name: 'Rango de reserva',
      allocation: 5,
      description: 'Colchón de contingencia y oportunidades fuera de ciclo.',
    },
  ],
}

/* 04 · Proyectos ------------------------------------------------------
   EDITAR AQUÍ la lista de proyectos marcados por el consenso central. */
export const projects = {
  eyebrow: '04 — Proyectos',
  title: 'Marcados por el consenso central',
  description:
    'Sólo avanzan los proyectos clasificados como de alto impacto financiero y poco riesgo. Cada uno lleva su ficha: área, impacto, riesgo y estado de aprobación.',
  items: [
    {
      id: 'p1',
      title: 'Línea de tesorería privada',
      area: 'Tesorería',
      impact: 'Alto',
      risk: 'Bajo',
      status: 'En ejecución',
    },
    {
      id: 'p2',
      title: 'Fondo táctico de divisas',
      area: 'FX',
      impact: 'Alto',
      risk: 'Bajo',
      status: 'En evaluación',
    },
    {
      id: 'p3',
      title: 'Plataforma de crédito interno',
      area: 'Crédito',
      impact: 'Alto',
      risk: 'Medio-bajo',
      status: 'Aprobado',
    },
    {
      id: 'p4',
      title: 'Nodo de liquidación regional',
      area: 'Infraestructura',
      impact: 'Alto',
      risk: 'Bajo',
      status: 'Aprobado',
    },
  ],
}

/* Acceso por invitación ---------------------------------------------- */
export const invite = {
  eyebrow: '05 — Acceso',
  title: 'Ingreso solo por invitación',
  description:
    'Soverath Capital opera con capital privado otorgado. Quienes deseen unirse, acceder a las ventajas internas y poner y cuidar su capital en nuestro entorno deben contar con un código de invitación.',
  note: 'No abrimos registro público. Si aún no tienes código, solicita más información en el sitio de Soverath Holding.',
  cta: 'Ingresa tu código',
  externalCta: 'Solicitar más información',
  modal: {
    title: 'Acceso solo por invitación',
    subtitle: 'Introduce el código que se te fue otorgado para continuar.',
    label: 'Código de invitación',
    placeholder: 'Ej. SOV-XXXX-0000',
    submit: 'Verificar acceso',
    error: 'Código no válido. El ingreso a Soverath Capital es solo por invitación.',
    hint: '¿No tienes código? Solicita más información.',
    success: 'Código verificado. Preparando tu acceso…',
  },
  steps: [
    {
      n: '01',
      title: 'Recibe tu invitación',
      text: 'El consenso central extiende una invitación a quienes cumplen el perfil de asociado.',
    },
    {
      n: '02',
      title: 'Verifica tu código',
      text: 'El código habilita el área interna donde se explican las condiciones de participación.',
    },
    {
      n: '03',
      title: 'Pon y cuida tu capital',
      text: 'Defines el rango de acción, firmas las condiciones y tu capital entra al sistema de medición.',
    },
  ],
  benefits: [
    {
      title: 'Ventajas internas',
      text: 'Acceso a las mismas métricas y criterios con los que se decide la asignación del presupuesto.',
    },
    {
      title: 'Rangos definidos',
      text: 'Eliges el rango de acción: desde reserva conservadora hasta proyectos de alto impacto.',
    },
    {
      title: 'Disciplina de medición',
      text: 'Reportes de ingresos, gastos, intereses y divisas de todas las áreas, sin interpretación libre.',
    },
    {
      title: 'Custodia activa',
      text: 'Tu capital se pone y se cuida dentro del entorno operativo de Soverath Capital.',
    },
  ],
  requirements: [
    'Código de invitación vigente.',
    'Capital asignado a un rango de acción acordado.',
    'Aceptación de las condiciones internas de operación.',
    'Revisión periódica de los reportes de desempeño.',
  ],
  access: {
    badge: 'Código verificado',
    eyebrow: 'Área privada · Soverath Capital',
    title: 'Bienvenido al entorno de Soverath Capital',
    lead: 'Este es el punto de partida para acceder a las ventajas internas, conocer los rangos de acción disponibles y poner y cuidar tu capital bajo la misma disciplina de medición que usa la sociedad.',
    benefitsTitle: 'Beneficios del acceso',
    processTitle: 'Cómo se activa tu participación',
    requirementsTitle: 'Condiciones de participación',
    helpTitle: '¿Necesitas más información?',
    helpText:
      'El equipo de Soverath Holding atiende las solicitudes de información y la emisión de nuevas invitaciones.',
    helpCta: 'Contactar en Soverath Holding',
    backCta: 'Volver al inicio',
    logoutCta: 'Cerrar acceso',
    logoutNote: 'Tu código se mantiene sólo en esta sesión del navegador.',
  },
}

/* Códigos de invitación válidos --------------------------------------
   Si defines VITE_INVITE_CODE en .env (códigos separados por coma),
   tiene prioridad sobre esta lista. */
export const inviteCodes = ['SOV-INVITADO', 'SOVERATH-2026']

/* Footer -------------------------------------------------------------- */
export const footer = {
  tagline:
    'Sociedad privada enfocada enteramente en la administración de recursos privados que se le sean otorgados.',
  disclaimer:
    'Este sitio tiene carácter informativo y no constituye oferta pública, captación de depósitos ni recomendación de inversión. La participación en Soverath Capital es privada y solo por invitación.',
  columns: [
    {
      title: 'Sitio',
      items: [
        { label: 'Métricas', target: 'metricas' },
        { label: 'Ingresos', target: 'ingresos' },
        { label: 'Presupuesto', target: 'presupuesto' },
        { label: 'Proyectos', target: 'proyectos' },
      ],
    },
    {
      title: 'Acceso',
      items: [
        { label: 'Ingreso por invitación', target: 'acceso' },
        { label: 'Soverath Holding', href: links.soverath },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} ${site.holding} · Soverath Capital`,
}
