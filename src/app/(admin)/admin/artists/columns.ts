"use client";

import { Artist } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Artist>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "photo",
    header: "Photo",
  },
  {
    accessorKey: "coverPhoto",
    header: "Cover Photo",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
