const hero = {
  badge: "Kara Kartal Portalı",
  title: "Beşiktaş'ın kalbi burada atıyor",
  description:
    "En güncel skorlar, fikstür notları ve öne çıkan istatistiklerle BJK taraftarının dijital buluşma noktası.",
  ctaPrimary: {
    label: "Maç Merkezi",
    href: "https://www.bjk.com.tr/tr/mac-merkezi",
  },
  ctaSecondary: {
    label: "Kulüp Resmi Sitesi",
    href: "https://www.bjk.com.tr",
  },
};

const latestMatches = [
  {
    opponent: "Göztepe",
    competition: "Trendyol Süper Lig · 23. Hafta",
    date: "22 Şubat 2026 · 20:00",
    venue: "Tüpraş Stadyumu",
    homeOrAway: "İstanbul",
    score: "4 - 0",
    summary:
      "Beşiktaş yüksek presle başladı, Ghezzal'ın frikiğiyle kilidi açtı ve fark geldi.",
    source: "TheSportsDB",
  },
];

const upcomingMatches = [
  {
    opponent: "Trabzonspor",
    date: "1 Mart 2026 · 19:00",
    venue: "Papara Park",
    note: "Deplasmanda kritik puan savaşı",
  },
  {
    opponent: "Galatasaray",
    date: "8 Mart 2026 · 20:00",
    venue: "Tüpraş Stadyumu",
    note: "Derbi hazırlıkları başladı",
  },
];

const stats = [
  {
    label: "Son 5 maç",
    value: "4G 0B 1M",
  },
  {
    label: "Lig puanı",
    value: "43",
  },
  {
    label: "Gol ortalaması",
    value: "1.9 / maç",
  },
];

const news = [
  {
    title: "Şenol Güneş'ten maç sonu açıklaması",
    description:
      '“Kartal\'ın oyunu 90 dakika kontrol etmesi beni mutlu etti” diyerek takımı tebrik etti.',
  },
  {
    title: "Genç yetenek Arda Kılıç parlıyor",
    description:
      "Son iki maçta yaptığı asistlerle ofansif rotasyonda kalıcı olacağını gösterdi.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white">
      <header className="border-b border-white/10 bg-black/60 py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-6 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-white/70">
            {hero.badge}
          </span>
          <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
            {hero.title}
          </h1>
          <p className="max-w-3xl text-lg text-white/70">{hero.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <a
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-white/80"
              href={hero.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:bg-white/10"
              href={hero.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-200">
              Son Skor
            </p>
            {latestMatches.map((match) => (
              <div key={match.opponent} className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-2xl font-semibold">Beşiktaş - {match.opponent}</h2>
                  <span className="text-4xl font-black text-emerald-300">
                    {match.score}
                  </span>
                </div>
                <p className="text-sm text-white/60">{match.competition}</p>
                <dl className="space-y-1 text-sm text-white/70">
                  <div className="flex justify-between">
                    <dt>Tarih</dt>
                    <dd>{match.date}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Stat</dt>
                    <dd>{match.venue}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Şehir</dt>
                    <dd>{match.homeOrAway}</dd>
                  </div>
                </dl>
                <p className="text-sm text-white/80">{match.summary}</p>
                <p className="text-xs text-white/40">Kaynak: {match.source}</p>
              </div>
            ))}
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-200">
              Fikstür Akışı
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {upcomingMatches.map((fixture) => (
                <div
                  key={fixture.opponent}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5"
                >
                  <p className="text-sm text-white/60">{fixture.date}</p>
                  <h3 className="mt-1 text-2xl font-semibold">
                    Beşiktaş vs {fixture.opponent}
                  </h3>
                  <p className="text-sm text-white/70">{fixture.venue}</p>
                  <p className="mt-3 text-sm text-white/80">{fixture.note}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {stats.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 to-white/0 p-6 text-center"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-black">{item.value}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                Kartal Gündemi
              </p>
              <h2 className="text-3xl font-semibold">Kulüpten öne çıkanlar</h2>
            </div>
            <span className="text-xs text-white/40">
              Taraftar bülteni · Güncellenme: 1 Mart 2026
            </span>
          </div>
          <div className="mt-6 space-y-6">
            {news.map((item) => (
              <article key={item.title} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
