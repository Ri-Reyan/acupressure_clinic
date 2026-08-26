"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  X,
} from "lucide-react";

const conditions = {
  "দীর্ঘস্থায়ী ব্যথা": {
    intro:
      "শরীরের যেসব ব্যথা আপনাকে প্রতিদিন থামিয়ে দেয়, সেগুলোর মূল কারণ খুঁজে চিকিৎসা করি।",
    items: [
      "কোমর ও পিঠের ব্যথা",
      "ঘাড় ও কাঁধের ব্যথা",
      "হাঁটু ও জয়েন্টের ব্যথা",
    ],
  },
  "মাইগ্রেন ও ঘুম": {
    intro:
      "মাথাব্যথা, মাইগ্রেন ও অনিদ্রার চক্র ভেঙে শরীরকে স্বাভাবিক ছন্দে ফিরিয়ে আনি।",
    items: [
      "মাইগ্রেন ও মাথাব্যথা",
      "অনিদ্রা ও অস্থির ঘুম",
      "ঘাড় ভার ও চোখে চাপ",
    ],
  },
  "স্ট্রেস ও ক্লান্তি": {
    intro:
      "মনের চাপ ও দীর্ঘদিনের ক্লান্তি কমিয়ে আপনার শক্তি ও মনোযোগ ফিরে পেতে সহায়তা করি।",
    items: ["স্ট্রেস ও উদ্বেগ", "দীর্ঘস্থায়ী ক্লান্তি", "হজমের সমস্যা"],
  },
};

const testimonials = [
  {
    quote:
      "মাত্র তিনটি সেশনের পর আমার মাইগ্রেনের তীব্রতা অনেক কমে গেছে। এখন নিজের কাজেও মন দিতে পারি।",
    name: "সায়মা রহমান",
    detail: "মাইগ্রেন থেরাপি",
  },
  {
    quote:
      "প্রথমবার কেউ শুধু ব্যথা নয়, আমার পুরো জীবনযাপনটা বুঝে চিকিৎসা করেছেন। অভিজ্ঞতাটি অসাধারণ।",
    name: "তানভীর আহমেদ",
    detail: "কোমর ব্যথা",
  },
  {
    quote:
      "ঘুমের ওষুধ ছাড়াই এখন রাতে শান্তিতে ঘুমাতে পারি। নিয়মিত গাইডলাইনটাও খুব কাজে দিয়েছে।",
    name: "ফারজানা ইসলাম",
    detail: "অনিদ্রা ও স্ট্রেস",
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCondition, setActiveCondition] = useState("দীর্ঘস্থায়ী ব্যথা");
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const current = testimonials[testimonial];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="topbar">
        <div className="page-shell flex items-center justify-between">
          <span>প্রথম পরামর্শে ১৫% ছাড়</span>
          <a href="#booking">
            আজই আপনার সেশন বুক করুন <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="page-shell flex h-20 items-center justify-between">
          <a href="#top" className="brand-mark">
            <span className="brand-icon">
              <HeartPulse size={20} />
            </span>
            <span>
              <strong>প্রাণ</strong>
              <small>অ্যাকুপ্রেসার ক্লিনিক</small>
            </span>
          </a>
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="প্রধান নেভিগেশন"
          >
            <a href="#about">আমাদের সম্পর্কে</a>
            <a href="#conditions">চিকিৎসা</a>
            <a href="#process">কীভাবে কাজ করে</a>
            <a href="#stories">রোগীর অভিজ্ঞতা</a>
          </nav>
          <a
            href="#booking"
            className="button button-primary hidden md:inline-flex"
          >
            অ্যাপয়েন্টমেন্ট <ArrowUpRight size={16} />
          </a>
          <button
            className="md:hidden"
            aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-menu page-shell md:hidden">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              আমাদের সম্পর্কে
            </a>
            <a href="#conditions" onClick={() => setMenuOpen(false)}>
              চিকিৎসা
            </a>
            <a href="#process" onClick={() => setMenuOpen(false)}>
              কীভাবে কাজ করে
            </a>
            <a href="#booking" onClick={() => setMenuOpen(false)}>
              বুকিং
            </a>
          </nav>
        )}
      </header>

      <section id="top" className="hero page-shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" /> প্রাকৃতিক সুস্থতার নতুন ঠিকানা
          </div>
          <h1>
            শরীরকে শুনুন,
            <br />
            <em>সুস্থতাকে বেছে নিন।</em>
          </h1>
          <p className="hero-lede">
            ওষুধ ও সার্জারি ছাড়াই দীর্ঘস্থায়ী ব্যথা থেকে পান প্রাকৃতিক মুক্তি।
            মাইগ্রেন, পিঠের ব্যথা, অনিদ্রা ও স্ট্রেস ম্যানেজমেন্টের জন্য
            প্রমাণিত অ্যাকুপ্রেসার থেরাপি।
          </p>
          <div className="hero-actions">
            <a href="#booking" className="button button-primary button-large">
              অ্যাপয়েন্টমেন্ট বুক করুন <ArrowUpRight size={18} />
            </a>
            <a
              href="https://wa.me/8801700000000"
              className="button button-whatsapp button-large"
            >
              <MessageCircle size={18} /> WhatsApp-এ পরামর্শ নিন
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <span>র</span>
              <span>ম</span>
              <span>স</span>
              <span>+</span>
            </div>
            <div>
              <div className="stars">
                <Star size={14} fill="currentColor" /> <b>৪.৯/৫</b>
              </div>
              <small>৩৫০+ সন্তুষ্ট রোগী</small>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-label="শান্ত প্রকৃতির একটি ভিজ্যুয়াল">
          <div className="art-card">
            <span className="art-kicker">প্রতিদিনের যত্ন</span>
            <strong>
              ভালো থাকা
              <br />
              একটি অভ্যাস
            </strong>
            <span className="art-line" />
            <small>শরীর, মন ও জীবনের ভারসাম্য</small>
          </div>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="leaf leaf-one" />
          <div className="leaf leaf-two" />
        </div>
      </section>

      <section id="about" className="trust-strip">
        <div className="page-shell trust-grid">
          <div className="trust-stat">
            <span className="stat-number">৮+</span>
            <span>
              বছরের ক্লিনিক্যাল
              <br />
              অভিজ্ঞতা
            </span>
          </div>
          <div className="trust-stat">
            <span className="stat-number">৩৫০০+</span>
            <span>
              রোগী পেয়েছেন
              <br />
              স্বস্তি
            </span>
          </div>
          <div className="trust-stat">
            <BadgeCheck size={28} />
            <span>
              সার্টিফায়েড
              <br />
              থেরাপিস্ট
            </span>
          </div>
          <div className="trust-stat">
            <ShieldCheck size={28} />
            <span>
              নিরাপদ ও<br />
              হাইজিনিক
            </span>
          </div>
        </div>
      </section>

      <section className="section page-shell profile-grid">
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img
              src="/placeholder-user.jpg"
              alt="প্রাণ ক্লিনিকের প্রধান থেরাপিস্ট"
            />
          </div>
          <div className="portrait-note">
            <span className="note-icon">
              <Stethoscope size={18} />
            </span>
            <span>
              <b>সায়ন্তনী দাস</b>
              <small>প্রধান থেরাপিস্ট · রেজি. AT-2084</small>
            </span>
          </div>
        </div>
        <div className="profile-copy">
          <div className="eyebrow">বিশ্বাসের সাথে চিকিৎসা</div>
          <h2>
            আপনার শরীরের ভাষা
            <br />
            <em>বোঝার চেষ্টা করি।</em>
          </h2>
          <p>
            প্রাণ অ্যাকুপ্রেসার ক্লিনিকে আমরা শুধু উপসর্গ নয়, আপনার জীবনযাপনের
            পুরো চিত্রটি দেখি। প্রাচীন চীনা প্রেসার পয়েন্ট থেরাপির সাথে আধুনিক
            অ্যানাটমি ও যত্নশীল কাউন্সেলিং মিলিয়ে তৈরি হয় আপনার ব্যক্তিগত
            চিকিৎসা পরিকল্পনা।
          </p>
          <div className="specialties">
            <span>
              <Check size={15} /> মাইগ্রেন ও মাথাব্যথা
            </span>
            <span>
              <Check size={15} /> ঘাড় ও কোমর ব্যথা
            </span>
            <span>
              <Check size={15} /> ঘুম ও স্ট্রেস
            </span>
          </div>
          <a href="#booking" className="text-link">
            থেরাপিস্ট সম্পর্কে আরও জানুন <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section id="conditions" className="section section-soft">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <div className="eyebrow">আপনার জন্য সঠিক যত্ন</div>
              <h2>
                যে সমস্যাগুলোতে
                <br />
                <em>সহায়তা করতে পারি</em>
              </h2>
            </div>
            <p>
              প্রতিটি শরীর আলাদা। তাই আপনার লক্ষণ, রুটিন ও প্রয়োজন বুঝে আমরা
              তৈরি করি ব্যক্তিগত চিকিৎসা পরিকল্পনা।
            </p>
          </div>
          <div className="condition-tabs" role="tablist">
            {Object.keys(conditions).map((condition) => (
              <button
                key={condition}
                role="tab"
                aria-selected={activeCondition === condition}
                className={activeCondition === condition ? "active" : ""}
                onClick={() => setActiveCondition(condition)}
              >
                {condition}
                <ChevronDown size={15} />
              </button>
            ))}
          </div>
          <div className="condition-panel">
            <div>
              <span className="panel-number">
                ০{Object.keys(conditions).indexOf(activeCondition) + 1}
              </span>
              <h3>{activeCondition}</h3>
              <p>
                {conditions[activeCondition as keyof typeof conditions].intro}
              </p>
            </div>
            <ul>
              {conditions[activeCondition as keyof typeof conditions].items.map(
                (item) => (
                  <li key={item}>
                    <span>
                      <Check size={15} />
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="panel-icon">
              <HeartPulse size={34} />
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section page-shell">
        <div className="center-heading">
          <div className="eyebrow">সহজ, স্বচ্ছ, ব্যক্তিগত</div>
          <h2>
            আপনার সুস্থতার পথে
            <br />
            <em>তিনটি সহজ ধাপ</em>
          </h2>
        </div>
        <div className="process-grid">
          {[
            [
              "০১",
              "পরামর্শ ও মূল্যায়ন",
              "আপনার শারীরিক ইতিহাস, লক্ষণ ও জীবনযাপনের ধরন মনোযোগ দিয়ে শুনি।",
            ],
            [
              "০২",
              "ব্যক্তিগত থেরাপি",
              "বৈজ্ঞানিক প্রেসার পয়েন্ট ও আরামদায়ক টাচ থেরাপির মাধ্যমে কাজ করি।",
            ],
            [
              "০৩",
              "পরবর্তী যত্ন",
              "থেরাপির পর আপনার জন্য সহজ লাইফস্টাইল গাইড ও প্রয়োজনীয় পরামর্শ।",
            ],
          ].map(([num, title, desc]) => (
            <div className="process-card" key={num}>
              <span className="process-num">{num}</span>
              <Sparkles size={23} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div className="safety-banner">
          <div className="safety-mark">
            <ShieldCheck size={24} />
          </div>
          <div>
            <b>ব্যথাহীন, নিরাপদ ও শতভাগ হাইজিনিক</b>
            <span>আপনার আরাম ও নিরাপত্তা আমাদের প্রথম অগ্রাধিকার।</span>
          </div>
          <ArrowUpRight size={20} />
        </div>
      </section>

      <section id="stories" className="section section-ink">
        <div className="page-shell stories-grid">
          <div>
            <div className="eyebrow eyebrow-light">রোগীদের ভালো থাকার গল্প</div>
            <h2>
              পরিবর্তনটা
              <br />
              <em>অনুভব করুন।</em>
            </h2>
            <p>
              আমাদের প্রতিটি রোগীর গল্প আলাদা। তবে লক্ষ্য একটাই—ব্যথামুক্ত,
              ভারসাম্যপূর্ণ জীবন।
            </p>
            <div className="review-score">
              <span className="big-score">৪.৯</span>
              <div>
                <div className="stars">★★★★★</div>
                <small>Google Reviews · ১২০+ মতামত</small>
              </div>
            </div>
          </div>
          <div className="quote-card">
            <div className="quote-mark">“</div>
            <p>{current.quote}</p>
            <div className="quote-person">
              <span>{current.name.slice(0, 1)}</span>
              <div>
                <b>{current.name}</b>
                <small>{current.detail}</small>
              </div>
            </div>
            <div className="slider-controls">
              <button
                aria-label="আগের অভিজ্ঞতা"
                onClick={() =>
                  setTestimonial(
                    (testimonial - 1 + testimonials.length) %
                      testimonials.length,
                  )
                }
              >
                <ChevronLeft size={18} />
              </button>
              <span>
                {String(testimonial + 1).padStart(2, "0")} / 0
                {testimonials.length}
              </span>
              <button
                aria-label="পরের অভিজ্ঞতা"
                onClick={() =>
                  setTestimonial((testimonial + 1) % testimonials.length)
                }
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-shell pricing-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">স্বচ্ছ মূল্য, নিশ্চিন্ত মন</div>
            <h2>
              আপনার জন্য
              <br />
              <em>সঠিক প্যাকেজ</em>
            </h2>
          </div>
          <p>
            কোনো গোপন চার্জ নেই। প্রথম সেশনের পর আপনার প্রয়োজন অনুযায়ী প্যাকেজ
            বেছে নিন।
          </p>
        </div>
        <div className="pricing-grid">
          <div className="price-card">
            <span>একক সেশন</span>
            <strong>
              ৳ ১,২০০ <small>/ সেশন</small>
            </strong>
            <p>প্রথমবার আসছেন বা নির্দিষ্ট কোনো সমস্যার জন্য।</p>
            <ul>
              <li>
                <Check size={15} /> ৪৫ মিনিটের থেরাপি
              </li>
              <li>
                <Check size={15} /> প্রাথমিক মূল্যায়ন
              </li>
              <li>
                <Check size={15} /> পরবর্তী যত্নের গাইড
              </li>
            </ul>
            <a href="#booking" className="button button-outline">
              সেশন বুক করুন <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="price-card price-featured">
            <span className="popular-tag">সবচেয়ে জনপ্রিয়</span>
            <span>সুস্থতা প্যাকেজ</span>
            <strong>
              ৳ ৪,৫০০ <small>/ ৪ সেশন</small>
            </strong>
            <p>দীর্ঘস্থায়ী সমস্যা ও নিয়মিত যত্নের জন্য।</p>
            <ul>
              <li>
                <Check size={15} /> ৪৫ মিনিটের ৪টি থেরাপি
              </li>
              <li>
                <Check size={15} /> ব্যক্তিগত কেয়ার প্ল্যান
              </li>
              <li>
                <Check size={15} /> WhatsApp সাপোর্ট
              </li>
            </ul>
            <a href="#booking" className="button button-primary">
              প্যাকেজ বেছে নিন <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="booking" className="booking-section">
        <div className="page-shell booking-grid">
          <div className="booking-intro">
            <div className="eyebrow eyebrow-light">আজই শুরু করুন</div>
            <h2>
              ভালো থাকার জন্য
              <br />
              <em>একটি সিদ্ধান্তই যথেষ্ট।</em>
            </h2>
            <p>
              আপনার জন্য উপযুক্ত সময়টি জানাতে ফর্মটি পূরণ করুন। আমাদের টিম
              শীঘ্রই আপনার সাথে যোগাযোগ করবে।
            </p>
            <div className="contact-line">
              <Phone size={18} />
              <span>
                <small>সরাসরি কথা বলুন</small>
                <b>০১৭০০-০০০০০০</b>
              </span>
            </div>
            <div className="contact-line">
              <Clock3 size={18} />
              <span>
                <small>খোলা থাকে</small>
                <b>শনি–বৃহস্পতি · সকাল ৯টা–রাত ৮টা</b>
              </span>
            </div>
          </div>
          <form
            className="booking-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {submitted ? (
              <div className="success-state">
                <span>
                  <Check size={28} />
                </span>
                <h3>ধন্যবাদ!</h3>
                <p>
                  আপনার অনুরোধটি পেয়েছি। আমাদের টিম খুব শীঘ্রই আপনার সাথে
                  যোগাযোগ করবে।
                </p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => setSubmitted(false)}
                >
                  আরেকটি বুকিং করুন
                </button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <b>অ্যাপয়েন্টমেন্ট বুক করুন</b>
                  <span>সব তথ্য গোপন রাখা হয়</span>
                </div>
                <label>
                  আপনার নাম
                  <input required placeholder="পুরো নাম লিখুন" />
                </label>
                <label>
                  ফোন নম্বর
                  <input required type="tel" placeholder="০১৭০০-০০০০০০" />
                </label>
                <label>
                  কোন সমস্যার জন্য আসছেন?
                  <select defaultValue="">
                    <option value="" disabled>
                      সমস্যা বেছে নিন
                    </option>
                    <option>দীর্ঘস্থায়ী ব্যথা</option>
                    <option>মাইগ্রেন ও ঘুম</option>
                    <option>স্ট্রেস ও ক্লান্তি</option>
                  </select>
                </label>
                <label>
                  পছন্দের তারিখ ও সময়
                  <input required type="datetime-local" />
                </label>
                <button
                  className="button button-primary button-full"
                  type="submit"
                >
                  রিকোয়েস্ট পাঠান <ArrowUpRight size={17} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <section className="location-section">
        <div className="page-shell location-grid">
          <div className="map-placeholder">
            <MapPin size={26} />
            <span>গুলশান ১, ঢাকা</span>
          </div>
          <div>
            <div className="eyebrow">আমাদের কাছে আসুন</div>
            <h2>
              শান্তির একটি
              <br />
              <em>ছোট ঠিকানা।</em>
            </h2>
            <p>
              হাউস ১২, রোড ৪৬
              <br />
              গুলশান ১, ঢাকা ১২১২, বাংলাদেশ
            </p>
            <a
              className="text-link"
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps-এ দেখুন <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <footer>
        <div className="page-shell footer-grid">
          <a href="#top" className="brand-mark brand-light">
            <span className="brand-icon">
              <HeartPulse size={20} />
            </span>
            <span>
              <strong>প্রাণ</strong>
              <small>অ্যাকুপ্রেসার ক্লিনিক</small>
            </span>
          </a>
          <p>প্রাকৃতিক যত্নে, প্রতিদিন একটু ভালো থাকা।</p>
          <div className="footer-links">
            <a href="#conditions">চিকিৎসা</a>
            <a href="#booking">বুকিং</a>
            <a href="https://wa.me/8801700000000">WhatsApp</a>
          </div>
        </div>
        <div className="page-shell copyright">
          <span>© ২০২৪ প্রাণ অ্যাকুপ্রেসার ক্লিনিক</span>
          <span>স্বাস্থ্যসেবা · গোপনীয়তা</span>
        </div>
      </footer>
    </main>
  );
}
