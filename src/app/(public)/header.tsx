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
import { SearchInput } from "./search-input";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 sticky top-0 left-0 w-full bg-white shadow-sm z-20">
      <Link href={"/"}>
        <Image src="/vercel.svg" alt="Logo" width={120} height={27} />
      </Link>
      <SearchInput />

      <ul className="hidden md:flex p-2 gap-6">
        <li className="ml-0">
          <Link href="/">Home</Link>
        </li>
        <li className="ml-0">
          <Link href="/latest">Latest</Link>
        </li>
        <li className="ml-0">
          <Link href="/albums">Albums</Link>
        </li>
        <li className="ml-0">
          <Link href="/trending">Trending</Link>
        </li>
        <li className="ml-0">
          <Link href="/genre">Géneros</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="block md:hidden">
          <Menu color="#000000" strokeWidth={1.75} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <ul className="flex flex-col p-2 gap-2 pt-4 text-xl">
                <li className="ml-0">
                  <Link href="/">
                    <SheetClose>Home</SheetClose>
                  </Link>
                </li>
                <li className="ml-0">
                  <Link href="/latest">
                    <SheetClose>Latest</SheetClose>
                  </Link>
                </li>
                <li className="ml-0">
                  <Link href="/albums">
                    <SheetClose>Albums</SheetClose>
                  </Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};
