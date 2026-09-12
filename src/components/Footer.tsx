const teamMembers = [
  "Jennifer Anderson",
  "Heather Williams-Baumgart",
  "Autumn Bodily",
  "Michaela Gorospe",
  "Candace Bletscher",
  "Samantha Johnson",
  "Andrea Watkins",
  "Rosa Gomez",
  "Chad Flores",
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer (White Background) */}
      <div className="bg-white py-16 md:py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-3xl md:text-[36px] font-light text-[#3D3530] mb-1">
              Conejo Valley
            </p>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-teal mb-6">
              FAMILY COUNSELING
            </p>
            <p className="font-sans text-xs md:text-sm text-[#7A6E63] leading-[1.8] max-w-xs">
              We want to make getting started simple. You&apos;re welcome to
              come into our office in Newbury Park or schedule virtual
              appointments from anywhere in CA?"whatever works best for you.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#3D3530] mb-6">
              NAVIGATE
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-xs md:text-sm text-[#7A6E63] hover:text-[#7A9E9F] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Team */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#3D3530] mb-6">
              OUR TEAM
            </h4>
            <ul className="flex flex-col gap-3">
              {teamMembers.map((name) => (
                <li key={name}>
                  <a
                    href="#team"
                    className="font-sans text-xs md:text-sm text-[#7A6E63] hover:text-[#7A9E9F] transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#3D3530] mb-6">
              CONTACT
            </h4>
            <div className="font-sans text-xs md:text-sm text-[#7A6E63] leading-[1.8] flex flex-col gap-1">
              <p>925 Broadbeck Dr</p>
              <p>Suites 200 and 225</p>
              <p>Newbury Park, CA 91320</p>
              <p className="mt-2">
                <a
                  href="mailto:info@conejovalleycounseling.com"
                  className="hover:text-[#7A9E9F] transition-colors"
                >
                  info@conejovalleycounseling.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+18052423120"
                  className="hover:text-[#7A9E9F] transition-colors"
                >
                  805.242.3120
                </a>
              </p>
              <p className="mt-4 text-xs leading-[1.8] italic text-[#7A6E63]">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp;
                Simi Valley
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Teal Accent #8AABAB Background) */}
      <div className="bg-[#8AABAB] py-3.5 px-8">
        <div className="max-w-[1240px] mx-auto flex items-center justify-center">
          <p className="font-sans text-xs text-white/90">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            {" | "}
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            {" | "}
            <span>Website by Walker Strategy Co.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
