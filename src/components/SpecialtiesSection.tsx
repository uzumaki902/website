export default function SpecialtiesSection() {
  const secondaryFocuses = [
    "High-Functioning Depression",
    "Life Transitions & Adjustment",
    "Relational Patterns & Boundaries",
    "Imposter Syndrome & Career Stress"
  ];

  return (
    <section className="py-[100px] bg-[#F9F8F6]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1200px] mx-auto text-center">
        <h2 className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-12">
          Additional Areas of Practice
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {secondaryFocuses.map((focus, index) => (
            <span key={index} className="font-sans text-[14px] text-[#3A3632] tracking-wider uppercase border border-[#E5E2DC] px-6 py-3">
              {focus}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
