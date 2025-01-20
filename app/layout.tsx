import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import Navigation from './components/navigation'
import { Footer } from "./home-page/footer";


const poppins = Poppins({
  subsets: ['latin'], // Specify subsets (optional)
  weight: ['400', '700'], // Correct property name is `weight`
  style: ['normal', 'italic'], // Optional if you need specific styles
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      >
                <Navigation />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
