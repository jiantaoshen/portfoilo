import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto">
      <Header />

      <main className="flex-1 px-[var(--space-4)] py-[var(--space-4)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}