import { Button } from "@/components/ui/button";
import { db } from "@/db";
import Link from "next/link";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const Page = async () => {
  const songs = await db.song.findMany();
  return (
    <div>
      <h1>Songs</h1>
      <Link href="/admin/songs/create">
        <Button>Create</Button>
      </Link>
      <DataTable columns={columns} data={songs} />
    </div>
  );
};

export default Page;
