"use client";

import React, { createContext, useContext, useState } from "react";

interface PatientContextType {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  activeCondition: string;
  setActiveCondition: (condition: string) => void;
  testimonial: number;
  setTestimonial: React.Dispatch<React.SetStateAction<number>>;
  submitted: boolean;
  setSubmitted: (submitted: boolean) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export const PatientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCondition, setActiveCondition] = useState("দীর্ঘস্থায়ী ব্যথা");
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <PatientContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        activeCondition,
        setActiveCondition,
        testimonial,
        setTestimonial,
        submitted,
        setSubmitted,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatient must be used within a PatientProvider");
  }
  return context;
};
