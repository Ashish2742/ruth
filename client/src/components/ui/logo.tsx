import { Link } from "wouter";
import logo from "../../lib/images/ruth_icon.png";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-4 cursor-pointer group">
        {/* Rounded logo container */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] flex items-center justify-center bg-[#1A2348] p-1">
          <img 
            src={logo} 
            alt="Ruth International Logo" 
            className="w-full h-full object-cover rounded-full"  // This ensures the image is rounded
          />
        </div>
        
        {/* Text content */}
        <div className="text-left">
          <h1 className="text-[#D4AF37] font-bold text-2xl sm:text-3xl uppercase font-serif leading-tight">
            RUTH INTERNATIONAL
          </h1>
          <div className="w-full h-[1px] bg-[#D4AF37] my-1 opacity-80"></div>
          <p className="text-white text-xs sm:text-sm tracking-[0.2em] font-light">
            WE CREATE SUCCESS
          </p>
        </div>
      </div>
    </Link>
  );
}