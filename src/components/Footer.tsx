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
      {/* Main Footer */}
      <div className="bg-[#F7F5F0] py-[80px] px-[80px]">
        <div
          className="max-w-[1280px] mx-auto grid gap-12"
          style={{ gridTemplateColumns: "1fr 160px 240px 260px" }}
        >
          {/* Brand */}
          <div>
            <p className="font-serif text-[34px] font-light text-[#2C3A36] mb-1">
              Conejo Valley
            </p>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#62929A] mb-6">
              FAMILY COUNSELING
            </p>
            <p className="font-sans text-[14px] text-[#7A6E63] leading-[1.8] max-w-xs">
              We want to make getting started simple. You&apos;re welcome to
              come into our office in Newbury Park or schedule virtual
              appointments from anywhere in CA — whatever works best for you.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-sans text-[12px] font-semibold tracking-[0.25em] uppercase text-[#2C3A36] mb-6">
              NAVIGATE
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[14px] text-[#7A6E63] hover:text-[#62929A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Team */}
          <div>
            <h4 className="font-sans text-[12px] font-semibold tracking-[0.25em] uppercase text-[#2C3A36] mb-6">
              OUR TEAM
            </h4>
            <ul className="flex flex-col gap-3">
              {teamMembers.map((name) => (
                <li key={name}>
                  <a
                    href="#team"
                    className="font-sans text-[14px] text-[#7A6E63] hover:text-[#62929A] transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[12px] font-semibold tracking-[0.25em] uppercase text-[#2C3A36] mb-6">
              CONTACT
            </h4>
            <div className="font-sans text-[14px] text-[#7A6E63] leading-[1.8] flex flex-col gap-1">
              <p>925 Broadbeck Dr</p>
              <p>Suites 200 and 225</p>
              <p>Newbury Park, CA 91320</p>
              <p className="mt-2">
                <a
                  href="mailto:info@conejovalleycounseling.com"
                  className="hover:text-[#62929A] transition-colors"
                >
                  info@conejovalleycounseling.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+18052423120"
                  className="hover:text-[#62929A] transition-colors"
                >
                  805.242.3120
                </a>
              </p>
              <p className="mt-4 text-[13px] leading-[1.8] italic text-[#7A6E63]">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp;
                Simi Valley
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#62929A] py-4 px-[80px]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-center">
          <p className="font-sans text-[13px] text-white/90">
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
