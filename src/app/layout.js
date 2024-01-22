import { lora } from "./styles/fonts";

export const metadata = {
  title: "Duomo Landing",
  description: "Marketing Funnel Implementation",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={lora.className}>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
