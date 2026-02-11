import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Seeds Of Innocens IVF",
  description: "Thank you for contacting Seeds Of Innocens IVF. Our team will get in touch with you soon.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
