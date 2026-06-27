import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedinIn,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarCheck,
  faVideo,
  faLeaf,
  faAppleWhole,
  faBrain,
  faUsers,
  faCircleInfo,
  faPeopleGroup,
  faBriefcase,
  faPenToSquare,
  faBullhorn,
  faEnvelope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// ─── Social links ──────────────────────────────────────────────────────────────

const socialLinks = [
  { label: "Instagram",  href: "#", icon: faInstagram  },
  { label: "Facebook",   href: "#", icon: faFacebook   },
  { label: "X (Twitter)",href: "#", icon: faXTwitter   },
  { label: "YouTube",    href: "#", icon: faYoutube    },
  { label: "LinkedIn",   href: "#", icon: faLinkedinIn },
  { label: "TikTok",     href: "#", icon: faTiktok     },
];

// ─── Nav columns ──────────────────────────────────────────────────────────────

const serviceLinks = [
  { label: "Book Appointment",  href: "#", icon: faCalendarCheck },
  { label: "Video Library",     href: "#", icon: faVideo         },
  { label: "Wellness Programs", href: "#", icon: faLeaf          },
  { label: "Nutrition Plans",   href: "#", icon: faAppleWhole    },
  { label: "Mental Health",     href: "#", icon: faBrain         },
  { label: "Group Sessions",    href: "#", icon: faUsers         },
];

const companyLinks = [
  { label: "About Us",  href: "#", icon: faCircleInfo  },
  { label: "Our Team",  href: "#", icon: faPeopleGroup },
  { label: "Careers",   href: "#", icon: faBriefcase   },
  { label: "Blog",      href: "#", icon: faPenToSquare },
  { label: "Press",     href: "#", icon: faBullhorn    },
  { label: "Contact",   href: "#", icon: faEnvelope    },
];

const legalLinks = [
  { label: "Privacy Policy",   href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy",    href: "#" },
  { label: "Accessibility",    href: "#" },
  { label: "Sitemap",          href: "#" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#4F200D] text-[#F6F1E9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-0">

        {/* ── Brand strip ── */}
        <div className="flex items-center gap-6 mb-14">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#FFB22C]/40" />
          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="relative w-12 h-12">
              <Image
                src="/assets/logo.png"
                alt="Prime Bienestar"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-serif text-xl font-semibold text-[#FFB22C] tracking-wide leading-none">
              Prime
            </span>
            <span className="text-[9px] tracking-[0.28em] uppercase text-[#F6F1E9]/50 font-light">
              Bienestar
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#FFB22C]/40" />
        </div>

        {/* ── Columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* About + Social */}
          <div className="lg:col-span-1">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#FFB22C] font-semibold mb-4">
              {t("aboutTitle")}
            </p>
            <p className="text-sm leading-relaxed text-[#F6F1E9]/60 font-light mb-6 max-w-xs">
              {t("aboutText")}
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    w-9 h-9 rounded-[10px] flex items-center justify-center
                    bg-[#FFB22C]/10 border border-[#FFB22C]/20
                    text-[#F6F1E9]/70 transition-all duration-150
                    hover:bg-[#FFB22C] hover:border-[#FFB22C] hover:text-[#4F200D]
                  "
                >
                  <FontAwesomeIcon icon={icon} className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#FFB22C] font-semibold mb-4">
              {t("servicesTitle")}
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map(({ label, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2.5 text-sm text-[#F6F1E9]/60 font-light hover:text-[#FFB22C] transition-colors duration-150"
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className="w-3.5 h-3.5 text-[#FFB22C]/40 group-hover:text-[#FFB22C] transition-colors duration-150 shrink-0"
                    />
                    {t(`services.${label.toLowerCase().replace(/ /g, "_")}`, { defaultValue: label })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#FFB22C] font-semibold mb-4">
              {t("companyTitle")}
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(({ label, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2.5 text-sm text-[#F6F1E9]/60 font-light hover:text-[#FFB22C] transition-colors duration-150"
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className="w-3.5 h-3.5 text-[#FFB22C]/40 group-hover:text-[#FFB22C] transition-colors duration-150 shrink-0"
                    />
                    {t(`company.${label.toLowerCase().replace(/ /g, "_")}`, { defaultValue: label })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#FFB22C] font-semibold mb-4">
              {t("newsletterTitle")}
            </p>
            <p className="text-sm text-[#F6F1E9]/55 font-light leading-relaxed mb-4">
              {t("newsletterSubtitle")}
            </p>
            <NewsletterForm
              placeholder={t("newsletterPlaceholder")}
              cta={t("newsletterCta")}
            />
            <p className="text-xs text-[#F6F1E9]/30 mt-3 leading-relaxed">
              {t("newsletterNote")}
            </p>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-[#FFB22C]/12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
          <p className="text-xs text-[#F6F1E9]/35 font-light">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#FFB22C]/60">Prime Bienestar</span>.{" "}
            {t("allRightsReserved")}
          </p>
          <nav className="flex items-center gap-4 flex-wrap justify-center">
            {legalLinks.map(({ label, href }, i) => (
              <span key={label} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-[#F6F1E9]/15 text-xs select-none">·</span>
                )}
                <Link
                  href={href}
                  className="text-xs text-[#F6F1E9]/35 font-light hover:text-[#FFB22C] transition-colors duration-150"
                >
                  {t(`legal.${label.toLowerCase().replace(/ /g, "_")}`, { defaultValue: label })}
                </Link>
              </span>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}

// ─── Newsletter form ──────────────────────────────────────────────────────────

function NewsletterForm({
  placeholder,
  cta,
}: {
  placeholder: string;
  cta: string;
}) {
  return (
    <div className="flex gap-2">
      <input
        type="email"
        placeholder={placeholder}
        className="
          flex-1 min-w-0 bg-[#F6F1E9]/8 border border-[#FFB22C]/20 rounded-lg
          px-3.5 py-2.5 text-sm text-[#F6F1E9] placeholder:text-[#F6F1E9]/30
          outline-none focus:border-[#FFB22C]/60 transition-colors duration-150
          font-light
        "
      />
      <button
        type="button"
        className="
          shrink-0 bg-[#FFB22C] text-[#4F200D] text-xs font-semibold
          rounded-lg px-4 py-2.5 hover:bg-[#FA812F] hover:text-white
          transition-colors duration-150 cursor-pointer
        "
      >
        {cta}
      </button>
    </div>
  );
}