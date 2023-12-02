"use client";

import type { Band } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Band>[] = [
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
