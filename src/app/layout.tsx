import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { CivicAuthProvider } from "@/context/CivicAuthContext";
import { FlowProvider } from "@/context/FlowContext";
import { MetaMaskProvider } from "@/context/MetaMaskContext";
import { Toaster } from "react-hot-toast";

const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <MetaMaskProvider>
            <CivicAuthProvider>
              <FlowProvider>
                <Aoscompo>
                  <Header />
                  {children}
                  <Footer />
                </Aoscompo>
                <ScrollToTop />
                <Toaster position="top-right" />
              </FlowProvider>
            </CivicAuthProvider>
          </MetaMaskProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
