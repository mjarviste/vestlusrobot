import type { Metadata } from "next";
import "./styles/globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
