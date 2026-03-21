import { type LucideIcon } from "lucide-react";

interface Activity {
  label: string;
}

interface SeasonCardProps {
  season: string;
  icon: LucideIcon;
  tagline: string;
  activities: Activity[];
  accentColor: string;
  bgColor: string;
}

export default function SeasonCard({
  season,
  icon: Icon,
  tagline,
  activities,
  accentColor,
  bgColor,
}: SeasonCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ backgroundColor: bgColor, border: `1px solid ${accentColor}25` }}
    >
      <div
        className="px-6 py-5 flex items-center gap-3"
        style={{ backgroundColor: `${accentColor}18` }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: accentColor }}
        >
          <Icon size={20} color="#FAF8F5" aria-hidden="true" />
        </div>
        <div>
          <h3
            className="text-lg font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            {season}
          </h3>
          <p className="text-xs" style={{ color: "#5C5C5C" }}>{tagline}</p>
        </div>
      </div>
      <ul className="px-6 py-4 space-y-2" role="list">
        {activities.map((activity) => (
          <li key={activity.label} className="flex items-center gap-2 text-sm" style={{ color: "#2C2C2C" }}>
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: accentColor }}
              aria-hidden="true"
            />
            {activity.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
