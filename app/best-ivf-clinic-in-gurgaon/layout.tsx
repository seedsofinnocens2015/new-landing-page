import Navbar from "./gurgaoncomponents/Navbar";

export default function GurgaonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
