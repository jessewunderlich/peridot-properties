import { type LucideIcon } from "lucide-react";

interface AmenityIconProps {
  icon: LucideIcon;
  label: string;
  description?: string;
}

export default function AmenityIcon({ icon: Icon, label, description }: AmenityIconProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl transition-shadow hover:shadow-md"
      style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2315" }}>
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
        style={{ backgroundColor: "#6B8E2315" }}
      >
        <Icon size={22} style={{ color: "#6B8E23" }} aria-hidden="true" />
      </div>
      <span className="text-sm font-semibold" style={{ color: "#2C2C2C" }}>{label}</span>
      {description && (
        <span className="text-xs mt-1 leading-relaxed" style={{ color: "#2C2C2C80" }}>
          {description}
        </span>
      )}
    </div>
  );
}
