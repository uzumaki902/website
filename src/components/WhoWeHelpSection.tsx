import Image from "next/image";

const cards = [
  {
    image: "/images/adults.jpg",
    alt: "Two women sitting on a beach looking at the ocean",
    title: "Adults",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
  },
  {
    image: "/images/couples.jpg",
    alt: "Couple embracing on the beach",
    title: "Couples",
    description:
      "Relationships require effort, and we're here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  {
    image: "/images/children.jpg",
    alt: "Children playing in the ocean waves",
    title: "Children & Teens",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
  },
];

export default function WhoWeHelpSection() {
  return (
    <section className="bg-[#FAF8F5] py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[46px] font-light text-[#3D3530] mb-12 md:mb-16">
          Who we{" "}
          <span className="font-script text-[#7A9E9F] italic text-4xl md:text-5xl lg:text-[56px] inline-block ml-1">
            help
          </span>
        </h2>

        {/* 3 Column Grid with Square Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col">
              {/* Square Image Container */}
              <div className="relative aspect-square w-full mb-6 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-xl md:text-[22px] font-light text-[#3D3530] mb-3">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="font-sans text-xs md:text-sm text-[#7A6E63] leading-[1.7]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
