import { Inter } from "next/font/google";
import "./globals.css";
// import { DM_Serif_Text } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// const dmseriftext = DM_Serif_Text({
//   weight: "400",
//   style: "normal",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Matas Adventsquiz",
  description: "Tag Adventsquizzen og find årets adventsgaver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
