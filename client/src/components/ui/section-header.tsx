import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  centered?: boolean;
  color?: "navy" | "gold";
}

export default function SectionHeader({ 
  title, 
  centered = false, 
  color = "navy" 
}: SectionHeaderProps) {
  const colorClass = color === "gold" ? "text-[#D4AF37]" : "text-[#1A2348]";
  
  return (
    <div className={cn("flex items-center mb-4", centered && "justify-center")}>
      <div className="w-12 h-1 bg-[#D4AF37]"></div>
      <p className={cn("mx-4 font-medium uppercase tracking-wider", colorClass)}>
        {title}
      </p>
      {centered && <div className="w-12 h-1 bg-[#D4AF37]"></div>}
    </div>
  );
}
