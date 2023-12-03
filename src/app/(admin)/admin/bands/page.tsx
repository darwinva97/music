import { Button } from "@/components/ui/button";
import { db } from "@/db";
import Link from "next/link";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const Page = async () => {
  const bands = await db.band.findMany();
  return (
    <div>
      <header className="flex gap-3 items-center justify-center mb-6">
        <h1 className="text-2xl">Bandas</h1>
        <Link href="/admin/bands/create">
          <Button>Create</Button>
        </Link>
      </header>
      <main className="flex justify-center">
        <DataTable columns={columns} data={bands} />
      </main>
    </div>
  );
};

export default Page;
