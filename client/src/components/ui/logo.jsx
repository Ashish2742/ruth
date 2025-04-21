import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer group">
        <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
          <div className="w-full h-full rounded-full bg-[var(--primary)] border-2 border-[var(--gold)] flex items-center justify-center overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[var(--gold)] opacity-25 rounded-full blur-md group-hover:opacity-40 transition-opacity"></div>
            <div className="text-[var(--gold)] text-2xl font-bold relative z-10">R</div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--gold)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="ml-3">
          <h1 className="text-[var(--gold)] font-['Playfair_Display'] text-xl md:text-2xl font-bold tracking-wide">
            RUTH <span className="text-white">INTERNATIONAL</span>
          </h1>
          <p className="text-white/80 text-xs tracking-widest uppercase">We Create Success</p>
        </div>
      </div>
    </Link>
  );
}