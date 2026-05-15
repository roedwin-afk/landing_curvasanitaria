// src/data/products.ts

export interface Product {
  slug: string;
  code: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageKey: string; // ruta relativa a src/assets/images/
  specs: { label: string; value: string }[];
  applications: string[];
  cta: string;
  metaTitle: string;
  metaDescription: string;
  installSteps: string[];
}

export const products: Product[] = [
  {
    slug: "co100",
    code: "CO100",
    name: "Curva Sanitaria Principal",
    shortDescription:
      "Perfil de 4000mm, Blanco RAL 9010. Radio de curvatura ideal para encuentros pared-piso en cuartos fríos.",
    fullDescription:
      "La curva sanitaria CO100 es el componente central de cualquier acabado higiénico profesional. Su perfil continuo de 4000mm elimina los ángulos rectos donde se acumulan bacterias, cumpliendo con las normativas SENASA y HACCP. Fabricada en PVC de alta densidad color Blanco RAL 9010, resiste impactos, humedad constante y productos químicos de limpieza agresivos.",
    installSteps: [
      "Limpiar y nivelar la superficie de encuentro pared-piso.",
      "Colocar la base de soporte COPF 100 fijándola mecánicamente al panel.",
      "Encajar la curva CO100 sobre la base hasta escuchar el clic de encastre.",
      "Sellar los extremos con tapetas TAP-47379.",
      "Aplicar sellante sanitario en los bordes para garantizar hermeticidad.",
    ],
    imageKey: "CO100-1.png",
    specs: [
      { label: "Código", value: "CO100" },
      { label: "Largo", value: "4000 mm" },
      { label: "Color", value: "Blanco RAL 9010" },
      { label: "Material", value: "PVC alta densidad" },
      { label: "Radio de curvatura", value: "100 mm" },
      { label: "Norma", value: "Grado alimenticio" },
    ],
    applications: [
      "Cuartos fríos y cámaras frigoríficas",
      "Plantas procesadoras de alimentos",
      "Industria cárnica y láctea",
      "Cocinas industriales B2B",
      "Laboratorios farmacéuticos",
    ],
    cta: "Conocer mas sobre CO100",
    metaTitle:
      "Curva Sanitaria CO100 PVC Honduras | EQUIPROH San Pedro Sula",
    metaDescription:
      "Curva sanitaria CO100 de 4000mm en PVC blanco RAL 9010 para cuartos fríos y plantas industriales en Honduras. Cotiza con EQUIPROH.",
  },
  {
    slug: "copf-100",
    code: "COPF 100",
    name: "Base de Soporte Perfil",
    shortDescription:
      "Sistema de anclaje para curva sanitaria. Garantiza fijación mecánica en paneles de cámara frigorífica.",
    fullDescription:
      "El perfil COPF 100 es el sistema de anclaje diseñado específicamente para fijar la curva sanitaria CO100 en cámara frigorífica. Su geometría de encaje garantiza una unión mecánica firme sin necesidad de adhesivos agresivos, facilitando el desmontaje para limpieza profunda y reduciendo los tiempos de parada en planta.",
    installSteps: [
      "Marcar la línea de instalación a lo largo del encuentro pared-piso.",
      "Fijar la base con tornillos o adhesivo de contacto según el panel.",
      "Verificar nivel y alineación antes de instalar la curva CO100.",
    ],
    imageKey: "COAF-100-65.png",
    specs: [
      { label: "Código", value: "COPF 100" },
      { label: "Compatibilidad", value: "CO100" },
      { label: "Material", value: "PVC alta densidad" },
      { label: "Color", value: "Blanco RAL 9010" },
      { label: "Fijación", value: "Mecánica / Adhesiva" },
      { label: "Norma", value: "Grado alimenticio" },
    ],
    applications: [
      "Paneles sándwich de cámara frigorífica",
      "Cuartos fríos industriales",
      "Plantas de procesamiento",
      "Instalaciones con desmontaje frecuente",
    ],
    cta: "Conocer mas sobre COPF 100",
    metaTitle:
      "Base de Soporte COPF 100 para Curva Sanitaria | EQUIPROH Honduras",
    metaDescription:
      "Sistema de anclaje COPF 100 para curvas sanitarias PVC en paneles de cámara frigorífica. Distribución Honduras — EQUIPROH.",
  },
  {
    slug: "rin-51223",
    code: "RIN-51223",
    name: "Rinconera Interna 3P",
    shortDescription:
      "Accesorio triple pared para la unión perfecta de tres esquinas internas. Máxima higiene en vértices.",
    fullDescription:
      "La rinconera interna RIN-51223 resuelve el punto más crítico de higiene en cualquier instalación: el vértice donde se encuentran tres planos (dos paredes y el piso). Su geometría de triple encastre sella completamente el ángulo tridimensional, eliminando cualquier cavidad donde puedan acumularse residuos o microorganismos.",
    installSteps: [
      "Instalar primero los perfiles CO100 en los tres tramos que convergen.",
      "Encajar la rinconera RIN-51223 en el vértice de las tres paredes.",
      "Presionar hasta asentar completamente en el encastre.",
      "Sellar perímetro con sellante sanitario apto para alimentos.",
    ],
    imageKey: "RIN-51223.png",
    specs: [
      { label: "Código", value: "RIN-51223" },
      { label: "Tipo", value: "Rinconera interna 3 paredes" },
      { label: "Material", value: "PVC alta densidad" },
      { label: "Color", value: "Blanco RAL 9010" },
      { label: "Compatibilidad", value: "CO100" },
      { label: "Norma", value: "Grado alimenticio" },
    ],
    applications: [
      "Esquinas internas de cuartos fríos",
      "Vértices en plantas alimenticias",
      "Uniones pared-pared-piso",
      "Cámaras de alta exigencia higiénica",
    ],
    cta: "Conocer mas sobre RIN-51223",
    metaTitle:
      "Rinconera Interna 3P RIN-51223 PVC Honduras | EQUIPROH",
    metaDescription:
      "Rinconera interna triple pared RIN-51223 para esquinas de cuartos fríos en Honduras. Máxima higiene en vértices — EQUIPROH.",
  },
  {
    slug: "co2ve-100",
    code: "CO2VE 100",
    name: "Esquinero Externo PVC",
    shortDescription:
      "Protección contra impactos en esquinas salientes. Diseño aerodinámico de fácil limpieza.",
    fullDescription:
      "El esquinero externo CO2VE 100 protege las aristas salientes de paredes y columnas en entornos industriales de alto tráfico. Su perfil redondeado absorbe impactos de carretillas y equipos, mientras que su superficie lisa sin cavidades permite una limpieza rápida y eficiente. Compatible con el sistema CO100.",
    installSteps: [
      "Limpiar la arista saliente de polvo y grasa.",
      "Aplicar adhesivo de contacto en la cara interna del esquinero.",
      "Posicionar el CO2VE 100 sobre la arista y presionar firmemente.",
      "Mantener presión por 60 segundos hasta adherencia completa.",
    ],
    imageKey: "CO2VE-100.png",
    specs: [
      { label: "Código", value: "CO2VE 100" },
      { label: "Tipo", value: "Esquinero externo" },
      { label: "Material", value: "PVC alta densidad" },
      { label: "Color", value: "Blanco RAL 9010" },
      { label: "Resistencia", value: "Alto impacto" },
      { label: "Norma", value: "Grado alimenticio" },
    ],
    applications: [
      "Esquinas salientes de paredes",
      "Columnas en zonas de tráfico",
      "Plantas con circulación de montacargas",
      "Protección en corredores industriales",
    ],
    cta: "Conocer mas sobre CO2VE 100",
    metaTitle:
      "Esquinero Externo CO2VE 100 PVC Honduras | EQUIPROH",
    metaDescription:
      "Esquinero externo CO2VE 100 en PVC para protección de esquinas salientes en plantas industriales de Honduras — EQUIPROH.",
  },
  {
    slug: "tap-47379",
    code: "TAP-47379",
    name: "Tapeta de Terminación",
    shortDescription:
      "Tapa final para perfiles de 100mm. Sella los extremos para evitar entrada de residuos y humedad.",
    fullDescription:
      "La tapeta TAP-47379 es el accesorio de terminación para los extremos abiertos de la curva sanitaria CO100. Su encastre preciso sella completamente el perfil, impidiendo la entrada de agua, humedad y residuos. Un detalle pequeño con impacto grande en la certificación higiénica de la instalación.",
    installSteps: [
      "Cortar el perfil CO100 a la medida deseada.",
      "Encajar la tapeta TAP-47379 en el extremo abierto del perfil.",
      "Presionar hasta el tope para asegurar el sello completo.",
    ],
    imageKey: "TAP-47379.png",
    specs: [
      { label: "Código", value: "TAP-47379" },
      { label: "Tipo", value: "Tapeta / Tapa final" },
      { label: "Material", value: "PVC" },
      { label: "Color", value: "Blanco RAL 9010" },
      { label: "Compatibilidad", value: "Perfiles de 100mm (CO100)" },
      { label: "Norma", value: "Grado alimenticio" },
    ],
    applications: [
      "Terminaciones de perfiles CO100",
      "Sellos de extremo en cuartos fríos",
      "Acabados en puertas y ventanas industriales",
    ],
    cta: "Conocer mas sobre TAP-47379",
    metaTitle:
      "Tapeta de Terminación TAP-47379 para Perfil 100mm | EQUIPROH Honduras",
    metaDescription:
      "Tapeta TAP-47379 para sellar extremos de curvas sanitarias CO100 en Honduras. Stock disponible — EQUIPROH.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}