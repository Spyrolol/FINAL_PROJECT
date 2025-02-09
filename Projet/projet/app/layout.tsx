
import { NavBar } from "@/components";

import "./globals.css";
export const metadata = {
  title: "Aquathon",
  description: "Decouvrez les espèces marines en voie d'extinction",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}

      </body>
    </html>
  );
}
