

export default function Cercle() {
  return (
    <div className="fixed bottom-4 left-4 w-[60px] h-[60px]">
      
      {/* outer ring */}
      <div className="absolute inset-0 rounded-full border border-blue-500/15 shadow-xl" />

      {/* spinning system */}
      <div className="absolute inset-0 animate-spin-slow transform-gpu">
        
        {/* inner circles (scaled properly) */}
        <div className="absolute inset-4 rounded-full border border-blue-500/15 shadow-xl" />
        <div className="absolute inset-1.5 rounded-full border border-blue-500/15 shadow-xl" />

        {/* dots */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-blue-400 rounded-full shadow-[0_0_15px_#3b82f6]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-green-400 rounded-full shadow-[0_0_15px_#22c55e]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-red-400 rounded-full shadow-[0_0_15px_#ef4444]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-yellow-400 rounded-full shadow-[0_0_15px_#eab308]" />

      </div>
    </div>
  );
}
