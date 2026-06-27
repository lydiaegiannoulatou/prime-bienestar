import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarCheck } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center px-4 py-16 text-center">

      {/* Brand mark */}
      <div className="flex flex-col items-center gap-2 mb-12">
        <div className="relative w-12 h-12">
          <Image src="/assets/logo.png" alt="Prime Bienestar" fill className="object-contain" />
        </div>
        <p className="text-xs tracking-[0.28em] uppercase text-dark/40 font-light">
          Prime Bienestar
        </p>
      </div>

      {/* Large 404 */}
      <p
        className="font-bold text-primary leading-none mb-6 select-none"
        style={{ fontSize: "clamp(5rem, 20vw, 10rem)" }}
      >
        404
      </p>

      {/* Catchy headline */}
      <h1 className="text-3xl sm:text-4xl font-bold text-dark leading-tight mb-4 max-w-md">
        This page pulled<br />
        <span className="text-primary">a muscle.</span>
      </h1>

      {/* Subtext */}
      <p className="text-dark/50 text-base font-light leading-relaxed mb-10 max-w-sm">
        Looks like this one slipped out of alignment. Let&apos;s get you back on your feet.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-dark/15 text-dark font-medium px-7 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors duration-200 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-7 py-3.5 rounded-full hover:bg-secondary hover:text-white transition-colors duration-200 text-sm"
        >
          <CalendarCheck className="h-4 w-4" />
          Book Appointment
        </Link>
      </div>

      {/* Bottom amber accent */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-primary" />

    </div>
  );
}
