import React from "react";
import { PatientProvider } from "./context/PatientContext";

const PatientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PatientProvider>{children}</PatientProvider>
    </>
  );
};

export default PatientLayout;
