import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#FAFAF9] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-['Rubik',sans-serif] font-black text-[80px] sm:text-[120px] text-[#CA8A04] leading-none">404</p>
        <p className="font-['Rubik',sans-serif] font-bold text-[22px] sm:text-[28px] text-[#1C1917] mt-4">Page Not Found</p>
        <p className="font-['Nunito_Sans',sans-serif] text-[14px] sm:text-[15px] text-[#44403C] mt-3 max-w-sm mx-auto">The page you are looking for doesn't exist. Browse our collections or visit us in store.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-[#CA8A04] text-white rounded-full px-7 py-3.5 font-['Nunito_Sans',sans-serif] font-semibold text-[14px] hover:bg-[#b50967] transition-colors">Back to Home</Link>
          <Link to="/collections" className="border-2 border-[#1C1917] text-[#1C1917] rounded-full px-7 py-3.5 font-['Nunito_Sans',sans-serif] font-semibold text-[14px] hover:bg-[#1C1917] hover:text-white transition-colors">Browse Collections</Link>
        </div>
      </div>
    </div>
  );
}
