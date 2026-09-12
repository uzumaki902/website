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
    <section className="bg-[#F7F5F0] py-[120px] px-[80px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <h2 className="font-serif text-[46px] font-light text-[#2C3A36] mb-16">
          Who we{" "}
          <span className="font-script text-[#62929A] italic text-[56px] inline-block ml-1">
            help
          </span>
        </h2>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-3 gap-8">
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
              <h3 className="font-serif text-[28px] font-light text-[#2C3A36] mb-3">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="font-sans text-[15px] text-[#7A6E63] leading-[1.7]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
