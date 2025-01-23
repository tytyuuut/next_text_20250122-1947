import Header from "../component/header/header";
import Footer from "../component/footer/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
