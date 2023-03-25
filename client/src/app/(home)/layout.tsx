import "../globals.css";

import { Epilogue } from "@next/font/google";
import { Sidebar } from "./Sidebar";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={epilogue.className}>
      <body className="relative md:-8 p-4 bg-primary min-h-screen flex flex-row">
        <Sidebar />

        {children}
      </body>
    </html>
  );
}