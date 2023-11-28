"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                  const value = cell.getValue<string | null>();
                  if (
                    !value ||
                    typeof value === "boolean" ||
                    !value.startsWith("http")
                  )
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  const isAudio = value.includes(".mp3");
                  const isVideo = value.includes(".mp4");

                  if (isAudio)
                    return (
                      <TableCell key={cell.id}>
                        <audio
                          controls
                          src={value}
                          className="w-full"
                          style={{
                            display: "block",
                            margin: "0 auto",
                            width: "100%",
                          }}
                        >
                          {isAudio
                            ? "Your browser does not support audio."
                            : ""}
                        </audio>
                      </TableCell>
                    );

                  if (isVideo)
                    return (
                      <TableCell key={cell.id}>
                        <video controls src={value} height={150} width={150}>
                          {isVideo
                            ? "Your browser does not support audio."
                            : ""}
                        </video>
                      </TableCell>
                    );

                  return (
                    <TableCell key={cell.id}>
                      <Image src={value} alt={value} width={100} height={100} />
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
