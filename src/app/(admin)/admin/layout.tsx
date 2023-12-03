"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { logout } from "./action-sigout";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="flex justify-between p-2 md:p-4 sticky top-0 left-0 w-full bg-white shadow-sm z-10">
        <Link href="/">
          <Image src="/vercel.svg" alt="Logo" width={120} height={27} />
        </Link>
        <Sheet>
          <SheetTrigger className="block">
            <Menu color="#000000" strokeWidth={1.75} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <ul className="flex flex-col p-2 gap-2 pt-4 text-xl">
                  <li className="ml-0">
                    <Link href="/admin/songs">
                      <SheetClose>Canciones</SheetClose>
                    </Link>
                  </li>
                  <li className="ml-0">
                    <Link href="/admin/artists">
                      <SheetClose>Artistas</SheetClose>
                    </Link>
                  </li>
                  <li className="ml-0">
                    <Link href="/admin/bands">
                      <SheetClose>Bandas</SheetClose>
                    </Link>
                  </li>
                  <li className="ml-0">
                    <Link href="/admin/albums">
                      <SheetClose>Albumes</SheetClose>
                    </Link>
                  </li>
                  <li className="ml-0">
                    <Link href="/admin/playlists">
                      <SheetClose>Playlists</SheetClose>
                    </Link>
                  </li>
                  <li className="ml-0">
                    <Link href="/admin/genres">
                      <SheetClose>Generos</SheetClose>
                    </Link>
                  </li>
                  <li className="ml-0">
                    <Link href="/admin/tags">
                      <SheetClose>Etiquetas</SheetClose>
                    </Link>
                  </li>
                  <li className="ml-0">
                    <SheetClose>
                      <form action={logout} method="post">
                        <Button>Sign Out</Button>
                      </form>
                    </SheetClose>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
