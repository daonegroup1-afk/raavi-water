import { useState, type FormEvent, type ReactNode } from "react";
import {
  Briefcase,
  Building2,
  Check,
  ChevronRight,
  Droplets,
  Factory,
  Facebook,
  Handshake,
  HeartPulse,
  Home,
  Instagram,
  MapPin,
  Menu,
  Package,
  Phone,
  ShieldCheck,
  Store,
  Truck,
  Users,
  X,
} from "lucide-react";
import { BrandLockup, LogoBanner } from "@/components/logo";
import { WhatsAppIcon } from "@/components/icons";
import { ADDRESS_LINES, PHONE_DISPLAY, WA_DISPLAY, WA_NUMBER, cn, waLink } from "@/lib/utils";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Our Water" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

const PRODUCTS = [
  {
    size: "20 LITRE",
    short: "20L",
    img: "/images/bottle-20l.png",
    blurb: "RAAVI Purified Drinking Water",
    points: ["Homes", "Offices", "Shops", "Regular drinking"],
    message: "Hi, I want to order 20 Litre RAAVI purified water.",
  },
  {
    size: "10 LITRE",
    short: "10L",
    img: "/images/bottle-10l.png",
    blurb: "RAAVI Purified Drinking Water",
    points: ["Convenient for families", "Offices and daily use", "Easy to handle"],
    message: "Hi, I want to order 10 Litre RAAVI purified water.",
  },
  {
    size: "5 LITRE",
    short: "5L",
    img: "/images/bottle-5l.png",
    blurb: "RAAVI Purified Drinking Water",
    points: ["Everyday hydration", "Smaller requirements", "Travel-friendly"],
    message: "Hi, I want to order 5 Litre RAAVI purified water.",
  },
];

function OrderButton({
  href,
  children,
  className,
  variant = "ocean",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "ocean" | "wa" | "white";
}) {
  const styles = {
    ocean: "bg-ocean text-white hover:bg-ocean-dark shadow-[0_8px_20px_rgba(0,119,200,0.28)]",
    wa: "bg-wa text-white hover:bg-wa-dark shadow-[0_8px_20px_rgba(37,211,102,0.32)]",
    white: "bg-white text-ocean hover:bg-foam",
  }[variant];
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5",
        styles,
        className,
      )}
    >
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <a href="#home" aria-label="RAAVI home">
          <BrandLockup compact />
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-fg/80 transition-colors hover:text-ocean",
                i === 0 && "text-ocean underline decoration-2 underline-offset-8",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <OrderButton href={waLink("Hi, I want to order RAAVI water.")} variant="wa" className="hidden lg:inline-flex">
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp / Order {WA_DISPLAY}
        </OrderButton>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-fg lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-fg hover:bg-foam"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <OrderButton href={waLink()} variant="wa" className="w-full">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp {WA_DISPLAY}
            </OrderButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-linear-to-b from-sky via-sky-mid to-[#6ec6f5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.55),transparent_42%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-20 pt-10 md:grid-cols-2 md:pb-28 md:pt-14">
        <div>
          <img
            src="/images/logo-lockup.jpg"
            alt="RAAVI Purified Drinking Water"
            className="mb-5 w-full max-w-md rounded-2xl object-contain shadow-sm"
          />
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-fg md:text-5xl">
            PURE & SAFE
            <br />
            <span className="text-ocean">FOR YOU & YOUR FAMILY</span>
          </h1>
          <p className="mt-4 max-w-md text-base text-muted">
            Fresh purified drinking water for your home, office, business and everyday needs.
          </p>
          <div className="mt-6 flex flex-wrap gap-5">
            {[
              { icon: Droplets, label: "Pure" },
              { icon: ShieldCheck, label: "Safe" },
              { icon: HeartPulse, label: "Healthy" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 font-semibold text-fg">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
                  <b.icon className="h-5 w-5 text-ocean" />
                </span>
                {b.label}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <OrderButton href={waLink("Hi, I want to order RAAVI water.")}>
              ORDER NOW <ChevronRight className="h-4 w-4" />
            </OrderButton>
            <OrderButton href={waLink()} variant="wa">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp {WA_DISPLAY}
            </OrderButton>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-lg items-end justify-center md:max-w-none">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-[100%] bg-white/25 blur-md" />
          {[
            { src: "/images/bottle-20l.png", alt: "RAAVI 20 litre purified water jar", h: "h-72 md:h-80", z: "z-20" },
            { src: "/images/bottle-10l.png", alt: "RAAVI 10 litre purified water bottle", h: "h-60 md:h-72", z: "z-10 -ml-4 md:-ml-6" },
            { src: "/images/bottle-5l.png", alt: "RAAVI 5 litre purified water bottle", h: "h-52 md:h-64", z: "z-0 -ml-4 md:-ml-6" },
          ].map((b) => (
            <img
              key={b.alt}
              src={b.src}
              alt={b.alt}
              className={cn("relative w-auto object-contain drop-shadow-xl", b.h, b.z)}
            />
          ))}
        </div>
      </div>
      <svg className="wave-divider relative -mb-px text-white" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,40 C240,80 480,0 720,36 C960,72 1200,16 1440,44 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-fg">Our Water Products</h2>
          <p className="mt-1 text-muted">Choose the right size for your needs</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.size}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-[0_12px_32px_rgba(0,100,180,0.08)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 flex h-44 items-center justify-center">
                <img src={p.img} alt={`${p.size} RAAVI bottle`} className="h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold text-fg">{p.size}</h3>
              <p className="mb-4 text-sm text-muted">{p.blurb}</p>
              <ul className="mx-auto mb-6 max-w-[200px] space-y-1.5 text-left text-sm text-fg/80">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-india-green" />
                    {pt}
                  </li>
                ))}
              </ul>
              <OrderButton href={waLink(p.message)} className="w-full">
                ORDER NOW <ChevronRight className="h-4 w-4" />
              </OrderButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComingSoon() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#0ea5e9] to-[#0284c7] py-14 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <span className="mb-3 inline-block -rotate-2 rounded bg-soon px-3 py-1 text-xs font-extrabold tracking-wider">
            COMING SOON
          </span>
          <h2 className="text-3xl font-bold">New Sizes for Your Convenience</h2>
          <p className="mt-1 text-sm text-white/85">Same Purity · New Sizes</p>
          <div className="mt-6 flex flex-wrap gap-8">
            <div className="flex gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                <Droplets className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">1 Litre</p>
                <p className="text-sm text-white/85">Perfect for on-the-go hydration.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                <Droplets className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">500 ml</p>
                <p className="text-sm text-white/85">Ideal for personal use, travel and more.</p>
              </div>
            </div>
          </div>
          <OrderButton
            href={waLink("Please notify me when 1L and 500ml RAAVI water are available.")}
            variant="white"
            className="mt-8"
          >
            STAY TUNED <ChevronRight className="h-4 w-4" />
          </OrderButton>
        </div>
        <div className="flex items-end justify-center gap-6">
          <figure className="w-36 rounded-2xl bg-white p-3 text-center shadow-xl">
            <img src="/images/bottle-1l.png" alt="1 litre bottle coming soon" className="mx-auto h-40 object-contain" />
            <figcaption className="mt-2 font-extrabold text-ocean">1L</figcaption>
          </figure>
          <figure className="w-32 rounded-2xl bg-white p-3 text-center shadow-xl">
            <img src="/images/bottle-500ml.png" alt="500 ml bottle coming soon" className="mx-auto h-32 object-contain" />
            <figcaption className="mt-2 font-extrabold text-ocean">500ml</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { icon: Droplets, title: "PURE", text: "Quality purified drinking water." },
    { icon: ShieldCheck, title: "SAFE", text: "Careful and hygienic water handling." },
    { icon: HeartPulse, title: "HEALTHY", text: "Refreshing water for everyday hydration." },
    { icon: Truck, title: "CONVENIENT", text: "Easy ordering through phone and WhatsApp." },
  ];
  return (
    <section className="bg-foam py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-fg">Why Raavi?</h2>
          <p className="text-muted">Because your health matters</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.title} className="rounded-2xl border border-border bg-white px-5 py-8 text-center shadow-sm">
              <span className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-sky text-ocean">
                <it.icon className="h-7 w-7" />
              </span>
              <h3 className="font-bold text-fg">{it.title}</h3>
              <p className="mt-1 text-sm text-muted">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-3">
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_15px_40px_rgba(0,100,180,0.1)]">
          <LogoBanner />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-fg">About Raavi</h2>
          <p className="mt-4 text-muted">
            At Raavi Purified Drinking Water (RPDW), we believe clean drinking water is an essential part of everyday life.
          </p>
          <p className="mt-3 text-muted">
            Our aim is to provide customers with pure, safe and refreshing drinking water with dependable service.
          </p>
          <p className="mt-3 text-muted">
            Whether you need water for your home, office, shop, business or event — Raavi is here to serve you.
          </p>
        </div>
        <div className="rounded-3xl bg-foam p-8 text-center shadow-[0_15px_40px_rgba(0,100,180,0.1)]">
          <img src="/images/glass.png" alt="Glass of purified water" className="mx-auto h-48 w-48 object-contain" />
          <p className="mt-3 font-semibold text-ocean">Pure · Safe · Healthy</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { img: "/images/svc-home.jpg", icon: Home, title: "HOME", text: "Purified drinking water for your family." },
    { img: "/images/svc-office.jpg", icon: Building2, title: "OFFICE", text: "Water supply for employees and visitors." },
    { img: "/images/svc-business.jpg", icon: Store, title: "BUSINESS", text: "Convenient water for shops and businesses." },
    { img: "/images/svc-events.jpg", icon: Users, title: "EVENTS", text: "Drinking water for functions and gatherings." },
  ];
  return (
    <section id="services" className="bg-foam py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-fg">Our Services</h2>
          <p className="text-muted">Water When You Need It</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <div className="relative h-28 bg-sky">
                <img src={s.img} alt="" className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <div className="px-4 py-4">
                <h3 className="font-bold text-fg">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Careers() {
  const jobs = [
    {
      icon: Truck,
      title: "Delivery Executive",
      place: "Hyderabad",
      points: ["Two-wheeler or four-wheeler", "Home and office jar delivery", "Local Hyderabad routes"],
    },
    {
      icon: Factory,
      title: "Plant / Production Assistant",
      place: "Begumpet plant",
      points: ["Purification and filling", "Hygiene and quality checks", "Shift work"],
    },
    {
      icon: Handshake,
      title: "Sales Executive",
      place: "Hyderabad",
      points: ["Homes, offices and shops", "New customer onboarding", "Follow-up on WhatsApp"],
    },
    {
      icon: Package,
      title: "Warehouse Helper",
      place: "Begumpet",
      points: ["Loading and unloading", "Stock and packing", "Physical work"],
    },
  ];
  const [name, setName] = useState("");
  const [role, setRole] = useState(jobs[0].title);

  function submit(e: FormEvent) {
    e.preventDefault();
    const msg = `Hi, I am ${name || "a candidate"}. I want to apply for ${role} at RAAVI Purified Drinking Water.`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="careers" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-sky px-3 py-1 text-sm font-semibold text-ocean">
            <Briefcase className="h-4 w-4" />
            We are hiring
          </p>
          <h2 className="text-3xl font-bold text-fg">Careers at RAAVI</h2>
          <p className="mt-1 text-muted">Join our Hyderabad team. Apply on WhatsApp — no website login needed.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => (
            <article key={job.title} className="flex flex-col rounded-2xl border border-border bg-foam p-5 shadow-sm">
              <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-ocean shadow-sm">
                <job.icon className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-fg">{job.title}</h3>
              <p className="mt-1 text-sm text-muted">{job.place}</p>
              <ul className="mt-4 mb-6 flex-1 space-y-1.5 text-sm text-fg/80">
                {job.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-india-green" />
                    {pt}
                  </li>
                ))}
              </ul>
              <OrderButton
                href={waLink(`Hi, I want to apply for ${job.title} at RAAVI Purified Drinking Water.`)}
                className="w-full"
              >
                Apply <ChevronRight className="h-4 w-4" />
              </OrderButton>
            </article>
          ))}
        </div>
        <form
          onSubmit={submit}
          className="mx-auto mt-10 max-w-2xl rounded-3xl border border-border bg-foam p-6 shadow-sm"
        >
          <h3 className="text-lg font-bold text-fg">Send your application</h3>
          <p className="mt-1 text-sm text-muted">We will reply on WhatsApp.</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="block text-sm font-medium text-fg">
              Your name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-white px-3 py-3 text-fg outline-none ring-ocean focus:ring-2"
                placeholder="Name"
              />
            </label>
            <label className="block text-sm font-medium text-fg">
              Role
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-white px-3 py-3 text-fg outline-none ring-ocean focus:ring-2"
              >
                {jobs.map((job) => (
                  <option key={job.title}>{job.title}</option>
                ))}
                <option>Other / general enquiry</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ocean font-semibold text-white hover:bg-ocean-dark md:w-auto md:px-8"
          >
            Apply on WhatsApp
            <ChevronRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="relative bg-linear-to-r from-[#0ea5e9] to-[#0284c7] py-10 text-center text-white">
      <h2 className="text-2xl font-extrabold tracking-wide">EVERY DROP MATTERS</h2>
      <p className="mt-1 text-sm text-white/90">Pure | Safe | Healthy</p>
      <p className="mx-auto mt-2 max-w-2xl px-4 text-sm text-white/85">
        We are committed to providing purified drinking water with a focus on quality, hygiene and customer service.
      </p>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("20 Litre");

  function submit(e: FormEvent) {
    e.preventDefault();
    const msg = `Hi, I am ${name || "a customer"}. I want to order ${note} RAAVI water.`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-fg">Order RAAVI water today</h2>
          <p className="mt-3 text-muted">Call, WhatsApp, or send a quick request. We deliver across Hyderabad.</p>
          <div className="mt-8 space-y-4 text-sm">
            <a href={`tel:+${WA_NUMBER}`} className="flex items-center gap-3 font-medium text-fg">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky text-ocean">
                <Phone className="h-5 w-5" />
              </span>
              Call {PHONE_DISPLAY}
            </a>
            <a href={waLink()} className="flex items-center gap-3 font-medium text-fg">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-wa text-white">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              WhatsApp {WA_DISPLAY}
            </a>
            <p className="flex items-start gap-3 text-muted">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky text-ocean">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                {ADDRESS_LINES.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-3xl border border-border bg-foam p-6 shadow-sm">
          <label className="block text-sm font-medium text-fg">
            Your name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-white px-3 py-3 text-fg outline-none ring-ocean focus:ring-2"
              placeholder="Name"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-fg">
            Size
            <select
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-white px-3 py-3 text-fg outline-none ring-ocean focus:ring-2"
            >
              <option>20 Litre</option>
              <option>10 Litre</option>
              <option>5 Litre</option>
              <option>Home delivery subscription</option>
              <option>Office / event supply</option>
            </select>
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ocean font-semibold text-white hover:bg-ocean-dark"
          >
            Send on WhatsApp
            <ChevronRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-sky-mid">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <BrandLockup invert />
          <p className="mt-4 text-sm">
            Purified drinking water for homes, offices, shops and events in Hyderabad.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Available Sizes</h3>
          <ul className="space-y-2 text-sm">
            <li>20 Litre</li>
            <li>10 Litre</li>
            <li>5 Litre</li>
            <li>1 Litre (Coming Soon)</li>
            <li>500 ml (Coming Soon)</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Contact</h3>
          <p className="text-sm">
            <a href={`tel:+${WA_NUMBER}`} className="hover:text-white">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2 text-sm">
            {ADDRESS_LINES.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs">
          <p>© 2026 Raavi Purified Drinking Water. All Rights Reserved.</p>
          <div className="flex gap-2">
            <a href={waLink()} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white" aria-label="WhatsApp">
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white" aria-hidden>
              <Facebook className="h-4 w-4" />
            </span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white" aria-hidden>
              <Instagram className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <ComingSoon />
      <Why />
      <About />
      <Services />
      <Careers />
      <CtaBand />
      <Contact />
      <Footer />
    </div>
  );
}
