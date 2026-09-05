import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#9a6338]/[0.035] blur-[140px]" />
        <div className="absolute right-[5%] top-[35%] h-[500px] w-[500px] rounded-full bg-[#c58a55]/[0.035] blur-[160px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2">
        <div className="flex h-16 items-center justify-between rounded-full border border-white/[0.10] bg-[#090909]/85 px-5 shadow-2xl backdrop-blur-xl sm:px-7">
          {/* Logo */}
          <a
            href="#home"
            className="font-serif text-2xl font-semibold leading-none text-[#d6b06a] transition-colors duration-300 hover:text-[#f0cf8a]"
          >
            V
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-[#b77b45]/60 px-5 py-2.5 text-sm text-white transition-all duration-300 hover:border-[#d6a16a] hover:bg-[#b77b45]/10"
          >
            Let's Talk
            <span className="text-[#d6a16a] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:pt-28"
      >
        {/* Portrait
            Mobile: FIRST
            Desktop: RIGHT
        */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[420px] lg:max-w-[min(32vw,420px)]">
            {/* Warm portrait glow */}
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[#a66d3d]/[0.07] blur-[80px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#11100f] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
              <Image
                src="/profilepic.png"
                alt="V. Sai Durga Prasad"
                width={1024}
                height={1536}
                priority
                className="h-auto w-full object-cover"
              />

              {/* Founder identity tag */}
              <div className="absolute bottom-5 left-5 z-20 rounded-2xl border border-[#b77b45]/45 bg-[#080706]/75 px-5 py-3.5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d6a15f] shadow-[0_0_10px_rgba(214,161,95,0.7)]" />
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#d6a15f]">
                    Founder of VRLS Productions
                  </p>
                </div>

                <p className="mt-1.5 text-sm font-medium tracking-wide text-white/90">
                  V. Sai Durga Prasad
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About content
            Desktop: LEFT
            Mobile: BELOW portrait
        */}
        <div
          id="about"
          className="order-2 flex flex-col justify-center lg:order-1"
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-9 bg-[#c18a57]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c18a57]">
              About Me
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-2xl font-serif text-[clamp(3rem,5vw,5.2rem)] leading-[0.94] tracking-[-0.035em] text-[#c18a57]">
            Founder. Developer.
            <br />
            Student. Creator.
          </h1>

          {/* Introduction */}
          <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-7 sm:text-base">
            <p className="text-white/85">
              I'm <span className="text-[#c18a57]">V. Sai Durga Prasad</span>,
              the Founder and Developer of{" "}
              <span className="text-white">VRLS Productions</span> — a
              creative technology initiative focused on building digital
              products, modern web experiences, and meaningful ideas.
            </p>

            <p className="text-white/55">
              I'm a final-year B.Tech student in{" "}
              <span className="text-[#c18a57]">
                Artificial Intelligence &amp; Data Science
              </span>
              , exploring software, design, AI, applications, apps, games,
              and the ideas that turn into real products.
            </p>
          </div>

          {/* Personal statement */}
          <p className="mt-6 font-serif text-lg italic tracking-wide text-[#c18a57]">
            I build. I create. I learn. I keep going.
          </p>

          {/* Identity highlights */}
          <div className="mt-9 grid max-w-2xl grid-cols-1 border-y border-white/[0.08] sm:grid-cols-3">
            <div className="border-b border-white/[0.08] py-5 sm:border-b-0 sm:border-r sm:pr-5">
              <div className="mb-2 text-xl text-[#c18a57]">⌁</div>
              <p className="text-sm font-medium text-white/85">
                Founder &amp; Developer
              </p>
              <p className="mt-1 text-xs text-white/40">
                VRLS Productions
              </p>
            </div>

            <div className="border-b border-white/[0.08] py-5 sm:border-b-0 sm:border-r sm:px-5">
              <div className="mb-2 text-xl text-[#c18a57]">◇</div>
              <p className="text-sm font-medium text-white/85">
                B.Tech Final Year
              </p>
              <p className="mt-1 text-xs text-white/40">
                AI &amp; Data Science
              </p>
            </div>

            <div className="py-5 sm:pl-5">
              <div className="mb-2 text-xl text-[#c18a57]">✦</div>
              <p className="text-sm font-medium text-white/85">
                Passionate About
              </p>
              <p className="mt-1 text-xs text-white/40">
                Tech, Design &amp; Impact
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-[#b77b45]/70 px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_35px_rgba(167,103,55,0.10)] transition-all duration-300 hover:border-[#d6a16a] hover:bg-[#b77b45]/10 hover:shadow-[0_0_45px_rgba(167,103,55,0.18)]"
            >
              Let's Build Together
              <span className="text-[#d6a16a] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>


      {/* Work */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-5 pb-28 pt-24 sm:px-8 lg:px-10"
      >
        {/* Section intro */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[#c18a57]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c18a57]">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl font-serif text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.04em] text-[#f1ede7]">
              Building ideas
              <br />
              <span className="text-[#c18a57]">into reality.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45 lg:pb-2">
              A selection of products, applications, and experiments that I
              have built or am currently developing.
            </p>
          </div>
        </div>

        {/* Project 01 — Completed */}
        <div className="space-y-5">

          <article className="group relative overflow-hidden rounded-[2rem] border border-[#c18a57]/30 bg-[#090908] transition-all duration-500 hover:border-[#c18a57]/50 hover:shadow-[0_30px_100px_rgba(193,138,87,0.08)]">
            <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#c18a57]/[0.04] blur-3xl transition-all duration-700 group-hover:bg-[#c18a57]/[0.09]" />

            <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[110px_1fr_auto] lg:items-center lg:p-10">

              <div>
                <span className="text-[11px] tracking-[0.28em] text-[#c18a57]">
                  01
                </span>

                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#c18a57]">
                  Completed
                </p>
              </div>

              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#c18a57]/30 bg-[#c18a57]/[0.06] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#c18a57]">
                    Digital Products &amp; Solutions
                  </span>

                  <span className="text-xs text-white/30">
                    VLN Labs
                  </span>
                </div>

                <h3 className="font-serif text-3xl tracking-tight text-[#f1ede7] sm:text-4xl">
                  VLN Labs
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
                  A digital products and solutions platform built to present
                  technology products, custom development services, and
                  digital experiences through a modern web presence.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "Digital Products",
                    "Custom Solutions",
                    "Full Stack",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] text-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex lg:justify-end">
                <a
                  href="https://vlnlabs.vrlss.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/[0.12] px-5 py-3 text-sm text-white/70 transition-all duration-300 hover:border-[#c18a57]/50 hover:text-[#c18a57]"
                >
                  Visit
                  <span className="text-[#c18a57]">↗</span>
                </a>
              </div>
            </div>
          </article>

          {/* Project 02 — In Development */}
          <article className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#090908] transition-all duration-500 hover:border-[#c18a57]/35 hover:shadow-[0_30px_100px_rgba(193,138,87,0.06)]">
            <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#c18a57]/[0.025] blur-3xl transition-all duration-700 group-hover:bg-[#c18a57]/[0.07]" />

            <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[110px_1fr_auto] lg:items-center lg:p-10">

              <div>
                <span className="text-[11px] tracking-[0.28em] text-[#c18a57]">
                  02
                </span>

                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  In Development
                </p>
              </div>

              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/[0.09] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/45">
                    AI · Education
                  </span>

                  <span className="text-xs text-white/30">
                    Currently Developing
                  </span>
                </div>

                <h3 className="font-serif text-3xl tracking-tight text-[#f1ede7] sm:text-4xl">
                  CyberMentor
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                  An AI-driven learning platform currently under development,
                  exploring intelligent guidance, interactive learning, and
                  technology-assisted education.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Web",
                    "Interactive Learning",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] text-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex lg:justify-end">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-5 py-3 text-sm text-white/35">
                  In Progress
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c18a57]" />
                </span>
              </div>
            </div>
          </article>

          {/* Project 03 — In Development */}
          <article className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#090908] transition-all duration-500 hover:border-[#c18a57]/35 hover:shadow-[0_30px_100px_rgba(193,138,87,0.06)]">
            <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#c18a57]/[0.025] blur-3xl transition-all duration-700 group-hover:bg-[#c18a57]/[0.07]" />

            <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[110px_1fr_auto] lg:items-center lg:p-10">

              <div>
                <span className="text-[11px] tracking-[0.28em] text-[#c18a57]">
                  03
                </span>

                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  In Development
                </p>
              </div>

              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/[0.09] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/45">
                    AI · Smart Systems
                  </span>

                  <span className="text-xs text-white/30">
                    B.Tech Final Year Project
                  </span>
                </div>

                <h3 className="font-serif text-3xl tracking-tight text-[#f1ede7] sm:text-4xl">
                  AI-Driven Smart Parking
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                  A B.Tech final-year project currently under development,
                  exploring an AI-driven smart parking system designed to make
                  parking more intelligent, efficient, and easier to manage.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Computer Vision",
                    "Smart Parking",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] text-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex lg:justify-end">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-5 py-3 text-sm text-white/35">
                  In Progress
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c18a57]" />
                </span>
              </div>
            </div>
          </article>

        </div>
      </section>


      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-5 pb-28 pt-24 sm:px-8 lg:px-10"
      >
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[#c18a57]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c18a57]">
              Services
            </span>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl font-serif text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.04em] text-[#f1ede7]">
              From idea
              <br />
              <span className="text-[#c18a57]">to execution.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45 lg:pb-2">
              Digital products and custom software built around your
              business, idea, or project.
            </p>
          </div>
        </div>

        <div className="grid border-t border-white/[0.10] md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Websites",
              text: "Modern, responsive websites for businesses, brands, professionals, and organizations.",
            },
            {
              number: "02",
              title: "Landing Pages",
              text: "Focused landing pages designed to present products, services, campaigns, and ideas clearly.",
            },
            {
              number: "03",
              title: "Web Applications",
              text: "Custom web apps, SaaS platforms, portals, dashboards, and interactive digital products.",
            },
            {
              number: "04",
              title: "Forms & Systems",
              text: "Registration forms, enquiry systems, booking flows, surveys, and custom data collection.",
            },
            {
              number: "05",
              title: "Admin Dashboards",
              text: "Private dashboards for managing users, enquiries, content, files, data, and business workflows.",
            },
            {
              number: "06",
              title: "E-commerce",
              text: "Online stores and commerce experiences with product, customer, order, and payment workflows.",
            },
            {
              number: "07",
              title: "Mobile Apps",
              text: "Mobile applications for Android and iOS, from prototypes to complete application experiences.",
            },
            {
              number: "08",
              title: "Desktop Apps",
              text: "Custom desktop applications built around specific business, productivity, or utility requirements.",
            },
            {
              number: "09",
              title: "Backend & APIs",
              text: "REST APIs, authentication, server-side logic, integrations, and reliable application backends.",
            },
            {
              number: "10",
              title: "AI & Automation",
              text: "AI-powered features, intelligent workflows, automation, and technology-assisted solutions.",
            },
            {
              number: "11",
              title: "Database Systems",
              text: "Structured data storage, application databases, CRUD systems, and data-driven functionality.",
            },
            {
              number: "12",
              title: "Deployment & Maintenance",
              text: "Production deployment, improvements, bug fixes, performance work, and ongoing maintenance.",
            },
          ].map((service) => (
            <div
              key={service.number}
              className="group border-b border-r border-white/[0.08] px-6 py-8 transition duration-300 hover:bg-[#c18a57]/[0.035] sm:px-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.28em] text-[#c18a57]">
                  {service.number}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#c18a57]/60 transition group-hover:bg-[#c18a57]" />
              </div>

              <h3 className="font-serif text-2xl tracking-[-0.02em] text-white/90">
                {service.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-5 pb-32 pt-10 sm:px-8 lg:px-10"
      >
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#c18a57]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c18a57]">
                Skills
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.94] tracking-[-0.04em] text-[#f1ede7]">
              Tools to
              <br />
              <span className="text-[#c18a57]">build with.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
              A practical technology stack for turning ideas into
              responsive interfaces, applications, systems, and
              digital products.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {[
              {
                title: "Frontend",
                skills: "React · Next.js · JavaScript · TypeScript · HTML · CSS · Tailwind CSS",
              },
              {
                title: "Backend",
                skills: "Node.js · REST APIs · Authentication · Server-side Development",
              },
              {
                title: "Databases",
                skills: "Database Development · Data Modeling · CRUD Systems · Data Integration",
              },
              {
                title: "Mobile",
                skills: "Android · iOS · Mobile Application Development · Responsive Interfaces",
              },
              {
                title: "Desktop",
                skills: "Desktop Application Development · Utility Software · Custom Tools",
              },
              {
                title: "AI & Automation",
                skills: "AI Integrations · Intelligent Applications · Automation · AI-powered Workflows",
              },
              {
                title: "Web & Product",
                skills: "Web Design · Landing Pages · Dashboards · SaaS · E-commerce · Forms",
              },
              {
                title: "Production",
                skills: "API Integration · Deployment · Performance · Maintenance · Bug Fixing",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="border-t border-white/[0.10] pt-5"
              >
                <h3 className="font-serif text-xl text-[#c18a57]">
                  {skill.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {skill.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact */}
      <section
        id="contact"
        className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-10 pt-24 sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#c18a57]/[0.035] blur-[120px]" />

        <div className="relative overflow-hidden rounded-[2rem] border border-[#c18a57]/30 bg-[#080706] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#c18a57]/[0.05] blur-[80px]" />

          <div className="relative grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#c18a57]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c18a57]">
                  Contact
                </span>
              </div>

              <h2 className="max-w-4xl font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.88] tracking-[-0.045em] text-[#f1ede7]">
                Let's build
                <br />
                <span className="text-[#c18a57]">something.</span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                Have an idea, a business website, an application, or
                something completely custom in mind? Let's talk about
                what you're building and find the right way to bring it
                to life.
              </p>

              <a
                href="mailto:vlnlabs.vrlss@gmail.com"
                className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#c18a57]/50 px-6 py-3 text-sm text-white transition duration-300 hover:bg-[#c18a57]/10"
              >
                Start a conversation
                <span className="text-[#c18a57]">↗</span>
              </a>
            </div>

            <div className="grid gap-3">
              <a
                href="mailto:vlnlabs.vrlss@gmail.com"
                className="group flex items-center justify-between border-t border-white/[0.10] py-5"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#c18a57]">
                    Email
                  </p>
                  <p className="mt-2 text-sm text-white/65 transition group-hover:text-white">
                    vlnlabs.vrlss@gmail.com
                  </p>
                </div>
                <span className="text-white/30 transition group-hover:text-[#c18a57]">
                  ↗
                </span>
              </a>

              <a
                href="https://wa.me/919515294733"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-t border-white/[0.10] py-5"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#c18a57]">
                    WhatsApp
                  </p>
                  <p className="mt-2 text-sm text-white/65 transition group-hover:text-white">
                    +91 95152 94733
                  </p>
                </div>
                <span className="text-white/30 transition group-hover:text-[#c18a57]">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/sai-durga-prasad-velagaleti-1b2554431/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-t border-white/[0.10] py-5"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#c18a57]">
                    LinkedIn
                  </p>
                  <p className="mt-2 text-sm text-white/65 transition group-hover:text-white">
                    Connect professionally
                  </p>
                </div>
                <span className="text-white/30 transition group-hover:text-[#c18a57]">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-4 py-10 text-[11px] uppercase tracking-[0.22em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 V. Sai Durga Prasad</span>
          <span>Founder · Developer · Creator</span>
        </footer>
      </section>

    </main>
  );
}
