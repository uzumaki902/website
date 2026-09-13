export default function ExpertiseSection() {
  const methods = [
    "Cognitive Behavioral Therapy (CBT)",
    "Eye Movement Desensitization and Reprocessing (EMDR)",
    "Mindfulness-Based Stress Reduction",
    "Somatic and Body-Oriented Therapies",
    "Psychodynamic Therapy",
    "Depth-Oriented Processing"
  ];

  return (
    <section id="approach" className="py-[120px] lg:py-[160px] bg-[#F9F8F6]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1200px] mx-auto">
        <h2 className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-4 text-center">
          Clinical Approach
        </h2>
        <h3 className="font-serif text-[42px] md:text-[56px] text-[#1E1D1C] leading-none mb-16 text-center">
          Evidence-Based Methods
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 border-t border-[#E5E2DC]">
          {methods.map((method, index) => (
            <div key={index} className="py-6 border-b border-[#E5E2DC] flex items-center justify-between">
              <span className="font-sans text-[15px] text-[#3A3632] tracking-wide">
                {method}
              </span>
              <span className="text-[#C25E30] text-[18px]">&rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
