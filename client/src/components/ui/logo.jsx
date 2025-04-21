import { Link } from "wouter";

export default function Logo({ footer = false }) {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <div className="relative">
          <div className={`font-bold text-2xl ${footer ? "text-white" : ""}`}>
            <span className="text-[var(--gold)]">RUTH</span>
            <span className={footer ? "text-white" : "text-[var(--primary)]"}>
              INTERNATIONAL
            </span>
          </div>
          <div 
            className={`text-xs tracking-widest uppercase ${
              footer ? "text-white/70" : "text-[var(--text-light)]"
            }`}
          >
            Global Careers & Training
          </div>
        </div>
      </div>
    </Link>
  );
}