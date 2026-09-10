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
    <footer>
      {/* Main Footer */}
      <div className="bg-footer-bg py-16 md:py-20 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-3xl md:text-[36px] font-light text-charcoal mb-1">
              Conejo Valley
            </p>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-brown-light mb-6">
              FAMILY COUNSELING
            </p>
            <p className="font-sans text-sm text-brown-light leading-[1.8]">
              We want to make getting started simple. You&apos;re welcome to
              come into our office in Newbury Park or schedule virtual
              appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-charcoal mb-6">
              NAVIGATE
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-brown-light hover:text-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Team */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-charcoal mb-6">
              OUR TEAM
            </h4>
            <ul className="flex flex-col gap-3">
              {teamMembers.map((name) => (
                <li key={name}>
                  <a
                    href="#team"
                    className="font-sans text-sm text-brown-light hover:text-teal transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-charcoal mb-6">
              CONTACT
            </h4>
            <div className="font-sans text-sm text-brown-light leading-[1.8] flex flex-col gap-1">
              <p>925 Broadbeck Dr</p>
              <p>Suites 200 and 225</p>
              <p>Newbury Park, CA 91320</p>
              <p className="mt-2">
                <a
                  href="mailto:info@conejovalleycounseling.com"
                  className="hover:text-teal transition-colors"
                >
                  info@conejovalleycounseling.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+18052423120"
                  className="hover:text-teal transition-colors"
                >
                  805.242.3120
                </a>
              </p>
              <p className="mt-4 text-xs leading-[1.8] italic">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp;
                Simi Valley
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-footer-bar via-teal to-teal-light py-4 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-2">
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
