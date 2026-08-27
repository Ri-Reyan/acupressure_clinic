"use client";

import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { usePatient } from "./context/PatientContext";

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

const process = [
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
];

const MainPage = () => {
  const { testimonial, setTestimonial, submitted, setSubmitted } = usePatient();
  const current = testimonials[testimonial];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />

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
            <span className="stat-number">২ লাখ+</span>
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
              alt="আশরাফ কাপিং এন্ড আকুপ্রেসার থেরাপি সেন্টার ক্লিনিকের প্রধান থেরাপিস্ট"
            />
          </div>
          <div className="portrait-note">
            <span className="note-icon">
              <Stethoscope size={18} />
            </span>
            <span>
              <b>​এম.ডি দেলোয়ার আশরাফ</b>
              <small>
                আকুপ্রেসার বিশেষজ্ঞ
                <br />
                বিহার আকুপ্রেসার ইয়োগা কলেজ (বি.এ.ওয়াই.সি), পাটনা, ভারত <br />
                সহকারী আকুপ্রেসার থেরাপিস্ট ও মেম্বার অফ বাংলাদেশ আকুপ্রেসার
                ফাউন্ডেশন প্রশিক্ষক কাপিং এন্ড আকুপ্রেসার থেরাপি
              </small>
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
            আশরাফ কাপিং এন্ড আকুপ্রেসার থেরাপি সেন্টার ক্লিনিকে আমরা শুধু উপসর্গ
            নয়, আপনার জীবনযাপনের পুরো চিত্রটি দেখি। প্রাচীন চীনা প্রেসার
            পয়েন্ট থেরাপির সাথে আধুনিক অ্যানাটমি ও যত্নশীল কাউন্সেলিং মিলিয়ে
            তৈরি হয় আপনার ব্যক্তিগত চিকিৎসা পরিকল্পনা।
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

      <Services />

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
          {process.map(([num, title, desc]) => (
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
              আমাদের প্রতিটি রোগীর গল্প আলাদা। তবে লক্ষ্য একটাই—রোগমুক্ত,
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
                <b>০১৭১৬-৩১৭৯৮৬</b>
              </span>
            </div>
            <div className="contact-line">
              <Clock3 size={18} />
              <span>
                <small>খোলা থাকে</small>
                <b>শনি–বৃহস্পতি · সকাল ১০ টা–রাত ১০ টা</b>
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

      <section id="location" className="location-section">
        <div className="page-shell location-grid">
          <div className="map-placeholder">
            <MapPin size={26} />
            <span>টাউনহল মোহাম্মদপুর, ঢাকা</span>
          </div>
          <div>
            <div className="eyebrow">আমাদের কাছে আসুন</div>
            <h2>
              শান্তির একটি
              <br />
              <em>ছোট ঠিকানা।</em>
            </h2>
            <p>
              রুম নং-০২, শহীদপার্ক জামে মসজিদ
              <br />
              টাউনহল মোহাম্মদপুর, ঢাকা ১২১২, বাংলাদেশ
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
              <strong>আশরাফ কাপিং এন্ড আকুপ্রেসার থেরাপি সেন্টার</strong>
              <small>ক্লিনিক</small>
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
          <span>© ২০২৪ আশরাফ কাপিং এন্ড আকুপ্রেসার থেরাপি সেন্টার</span>
          <span>স্বাস্থ্যসেবা · গোপনীয়তা</span>
        </div>
      </footer>
    </main>
  );
};

export default MainPage;
