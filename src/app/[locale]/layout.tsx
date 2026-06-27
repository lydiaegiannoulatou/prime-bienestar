import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HtmlLang } from "@/components/HtmlLang";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const messageLoaders = {
  en: () => import("../../../messages/en.json"),
  es: () => import("../../../messages/es.json"),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound();
  }

  const messages = (await messageLoaders[locale as "en" | "es"]()).default;

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLang />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
