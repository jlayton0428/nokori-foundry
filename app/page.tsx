export default function Home() {
  return (
    <main className="min-h-screen bg-[#141412] text-[#C7BFB3]">
      {/* Global grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage: "url('/grain.png')",
          backgroundSize: "512px 512px",
        }}
      />

      <div className="mx-auto w-full max-w-[1200px] px-5 py-10">
        <div className="overflow-hidden rounded-2xl bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
          {/* HERO */}
          <section className="relative h-[520px] md:h-[560px]">
            {/* Background */}
            <img
              src="/hero-foundry.png"
              alt="Foundry interior"
              className="absolute inset-0 h-full w-full object-cover saturate-90 contrast-[1.05] scale-[1.02]"
            />

            {/* Vignette + atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_40%,rgba(0,0,0,0.15),rgba(0,0,0,0.78)),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]" />
            <div className="absolute inset-0 opacity-[0.35] mix-blend-screen bg-[radial-gradient(60%_40%_at_70%_30%,rgba(199,191,179,0.35),rgba(0,0,0,0))]" />
            <div
              className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
              style={{ backgroundImage: "url('/grain.png')", backgroundSize: "512px 512px" }}
            />

            {/* Top bar */}
            <header className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between">
              <div className="text-xs tracking-[0.18em] opacity-80">
                FOUNDED 2026 • NF-01
              </div>
              <nav className="hidden gap-6 text-xs tracking-[0.18em] opacity-80 md:flex">
                <a href="#about" className="hover:opacity-100">ABOUT</a>
                <a href="#library" className="hover:opacity-100">LIBRARY</a>
                <a href="#reports" className="hover:opacity-100">REPORTS</a>
              </nav>
            </header>

            {/* Hero type */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
              <h1 className="text-[clamp(44px,6vw,76px)] font-black tracking-[0.10em] text-[#C7BFB3]/95 drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)]">
                NOKORI FOUNDRY
              </h1>
              <p className="mt-3 text-xl md:text-2xl tracking-[0.06em] opacity-85">
                What Remains.
              </p>
            </div>

            {/* Palette chips (right) */}
            <aside className="absolute right-5 top-[120px] z-10 hidden w-[210px] flex-col gap-3 rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur md:flex">
              {[
                { hex: "#7A2E26", name: "Oxidized Iron" },
                { hex: "#1E1F1D", name: "Aged Charcoal" },
                { hex: "#6B6E6C", name: "Weathered Steel" },
                { hex: "#C7BFB3", name: "Dust Light" },
              ].map((c) => (
                <div key={c.hex} className="flex items-center gap-3">
                  <div
                    className="h-7 w-11 rounded-lg border border-black/40"
                    style={{ background: c.hex }}
                  />
                  <div className="leading-tight">
                    <div className="text-xs tracking-[0.10em] opacity-95">{c.hex}</div>
                    <div className="text-[11px] opacity-70">{c.name}</div>
                  </div>
                </div>
              ))}
            </aside>
          </section>

          {/* PANELS */}
          <section
            id="reports"
            className="grid grid-cols-1 gap-5 bg-[#10100f] p-5 md:grid-cols-2"
          >
            {/* Left panel: CAST REPORT */}
            <div
              className="relative overflow-hidden rounded-2xl border border-black/30 p-5 text-[#1a1a18] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
              style={{
                backgroundImage: "url('/paper-texture.png')",
                backgroundSize: "cover",
              }}
            >
              {/* grain */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
                style={{ backgroundImage: "url('/grain.png')", backgroundSize: "512px 512px" }}
              />

              <div className="relative z-10 flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-black tracking-[0.12em] text-[#7A2E26]">
                  CAST REPORT
                </h2>
                <span className="rounded-full border border-[#7A2E26]/35 px-3 py-1 text-xs tracking-[0.18em] text-[#7A2E26]/85">
                  検査済
                </span>
              </div>

              <div className="relative z-10 mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <div>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-black/60">
                    CAST SERIES
                  </div>
                  <div className="mt-1 text-lg font-extrabold tracking-[0.04em] text-black/85">
                    NF-A01-07
                  </div>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-black/60">
                    MATERIAL
                  </div>
                  <div className="mt-1 text-lg font-extrabold tracking-[0.04em] text-black/85">
                    HEAVY IRON ALLOY
                  </div>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-black/60">
                    CAST DATE
                  </div>
                  <div className="mt-1 text-lg font-extrabold tracking-[0.04em] text-black/85">
                    2026-04-24
                  </div>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-black/60">
                    STATUS
                  </div>
                  <div className="mt-1 text-lg font-extrabold tracking-[0.04em] text-black/85">
                    CATALOGUED
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="relative z-10 mt-5 rounded-xl border border-black/25 bg-[#7A2E26] px-4 py-3 text-xs font-extrabold tracking-[0.18em] text-[#C7BFB3] hover:brightness-105">
                VIEW LATEST
              </button>

              {/* stamps + glyphs (subtle manufacturing language) */}
              <img
                src="/stamp-04.png"
                alt=""
                className="absolute bottom-3 left-4 w-[260px] opacity-45 mix-blend-multiply rotate-[-6deg]"
              />
              <img
                src="/stamp-05.png"
                alt=""
                className="absolute bottom-5 right-4 w-[180px] opacity-30 mix-blend-multiply rotate-[4deg]"
              />
              <img
                src="/cav-01.png"
                alt=""
                className="absolute right-6 top-24 w-[90px] opacity-25 mix-blend-multiply rotate-[2deg]"
              />
            </div>

            {/* Right panel: MATERIAL LIBRARY */}
            <div
              id="library"
              className="relative overflow-hidden rounded-2xl border border-black/30 p-5 text-[#1a1a18] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
              style={{
                backgroundImage: "url('/paper-texture.png')",
                backgroundSize: "cover",
              }}
            >
              {/* grain */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
                style={{ backgroundImage: "url('/grain.png')", backgroundSize: "512px 512px" }}
              />

              <div className="relative z-10 flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-black tracking-[0.12em] text-[#7A2E26]">
                  MATERIAL LIBRARY
                </h2>
                <span className="rounded-full border border-[#7A2E26]/35 px-3 py-1 text-xs tracking-[0.18em] text-[#7A2E26]/85">
                  資料
                </span>
              </div>

              {/* material tiles */}
              <div className="relative z-10 mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { id: "NF-M01", tone: "#4C4F4D" },
                  { id: "NF-M02", tone: "#6B6E6C" },
                  { id: "NF-M03", tone: "#7A2E26" },
                  { id: "NF-M04", tone: "#2C2E2C" },
                ].map((m) => (
                  <div key={m.id} className="flex flex-col gap-2">
                    <div
                      className="h-20 rounded-xl border border-black/25 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                      style={{ background: m.tone }}
                    />
                    <div className="text-[11px] tracking-[0.16em] text-black/70">
                      {m.id}
                    </div>
                  </div>
                ))}
              </div>

              {/* icon strip */}
              <div className="relative z-10 mt-5 flex gap-3">
                <div className="flex-1 rounded-xl border border-black/25 bg-black/5 p-3 text-center text-xs font-black tracking-[0.18em] text-black/80">
                  NF
                </div>
                <div className="flex-1 rounded-xl border border-black/25 bg-black/5 p-3 text-center text-xs font-black tracking-[0.18em] text-black/80">
                  N
                </div>
                <div className="flex-1 rounded-xl border border-black/25 bg-black/5 p-3 text-center text-xs font-black tracking-[0.18em] text-black/80">
                  NF01
                </div>
              </div>

              {/* stamps + glyphs */}
              <img
                src="/stamp-01.png"
                alt=""
                className="absolute right-4 top-16 w-[210px] opacity-25 mix-blend-multiply rotate-[-3deg]"
              />
              <img
                src="/inspected-nf.png"
                alt=""
                className="absolute bottom-4 left-5 w-[180px] opacity-30 mix-blend-multiply rotate-[3deg]"
              />
              <img
                src="/stamp-06.png"
                alt=""
                className="absolute bottom-6 right-6 w-[90px] opacity-22 mix-blend-multiply rotate-[-2deg]"
              />
            </div>
          </section>

          {/* Footer */}
          <footer id="about" className="border-t border-white/10 bg-[#0f0f0f] p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm font-black tracking-[0.16em] uppercase">
                  NOKORI FOUNDRY
                </div>
                <div className="mt-2 text-sm opacity-75">
                  Resilience through pressure. Rebirth through ruin.
                </div>
              </div>
              <div className="text-xs tracking-[0.18em] opacity-70">
                <div>残 • WHAT REMAINS</div>
                <div className="mt-1">NF / SERIES ARCHIVE</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
