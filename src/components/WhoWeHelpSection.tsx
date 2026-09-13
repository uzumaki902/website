export default function WhoWeHelpSection() {
  const issues = [
    {
      number: "01",
      title: "ANXIETY & PANIC",
      description: "Constantly bracing for something to go wrong. The tension in your body, the inability to sleep, the mind that won't turn off even when everything is objectively fine."
    },
    {
      number: "02",
      title: "TRAUMA & EMDR",
      description: "Understanding what your past is still asking of you. Addressing single-incident events or complex, long-standing patterns that keep you feeling unsafe or disconnected."
    },
    {
      number: "03",
      title: "BURNOUT & PERFECTIONISM",
      description: "When achievement stops feeling like enough. For professionals, entrepreneurs, and creatives who have pushed through stress for so long they no longer recognize themselves."
    }
  ];

  return (
    <section id="specialties" className="py-[120px] lg:py-[160px] bg-[#F9F8F6]">
      <div className="px-6 md:px-10 lg:px-[80px] max-w-[1600px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-b border-[#E5E2DC] pb-8">
          <div>
            <h2 className="font-sans text-[11px] text-[#8C857B] tracking-[0.25em] uppercase mb-4">
              What Brings People Here
            </h2>
            <h3 className="font-serif text-[42px] md:text-[56px] text-[#1E1D1C] leading-none">
              Areas of Focus
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {issues.map((issue) => (
            <div key={issue.number} className="flex flex-col border-t border-[#E5E2DC] pt-8 md:border-t-0 md:pt-0">
              <span className="font-sans text-[14px] text-[#8C857B] tracking-widest mb-6 block">
                {issue.number}
              </span>
              <h4 className="font-serif text-[28px] text-[#1E1D1C] mb-4">
                {issue.title}
              </h4>
              <p className="font-sans text-[15px] text-[#3A3632] leading-relaxed">
                {issue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
