import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

const messageLoaders = {
  en: () => import("../../messages/en.json"),
  es: () => import("../../messages/es.json"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = (await messageLoaders[locale as keyof typeof messageLoaders]()).default;

  return { locale, messages };
});
