import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MANN - I build things that excite me.",
  description: "The products, thinking, and lens of Manmohan Adhikari."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
