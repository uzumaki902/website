const specialties = [
  {
    title: "Trauma",
    description:
      "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay \"stuck,\" and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
    link: "#contact",
  },
  {
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    link: "#contact",
  },
  {
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    link: "#contact",
  },
  {
    title: "Special Needs Parenting",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    link: "#contact",
  },
];

export default function SpecialtiesSection() {
  return (
    <section id="specialties-cards" className="bg-white py-20 md:py-28 px-8 md:px-16 lg:px-24 border-t border-[#E8E0D2]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left – Heading */}
          <div className="lg:pt-2">
            <h2 className="font-serif text-3xl md:text-[38px] font-light text-[#3D3530] leading-tight">
              Our{" "}
              <span className="font-script text-[#7A9E9F] italic text-4xl md:text-[50px] inline-block mx-1">
                specialties
              </span>{" "}
              include...
            </h2>
          </div>

          {/* Right – 2x2 Grid of Specialty Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {specialties.map((item) => (
              <div key={item.title} className="flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl md:text-[26px] font-light text-[#3D3530] mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#7A6E63] leading-[1.8] mb-8">
                    {item.description}
                  </p>
                </div>
                <div>
                  <a
                    href={item.link}
                    className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-[#7A6E63] border-b border-[#7A6E63] pb-1 hover:text-[#7A9E9F] hover:border-[#7A9E9F] transition-colors"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
