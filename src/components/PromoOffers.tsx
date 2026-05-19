"use client";

const offers = [
  {
    emoji: "🎁",
    title: "Velkomstbonus",
    value: "50.000",
    unit: "Virtuelle Mønter",
    desc: "Modtag straks 50.000 virtuelle mønter ved tilmelding, helt uden betingelser.",
    color: "from-yellow-500 to-orange-600",
    badge: "Ny spiller",
  },
  {
    emoji: "📅",
    title: "Daglig Bonus",
    value: "10.000",
    unit: "Mønter / Dag",
    desc: "Log ind dagligt på platformen og hent din garanterede loyalitetsbonus.",
    color: "from-purple-600 to-violet-700",
    badge: "Dagligt",
  },
  {
    emoji: "👥",
    title: "Inviter en ven",
    value: "25.000",
    unit: "Per Invitation",
    desc: "Modtag 25.000 mønter for hver inviteret ven, der tilmelder sig.",
    color: "from-green-600 to-emerald-700",
    badge: "Socialt",
  },
  {
    emoji: "🏆",
    title: "Ugentlige Turneringer",
    value: "1.000.000",
    unit: "Samlet Præmiepulje",
    desc: "Deltag i vores ugentlige turneringer og konkurrer om den store præmie.",
    color: "from-red-600 to-rose-700",
    badge: "Konkurrence",
  },
];

const vipPerks = [
  "Månedlig bonus på 100.000 mønter",
  "Dedikeret kontomanager",
  "Private VIP-turneringer",
  "Særlige personlige præmier",
];

export default function PromoOffers() {
  return (
    <section id="kampagner" className="py-20 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
            Eksklusive Tilbud
          </span>
          <h2 className="text-4xl font-black mt-2 mb-4">
            Bonusser &amp; <span className="gold-text">Kampagner</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Vi belønner hver spiller! Du får daglige bonusser, særlige kampagner og
            turneringer med store præmier i virtuelle mønter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="card-bg rounded-2xl p-6 relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span className={`absolute top-3 right-3 bg-gradient-to-r ${offer.color} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                {offer.badge}
              </span>

              <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                {offer.emoji}
              </div>

              <h3 className="font-bold text-white mb-1">{offer.title}</h3>

              <div className={`text-2xl font-black bg-gradient-to-r ${offer.color} bg-clip-text text-transparent`}>
                {offer.value}
              </div>
              <div className="text-xs text-gray-400 mb-3">{offer.unit}</div>

              <p className="text-gray-500 text-sm leading-relaxed">{offer.desc}</p>

              <button className={`mt-4 w-full py-2 rounded-xl text-sm font-bold bg-gradient-to-r ${offer.color} text-white hover:opacity-90 transition-opacity`}>
                Hent Nu
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl p-8 relative overflow-hidden bg-gradient-to-r from-purple-900/50 to-yellow-900/30 border border-yellow-500/20">
          <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-2">
                Eksklusivt Program
              </div>
              <h3 className="text-3xl font-black text-white mb-3">
                Kongelig <span className="gold-text">VIP-Klub</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Bliv medlem af vores VIP-klub og få eksklusive bonusser, prioriteret
                support og invitationer til særlige begivenheder.
              </p>
              <ul className="space-y-2">
                {vipPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-yellow-400">✓</span> {perk}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">👑</div>
              <button className="btn-gold px-8 py-3 rounded-xl font-bold">
                Ansøg om VIP
              </button>
              <p className="text-gray-500 text-xs mt-2">
                Udvælgelse baseret på aktivitet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
