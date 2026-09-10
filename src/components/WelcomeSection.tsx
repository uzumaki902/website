export default function WelcomeSection() {
  return (
    <section id="about" className="relative bg-blue-wash py-24 md:py-32 px-8">
      {/* Side gradient fades for soft blue wash effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#d4dff0] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#d4dff0] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-teal mb-8">
          CONEJO VALLEY FAMILY COUNSELING
        </p>
        <h2 className="font-serif text-3xl md:text-[44px] lg:text-[50px] font-light text-charcoal leading-[1.2] mb-10">
          It&apos;s about understanding where you&apos;ve been{" "}
          <span className="font-script text-teal">&amp;</span> helping shape
          where you&apos;re headed.
        </h2>
        <p className="font-sans text-sm md:text-base text-brown-light leading-[1.8] max-w-2xl mx-auto">
          Therapy is a powerful tool for self-discovery and growth. Our
          compassionate team creates a space where you can explore your
          experiences, develop new perspectives, and build the life you want.
          Whether you&apos;re dealing with anxiety, relationship challenges, or
          simply seeking greater self-understanding, we&apos;re here to help.
        </p>
      </div>
    </section>
  );
}
