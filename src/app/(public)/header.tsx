import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 sticky top-0">
      <Image src="/vercel.svg" alt="Logo" width={120} height={27} />
      <Input className="w-auto" placeholder="Search" />
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/latest">Latest</Link>
        </li>
        <li>
          <Link href="/albums">Albums</Link>
        </li>
      </ul>
    </header>
  );
};
