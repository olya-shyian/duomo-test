import Header from "./components/header/Header";
import { lora } from "./styles/fonts";
import "./styles/globals.scss";

export const metadata = {
  title: "Create Duomo Landing",
  description: "Marketing Funnel Implementation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Header />
        <main className="layout">{children}</main>
      </body>
    </html>
  );
}
