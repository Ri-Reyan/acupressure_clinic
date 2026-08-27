import { ArrowUpRight, MessageCircle, Star } from "lucide-react";

export default function Hero() {
  return (
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
          মাইগ্রেন, পিঠের ব্যথা, অনিদ্রা ও স্ট্রেস ম্যানেজমেন্টের জন্য প্রমাণিত
          অ্যাকুপ্রেসার থেরাপি।
        </p>
        <div className="hero-actions">
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
  );
}
