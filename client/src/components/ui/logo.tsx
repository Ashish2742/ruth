import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
          <div className="w-full h-full rounded-full bg-[#1A2348] border-2 border-[#D4AF37] flex items-center justify-center">
            <div className="text-[#D4AF37] text-2xl">R</div>
          </div>
        </div>
        <div className="ml-3">
          <h1 className="text-[#D4AF37] font-['Playfair_Display'] text-xl md:text-2xl font-bold">RUTH INTERNATIONAL</h1>
          <p className="text-gray-200 text-xs md:text-sm">WE CREATE SUCCESS</p>
        </div>
      </div>
    </Link>
  );
}
