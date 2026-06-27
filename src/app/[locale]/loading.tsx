export default function Loading() {
  return (
    <main className="flex-1 flex flex-col animate-pulse">

      {/* ── Hero skeleton ─────────────────────────────────────────────────────── */}
      <section className="relative flex-1 min-h-145 bg-light overflow-hidden flex items-center">
        {/* Subtle right-side tint so it reads as a placeholder image area */}
        <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-primary/8" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-xl space-y-7">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary/40 shrink-0" />
                <div className="h-2.5 w-52 rounded-full bg-primary/20" />
              </div>

              {/* Headline – three lines */}
              <div className="space-y-3">
                <div className="h-12 sm:h-14 w-3/4 rounded-xl bg-dark/10" />
                <div className="h-12 sm:h-14 w-4/5 rounded-xl bg-dark/10" />
                <div className="h-12 sm:h-14 w-1/2 rounded-xl bg-primary/18" />
              </div>

              {/* Tagline */}
              <div className="space-y-2">
                <div className="h-3.5 w-full max-w-xs rounded-full bg-dark/8" />
                <div className="h-3.5 w-2/3 max-w-xs rounded-full bg-dark/8" />
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <div className="h-12 w-44 rounded-full bg-primary/30" />
                <div className="h-12 w-36 rounded-full border border-dark/10 bg-dark/5" />
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-8 pt-6 border-t border-dark/8">
                <div className="space-y-1.5">
                  <div className="h-7 w-14 rounded-lg bg-primary/25" />
                  <div className="h-2.5 w-20 rounded-full bg-dark/8" />
                </div>
                <div className="h-8 w-px bg-dark/10 shrink-0" />
                <div className="space-y-1.5">
                  <div className="h-7 w-14 rounded-lg bg-primary/25" />
                  <div className="h-2.5 w-20 rounded-full bg-dark/8" />
                </div>
                <div className="h-8 w-px bg-dark/10 shrink-0" />
                <div className="space-y-1.5">
                  <div className="h-7 w-14 rounded-lg bg-primary/25" />
                  <div className="h-2.5 w-20 rounded-full bg-dark/8" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip skeleton ──────────────────────────────────────────────── */}
      <section className="bg-light border-t border-dark/8 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/15" />
                <div className="space-y-2">
                  <div className="h-3.5 w-28 rounded-full bg-dark/12" />
                  <div className="h-3 w-full rounded-full bg-dark/8" />
                  <div className="h-3 w-4/5 rounded-full bg-dark/8" />
                  <div className="h-3 w-3/5 rounded-full bg-dark/8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
