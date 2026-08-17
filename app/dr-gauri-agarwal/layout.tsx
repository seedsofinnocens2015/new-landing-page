import type { Metadata } from "next";
import "./gauri.css";

export const metadata: Metadata = {
  title: "Dr. Gauri Agarwal | IVF & Fertility Specialist",
  description:
    "Consult Dr. Gauri Agarwal for compassionate, personalised IVF and fertility care at Seeds of Innocens.",
};

export default function DrGauriLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
