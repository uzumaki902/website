const expertiseLeft = [
  "DISSOCIATION",
  "TRAUMA",
  "FAMILY CONFLICT",
  "SPECIAL NEEDS PARENTING",
  "DEPRESSION",
  "MARRIAGE",
];

const expertiseRight = [
  "ANXIETY",
  "RELATIONSHIPS",
  "CHILDREN",
  "TEENS",
  "INTIMACY & CONNECTION",
  "…AND MORE.",
];

export default function ExpertiseSection() {
  return (
    <section id="specialties" className="relative bg-blue-wash py-20 md:py-28 px-8">
      {/* Side gradient fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#d4dff0] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#d4dff0] to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_1fr] gap-8 md:gap-12">
          {/* Left – Heading */}
          <div className="md:pt-4">
            <h2 className="font-serif text-3xl md:text-[40px] font-light text-charcoal leading-[1.2]">
              Our areas of
            </h2>
            <p className="font-script text-teal text-4xl md:text-[48px] -mt-1">
              expertise
            </p>
          </div>

          {/* Middle – List */}
          <div className="flex flex-col">
            {expertiseLeft.map((item) => (
              <div key={item} className="py-5 border-b border-sand">
                <span className="font-sans text-xs md:text-[13px] tracking-[0.2em] text-charcoal">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Right – List */}
          <div className="flex flex-col">
            {expertiseRight.map((item) => (
              <div key={item} className="py-5 border-b border-sand">
                <span className="font-sans text-xs md:text-[13px] tracking-[0.2em] text-charcoal">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
