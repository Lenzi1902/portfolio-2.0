"use client";

import { usePathname } from "next/navigation";
import NavbarComponent from "./Navbar.component";

const NavbarWrapper = () => {
  const pathname = usePathname();

  // Sembunyikan navbar jika bukan di halaman landing ("/")
  if (pathname !== "/") return null;

  return <NavbarComponent />;
};

export default NavbarWrapper;
