export default function QuoteBanner() {
  return (
    <section className="bg-[#1E1D1C] py-[120px] lg:py-[180px]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1200px] mx-auto text-center">
        <h2 className="font-serif text-[32px] md:text-[42px] lg:text-[52px] leading-[1.2] text-[#F9F8F6] mb-10">
          "The goal is not to stop feeling, but to feel safe enough to actually experience your life."
        </h2>
        <div className="w-12 h-px bg-[#C25E30] mx-auto mb-8"></div>
        <p className="font-sans text-[12px] md:text-[14px] tracking-[0.2em] text-[#8C857B] uppercase">
          Dr. Maya Reynolds
        </p>
      </div>
    </section>
  );
}
