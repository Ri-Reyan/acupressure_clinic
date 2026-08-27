"use client";

import { ArrowUpRight, HeartPulse, Menu, X } from "lucide-react";
import { usePatient } from "../context/PatientContext";

export default function Navbar() {
  const { menuOpen, setMenuOpen } = usePatient();

  return (
    <>
      <div className="topbar">
        <div className="page-shell flex items-center justify-between">
          <a href="#booking">
            সম্পূর্ণ বিনামূল্যে পরামর্শ নিন <ArrowUpRight size={14} />
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
              <strong>আশরাফ কাপিং এন্ড আকুপ্রেসার থেরাপি সেন্টার</strong>
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
            href="#location"
            className="button button-primary hidden md:inline-flex"
          >
            ঠিকানা <ArrowUpRight size={16} />
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
    </>
  );
}
