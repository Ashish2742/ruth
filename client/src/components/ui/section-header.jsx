import { cn } from "@/lib/utils";

export default function SectionHeader({ 
  title, 
  centered = false, 
  color = "navy" 
}) {
  const colorClass = color === "gold" ? "text-[var(--gold)]" : "text-[var(--primary)]";
  
  return (
    <div className={cn("flex items-center mb-6", centered && "justify-center")}>
      <div className="w-12 h-1 bg-[var(--gold)]"></div>
      <p className={cn("mx-4 font-medium uppercase tracking-widest text-sm", colorClass)}>
        {title}
      </p>
      {centered && <div className="w-12 h-1 bg-[var(--gold)]"></div>}
    </div>
  );
}