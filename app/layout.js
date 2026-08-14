import "./globals.css";

export const metadata = {
  title: "Cherry Lou | Web Developer & Graphic Designer",
  description: "Portfolio of Cherry Lou — Web Developer, Graphic Designer, and General Virtual Assistant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
