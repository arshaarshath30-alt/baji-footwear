import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#faf7f2] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-['Playfair_Display',serif] font-black text-[80px] sm:text-[120px] text-[#d10b78] leading-none">404</p>
        <p className="font-['Playfair_Display',serif] font-bold text-[22px] sm:text-[28px] text-[#1a1a2e] mt-4">Page Not Found</p>
        <p className="font-['Inter',sans-serif] text-[14px] sm:text-[15px] text-[#4a4a5c] mt-3 max-w-sm mx-auto">The page you are looking for doesn't exist. Browse our collections or visit us in store.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-[#d10b78] text-white rounded-full px-7 py-3.5 font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#b50967] transition-colors">Back to Home</Link>
          <Link to="/collections" className="border-2 border-[#1a1a2e] text-[#1a1a2e] rounded-full px-7 py-3.5 font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#1a1a2e] hover:text-white transition-colors">Browse Collections</Link>
        </div>
      </div>
    </div>
  );
}
