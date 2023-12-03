import { Button } from "@/components/ui/button";
import { db } from "@/db";
import Link from "next/link";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const Page = async () => {
  const songs = await db.artist.findMany();
  return (
    <div>
      <header className="flex gap-3 items-center justify-center mb-6">
        <h1 className="text-2xl">Artists</h1>
        <Link href="/admin/artists/create">
          <Button>Create</Button>
        </Link>
      </header>
      <main className="flex justify-center">
        <DataTable columns={columns} data={songs} />
      </main>
    </div>
  );
};

export default Page;
