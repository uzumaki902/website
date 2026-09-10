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
    <section className="bg-off-white py-20 md:py-28 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card) => (
            <div key={card.title} className="group">
              {/* Image */}
              <div className="relative aspect-[4/3] mb-8 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Title */}
              <h3 className="font-serif text-2xl md:text-[28px] font-light text-charcoal mb-5">
                {card.title}
              </h3>
              {/* Description */}
              <p className="font-sans text-sm md:text-[15px] text-brown-light leading-[1.8]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
