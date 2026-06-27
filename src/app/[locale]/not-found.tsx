import Link from "next/link";
import { ArrowLeft, CalendarCheck } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">

      {/* 404 badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/12 border border-primary/20 px-4 py-1.5">
        <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
          Error 404
        </span>
      </div>

      {/* Catchy headline */}
      <h1 className="text-4xl sm:text-5xl font-bold text-dark leading-tight mb-4 max-w-lg">
        This page pulled<br />
        <span className="text-primary">a muscle.</span>
      </h1>

      {/* Subtext */}
      <p className="text-dark/50 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-sm">
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

      {/* Decorative line */}
      <div className="mt-20 h-px w-24 bg-primary/30" />

    </main>
  );
}
