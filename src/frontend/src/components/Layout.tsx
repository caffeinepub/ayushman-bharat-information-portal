import { LanguageProvider } from "@/context/LanguageContext";
import { Outlet } from "@tanstack/react-router";
import FloatingActions from "./FloatingActions";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <FloatingActions />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
