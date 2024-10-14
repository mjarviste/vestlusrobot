import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";

const ubuntuRegular = localFont({
  src: "../../public/fonts/Ubuntu-regular.ttf",
  variable: "--font-ubuntu-regular",
});

export const metadata: Metadata = {
  title: "Vestlusrobot",
  description: "Vestlusrobot, mis on loodud kasutades Vercel AI SDK'd ja OpenAI API't",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuRegular.variable} ${ubuntuRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
