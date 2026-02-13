import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thank You - Seeds Of Innocens IVF",
  description: "Thank you for contacting Seeds Of Innocens IVF. Our team will get in touch with you soon.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="aw-conversion" strategy="beforeInteractive">
        {`(function(){try{if(window.gtag){window.gtag('event','conversion',{'send_to':'AW-719316761/qtVTCOyno8AaEJnO_9YC'});}}catch(e){}})();`}
      </Script>
      {children}
    </>
  );
}
