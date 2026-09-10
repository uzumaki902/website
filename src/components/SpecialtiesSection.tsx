const specialties = [
  {
    title: "Trauma",
    description:
      "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay \"stuck,\" and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
    link: "#",
  },
  {
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    link: "#",
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="bg-off-white py-20 md:py-28 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_1fr] gap-8 md:gap-12">
          {/* Left – Heading */}
          <div>
            <h2 className="font-serif text-3xl md:text-[40px] font-light text-charcoal leading-[1.2]">
              Our <span className="font-script text-teal">specialties</span>
              <br />
              include...
            </h2>
          </div>

          {/* Specialty Cards */}
          {specialties.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-charcoal mb-6">
                {item.title}
              </h3>
              <p className="font-sans text-sm md:text-[15px] text-brown-light leading-[1.9] mb-8">
                {item.description}
              </p>
              <a
                href={item.link}
                className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-charcoal border-b-2 border-teal pb-1 hover:text-teal transition-colors"
              >
                LEARN MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
