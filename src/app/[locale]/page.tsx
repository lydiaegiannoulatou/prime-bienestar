import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { CalendarCheck, ArrowRight, ShieldCheck, Star, MapPin, Clock } from "lucide-react";

export default async function Home() {
  const t = await getTranslations("home");

  const features = [
    { Icon: ShieldCheck, title: t("feat1Title"), desc: t("feat1Desc") },
    { Icon: Star,        title: t("feat2Title"), desc: t("feat2Desc") },
    { Icon: MapPin,      title: t("feat3Title"), desc: t("feat3Desc") },
    { Icon: Clock,       title: t("feat4Title"), desc: t("feat4Desc") },
  ];

  return (
    <main className="flex-1 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative flex-1 min-h-145 overflow-hidden flex items-center">

        {/* Full-width background image */}
        <Image
          src="/assets/hero_image.png"
          alt="Prime Bienestar physiotherapy clinic"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />

        {/* White-to-transparent gradient from left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, white 0%, white 40%, rgba(255,255,255,0.65) 58%, transparent 76%)",
          }}
        />

        {/* Text content — sits on the white gradient */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-xl">

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-primary shrink-0" />
                <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                  {t("eyebrow")}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl font-bold text-dark leading-[1.08] mb-6">
                {t("headline1")}<br />
                {t("headline2")}<br />
                <span className="text-primary">{t("headline3")}</span>
              </h1>

              {/* Tagline */}
              <p className="text-dark/55 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-sm">
                {t("tagline")}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-12">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-7 py-3.5 rounded-full hover:bg-secondary hover:text-white transition-colors duration-200 text-sm"
                >
                  <CalendarCheck className="h-4 w-4" />
                  {t("bookCta")}
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border border-dark/15 text-dark font-medium px-7 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors duration-200 text-sm"
                >
                  {t("learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-6 border-t border-dark/8">
                <div>
                  <p className="text-2xl font-bold text-primary tabular-nums">{t("stat1Value")}</p>
                  <p className="text-xs text-dark/45 font-light mt-0.5 whitespace-nowrap">{t("stat1Label")}</p>
                </div>
                <div className="h-8 w-px bg-dark/10 shrink-0" />
                <div>
                  <p className="text-2xl font-bold text-primary tabular-nums">{t("stat2Value")}</p>
                  <p className="text-xs text-dark/45 font-light mt-0.5 whitespace-nowrap">{t("stat2Label")}</p>
                </div>
                <div className="h-8 w-px bg-dark/10 shrink-0" />
                <div>
                  <p className="text-2xl font-bold text-primary tabular-nums">{t("stat3Value")}</p>
                  <p className="text-xs text-dark/45 font-light mt-0.5 whitespace-nowrap">{t("stat3Label")}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* ── Trust strip ──────────────────────────────────────────────────────── */}
      <section className="bg-light border-t border-dark/8 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark mb-1.5">{title}</p>
                  <p className="text-xs text-dark/55 font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
