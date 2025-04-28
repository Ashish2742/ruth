import { Link } from "wouter";
import logo from "../../lib/images/ruth_icon.png";
import ruthname from "../../lib/images/ruthname.png";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-4 cursor-pointer group">
        {/* Logo Image */}
        <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-[#1A2348] p-1">
          <img 
            src={logo} 
            alt="Ruth International Logo" 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center leading-tight">
          {/* RUTH text */}
          <h1 className="text-[#fdd05a] font-bold text-xl sm:text-2xl uppercase font-serif">
            RUTH
          </h1>

          {/* INTERNATIONAL text */}
          <h2 className="text-[#fdd05a] font-bold text-xl sm:text-2xl uppercase font-serif tracking-widest">
            INTERNATIONAL
          </h2>

          {/* Divider and Slogan */}
          <div className="flex items-center justify-center mt-1 space-x-3">
            {/* Left lines */}
            <div className="flex flex-col items-end space-y-0.5">
              <div className="w-3 border-t-2 border-[#fdd05a]" /> 
              <div className="w-6 border-t-2 border-[#fdd05a]" />
              <div className="w-6 border-t-2 border-[#fdd05a]" />
            </div>

            {/* Slogan text */}
            <p className="text-[#fdd05a] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-light">
              WE CREATE SUCCESS
            </p>

            {/* Right lines */}
            <div className="flex flex-col items-start space-y-0.5">
              <div className="w-3 border-t-2 border-[#fdd05a]" />
              <div className="w-6 border-t-2 border-[#fdd05a]" />
              <div className="w-6 border-t-2 border-[#fdd05a]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}