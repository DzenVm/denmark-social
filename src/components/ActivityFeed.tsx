"use client";

const recentActivity = [
  { user: "Lars K.", game: "Egyptens Skatte", amount: "125.000", emoji: "🏺" },
  { user: "Mette S.", game: "Kleopatras Guld", amount: "88.500", emoji: "👑" },
  { user: "Kasper M.", game: "Aztekernes Eventyr", amount: "210.000", emoji: "🌿" },
  { user: "Sofie H.", game: "Bonanza Hjul", amount: "55.000", emoji: "🎰" },
  { user: "Anders B.", game: "Diamant Slots", amount: "340.000", emoji: "💎" },
  { user: "Emma N.", game: "Stjerne Spil", amount: "92.000", emoji: "⭐" },
  { user: "Christian L.", game: "Egyptens Skatte", amount: "175.000", emoji: "🏺" },
  { user: "Julie R.", game: "Kleopatras Guld", amount: "430.000", emoji: "👑" },
  { user: "Thomas P.", game: "Aztekernes Eventyr", amount: "68.000", emoji: "🌿" },
  { user: "Frederik J.", game: "Bonanza Hjul", amount: "295.000", emoji: "🎰" },
];

export default function ActivityFeed() {
  const doubled = [...recentActivity, ...recentActivity];

  return (
    <div className="bg-[#0D0D18] border-y border-[#1E1E2E] py-3 overflow-hidden">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 bg-green-500 text-black text-xs font-black px-3 py-1.5 rounded-r-lg">
          LIVE
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex gap-8 marquee-inner whitespace-nowrap">
            {doubled.map((entry, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm">
                <span>{entry.emoji}</span>
                <span className="text-gray-400">{entry.user}</span>
                <span className="text-gray-500">vandt</span>
                <span className="text-yellow-400 font-bold">{entry.amount} mønter</span>
                <span className="text-gray-600">i</span>
                <span className="text-purple-400">{entry.game}</span>
                <span className="text-gray-700 ml-4">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
