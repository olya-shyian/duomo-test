import Header from "./components/header/Header";
import { lora } from "./styles/fonts";
import "./styles/globals.scss";

export const metadata = {
  title: "Duomo Landing",
  description: "Marketing Funnel Implementation",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={lora.className}>
      <Header />
      <main className="layout">{children}</main>
    </body>
  </html>
);

export default RootLayout;
