export const siteName = "Nexo Financiero CR";

export const defaultTitle =
  "Nexo Financiero CR | Contabilidad, Impuestos y Consultoría Financiera en Costa Rica";

export const defaultDescription =
  "Servicios contables, tributarios, financieros y de auditoría para PYMES, empresas agrícolas, agroindustriales y emprendedores en Costa Rica.";

export const siteUrl = stripTrailingSlash(
  import.meta.env.VITE_SITE_URL ?? "https://nexofinanciero.cr",
);

export const socialImageAlt =
  "Logo de Nexo Financiero CR, firma de contabilidad, impuestos, auditoría y consultoría financiera.";

export function publicAssetUrl(assetPath: string) {
  return `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, "")}`;
}

export function absolutePublicAssetUrl(assetPath: string) {
  return new URL(publicAssetUrl(assetPath), `${siteUrl}/`).toString();
}

function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}
