import { Link } from "wouter";
import logo from "../../lib/images/ruth_icon.png";
import ruthname from "../../lib/images/ruth-international.jpeg";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-4 cursor-pointer group">
        {/* Circular Logo */}
        <div className="w-20 h-20 rounded-full overflow-hidden bg-[#1A2348] p-1 flex items-center justify-center shadow-md">
          <img 
            src={logo} 
            alt="Ruth International Logo" 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>

        {/* Brand Name Image (now bigger) */}
        <img 
          src={ruthname} 
          alt="Ruth International Name" 
          className="h-14 sm:h-16 object-contain rounded-full" 
        />
      </div>
    </Link>
  );
}