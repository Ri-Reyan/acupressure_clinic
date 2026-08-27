"use client";

import { Check, ChevronDown, HeartPulse } from "lucide-react";
import { usePatient } from "../context/PatientContext";

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

export default function Services() {
  const { activeCondition, setActiveCondition } = usePatient();

  return (
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
            প্রতিটি শরীর আলাদা। তাই আপনার লক্ষণ, রুটিন ও প্রয়োজন বুঝে আমরা তৈরি
            করি ব্যক্তিগত চিকিৎসা পরিকল্পনা।
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
  );
}
